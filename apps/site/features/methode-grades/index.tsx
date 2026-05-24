'use client';

import { motion } from 'framer-motion';

const GRADES = [
    { grade: 'A', label: '80-100', color: 'bg-emerald-500', description: 'Excellence' },
    { grade: 'B', label: '60-79', color: 'bg-cyan-500', description: 'Très bon' },
    { grade: 'C', label: '40-59', color: 'bg-amber-500', description: 'Correct' },
    { grade: 'D', label: '20-39', color: 'bg-orange-500', description: 'Insuffisant' },
    { grade: 'E', label: '0-19', color: 'bg-red-500', description: 'Critique' },
] as const;

export function MethodeGrades() {
    return (
        <section className="bg-muted/30 py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
                        Échelle de notation A → E
                    </h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
                        Le score total (0-100) est converti en note lettre pour une lecture immédiate.
                    </p>
                </motion.div>

                {/* Grade bar */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="mx-auto max-w-3xl"
                >
                    <div className="flex h-16 overflow-hidden rounded-2xl">
                        {GRADES.map((item) => (
                            <div
                                key={item.grade}
                                className={`flex flex-1 flex-col items-center justify-center ${item.color}`}
                            >
                                <span className="text-2xl font-bold text-white">{item.grade}</span>
                                <span className="text-xs text-white/80">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Descriptions below */}
                    <div className="mt-4 flex">
                        {GRADES.map((item) => (
                            <div key={item.grade} className="flex-1 text-center">
                                <p className="text-muted-foreground text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Additional note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="text-muted-foreground mx-auto mt-8 max-w-2xl text-center text-sm"
                >
                    Un champ ESPR ou AGEC manquant plafonne automatiquement le score à D jusqu&apos;à correction.
                </motion.p>
            </div>
        </section>
    );
}
