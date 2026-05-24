'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScanLine, BarChart3, Shirt } from 'lucide-react';

// Inline IrisGrade component to avoid monorepo import issues
function IrisGrade({ grade, variant = 'badge' }: { grade: string; variant?: 'badge' | 'large' }) {
    const colorMap: Record<string, string> = {
        A: 'bg-emerald-500',
        B: 'bg-lime-500',
        C: 'bg-amber-500',
        D: 'bg-orange-500',
        E: 'bg-red-500',
    };
    const bgColor = colorMap[grade] || 'bg-muted';

    if (variant === 'badge') {
        return <span className={`${bgColor} rounded px-2 py-0.5 text-xs font-bold text-white`}>{grade}</span>;
    }
    return (
        <div
            className={`${bgColor} flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold text-white`}
        >
            {grade}
        </div>
    );
}

const DEMO_TABS = [
    {
        id: 'scan',
        label: 'Scanner',
        icon: ScanLine,
        screen: 'scan',
    },
    {
        id: 'score',
        label: 'Score Iris',
        icon: BarChart3,
        screen: 'score',
    },
    {
        id: 'wardrobe',
        label: 'Garde-Robe',
        icon: Shirt,
        screen: 'wardrobe',
    },
] as const;

export function VisionDemo() {
    const [activeTab, setActiveTab] = useState<'scan' | 'score' | 'wardrobe'>('scan');

    return (
        <section className="bg-muted/30 py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <span className="inline-block rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-violet-600">
                        Demo
                    </span>
                    <h2 className="text-foreground mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                        L&apos;experience VISION
                    </h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
                        Decouvrez les fonctionnalites cles de l&apos;application.
                    </p>
                </motion.div>

                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* Vertical tabs */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.5 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="space-y-3">
                            {DEMO_TABS.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex w-full items-center gap-4 rounded-xl p-4 text-left transition-all ${
                                        activeTab === tab.id
                                            ? 'bg-card border-2 border-violet-500/30 shadow-md'
                                            : 'hover:bg-card/50 border border-transparent'
                                    }`}
                                >
                                    <div
                                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                                            activeTab === tab.id ? 'bg-violet-500/10' : 'bg-muted'
                                        }`}
                                    >
                                        <tab.icon
                                            className={`h-6 w-6 ${
                                                activeTab === tab.id ? 'text-violet-600' : 'text-muted-foreground'
                                            }`}
                                        />
                                    </div>
                                    <div>
                                        <p
                                            className={`font-semibold ${
                                                activeTab === tab.id ? 'text-foreground' : 'text-muted-foreground'
                                            }`}
                                        >
                                            {tab.label}
                                        </p>
                                        <p className="text-muted-foreground text-sm">
                                            {tab.id === 'scan' && "Scannez n'importe quel DPP en un instant"}
                                            {tab.id === 'score' && 'Visualisez le score Iris detaille'}
                                            {tab.id === 'wardrobe' && 'Gerez votre collection de pieces'}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Phone mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.5 }}
                        className="order-1 flex justify-center lg:order-2"
                    >
                        <div className="relative">
                            <div className="bg-foreground w-64 rounded-[2.5rem] p-2 shadow-2xl sm:w-72">
                                <div className="bg-background overflow-hidden rounded-[2rem]">
                                    {/* Status bar */}
                                    <div className="bg-card flex items-center justify-center py-2">
                                        <div className="bg-foreground h-6 w-24 rounded-full" />
                                    </div>

                                    {/* Screen content */}
                                    <div className="aspect-[9/16] p-4">
                                        {activeTab === 'scan' && (
                                            <div className="flex h-full flex-col items-center justify-center">
                                                <div className="bg-muted relative h-48 w-48 rounded-2xl">
                                                    <div className="absolute inset-4 rounded-lg border-2 border-dashed border-violet-500" />
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <ScanLine className="h-12 w-12 text-violet-500" />
                                                    </div>
                                                </div>
                                                <p className="text-muted-foreground mt-4 text-center text-sm">
                                                    Placez le QR code dans le cadre
                                                </p>
                                            </div>
                                        )}

                                        {activeTab === 'score' && (
                                            <div className="h-full">
                                                <div className="mb-4 flex items-center gap-3">
                                                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-violet-100 to-cyan-100" />
                                                    <div className="flex-1">
                                                        <p className="text-foreground text-sm font-medium">
                                                            Chemise Lin
                                                        </p>
                                                        <p className="text-muted-foreground text-xs">Atelier Margaux</p>
                                                    </div>
                                                    <IrisGrade grade="A" variant="badge" />
                                                </div>
                                                <div className="space-y-3">
                                                    {[
                                                        { label: 'Matiere', value: 85, color: 'bg-cyan-500' },
                                                        { label: 'Fabrication', value: 78, color: 'bg-violet-500' },
                                                        { label: 'Durabilite', value: 92, color: 'bg-emerald-500' },
                                                        { label: 'Social', value: 88, color: 'bg-amber-500' },
                                                    ].map((item) => (
                                                        <div key={item.label}>
                                                            <div className="mb-1 flex justify-between text-xs">
                                                                <span className="text-muted-foreground">
                                                                    {item.label}
                                                                </span>
                                                                <span className="text-foreground font-medium">
                                                                    {item.value}
                                                                </span>
                                                            </div>
                                                            <div className="bg-muted h-2 overflow-hidden rounded-full">
                                                                <div
                                                                    className={`h-full rounded-full ${item.color}`}
                                                                    style={{ width: `${item.value}%` }}
                                                                />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {activeTab === 'wardrobe' && (
                                            <div className="h-full">
                                                <p className="text-foreground mb-3 font-medium">Ma Garde-Robe</p>
                                                <div className="grid grid-cols-2 gap-2">
                                                    {[1, 2, 3, 4].map((i) => (
                                                        <div
                                                            key={i}
                                                            className="aspect-square rounded-lg bg-gradient-to-br from-slate-100 to-slate-200"
                                                        />
                                                    ))}
                                                </div>
                                                <p className="text-muted-foreground mt-3 text-center text-xs">
                                                    4 pieces enregistrees
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            {/* Decorative glow */}
                            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 blur-2xl" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
