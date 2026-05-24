'use client';

import { motion } from 'framer-motion';
import { UserPlus, ScanLine, Layers, QrCode, ArrowRight } from 'lucide-react';

const STEPS = [
    {
        icon: UserPlus,
        step: '1',
        title: 'Inscription',
        description: 'Creez votre compte ATELIER en 2 minutes avec votre email et SIRET.',
        color: 'bg-cyan-500/10 text-lumiris-cyan',
    },
    {
        icon: ScanLine,
        step: '2',
        title: 'Scan OCR',
        description: "Photographiez vos factures, l'OCR pre-remplit composition et tracabilite.",
        color: 'bg-violet-500/10 text-violet-600',
    },
    {
        icon: Layers,
        step: '3',
        title: 'Fabrication',
        description: 'Documentez filature, tissage, confection. Ajoutez vos certifications.',
        color: 'bg-emerald-500/10 text-emerald-600',
    },
    {
        icon: QrCode,
        step: '4',
        title: 'Publication',
        description: 'Generez QR code et puce NFC GS1. Score Iris calcule automatiquement.',
        color: 'bg-pink-500/10 text-pink-600',
    },
];

export function AtelierSteps() {
    return (
        <section className="bg-muted/30 py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                    className="mb-14 text-center"
                >
                    <span className="bg-foreground/5 text-muted-foreground inline-block rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider">
                        Comment ca marche
                    </span>
                    <h2 className="text-foreground mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                        4 etapes, 30 minutes
                    </h2>
                    <p className="text-muted-foreground mx-auto mt-3 max-w-lg text-lg">
                        De l&apos;inscription a la publication de votre premier passeport.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Connection line (desktop only) */}
                    <div className="via-border absolute left-0 right-0 top-[88px] hidden h-px bg-gradient-to-r from-transparent to-transparent lg:block" />

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {STEPS.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="bg-card border-border flex h-full flex-col rounded-2xl border p-6 text-center shadow-sm transition-shadow hover:shadow-md">
                                    {/* Step number badge */}
                                    <div className="bg-foreground text-background mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold">
                                        {step.step}
                                    </div>
                                    {/* Icon */}
                                    <div
                                        className={`mx-auto mt-4 flex h-14 w-14 items-center justify-center rounded-xl ${step.color.split(' ')[0]}`}
                                    >
                                        <step.icon className={`h-7 w-7 ${step.color.split(' ')[1]}`} />
                                    </div>
                                    {/* Title + description */}
                                    <h3 className="text-foreground mt-4 text-lg font-semibold">{step.title}</h3>
                                    <p className="text-muted-foreground mt-2 flex-1 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                                {/* Arrow connector on desktop */}
                                {index < STEPS.length - 1 && (
                                    <div className="absolute -right-3 top-[88px] z-10 hidden lg:block">
                                        <ArrowRight className="text-muted-foreground/40 h-5 w-5" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
