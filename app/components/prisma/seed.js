const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.card.createMany({
    data: [
      { prompt: "What is the capital of France?", answer: "Paris", understoodLevel: 20, nextReviewDate: new Date() },
      { prompt: "What is the capital of Japan?", answer: "Tokyo", understoodLevel: 40, nextReviewDate: new Date() },
      { prompt: "What is the capital of Brazil?", answer: "Brasilia", understoodLevel: 60, nextReviewDate: new Date() },
    ],
  });

  console.log("Seed data inserted successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });