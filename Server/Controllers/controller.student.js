import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function createStudent(req, res) {
  const { firstName, lastName, email, mobile, disposition, sub_disposition } =
    req.body.student;
  const { courseName } = req.body.course;
  if (!firstName || !mobile || !courseName) {
    return res.send('All fields are required').status(400);
  }
  try {
    const newStudent = await prisma.student.create({
      data: {
        firstName,
        lastName,
        email,
        mobile,
        diposition: disposition,
        subDiposition: sub_disposition,
        course: {
          create: req.body.course,
        },
      },
      include: {
        course: true,
      },
    });
    res.json({ newStudent });
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

async function getStudents(req, res) {
  const { pageNumber } = req.body;
  if (pageNumber === undefined || pageNumber == 0) {
    return res.send('Page number not found or invalid').status(400);
  }
  try {
    const offset = (pageNumber - 1) * 10;
    const data = await prisma.student.findMany({
      skip: offset,
      take: 10,
      include: {
        course: true,
      },
    });
    res.send(data);
  } catch (e) {
    res.send('Something went wrong').status(400);
  }
}

async function getStudentByAnyData(req, res) {
  if (Object.keys(req.body).length === 0) {
    return res.send('Body not found').status(400);
  }
  try {
    const students = await prisma.student.findMany({
      include: {
        course: true,
      },
      where: req.body,
    });
    res.send(students);
  } catch (e) {
    res.status(400).send('Something went wrong');
  }
}

async function updateStudent(req, res) {
  const {
    gender,
    firstName,
    mobile,
    lastName,
    email,
    diposition,
    subDiposition,
  } = req.body.student;
  const { courseName } = req.body.course;
  if (!firstName || !mobile || !courseName) {
    return res.send('All fields are required').status(400);
  }
  const id = req.params.id;
  if (!id) {
    return res.send('ID not found').status(400);
  }
  try {
    const updateStudent = await prisma.student.update({
      where: {
        id: parseInt(id),
      },
      data: {
        gender,
        firstName,
        lastName,
        mobile,
        email,
        diposition,
        subDiposition,
        course: {
          update: req.body.course,
        },
      },
      include: {
        course: true,
      },
    });
    res.send(updateStudent);
  } catch (e) {
    res.send('Something went wrong').status(400);
  }
}

async function getCounts(req, res) {
  try {
    const statusCounts = await prisma.student.groupBy({
      by: ['diposition'],
      // _count: {
      //   diposition: true,
      // },
      _count: true,
    });

    res.send(statusCounts);
  } catch (e) {
    res.send('Something went wrong').status(400);
  }
}

export {
  createStudent,
  getStudents,
  getStudentByAnyData,
  updateStudent,
  getCounts,
};
