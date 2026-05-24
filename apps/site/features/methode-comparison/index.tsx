'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const COMPARISON = [
    { criterion: 'Open source', higg: false, ecoscore: true, auto: false, iris: true },
    { criterion: 'Score non achetable', higg: false, ecoscore: true, auto: false, iris: true },
    { criterion: 'Adapté artisanat', higg: false, ecoscore: false, auto: false, iris: true },
    { criterion: 'Traçabilité vérifiable', higg: true, ecoscore: false, auto: false, iris: true },
    { criterion: 'Critères sociaux', higg: true, ecoscore: false, auto: false, iris: true },
    { criterion: 'Audit indépendant', higg: true, ecoscore: false, auto: false, iris: true },
];

function StatusIcon({ value }: { value: boolean }) {
    return value ? (
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10">
            <Check className="h-4 w-4 text-emerald-500" />
        </div>
    ) : (
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500/10">
            <X className="h-4 w-4 text-red-500" />
        </div>
    );
}

export function MethodeComparison() {
    return (
        <section className="py-24 sm:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
                        Comparaison avec les autres systèmes
                    </h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
                        Comment Iris se positionne par rapport aux méthodes existantes.
                    </p>
                </motion.div>

                {/* Comparison cards */}
                <div className="space-y-3">
                    {/* Header row */}
                    <div className="hidden items-center gap-4 px-4 sm:flex">
                        <div className="flex-1" />
                        <div className="w-20 text-center">
                            <span className="text-muted-foreground text-xs font-medium">Higg</span>
                        </div>
                        <div className="w-20 text-center">
                            <span className="text-muted-foreground text-xs font-medium">Eco-Score</span>
                        </div>
                        <div className="w-20 text-center">
                            <span className="text-muted-foreground text-xs font-medium">Auto-décl.</span>
                        </div>
                        <div className="w-20 text-center">
                            <span className="text-xs font-semibold text-emerald-600">Iris</span>
                        </div>
                    </div>

                    {/* Data rows */}
                    {COMPARISON.map((row, index) => (
                        <motion.div
                            key={row.criterion}
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="bg-card border-border flex flex-col gap-3 rounded-xl border p-4 sm:flex-row sm:items-center sm:gap-4"
                        >
                            <div className="flex-1">
                                <span className="text-foreground text-sm font-medium">{row.criterion}</span>
                            </div>
                            <div className="flex items-center gap-4 sm:gap-0">
                                <div className="flex w-20 flex-col items-center gap-1 sm:gap-0">
                                    <span className="text-muted-foreground text-[10px] sm:hidden">Higg</span>
                                    <StatusIcon value={row.higg} />
                                </div>
                                <div className="flex w-20 flex-col items-center gap-1 sm:gap-0">
                                    <span className="text-muted-foreground text-[10px] sm:hidden">Eco-Score</span>
                                    <StatusIcon value={row.ecoscore} />
                                </div>
                                <div className="flex w-20 flex-col items-center gap-1 sm:gap-0">
                                    <span className="text-muted-foreground text-[10px] sm:hidden">Auto-décl.</span>
                                    <StatusIcon value={row.auto} />
                                </div>
                                <div className="flex w-20 flex-col items-center gap-1 rounded-lg bg-emerald-500/5 py-1 sm:gap-0">
                                    <span className="text-[10px] text-emerald-600 sm:hidden">Iris</span>
                                    <StatusIcon value={row.iris} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
