import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function createStudent(req, res) {
  const { firstName, mobile, courseName } = req.body;
  if (!firstName || !mobile || !courseName) {
    return res.send('All fields are required').status(400);
  }
  try {
    await prisma.$transaction([
      await prisma.student.create({
        data: {
          firstName,
          mobile,
        },
      }),
      await prisma.course.create({
        data: {
          courseName,
        },
      }),
    ]);
  } catch (e) {
    console.log(e);
    res.send(e).status(400);
  }
}

async function getStudents(req, res) {
  try {
    const students = await prisma.student.findMany();
    res.send(students);
  } catch (e) {
    res.send('Something went wrong').status(400);
  }
}

export { createStudent, getStudents };
