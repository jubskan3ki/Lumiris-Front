'use client';

import { motion } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';

const COMPARISON_DATA = [
    {
        criterion: 'Open source',
        higg: false,
        ecoscore: true,
        autodeclaration: null,
        iris: true,
    },
    {
        criterion: 'Score non achetable',
        higg: false,
        ecoscore: true,
        autodeclaration: false,
        iris: true,
    },
    {
        criterion: 'Adapté à l\'artisanat',
        higg: false,
        ecoscore: false,
        autodeclaration: null,
        iris: true,
    },
    {
        criterion: 'Traçabilité vérifiable',
        higg: true,
        ecoscore: false,
        autodeclaration: false,
        iris: true,
    },
    {
        criterion: 'Critères sociaux',
        higg: true,
        ecoscore: false,
        autodeclaration: null,
        iris: true,
    },
    {
        criterion: 'Audit indépendant',
        higg: true,
        ecoscore: false,
        autodeclaration: false,
        iris: true,
    },
];

function CellIcon({ value }: { value: boolean | null }) {
    if (value === true) return <Check className="mx-auto h-5 w-5 text-emerald-500" />;
    if (value === false) return <X className="mx-auto h-5 w-5 text-red-500" />;
    return <Minus className="mx-auto h-5 w-5 text-muted-foreground" />;
}

export function MethodeComparison() {
    return (
        <section className="bg-muted/30 py-20 sm:py-28">
            <div className="mx-auto max-w-5xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                    className="mb-10 text-center"
                >
                    <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
                        Comparaison avec les autres systèmes
                    </h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
                        Comment Iris se positionne par rapport aux méthodes existantes.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="overflow-x-auto"
                >
                    <table className="bg-card border-border w-full overflow-hidden rounded-xl border">
                        <thead>
                            <tr className="bg-muted/50">
                                <th className="text-foreground px-4 py-4 text-left text-sm font-semibold">Critère</th>
                                <th className="text-muted-foreground px-4 py-4 text-center text-sm font-medium">Higg Index</th>
                                <th className="text-muted-foreground px-4 py-4 text-center text-sm font-medium">Eco-Score</th>
                                <th className="text-muted-foreground px-4 py-4 text-center text-sm font-medium">Auto-déclarations</th>
                                <th className="bg-emerald-500/5 text-foreground px-4 py-4 text-center text-sm font-semibold">Iris</th>
                            </tr>
                        </thead>
                        <tbody>
                            {COMPARISON_DATA.map((row, index) => (
                                <tr key={row.criterion} className={index % 2 === 0 ? '' : 'bg-muted/20'}>
                                    <td className="text-foreground px-4 py-3 text-sm">{row.criterion}</td>
                                    <td className="px-4 py-3 text-center">
                                        <CellIcon value={row.higg} />
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <CellIcon value={row.ecoscore} />
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <CellIcon value={row.autodeclaration} />
                                    </td>
                                    <td className="bg-emerald-500/5 px-4 py-3 text-center">
                                        <CellIcon value={row.iris} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </section>
    );
}
