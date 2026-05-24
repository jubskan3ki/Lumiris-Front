'use client';

import { motion } from 'framer-motion';

// Inline IRIS_PILLARS data to avoid monorepo import issues
const IRIS_PILLARS = [
    {
        id: 'transparency',
        label: 'Transparence',
        weight: 40,
        description: 'Tracabilite complete des matieres et etapes de fabrication.',
    },
    {
        id: 'craftsmanship',
        label: 'Savoir-faire',
        weight: 25,
        description: "Certifications, gestes manuels et anciennete de l'atelier.",
    },
    {
        id: 'impact',
        label: 'Impact',
        weight: 25,
        description: 'Empreinte environnementale des fibres, energie et transport.',
    },
    {
        id: 'repairability',
        label: 'Reparabilite',
        weight: 10,
        description: 'Pieces detachees, guide entretien et reseau reparateurs.',
    },
] as const;

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
        { name: 'Composition matieres', weight: 15 },
        { name: 'Etapes fabrication', weight: 10 },
        { name: 'Lieu de production', weight: 8 },
        { name: 'Prix detaille', weight: 4 },
        { name: 'Medias / photos', weight: 3 },
    ],
    craftsmanship: [
        { name: 'Certifications metier', weight: 10 },
        { name: 'Gestes manuels', weight: 8 },
        { name: 'Anciennete atelier', weight: 4 },
        { name: 'Formation', weight: 3 },
    ],
    impact: [
        { name: 'Impact fibres (ADEME)', weight: 10 },
        { name: 'Energie production', weight: 6 },
        { name: 'Transport', weight: 5 },
        { name: 'Eau & chimie', weight: 4 },
    ],
    repairability: [
        { name: 'Pieces detachees', weight: 4 },
        { name: 'Guide entretien', weight: 3 },
        { name: 'Garantie', weight: 2 },
        { name: 'Reseau reparateurs', weight: 1 },
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
                    className="mb-12 text-center"
                >
                    <span className="inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-emerald-600">
                        Methodologie
                    </span>
                    <h2 className="text-foreground mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                        4 piliers, 100 points
                    </h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
                        Chaque passeport est evalue sur 4 axes avec des ponderations fixes.
                    </p>
                </motion.div>

                {/* Segmented bar */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="mb-12"
                >
                    <div className="flex h-8 overflow-hidden rounded-full shadow-inner">
                        {IRIS_PILLARS.map((pillar) => {
                            const colors = PILLAR_COLORS[pillar.id as keyof typeof PILLAR_COLORS];
                            return (
                                <div
                                    key={pillar.id}
                                    className={`flex items-center justify-center text-sm font-bold text-white ${colors.bg}`}
                                    style={{ width: `${pillar.weight}%` }}
                                >
                                    {pillar.weight}%
                                </div>
                            );
                        })}
                    </div>
                    <div className="mt-3 flex">
                        {IRIS_PILLARS.map((pillar) => {
                            const colors = PILLAR_COLORS[pillar.id as keyof typeof PILLAR_COLORS];
                            return (
                                <div key={pillar.id} className="text-center" style={{ width: `${pillar.weight}%` }}>
                                    <p className={`text-sm font-semibold ${colors.text}`}>{pillar.label}</p>
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
                                <div
                                    className={`bg-card h-full overflow-hidden rounded-2xl border-2 transition-shadow hover:shadow-lg ${
                                        pillar.id === 'transparency'
                                            ? 'border-cyan-500/30'
                                            : pillar.id === 'craftsmanship'
                                              ? 'border-violet-500/30'
                                              : pillar.id === 'impact'
                                                ? 'border-emerald-500/30'
                                                : 'border-amber-500/30'
                                    }`}
                                >
                                    {/* Colored top bar */}
                                    <div className={`h-1.5 ${colors.bg}`} />
                                    <div className="p-5">
                                        <div className="flex items-center justify-between">
                                            <div
                                                className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors.light}`}
                                            >
                                                <span className={`text-xl font-bold ${colors.text}`}>
                                                    {pillar.weight}
                                                </span>
                                            </div>
                                            <span
                                                className={`rounded-full px-2.5 py-1 text-xs font-bold ${colors.light} ${colors.text}`}
                                            >
                                                {pillar.weight}%
                                            </span>
                                        </div>
                                        <h3 className="text-foreground mt-4 text-lg font-bold">{pillar.label}</h3>
                                        <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                                            {pillar.description}
                                        </p>

                                        {/* Sub-criteria */}
                                        <div className="border-border mt-5 border-t pt-4">
                                            <p className="text-muted-foreground mb-3 text-xs font-semibold uppercase tracking-wider">
                                                Sous-criteres
                                            </p>
                                            <ul className="space-y-2">
                                                {subCriteria.map((sub) => (
                                                    <li
                                                        key={sub.name}
                                                        className="flex items-center justify-between text-sm"
                                                    >
                                                        <span className="text-muted-foreground">{sub.name}</span>
                                                        <span className={`font-mono font-semibold ${colors.text}`}>
                                                            {sub.weight}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
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
