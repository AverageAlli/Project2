import prisma from '../../lib/databaseConnect';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const cards = await prisma.card.findMany();
    res.status(200).json(cards);
  } else {
    res.status(405).end(); 
  }
}