-- CreateTable
CREATE TABLE "Staff" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Staff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "gender" TEXT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT,
    "email" TEXT,
    "mobile" TEXT NOT NULL,
    "diposition" TEXT NOT NULL DEFAULT '01 - New',
    "subDiposition" TEXT DEFAULT 'Not Known',

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "courseName" TEXT NOT NULL,
    "specialization" TEXT,
    "courseFee" INTEGER,
    "registrationNo" INTEGER,
    "erpComments" TEXT,
    "studentId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Payment" (
    "amountReceived" INTEGER,
    "discountAmount" INTEGER,
    "discountReason" TEXT,
    "studyMaterial" TEXT,
    "studyMaterialDiscount" INTEGER,
    "paymentDate" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "studentId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Staff_email_key" ON "Staff"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Course_studentId_key" ON "Course"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_studentId_key" ON "Payment"("studentId");

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
