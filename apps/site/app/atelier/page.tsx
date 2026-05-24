import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Hammer, Lock } from 'lucide-react';
import { AtelierSteps } from '@/features/atelier-steps';
import { AtelierPricing } from '@/features/atelier-pricing';
import { AtelierAddons } from '@/features/atelier-addons';
import { AtelierFaq } from '@/features/atelier-faq';

export const metadata: Metadata = {
    title: 'ATELIER — Publiez vos passeports DPP en minutes | LUMIRIS',
    description:
        "L'offre ATELIER permet aux artisans textile français de créer leurs passeports DPP et d'anticiper la conformité ESPR. Trois paliers Solo / Studio / Maison.",
    alternates: { canonical: '/atelier' },
};

const SIGNUP_URL = 'https://client.lumiris.fr';

export default function AtelierPage() {
    return (
        <main className="bg-background">
            {/* Hero */}
            <section className="mx-auto max-w-6xl px-6 pb-16 pt-32">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left: Copy */}
                    <div>
                        <span className="border-border bg-card text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium">
                            <Hammer className="text-lumiris-cyan h-3.5 w-3.5" aria-hidden="true" />
                            Pour les TPE et PME artisanales
                        </span>
                        <h1 className="text-foreground mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            Publiez vos passeports DPP en minutes, pas en mois.
                        </h1>
                        <p className="text-muted-foreground mt-4 max-w-lg text-lg leading-relaxed">
                            ATELIER vous guide de la facture fournisseur au QR code conforme ESPR. Score Iris calculé
                            automatiquement, jamais achetable.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href={SIGNUP_URL}
                                className="bg-foreground text-background inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-opacity hover:opacity-90"
                            >
                                Commencer dans ATELIER
                                <ArrowRight className="h-4 w-4" />
                            </a>
                            <Link
                                href="/charte-independance"
                                className="text-muted-foreground hover:text-foreground inline-flex items-center rounded-xl px-5 py-3 text-sm font-medium underline-offset-4 transition-colors hover:underline"
                            >
                                Charte d&apos;indépendance
                            </Link>
                        </div>
                    </div>

                    {/* Right: Interface mockup */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md">
                            {/* Mock dashboard */}
                            <div className="bg-card border-border rounded-2xl border p-4 shadow-2xl">
                                <div className="bg-muted mb-4 flex items-center gap-2 rounded-lg p-2">
                                    <div className="bg-background h-3 w-3 rounded-full" />
                                    <div className="bg-background h-3 w-3 rounded-full" />
                                    <div className="bg-background h-3 w-3 rounded-full" />
                                    <div className="bg-muted-foreground/30 ml-2 h-4 flex-1 rounded" />
                                </div>
                                <div className="space-y-3">
                                    <div className="bg-muted h-8 w-2/3 rounded" />
                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="bg-cyan-500/10 flex h-20 items-center justify-center rounded-lg">
                                            <span className="text-lumiris-cyan text-2xl font-bold">12</span>
                                        </div>
                                        <div className="bg-emerald-500/10 flex h-20 items-center justify-center rounded-lg">
                                            <span className="text-emerald-600 text-2xl font-bold">8</span>
                                        </div>
                                        <div className="bg-amber-500/10 flex h-20 items-center justify-center rounded-lg">
                                            <span className="text-amber-600 text-2xl font-bold">4</span>
                                        </div>
                                    </div>
                                    <div className="bg-muted h-24 rounded-lg" />
                                </div>
                            </div>
                            {/* Decorative glow */}
                            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 blur-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4 Steps */}
            <AtelierSteps />

            {/* Trust banner */}
            <section className="mx-auto max-w-6xl px-6 py-12">
                <div className="bg-muted/30 flex flex-col gap-4 rounded-2xl p-8 sm:flex-row sm:items-center sm:gap-6">
                    <Lock className="text-lumiris-cyan h-7 w-7 shrink-0" aria-hidden="true" />
                    <p className="text-foreground flex-1 text-base font-semibold">
                        Aucun acteur ne peut payer pour modifier son score Iris — algorithme et datasets publics,
                        versionnés.
                    </p>
                </div>
            </section>

            {/* Pricing */}
            <AtelierPricing />

            {/* Addons */}
            <section className="mx-auto max-w-6xl px-6 py-12">
                <p className="text-muted-foreground mb-6 text-xs font-medium uppercase tracking-widest">Options</p>
                <AtelierAddons />
            </section>

            {/* FAQ */}
            <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
                <div className="mx-auto max-w-3xl">
                    <div className="mb-8">
                        <p className="text-muted-foreground mb-3 text-xs font-medium uppercase tracking-widest">
                            Questions fréquentes
                        </p>
                        <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
                            Avant de commencer
                        </h2>
                    </div>
                    <AtelierFaq />
                </div>
            </section>

            {/* Final CTA */}
            <section className="relative overflow-hidden py-20 sm:py-28">
                {/* Prismatic halo */}
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-500/6 via-violet-500/4 to-pink-500/6 blur-3xl" />
                </div>

                <div className="mx-auto max-w-3xl px-6 text-center">
                    <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
                        Premier passeport en 30 minutes.
                    </h2>
                    <a
                        href={SIGNUP_URL}
                        className="bg-foreground text-background mt-8 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-opacity hover:opacity-90"
                    >
                        Ouvrir ATELIER
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </div>
            </section>
        </main>
    );
}
