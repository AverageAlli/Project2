import prisma from '../../../lib/databaseConnect';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    const { understoodLevel, nextReviewDate } = req.body;

    const updatedCard = await prisma.card.update({
      where: { id: parseInt(id) },
      data: {
        understoodLevel,
        nextReviewDate: new Date(nextReviewDate),
      },
    });

    res.status(200).json(updatedCard);
  } else if (req.method === 'GET') {
    const card = await prisma.card.findUnique({
      where: { id: parseInt(id) },
    });
    res.status(200).json(card);
  } else {
    res.status(405).end();
  }
}