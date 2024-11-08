import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList';

const HomePage = () => {
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
    <div>
      <h1>All Cards</h1>
      <CardList cards={cards} />
    </div>
  );
};

export default HomePage;
