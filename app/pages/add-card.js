import React, { useState } from 'react';
import { useRouter } from 'next/router';

const AddCard = () => {
  const [prompt, setPrompt] = useState('');
  const [answer, setAnswer] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/add-card', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, answer }),
    });
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Prompt:</label>
        <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} required />
      </div>
      <div>
        <label>Answer:</label>
        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} required />
      </div>
      <button type="submit">Add Card</button>
    </form>
  );
};

export default AddCard;