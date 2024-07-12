import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

const FeedbackForm: React.FC = () => {
    const [category, setCategory] = useState<string>('Product Features');
    const [rating, setRating] = useState<number>(0);
    const [comments, setComments] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/feedback/submit', { category, rating, comments }, {
                withCredentials: true,
            });
            alert('Feedback submitted successfully.');
        } catch (err) {
            console.error('Error submitting feedback:', err);
            setError('Error submitting feedback.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <div>Error: {error}</div>}
            <label className="m-3">
                Category:
                <select
                    className="border border-black p-1 px-2 m-1 rounded"
                    value={category}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}
                >
                    <option value="Product Features">Product Features</option>
                    <option value="Product Pricing">Product Pricing</option>
                    <option value="Product Usability">Product Usability</option>
                </select>
            </label>
            <label className="m-3">
                Rating:
                <input
                    className="border border-black p-1 px-2 m-1 rounded"
                    type="number"
                    value={rating}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setRating(Number(e.target.value))}
                />
            </label>
            <label className="m-3">
                Comments:
                <textarea
                    className="border border-black p-1 px-2 m-1 rounded"
                    value={comments}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setComments(e.target.value)}
                ></textarea>
            </label>
            <button type="submit" className='m-5 border border-black p-1 px-2 rounded'>Submit Feedback</button>
        </form>
    );
};

export default FeedbackForm;
