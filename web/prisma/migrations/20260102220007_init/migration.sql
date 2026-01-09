-- CreateEnum
CREATE TYPE "ExperienceStatus" AS ENUM ('WORKING', 'ENDED');

-- CreateEnum
CREATE TYPE "VacancyStatus" AS ENUM ('ACTIVE', 'EXPIRED', 'CLOSED');

-- CreateEnum
CREATE TYPE "CandidateStatus" AS ENUM ('APPLIED', 'INTERVIEW', 'REJECTED', 'HIRED');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "ProfilePF" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "ProfilePF_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfilePJ" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "ProfilePJ_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cnpj" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PJProject" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "companyId" INTEGER NOT NULL,
    "profilePJId" INTEGER,

    CONSTRAINT "PJProject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PJService" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "companyId" INTEGER NOT NULL,
    "profilePJId" INTEGER,

    CONSTRAINT "PJService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobVacancy" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endStatus" "VacancyStatus" NOT NULL DEFAULT 'ACTIVE',
    "endDate" TIMESTAMP(3),
    "expiredDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP + interval '15 days',
    "companyId" INTEGER NOT NULL,
    "vacancyCount" INTEGER NOT NULL DEFAULT 1,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "JobVacancy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Candidate" (
    "id" SERIAL NOT NULL,
    "profilePFId" INTEGER NOT NULL,
    "vacancyId" INTEGER NOT NULL,
    "status" "CandidateStatus" NOT NULL DEFAULT 'APPLIED',
    "hired" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Candidate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OpenProject" (
    "id" SERIAL NOT NULL,
    "projectId" INTEGER NOT NULL,
    "profilePFId" INTEGER,
    "profilePJId" INTEGER,
    "openedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OpenProject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OpenService" (
    "id" SERIAL NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "profilePFId" INTEGER,
    "profilePJId" INTEGER,
    "openedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OpenService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClosedProject" (
    "id" SERIAL NOT NULL,
    "projectId" INTEGER NOT NULL,
    "profilePFId" INTEGER,
    "profilePJId" INTEGER,
    "openedAt" TIMESTAMP(3) NOT NULL,
    "finishedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastModifiedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "evaluationStatus" TEXT NOT NULL DEFAULT 'pending',
    "showInPortfolio" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ClosedProject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClosedService" (
    "id" SERIAL NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "profilePFId" INTEGER,
    "profilePJId" INTEGER,
    "openedAt" TIMESTAMP(3) NOT NULL,
    "finishedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastModifiedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "evaluationStatus" TEXT NOT NULL DEFAULT 'pending',
    "showInPortfolio" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ClosedService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfessionalExperience" (
    "id" SERIAL NOT NULL,
    "profilePFId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "companyId" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endStatus" "ExperienceStatus" NOT NULL DEFAULT 'WORKING',
    "endDate" TIMESTAMP(3),

    CONSTRAINT "ProfessionalExperience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Achievement" (
    "id" SERIAL NOT NULL,
    "experienceId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Achievement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "reviewerPFId" INTEGER,
    "reviewerPJId" INTEGER,
    "reviewedPFId" INTEGER,
    "reviewedPJId" INTEGER,
    "reviewedProjectId" INTEGER,
    "reviewedServiceId" INTEGER,
    "reviewedVacancyId" INTEGER,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReviewCriteria" (
    "id" SERIAL NOT NULL,
    "reviewId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "ReviewCriteria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillProfile" (
    "id" SERIAL NOT NULL,
    "profilePFId" INTEGER,
    "profilePJId" INTEGER,
    "skillId" INTEGER NOT NULL,

    CONSTRAINT "SkillProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillExperience" (
    "id" SERIAL NOT NULL,
    "experienceId" INTEGER NOT NULL,
    "skillId" INTEGER NOT NULL,

    CONSTRAINT "SkillExperience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "profilePFId" INTEGER,
    "profilePJId" INTEGER,
    "message" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProfilePF_userId_key" ON "ProfilePF"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ProfilePJ_userId_key" ON "ProfilePJ"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Company_name_key" ON "Company"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_name_key" ON "Skill"("name");

-- AddForeignKey
ALTER TABLE "ProfilePF" ADD CONSTRAINT "ProfilePF_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfilePJ" ADD CONSTRAINT "ProfilePJ_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfilePJ" ADD CONSTRAINT "ProfilePJ_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PJProject" ADD CONSTRAINT "PJProject_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PJProject" ADD CONSTRAINT "PJProject_profilePJId_fkey" FOREIGN KEY ("profilePJId") REFERENCES "ProfilePJ"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PJService" ADD CONSTRAINT "PJService_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PJService" ADD CONSTRAINT "PJService_profilePJId_fkey" FOREIGN KEY ("profilePJId") REFERENCES "ProfilePJ"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobVacancy" ADD CONSTRAINT "JobVacancy_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_profilePFId_fkey" FOREIGN KEY ("profilePFId") REFERENCES "ProfilePF"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_vacancyId_fkey" FOREIGN KEY ("vacancyId") REFERENCES "JobVacancy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OpenProject" ADD CONSTRAINT "OpenProject_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "PJProject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OpenProject" ADD CONSTRAINT "OpenProject_profilePFId_fkey" FOREIGN KEY ("profilePFId") REFERENCES "ProfilePF"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OpenProject" ADD CONSTRAINT "OpenProject_profilePJId_fkey" FOREIGN KEY ("profilePJId") REFERENCES "ProfilePJ"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OpenService" ADD CONSTRAINT "OpenService_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "PJService"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OpenService" ADD CONSTRAINT "OpenService_profilePFId_fkey" FOREIGN KEY ("profilePFId") REFERENCES "ProfilePF"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OpenService" ADD CONSTRAINT "OpenService_profilePJId_fkey" FOREIGN KEY ("profilePJId") REFERENCES "ProfilePJ"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClosedProject" ADD CONSTRAINT "ClosedProject_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "PJProject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClosedProject" ADD CONSTRAINT "ClosedProject_profilePFId_fkey" FOREIGN KEY ("profilePFId") REFERENCES "ProfilePF"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClosedProject" ADD CONSTRAINT "ClosedProject_profilePJId_fkey" FOREIGN KEY ("profilePJId") REFERENCES "ProfilePJ"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClosedService" ADD CONSTRAINT "ClosedService_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "PJService"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClosedService" ADD CONSTRAINT "ClosedService_profilePFId_fkey" FOREIGN KEY ("profilePFId") REFERENCES "ProfilePF"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClosedService" ADD CONSTRAINT "ClosedService_profilePJId_fkey" FOREIGN KEY ("profilePJId") REFERENCES "ProfilePJ"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfessionalExperience" ADD CONSTRAINT "ProfessionalExperience_profilePFId_fkey" FOREIGN KEY ("profilePFId") REFERENCES "ProfilePF"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfessionalExperience" ADD CONSTRAINT "ProfessionalExperience_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Achievement" ADD CONSTRAINT "Achievement_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "ProfessionalExperience"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_reviewerPFId_fkey" FOREIGN KEY ("reviewerPFId") REFERENCES "ProfilePF"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_reviewerPJId_fkey" FOREIGN KEY ("reviewerPJId") REFERENCES "ProfilePJ"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_reviewedPFId_fkey" FOREIGN KEY ("reviewedPFId") REFERENCES "ProfilePF"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_reviewedPJId_fkey" FOREIGN KEY ("reviewedPJId") REFERENCES "ProfilePJ"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_reviewedProjectId_fkey" FOREIGN KEY ("reviewedProjectId") REFERENCES "PJProject"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_reviewedServiceId_fkey" FOREIGN KEY ("reviewedServiceId") REFERENCES "PJService"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_reviewedVacancyId_fkey" FOREIGN KEY ("reviewedVacancyId") REFERENCES "JobVacancy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewCriteria" ADD CONSTRAINT "ReviewCriteria_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillProfile" ADD CONSTRAINT "SkillProfile_profilePFId_fkey" FOREIGN KEY ("profilePFId") REFERENCES "ProfilePF"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillProfile" ADD CONSTRAINT "SkillProfile_profilePJId_fkey" FOREIGN KEY ("profilePJId") REFERENCES "ProfilePJ"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillProfile" ADD CONSTRAINT "SkillProfile_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillExperience" ADD CONSTRAINT "SkillExperience_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "ProfessionalExperience"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillExperience" ADD CONSTRAINT "SkillExperience_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_profilePFId_fkey" FOREIGN KEY ("profilePFId") REFERENCES "ProfilePF"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_profilePJId_fkey" FOREIGN KEY ("profilePJId") REFERENCES "ProfilePJ"("id") ON DELETE SET NULL ON UPDATE CASCADE;
