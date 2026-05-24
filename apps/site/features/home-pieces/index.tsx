'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { mockPassportsPublic } from '@lumiris/mock-data';
import { IrisGrade } from '@lumiris/scoring-ui/components/iris-grade';

export function HomePieces() {
    const publishedPassports = mockPassportsPublic
        .filter((p) => p.passport.status === 'Published')
        .slice(0, 6);

    return (
        <section className="py-24 sm:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                    className="flex items-end justify-between gap-4"
                >
                    <div>
                        <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
                            Pièces publiées
                        </h2>
                        <p className="text-muted-foreground mt-2 text-lg">
                            Découvrez les créations traçées par nos artisans partenaires.
                        </p>
                    </div>
                    <Link
                        href="/decouvrir"
                        className="text-lumiris-cyan hover:text-lumiris-cyan/80 hidden items-center gap-1 text-sm font-medium transition-colors sm:inline-flex"
                    >
                        Tout voir
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </motion.div>

                {/* Horizontal scroll container */}
                <div className="mt-10 -mx-6 px-6">
                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
                        {publishedPassports.map((item, index) => (
                            <motion.div
                                key={item.passport.id}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="w-56 flex-shrink-0 snap-start sm:w-64"
                            >
                                <Link href={`/passeport/${item.passport.id}`} className="group block">
                                    {/* Polaroid-style card */}
                                    <div className="bg-card border-border overflow-hidden rounded-xl border transition-shadow hover:shadow-lg">
                                        <div className="relative aspect-[4/5]">
                                            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-cyan-50 to-violet-50" />
                                            {/* IrisGrade overlay */}
                                            <div className="absolute left-2.5 top-2.5">
                                                <IrisGrade
                                                    grade={item.passport.grade ?? 'B'}
                                                    variant="badge"
                                                />
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
                                                {item.artisan.name}
                                            </p>
                                            <p className="text-foreground mt-0.5 truncate text-sm font-medium">
                                                {item.passport.productName}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mobile "Tout voir" link */}
                <div className="mt-6 text-center sm:hidden">
                    <Link
                        href="/decouvrir"
                        className="text-lumiris-cyan hover:text-lumiris-cyan/80 inline-flex items-center gap-1 text-sm font-medium transition-colors"
                    >
                        Tout voir
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
