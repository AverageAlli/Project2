import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const CardView = () => {
  const router = useRouter();
  const { id } = router.query;
  const [card, setCard] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/card/${id}`)
        .then((res) => res.json())
        .then((data) => setCard(data));
    }
  }, [id]);

  const handleUpdate = async (understoodLevel) => {
    const nextReviewDate = new Date();
    nextReviewDate.setDate(nextReviewDate.getDate() + understoodLevel / 10);

    await fetch(`/api/card/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ understoodLevel, nextReviewDate }),
    });
    router.push('/');
  };

  if (!card) return <div>Loading...</div>;

  return (
    <div>
      <h1>{card.prompt}</h1>
      <p>{card.answer}</p>
      <button onClick={() => handleUpdate(100)}>Easy</button>
      <button onClick={() => handleUpdate(70)}>Medium</button>
      <button onClick={() => handleUpdate(40)}>Hard</button>
    </div>
  );
};

export default CardView;