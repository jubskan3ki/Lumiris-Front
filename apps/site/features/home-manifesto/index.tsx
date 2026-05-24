'use client';

const manifestoPhrases = [
    {
        text: 'Chaque vêtement a une histoire.',
        highlight: 'LUMIRIS la rend visible.',
        color: 'violet',
    },
    {
        text: "Un score qui ne s'achète pas,",
        highlight: 'une traçabilité qui ne se maquille pas.',
        color: 'cyan',
    },
    {
        text: "Du fil à l'armoire,",
        highlight: 'la transparence radicale devient la norme.',
        color: 'pink',
    },
];

export function HomeManifesto() {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-32">
            {/* Background pattern */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.05),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.05),transparent_50%)]" />
            </div>

            <div className="mx-auto max-w-5xl px-6">
                {/* Section header */}
                <div className="mb-16 text-center">
                    <span className="text-muted-foreground mb-4 inline-block rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-violet-600">
                        Notre manifeste
                    </span>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {manifestoPhrases.map((phrase, index) => {
                        const colorClasses = {
                            violet: {
                                border: 'border-violet-200',
                                bg: 'bg-violet-50',
                                number: 'text-violet-500',
                                highlight: 'text-violet-700',
                            },
                            cyan: {
                                border: 'border-cyan-200',
                                bg: 'bg-cyan-50',
                                number: 'text-cyan-500',
                                highlight: 'text-cyan-700',
                            },
                            pink: {
                                border: 'border-pink-200',
                                bg: 'bg-pink-50',
                                number: 'text-pink-500',
                                highlight: 'text-pink-700',
                            },
                        }[phrase.color];

                        return (
                            <div
                                key={index}
                                className={`relative rounded-2xl border ${colorClasses.border} ${colorClasses.bg} p-6 transition-transform hover:-translate-y-1`}
                            >
                                {/* Number badge */}
                                <div
                                    className={`absolute -top-3 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-white font-mono text-sm font-bold shadow-sm ${colorClasses.number}`}
                                >
                                    {String(index + 1).padStart(2, '0')}
                                </div>

                                <div className="pt-4">
                                    <p className="text-muted-foreground text-lg leading-relaxed">{phrase.text}</p>
                                    <p
                                        className={`mt-2 text-lg font-semibold leading-relaxed ${colorClasses.highlight}`}
                                    >
                                        {phrase.highlight}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
