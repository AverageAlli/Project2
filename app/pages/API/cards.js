import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const cards = await prisma.card.findMany();
    res.status(200).json(cards);
  } else if (req.method === 'POST') {
    const { prompt, answer } = req.body;
    const newCard = await prisma.card.create({
      data: {
        prompt,
        answer,
        understood: 0, 
        next_due: new Date(),
      },
    });
    res.status(201).json(newCard);
  } else if (req.method === 'PUT') {
    const { id, understood, next_due } = req.body;
    const updatedCard = await prisma.card.update({
      where: { id },
      data: { understood, next_due },
    });
    res.status(200).json(updatedCard);
  }
}