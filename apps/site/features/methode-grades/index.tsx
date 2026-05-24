'use client';

import { motion } from 'framer-motion';

const GRADES = [
    { grade: 'A', range: '80-100', color: 'bg-emerald-500', label: 'Excellence' },
    { grade: 'B', range: '60-79', color: 'bg-cyan-500', label: 'Très bon' },
    { grade: 'C', range: '40-59', color: 'bg-amber-500', label: 'Correct' },
    { grade: 'D', range: '20-39', color: 'bg-orange-500', label: 'Insuffisant' },
    { grade: 'E', range: '0-19', color: 'bg-red-500', label: 'Critique' },
] as const;

export function MethodeGrades() {
    return (
        <section className="bg-muted/30 py-24 sm:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
                        Échelle de notation A → E
                    </h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
                        Le score total (0-100) est converti en note lettre pour une lecture immédiate.
                    </p>
                </motion.div>

                {/* Grade cards */}
                <div className="flex flex-wrap justify-center gap-4">
                    {GRADES.map((item, index) => (
                        <motion.div
                            key={item.grade}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.3, delay: index * 0.08 }}
                            className="group"
                        >
                            <div className="bg-card border-border flex w-28 flex-col items-center overflow-hidden rounded-2xl border transition-all hover:shadow-lg sm:w-32">
                                {/* Grade letter */}
                                <div className={`flex h-20 w-full items-center justify-center ${item.color} sm:h-24`}>
                                    <span className="text-4xl font-bold text-white sm:text-5xl">{item.grade}</span>
                                </div>
                                {/* Info */}
                                <div className="p-3 text-center sm:p-4">
                                    <p className="text-foreground text-sm font-semibold">{item.range}</p>
                                    <p className="text-muted-foreground mt-1 text-xs">{item.label}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
