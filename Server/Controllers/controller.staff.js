import { z } from 'zod';
import { Prisma, PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const UserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

async function Register(req, res) {
  const { email, password } = req.body;
  const result = UserSchema.safeParse({ email, password });
  if (!result.success) {
    res.send('Invalid email or password').status(400);
  } else {
    try {
      const profile = await prisma.staff.create({
        data: {
          email: email,
          password: password,
        },
      });

      req.id = profile.id;
      const token = jwt.sign({ id: profile.id }, process.env.JWT_SECRET);
      const withBearer = 'Bearer ' + token;
      return res.send({ token: withBearer }).status(200);
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.code === 'P2002') {
          res
            .send('Email already exists. Please try with different email.')
            .status(400);
        } else {
          res.send('Something went wrong').status(400);
        }
      }
    }
  }
}

async function Login(req, res) {
  const { email, password } = req.body;
  const result = UserSchema.safeParse({ email, password });
  if (!result.success) {
    return res.send('Invalid email or password').status(400);
  }
  try {
    const allUsers = await prisma.staff.findFirst({
      where: { email: email, password: password },
    });

    if (allUsers) {
      req.id = allUsers.id;
      const token = jwt.sign({ id: allUsers.id }, process.env.JWT_SECRET);
      const withBearer = 'Bearer ' + token;
      return res.send({ token: withBearer }).status(200);
    }

    res.send('Invalid email or password').status(400);
  } catch (e) {
    res.send('Something went wrong').status(400);
  }
}

async function getProfile(req, res) {
  const { id } = req.body;
  if (!id) {
    return res.send('ID not found').status(400);
  }
  try {
    const profile = await prisma.staff.findFirst({
      where: {
        id: id,
      },
    });

    if (!profile) {
      return res.send('User not found').status(400);
    }

    res.send({ profile }).status(200);
  } catch (e) {
    res.send('Something went wrong').status(400);
  }
}

async function putProfile(req, res) {
  const { email, password } = req.body;
  const result = UserSchema.safeParse({ email, password });
  if (!result.success) {
    return res.send('Invalid email or password').status(400);
  }
  try {
    const staff = await prisma.staff.findUnique({
      where: {
        email: email,
      },
    });

    if (!staff) {
      return res.status(404).json({ error: 'Staff member not found' });
    }

    const updatedStaff = await prisma.staff.update({
      where: {
        id: staff.id,
      },
      data: {
        password: password,
      },
    });

    res.status(200).json(updatedStaff);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function deleteProfile(req, res) {
  const { id } = req.body;
  if (!id) {
    return res.send('ID not found').status(400);
  }
  try {
    const profile = await prisma.staff.delete({
      where: {
        id: id,
      },
    });
    res.send({ profile }).status(200);
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (e.code === 'P2025') {
        res.send('User not found').status(400);
      } else {
        res.send('Something went wrong').status(400);
      }
    }
  }
}

export { Login, getProfile, Register, deleteProfile, putProfile };
