-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "employer" TEXT NOT NULL DEFAULT 'unknown',

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);
