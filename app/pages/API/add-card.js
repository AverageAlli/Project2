import { useState } from 'react';
import { useRouter } from 'next/router';

const AddCard = () => {
    const [prompt, setPrompt] = useState('');
    const [answer, setAnswer] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('/api/cards', {
            method: 'POST',
            body: JSON.stringify({ prompt, answer }),
            headers: { 'Content-Type': 'application/json' },
        });
        router.push('/cards'); //redirect
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Add New Card</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label>Prompt:</label>
                    <input
                        type="text"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        className="border p-1 w-full"
                        required
                    />
                </div>
                <div className="mb-2">
                    <label>Answer:</label>
                    <input
                        type="text"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        className="border p-1 w-full"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-600 text-white p-2">Add Card</button>
            </form>
        </div>
    );
};

export default AddCard;