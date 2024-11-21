import React, { useState } from 'react';

interface TodoFormProps {
    onSubmit: (text: string) => Promise<void>;
}

export default function TodoForm({ onSubmit }: TodoFormProps) {
    const [text, setText] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!text.trim()) return;

        try {
            await onSubmit(text);
            setText(''); // Clear input after successful submission
        } catch (error) {
            console.error('Failed to save todo:', error);
            // Handle error (could add error state/display if needed)
        }
    };

    return (
        <div className="px-3">
            <form onSubmit={handleSubmit}>
                <div className="mt-7">
                    <div className="flex justify-between items-center space-x-4">
                        <input
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className="inline-flex rounded-md border-gray-300 shadow-sm grow placeholder-slate-300 focus:border-violet-500 focus:ring-violet-500"
                            placeholder="Thing to do..."
                        />
                        <button
                            type="submit"
                            className="flex-none px-4 py-2 text-white bg-violet-500 rounded-md hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                        >
                            Add Todo
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
