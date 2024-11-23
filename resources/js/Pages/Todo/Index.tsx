import InputCheckbox from '@/Components/InputCheckbox';
import TodoForm from '@/Components/TodoForm';
import GuestLayout from '@/Layouts/GuestLayout';
import { PageProps } from '@/types';
import { useShape } from '@electric-sql/react';
import { router } from '@inertiajs/react';

type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

export default function TodoIndex({ auth, laravelVersion }: PageProps) {
    const { data: todos, isLoading } = useShape<Todo>({
        url: import.meta.env.VITE_ELECTRIC_SHAPE_URL,
        table: `todos`,
    });

    const toggleCompleted = (id: number) => {
        router.put(`/todos/${id}`, {
            completed: !todos.find((todo) => todo.id === id)?.completed,
        });
    };

    const deleteTodo = (id: number) => {
        if (confirm('Delete Todo?')) {
            router.delete(`/todos/${id}`);
        }
    };

    const addTodo = async (text: string) => {
        router.post('/todos', { text });
    };

    return (
        <GuestLayout laravelVersion={laravelVersion as string}>
            <div>
                {/* Loading Indicator */}
                <div
                    className={`items-top relative flex justify-center ${!isLoading && 'hidden'}`}
                >
                    <div className="inline-flex absolute top-10 z-50 justify-center w-1/4 text-center rounded bg-violet-800/75">
                        <div className="inline-flex items-center py-2 text-white">
                            <svg
                                className="mr-3 -ml-1 w-5 h-5 animate-spin"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                />
                            </svg>
                            <span className="text-white">Loading…</span>
                        </div>
                    </div>
                </div>

                {/* Add Todo Form */}
                <TodoForm onSubmit={addTodo} />

                {/* Todo List */}
                <div className={`items-top grow ${isLoading && 'opacity-0'}`}>
                    <div className="overflow-y-auto px-4 sm:overflow-visible sm:px-0">
                        <div className="flex flex-col mt-11 md:container sm:mx-auto sm:w-full md:mx-auto">
                            <div className="flex relative flex-col text-sm leading-6 border-t border-b divide-y divide-zinc-100 border-zinc-200 text-zinc-700">
                                {todos?.map((todo) => (
                                    <div
                                        key={todo.id}
                                        className="flex flex-row justify-center items-center space-x-4 bg-transparent group hover:cursor-pointer hover:bg-zinc-50"
                                    >
                                        <div className="relative p-0 pl-3">
                                            <InputCheckbox
                                                name="completed"
                                                checked={todo.completed}
                                                onChange={() =>
                                                    toggleCompleted(todo.id)
                                                }
                                                className="hover:cursor-pointer"
                                            />
                                        </div>
                                        <div className="_min-w-4">
                                            <span className="font-mono text-xs text-slate-400">
                                                {String(todo.id).padStart(
                                                    3,
                                                    ' ',
                                                )}
                                            </span>
                                        </div>
                                        <div
                                            className="grow"
                                            onClick={() =>
                                                toggleCompleted(todo.id)
                                            }
                                        >
                                            <span
                                                className={
                                                    todo.completed
                                                        ? 'line-through'
                                                        : ''
                                                }
                                            >
                                                {todo.text}
                                            </span>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() =>
                                                    deleteTodo(todo.id)
                                                }
                                                className="p-2 bg-transparent rounded text-zinc-400 hover:bg-violet-400 hover:text-white"
                                            >
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    viewBox="0 0 24 24"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="m18 9-.84 8.398c-.127 1.273-.19 1.909-.48 2.39a2.5 2.5 0 0 1-1.075.973C15.098 21 14.46 21 13.18 21h-2.36c-1.279 0-1.918 0-2.425-.24a2.5 2.5 0 0 1-1.076-.973c-.288-.48-.352-1.116-.48-2.389L6 9m7.5 6.5v-5m-3 5v-5m-6-4h4.615m0 0 .386-2.672c.112-.486.516-.828.98-.828h3.038c.464 0 .867.342.98.828l.386 2.672m-5.77 0h5.77m0 0H19.5" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
