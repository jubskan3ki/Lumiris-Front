'use client';

import { Check, X } from 'lucide-react';

const COMPARISON = [
    { criterion: 'Open source', higg: false, ecoscore: true, auto: false, iris: true },
    { criterion: 'Score non achetable', higg: false, ecoscore: true, auto: false, iris: true },
    { criterion: 'Adapté artisanat', higg: false, ecoscore: false, auto: false, iris: true },
    { criterion: 'Traçabilité vérifiable', higg: true, ecoscore: false, auto: false, iris: true },
    { criterion: 'Critères sociaux', higg: true, ecoscore: false, auto: false, iris: true },
    { criterion: 'Audit indépendant', higg: true, ecoscore: false, auto: false, iris: true },
];

const SYSTEMS = [
    { key: 'higg', label: 'Higg Index', color: 'text-slate-600' },
    { key: 'ecoscore', label: 'Eco-Score', color: 'text-slate-600' },
    { key: 'auto', label: 'Auto-décl.', color: 'text-slate-600' },
    { key: 'iris', label: 'Iris', color: 'text-emerald-600', highlight: true },
];

function StatusIcon({ value, highlight }: { value: boolean; highlight?: boolean }) {
    if (value) {
        return (
            <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${highlight ? 'bg-emerald-500 text-white' : 'bg-emerald-100 text-emerald-600'}`}
            >
                <Check className="h-4 w-4" strokeWidth={3} />
            </div>
        );
    }
    return (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-400">
            <X className="h-4 w-4" strokeWidth={2} />
        </div>
    );
}

export function MethodeComparison() {
    return (
        <section className="bg-slate-50 py-24 sm:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mb-16 text-center">
                    <span className="text-muted-foreground mb-4 inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-emerald-600">
                        Comparaison
                    </span>
                    <h2 className="text-foreground mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                        Iris vs. les autres systèmes
                    </h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
                        Comment Iris se positionne par rapport aux méthodes existantes.
                    </p>
                </div>

                {/* Comparison table */}
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                    {/* Header row */}
                    <div className="grid grid-cols-5 border-b border-slate-200 bg-slate-50">
                        <div className="p-4">
                            <span className="text-sm font-semibold text-slate-700">Critère</span>
                        </div>
                        {SYSTEMS.map((system) => (
                            <div key={system.key} className="p-4 text-center">
                                <span className={`text-sm font-semibold ${system.color}`}>{system.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Data rows */}
                    {COMPARISON.map((row, index) => (
                        <div
                            key={row.criterion}
                            className={`grid grid-cols-5 ${index < COMPARISON.length - 1 ? 'border-b border-slate-100' : ''}`}
                        >
                            <div className="flex items-center p-4">
                                <span className="text-sm font-medium text-slate-700">{row.criterion}</span>
                            </div>
                            <div className="flex items-center justify-center p-4">
                                <StatusIcon value={row.higg} />
                            </div>
                            <div className="flex items-center justify-center p-4">
                                <StatusIcon value={row.ecoscore} />
                            </div>
                            <div className="flex items-center justify-center p-4">
                                <StatusIcon value={row.auto} />
                            </div>
                            <div className="flex items-center justify-center bg-emerald-50/50 p-4">
                                <StatusIcon value={row.iris} highlight />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Legend */}
                <div className="mt-6 flex items-center justify-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500">
                            <Check className="h-3 w-3 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-sm text-slate-600">Disponible</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100">
                            <X className="h-3 w-3 text-slate-400" strokeWidth={2} />
                        </div>
                        <span className="text-sm text-slate-600">Non disponible</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
