'use client';

import { motion } from 'framer-motion';
import { Sparkles, Wrench, Check } from 'lucide-react';

// Hardcoded canonical addon prices: 19€/month or 190€/year each
const ADDONS = [
    {
        name: 'ATELIER+',
        monthly: 19,
        yearly: 190,
        icon: Sparkles,
        accentClass: 'bg-violet-600',
        accentBgClass: 'bg-violet-500/10',
        accentTextClass: 'text-violet-600',
        description: 'Mise en avant prioritaire dans VISION à score équivalent + analytics passeport.',
        features: [
            'Visibilité prioritaire dans les résultats VISION',
            'Statistiques détaillées par passeport',
            'Badge premium sur les fiches produit',
            'Ré-engagement client après scan',
        ],
    },
    {
        name: 'LUMIRIS Local',
        monthly: 19,
        yearly: 190,
        icon: Wrench,
        accentClass: 'bg-pink-500',
        accentBgClass: 'bg-pink-500/10',
        accentTextClass: 'text-pink-500',
        description: 'Réseau retoucheurs, couturiers et réparateurs pour prolonger la vie des pièces.',
        features: [
            'Profil enrichi dans l\'annuaire Local',
            'Remontée prioritaire recherches locales',
            'Commission 4-10 € ou 8 % du devis',
            'Badge partenaire réparateur',
        ],
    },
] as const;

export function AtelierAddons() {
    return (
        <section className="py-12">
            <div className="grid gap-6 sm:grid-cols-2">
                {ADDONS.map((addon, index) => (
                    <motion.div
                        key={addon.name}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        <div className="bg-card border-border relative h-full rounded-2xl border p-6">
                            {/* Header */}
                            <div className="mb-4 flex items-start gap-3">
                                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${addon.accentBgClass}`}>
                                    <addon.icon className={`h-5 w-5 ${addon.accentTextClass}`} />
                                </div>
                                <div>
                                    <h3 className="text-foreground text-lg font-semibold">{addon.name}</h3>
                                    <p className="text-muted-foreground font-mono text-sm">
                                        {addon.monthly} €/mois · {addon.yearly} €/an
                                    </p>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{addon.description}</p>

                            {/* Features */}
                            <ul className="border-border space-y-2 border-t pt-4">
                                {addon.features.map((feature) => (
                                    <li key={feature} className="text-muted-foreground flex items-start gap-2 text-sm">
                                        <Check className={`mt-0.5 h-4 w-4 shrink-0 ${addon.accentTextClass}`} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Accent bar at top */}
                            <div className={`absolute left-0 right-0 top-0 h-1 rounded-t-2xl ${addon.accentClass}`} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
