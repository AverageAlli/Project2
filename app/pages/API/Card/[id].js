import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const CardView = () => {
    const router = useRouter();
    const { id } = router.query;
    const [card, setCard] = useState(null);

    useEffect(() => {
        if (id) {
            const fetchCard = async () => {
                const res = await fetch(`/api/cards/${id}`);
                const data = await res.json();
                setCard(data);
            };
            fetchCard();
        }
    }, [id]);

    const updateUnderstanding = async (amount) => {
        await fetch(`/api/cards/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ amount_understood: amount }),
            headers: { 'Content-Type': 'application/json' },
        });
        router.push('/cards'); // redirect to the card list
    };

    if (!card) return <div>Loading...</div>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{card.prompt}</h1>
            <p>{card.answer}</p>
            <div className="mt-4">
                <button onClick={() => updateUnderstanding(100)} className="mr-2">Easy</button>
                <button onClick={() => updateUnderstanding(70)} className="mr-2">Medium</button>
                <button onClick={() => updateUnderstanding(30)}>Hard</button>
            </div>
        </div>
    );
};

export default CardView;