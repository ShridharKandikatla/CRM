import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function createCourse(req, res) {
  const { name } = req.body;
  const course = await prisma.course.create({
    data: {
      name: name,
    },
  });
  res.send(course);
}

async function getCourse(req, res) {
  const courses = await prisma.course.findMany();
  res.send(courses);
}

export { createCourse, getCourse };
