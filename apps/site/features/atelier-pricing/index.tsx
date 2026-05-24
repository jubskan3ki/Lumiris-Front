'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const SIGNUP_URL = 'https://client.lumiris.fr';

// Hardcoded canonical prices as per user requirement
const PLANS = [
    {
        name: 'Solo',
        monthly: 29,
        yearly: 290,
        audience: 'Artisan seul',
        passports: "Jusqu'à 50 passeports actifs",
        features: ['1 utilisateur', 'OCR factures fournisseurs', 'QR + NFC GS1', 'Tableau de bord conformité'],
        highlighted: false,
    },
    {
        name: 'Studio',
        monthly: 79,
        yearly: 790,
        audience: '2 à 5 personnes',
        passports: "Jusqu'à 300 passeports actifs",
        features: ['Multi-utilisateurs', 'Bibliothèque de matières', 'Export ESPR + AGEC', 'Support prioritaire'],
        highlighted: true,
    },
    {
        name: 'Maison',
        monthly: 149,
        yearly: 1490,
        audience: '6 à 20 personnes',
        passports: 'Passeports illimités',
        features: ['Rôles & permissions', 'API privée', 'Workflows de revue', 'Account manager dédié'],
        highlighted: false,
    },
] as const;

export function AtelierPricing() {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section className="py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                    className="mb-10"
                >
                    <p className="text-muted-foreground mb-3 text-xs font-medium uppercase tracking-widest">Tarifs</p>
                    <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">Trois paliers</h2>
                    <p className="text-muted-foreground mt-3">
                        Choisissez la taille de votre atelier. Pas de coût caché.
                    </p>
                </motion.div>

                {/* Monthly/Yearly toggle */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="mb-10 flex items-center justify-center gap-3"
                >
                    <span
                        className={`text-sm transition-colors ${!isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}
                    >
                        Mensuel
                    </span>
                    <button
                        onClick={() => setIsYearly(!isYearly)}
                        className={`relative h-6 w-11 rounded-full transition-colors ${isYearly ? 'bg-lumiris-cyan' : 'bg-muted'}`}
                        aria-pressed={isYearly}
                        aria-label="Basculer entre mensuel et annuel"
                    >
                        <span
                            className={`bg-background absolute top-0.5 h-5 w-5 rounded-full shadow-sm transition-transform ${isYearly ? 'translate-x-5' : 'translate-x-0.5'}`}
                        />
                    </button>
                    <span
                        className={`text-sm transition-colors ${isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}
                    >
                        Annuel
                    </span>
                    {isYearly && (
                        <span className="bg-emerald-100 text-emerald-700 ml-2 rounded-full px-2 py-0.5 text-xs font-medium">
                            -17% (2 mois offerts)
                        </span>
                    )}
                </motion.div>

                {/* Pricing cards */}
                <div className="grid gap-6 md:grid-cols-3">
                    {PLANS.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <div
                                className={`bg-card border-border relative h-full rounded-2xl border p-6 ${
                                    plan.highlighted ? 'border-lumiris-cyan/40 shadow-lg' : ''
                                }`}
                            >
                                {plan.highlighted && (
                                    <span className="bg-lumiris-cyan/10 text-lumiris-cyan absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold">
                                        Le plus choisi
                                    </span>
                                )}

                                <div className="mb-4">
                                    <h3 className="text-foreground text-lg font-semibold">ATELIER {plan.name}</h3>
                                    <p className="text-muted-foreground text-sm">{plan.audience}</p>
                                </div>

                                <div className="mb-6">
                                    <p className="text-foreground text-4xl font-bold tracking-tight">
                                        {isYearly ? plan.yearly : plan.monthly}
                                        <span className="text-muted-foreground text-base font-normal">
                                            {' '}
                                            €/{isYearly ? 'an' : 'mois'}
                                        </span>
                                    </p>
                                    <p className="text-muted-foreground mt-1 text-sm">{plan.passports}</p>
                                </div>

                                <ul className="border-border mb-6 space-y-2.5 border-t pt-4">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="text-muted-foreground flex items-start gap-2 text-sm">
                                            <Check className="text-lumiris-cyan mt-0.5 h-4 w-4 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={SIGNUP_URL}
                                    className={`inline-flex w-full items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-medium transition-opacity hover:opacity-90 ${
                                        plan.highlighted
                                            ? 'bg-foreground text-background'
                                            : 'border-border text-foreground border hover:bg-muted/50'
                                    }`}
                                >
                                    Choisir {plan.name}
                                    <ArrowRight className="h-3.5 w-3.5" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
