import prisma from '../../lib/databaseConnect';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { prompt, answer } = req.body;
    const newCard = await prisma.card.create({
      data: {
        prompt,
        answer,
      },
    });
    res.status(201).json(newCard);
  } else {
    res.status(405).end();
  }
}