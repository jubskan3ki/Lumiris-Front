'use client';

import { motion } from 'framer-motion';
import { IRIS_PILLARS } from '@lumiris/types';

// Colors for each pillar
const PILLAR_COLORS = {
    transparency: { bg: 'bg-cyan-500', light: 'bg-cyan-500/10', text: 'text-cyan-600' },
    craftsmanship: { bg: 'bg-violet-500', light: 'bg-violet-500/10', text: 'text-violet-600' },
    impact: { bg: 'bg-emerald-500', light: 'bg-emerald-500/10', text: 'text-emerald-600' },
    repairability: { bg: 'bg-amber-500', light: 'bg-amber-500/10', text: 'text-amber-600' },
} as const;

// Sub-criteria for each pillar
const SUB_CRITERIA = {
    transparency: [
        { name: 'Composition matières', weight: 15 },
        { name: 'Étapes fabrication', weight: 10 },
        { name: 'Lieu de production', weight: 8 },
        { name: 'Prix détaillé', weight: 4 },
        { name: 'Médias / photos', weight: 3 },
    ],
    craftsmanship: [
        { name: 'Certifications métier', weight: 10 },
        { name: 'Gestes manuels', weight: 8 },
        { name: 'Ancienneté atelier', weight: 4 },
        { name: 'Formation', weight: 3 },
    ],
    impact: [
        { name: 'Impact fibres (ADEME)', weight: 10 },
        { name: 'Énergie production', weight: 6 },
        { name: 'Transport', weight: 5 },
        { name: 'Eau & chimie', weight: 4 },
    ],
    repairability: [
        { name: 'Pièces détachées', weight: 4 },
        { name: 'Guide entretien', weight: 3 },
        { name: 'Garantie', weight: 2 },
        { name: 'Réseau réparateurs', weight: 1 },
    ],
} as const;

export function MethodePillars() {
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
                        4 piliers, 100 points
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
                        Chaque passeport est évalué sur 4 axes avec des pondérations fixes.
                    </p>
                </motion.div>

                {/* Segmented bar */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="mb-10"
                >
                    <div className="flex h-6 overflow-hidden rounded-full">
                        {IRIS_PILLARS.map((pillar) => {
                            const colors = PILLAR_COLORS[pillar.id as keyof typeof PILLAR_COLORS];
                            return (
                                <div
                                    key={pillar.id}
                                    className={`flex items-center justify-center text-xs font-bold text-white ${colors.bg}`}
                                    style={{ width: `${pillar.weight}%` }}
                                >
                                    {pillar.weight}%
                                </div>
                            );
                        })}
                    </div>
                    <div className="mt-2 flex">
                        {IRIS_PILLARS.map((pillar) => {
                            const colors = PILLAR_COLORS[pillar.id as keyof typeof PILLAR_COLORS];
                            return (
                                <div
                                    key={pillar.id}
                                    className="text-center"
                                    style={{ width: `${pillar.weight}%` }}
                                >
                                    <p className={`text-xs font-medium ${colors.text}`}>{pillar.label}</p>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Pillar cards with sub-criteria */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {IRIS_PILLARS.map((pillar, index) => {
                        const colors = PILLAR_COLORS[pillar.id as keyof typeof PILLAR_COLORS];
                        const subCriteria = SUB_CRITERIA[pillar.id as keyof typeof SUB_CRITERIA];

                        return (
                            <motion.div
                                key={pillar.id}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <div className="bg-card border-border h-full rounded-xl border p-5">
                                    <div className="flex items-center justify-between">
                                        <div
                                            className={`flex h-10 w-10 items-center justify-center rounded-lg ${colors.light}`}
                                        >
                                            <span className={`text-lg font-bold ${colors.text}`}>{pillar.weight}</span>
                                        </div>
                                        <span className={`text-xs font-semibold ${colors.text}`}>{pillar.weight}%</span>
                                    </div>
                                    <h3 className="text-foreground mt-4 font-semibold">{pillar.label}</h3>
                                    <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                                        {pillar.description}
                                    </p>

                                    {/* Sub-criteria */}
                                    <div className="border-border mt-4 border-t pt-4">
                                        <p className="text-muted-foreground mb-2 text-xs font-medium uppercase tracking-wide">
                                            Sous-critères
                                        </p>
                                        <ul className="space-y-1.5">
                                            {subCriteria.map((sub) => (
                                                <li
                                                    key={sub.name}
                                                    className="text-muted-foreground flex items-center justify-between text-xs"
                                                >
                                                    <span>{sub.name}</span>
                                                    <span className="text-foreground font-mono">{sub.weight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
