import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const UserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

async function Login(req, res) {
  const { email, password } = req.body;
  const result = UserSchema.safeParse({ email, password });
  if (result.success) {
    const allUsers = await prisma.staff.findFirst({
      where: { email: email, password: password },
    });
    if (allUsers) {
      req.id = allUsers.id;
      const token = jwt.sign({ id: allUsers.id }, process.env.JWT_SECRET);
      res.send({ token }).status(200);
    } else {
      res.send('Invalid email or password').status(400);
    }
  } else {
    res.send('Invalid email or password').status(400);
  }
}

export default Login;
