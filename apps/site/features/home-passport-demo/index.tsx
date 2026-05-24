'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Leaf, Factory, ShieldCheck } from 'lucide-react';
import { IrisGrade } from '@lumiris/scoring-ui/components/iris-grade';

const features = [
    {
        icon: Leaf,
        title: 'Composition détaillée',
        description: "Matières premières, origine, certifications. Tout ce qui compose la pièce, sans zone d'ombre.",
    },
    {
        icon: Factory,
        title: 'Parcours de fabrication',
        description: 'Chaque étape de production documentée : filature, tissage, confection, finition.',
    },
    {
        icon: ShieldCheck,
        title: 'Score Iris vérifié',
        description: 'Un score environnemental calculé sur 4 piliers, auditable et non achetable.',
    },
];

export function HomePassportDemo() {
    return (
        <section className="bg-muted/30 py-24 sm:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Phone mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                        className="relative flex justify-center"
                    >
                        <div className="relative">
                            {/* Phone frame */}
                            <div className="bg-foreground relative w-64 rounded-[2.5rem] p-2 shadow-2xl sm:w-72">
                                <div className="bg-background overflow-hidden rounded-[2rem]">
                                    {/* Status bar */}
                                    <div className="bg-card flex items-center justify-center py-2">
                                        <div className="bg-foreground h-6 w-24 rounded-full" />
                                    </div>
                                    {/* Content */}
                                    <div className="p-4">
                                        {/* Product header */}
                                        <div className="flex items-start gap-3">
                                            <div className="relative h-16 w-16 overflow-hidden rounded-lg">
                                                <Image
                                                    src="/images/product-chemise.jpg"
                                                    alt="Chemise Lin"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-muted-foreground text-xs">Atelier Margaux</p>
                                                <p className="text-foreground text-sm font-medium">Chemise Lin</p>
                                                <div className="mt-1">
                                                    <IrisGrade grade="A" size="sm" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Composition */}
                                        <div className="mt-5">
                                            <p className="text-muted-foreground mb-2 text-xs font-medium uppercase tracking-wide">
                                                Composition
                                            </p>
                                            <div className="flex gap-2">
                                                <span className="bg-muted text-foreground rounded-full px-2.5 py-1 text-xs">
                                                    Lin 100%
                                                </span>
                                                <span className="bg-muted text-foreground rounded-full px-2.5 py-1 text-xs">
                                                    France
                                                </span>
                                            </div>
                                        </div>
                                        {/* Score breakdown */}
                                        <div className="mt-5">
                                            <p className="text-muted-foreground mb-2 text-xs font-medium uppercase tracking-wide">
                                                Score Iris
                                            </p>
                                            <div className="space-y-2">
                                                {[
                                                    { label: 'Matière', value: 85, color: 'bg-cyan-500' },
                                                    { label: 'Fabrication', value: 78, color: 'bg-violet-500' },
                                                    { label: 'Durabilité', value: 92, color: 'bg-emerald-500' },
                                                    { label: 'Social', value: 88, color: 'bg-amber-500' },
                                                ].map((item) => (
                                                    <div key={item.label} className="flex items-center gap-2">
                                                        <span className="text-muted-foreground w-20 text-xs">
                                                            {item.label}
                                                        </span>
                                                        <div className="bg-muted h-1.5 flex-1 overflow-hidden rounded-full">
                                                            <div
                                                                className={`h-full rounded-full ${item.color}`}
                                                                style={{ width: `${item.value}%` }}
                                                            />
                                                        </div>
                                                        <span className="text-foreground w-8 text-right text-xs font-medium">
                                                            {item.value}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Glow effect */}
                            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 blur-2xl" />
                        </div>
                    </motion.div>

                    {/* Features list */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-foreground text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                                Un passeport complet pour chaque pièce
                            </h2>
                            <p className="text-muted-foreground mt-4 text-lg">
                                Scannez le QR code ou la puce NFC pour accéder instantanément à toutes les informations.
                            </p>
                        </motion.div>

                        <div className="mt-10 space-y-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-50px' }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="bg-lumiris-cyan/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                                        <feature.icon className="text-lumiris-cyan h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-foreground font-semibold">{feature.title}</h3>
                                        <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
