'use client';

import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const RULES = [
    {
        title: 'Score non achetable',
        description: 'Aucun acteur ne peut payer pour améliorer son score. Le seul levier est d\'améliorer ses pratiques.',
    },
    {
        title: 'Algorithme open source',
        description: 'Le code de calcul (@lumiris/core) est public sur GitHub, versionné et auditable par tous.',
    },
    {
        title: 'Datasets publics',
        description: 'Les données de référence (ADEME, Higg, Water Footprint Network) sont publiques et versionnées.',
    },
    {
        title: 'Pondérations fixes',
        description: 'Les poids 40/25/25/10 sont définis collectivement et ne peuvent être modifiés individuellement.',
    },
    {
        title: 'Pas de score "premium"',
        description: 'L\'option ATELIER+ agit uniquement à score équivalent — elle n\'améliore jamais la note.',
    },
    {
        title: 'Audit indépendant',
        description: 'La méthodologie est soumise à un audit annuel par un tiers indépendant.',
    },
];

export function MethodeRules() {
    return (
        <section className="py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
                        6 règles non négociables
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
                        Ces principes garantissent l&apos;intégrité du score Iris.
                    </p>
                </motion.div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {RULES.map((rule, index) => (
                        <motion.div
                            key={rule.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                        >
                            <div className="bg-card border-border h-full rounded-xl border p-5">
                                <div className="bg-emerald-500/10 mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg">
                                    <Lock className="text-emerald-600 h-4 w-4" />
                                </div>
                                <h3 className="text-foreground font-semibold">{rule.title}</h3>
                                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{rule.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
