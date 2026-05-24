'use client';

import { motion } from 'framer-motion';
import { ScanLine } from 'lucide-react';

export function VisionHero() {
    return (
        <section className="relative overflow-hidden pb-16 pt-32">
            {/* Subtle gradient background */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute right-1/4 top-1/4 h-96 w-96 rounded-full bg-violet-500/5 blur-3xl" />
                <div className="absolute bottom-1/4 left-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
            </div>

            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left: Copy */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="border-border bg-card text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium">
                            <ScanLine className="text-violet-500 h-3.5 w-3.5" aria-hidden="true" />
                            Application mobile gratuite
                        </span>
                        <h1 className="text-foreground mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Scanner. Comprendre. Garder.
                        </h1>
                        <p className="text-muted-foreground mt-6 max-w-lg text-lg leading-relaxed">
                            VISION scanne n&apos;importe quel DPP européen et affiche le score Iris en temps réel.
                            Gérez votre garde-robe, suivez vos pièces, consommez en conscience.
                        </p>
                    </motion.div>

                    {/* Right: 3 stacked phone mockups */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative h-[400px] w-full max-w-sm">
                            {/* Phone 1 (back) */}
                            <div className="bg-foreground absolute left-0 top-8 w-48 -rotate-6 rounded-[2rem] p-1.5 shadow-xl">
                                <div className="bg-background rounded-[1.5rem] p-3">
                                    <div className="bg-muted mb-2 flex h-6 items-center justify-center rounded-full">
                                        <div className="bg-foreground h-4 w-16 rounded-full" />
                                    </div>
                                    <div className="bg-muted aspect-[9/16] rounded-xl" />
                                </div>
                            </div>
                            {/* Phone 2 (middle) */}
                            <div className="bg-foreground absolute left-1/2 top-4 w-52 -translate-x-1/2 rounded-[2rem] p-1.5 shadow-2xl">
                                <div className="bg-background rounded-[1.5rem] p-3">
                                    <div className="bg-muted mb-2 flex h-6 items-center justify-center rounded-full">
                                        <div className="bg-foreground h-4 w-16 rounded-full" />
                                    </div>
                                    <div className="aspect-[9/16] rounded-xl bg-gradient-to-br from-violet-100 via-slate-50 to-cyan-100" />
                                </div>
                            </div>
                            {/* Phone 3 (front) */}
                            <div className="bg-foreground absolute right-0 top-0 w-48 rotate-6 rounded-[2rem] p-1.5 shadow-xl">
                                <div className="bg-background rounded-[1.5rem] p-3">
                                    <div className="bg-muted mb-2 flex h-6 items-center justify-center rounded-full">
                                        <div className="bg-foreground h-4 w-16 rounded-full" />
                                    </div>
                                    <div className="bg-muted aspect-[9/16] rounded-xl" />
                                </div>
                            </div>
                            {/* Glow */}
                            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 blur-2xl" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
