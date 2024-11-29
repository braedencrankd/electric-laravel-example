import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

// const shape = await pgInstance.electric.syncShapeToTable({
//     shape: {
//         url: import.meta.env.VITE_ELECTRIC_SHAPE_URL,
//         table: 'todos',
//     },
//     table: 'todos',
//     primaryKey: ['id'],
// });

export default function Guest({
    children,
    laravelVersion,
}: PropsWithChildren<{ laravelVersion: string }>) {
    return (
        <div className="min-h-screen">
            <header className="px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between border-b border-zinc-100 py-3 text-sm">
                    <div className="flex items-center gap-4">
                        <Link href="https://laravel.com/">
                            <ApplicationLogo className="w-9" />
                        </Link>
                        <p className="bg-brand/5 text-brand rounded-full px-2 font-medium leading-6">
                            Laravel v{laravelVersion}
                        </p>
                    </div>
                    <div className="flex items-center gap-4 font-semibold leading-6 text-zinc-900">
                        <a
                            href="https://electric-sql.com/"
                            className="hover:text-zinc-700"
                        >
                            ElectricSQL
                        </a>
                        <a
                            href="https://github.com/electric-sql/electric"
                            className="hover:text-zinc-700"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://electric-sql.com/docs/intro"
                            className="rounded-lg bg-zinc-100 px-2 py-1 hover:bg-zinc-200/80"
                        >
                            Get Started <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
                <div className="mx-auto max-w-2xl">
                    <div className="text-center">
                        <a
                            href="https://electric-sql.com"
                            target="_blank"
                            className=""
                        >
                            <img
                                width="512"
                                height="142"
                                className="mx-auto max-w-sm"
                                alt="ElectricSQL logo"
                                src="https://raw.githubusercontent.com/electric-sql/meta/main/identity/ElectricSQL-logo-black.svg"
                            />
                        </a>
                    </div>
                    <div id="blurb">
                        <p>
                            A todo-list powered by{' '}
                            <a href="https://github.com/electric-sql/electric">
                                Electric
                            </a>
                            .
                        </p>
                        <p>
                            All connected clients will see the same updates,
                            powered by{' '}
                            <a href="https://electric-sql.com">
                                Electric's PostgreSQL replication stream
                            </a>
                        </p>
                    </div>
                </div>
            </header>
            <main className="sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl">{children}</div>
            </main>
        </div>
    );
}
