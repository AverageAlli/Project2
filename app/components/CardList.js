import { useEffect, useState } from 'react';
import Link from 'next/link';

const CardList = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            const res = await fetch('/api/cards');
            const data = await res.json();
            setCards(data);
        };
        fetchCards();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Card List</h1>
            <ul>
                {cards.map(card => (
                    <li key={card.id} className="mb-2">
                        <Link href={`/card/${card.id}`}>
                            <a className="text-blue-600 hover:underline">{card.prompt}</a>
                        </Link>
                        <span> - {card.amount_understood}% understood</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CardList;