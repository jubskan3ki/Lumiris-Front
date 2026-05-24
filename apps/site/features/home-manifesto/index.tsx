'use client';

const manifestoPhrases = [
    { text: 'Chaque vêtement a une histoire.', highlight: 'LUMIRIS la rend visible.' },
    { text: "Un score qui ne s'achète pas,", highlight: 'une traçabilité qui ne se maquille pas.' },
    { text: "Du fil à l'armoire,", highlight: 'la transparence radicale devient la norme.' },
];

export function HomeManifesto() {
    return (
        <section className="relative overflow-hidden py-24 sm:py-32">
            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
                <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent" />
                <div className="absolute right-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-violet-500/10 to-transparent" />
            </div>

            <div className="mx-auto max-w-4xl px-6">
                <div className="flex flex-col gap-10">
                    {manifestoPhrases.map((phrase, index) => (
                        <div key={index} className="group relative">
                            {/* Number indicator */}
                            <span className="text-muted-foreground/30 absolute -left-8 top-0 font-mono text-4xl font-bold sm:-left-12 sm:text-5xl">
                                {String(index + 1).padStart(2, '0')}
                            </span>

                            <p className="text-foreground pl-4 text-xl font-light leading-relaxed sm:pl-0 sm:text-2xl md:text-3xl">
                                <span className="text-muted-foreground">{phrase.text}</span>{' '}
                                <span className="font-medium">{phrase.highlight}</span>
                            </p>

                            {/* Decorative line */}
                            {index < manifestoPhrases.length - 1 && (
                                <div className="mt-10 flex items-center gap-4">
                                    <div className="h-px flex-1 bg-gradient-to-r from-violet-500/20 to-transparent" />
                                    <div className="h-1.5 w-1.5 rounded-full bg-violet-500/30" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
