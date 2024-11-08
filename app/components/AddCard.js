import React, { useState } from 'react';

const AddCard = () => {
  const [prompt, setPrompt] = useState('');
  const [answer, setAnswer] = useState('');

  const addCard = async (e) => {
    e.preventDefault(); 

    if (!prompt || !answer) {
      alert('Both prompt and answer are required!');
      return;
    }

    const res = await fetch('/api/cards', {
      method: 'POST',
      body: JSON.stringify({ prompt, answer }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      const newCard = await res.json();
      alert('Card Added Successfully');
      setPrompt('');
      setAnswer('');
    } else {
      alert('Error adding card');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-md shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Add New Card</h2>
      <form onSubmit={addCard}>
        <div className="mb-4">
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">
            Prompt
          </label>
          <input
            type="text"
            id="prompt"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter the prompt"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="answer" className="block text-sm font-medium text-gray-700">
            Answer
          </label>
          <input
            type="text"
            id="answer"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Enter the answer"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Add Card
        </button>
      </form>
    </div>
  );
};

export default AddCard;