'use client';

import { motion } from 'framer-motion';
import { UserPlus, ScanLine, Layers, QrCode } from 'lucide-react';

const STEPS = [
    {
        icon: UserPlus,
        step: '1',
        title: 'Inscription',
        description: 'Créez votre compte ATELIER en 2 minutes. Email + SIRET.',
    },
    {
        icon: ScanLine,
        step: '2',
        title: 'Scan OCR',
        description: 'Photographiez vos factures fournisseurs, l\'OCR pré-remplit composition et traçabilité.',
    },
    {
        icon: Layers,
        step: '3',
        title: 'Étapes fabrication',
        description: 'Documentez filature, tissage, confection, finition. Ajoutez certifications.',
    },
    {
        icon: QrCode,
        step: '4',
        title: 'Publication',
        description: 'Générez QR code et puce NFC GS1. Score Iris calculé, passeport conforme ESPR.',
    },
];

export function AtelierSteps() {
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
                    <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
                        4 étapes, 30 minutes
                    </h2>
                    <p className="text-muted-foreground mt-3 text-lg">
                        De l&apos;inscription à la publication de votre premier passeport.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Connection line (desktop only) */}
                    <div className="absolute left-0 right-0 top-12 hidden h-0.5 bg-gradient-to-r from-transparent via-border to-transparent lg:block" />

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
                                <div className="bg-card border-border rounded-xl border p-6 text-center">
                                    {/* Step number */}
                                    <div className="bg-foreground text-background mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold">
                                        {step.step}
                                    </div>
                                    {/* Icon */}
                                    <div className="bg-lumiris-cyan/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
                                        <step.icon className="text-lumiris-cyan h-6 w-6" />
                                    </div>
                                    {/* Title + description */}
                                    <h3 className="text-foreground font-semibold">{step.title}</h3>
                                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
