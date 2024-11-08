import Link from 'next/link';

const CardList = ({ cards }) => {
  return (
    <ul>
      {cards.map((card) => (
        <li key={card.id}>
          <Link href={`/Card/${card.id}`}>
            <a>
              {card.prompt} - {card.understoodLevel}%
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CardList;
