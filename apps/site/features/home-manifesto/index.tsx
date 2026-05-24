'use client';

import { motion } from 'framer-motion';

const manifestoPhrases = [
    'Chaque vêtement a une histoire. LUMIRIS la rend visible.',
    "Un score qui ne s'achète pas, une traçabilité qui ne se maquille pas.",
    "Du fil à l'armoire, la transparence radicale devient la norme.",
];

export function HomeManifesto() {
    return (
        <section className="bg-background py-24 sm:py-32">
            <div className="mx-auto max-w-3xl px-6">
                <div className="flex flex-col gap-8">
                    {manifestoPhrases.map((phrase, index) => (
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="text-foreground text-balance text-xl font-medium leading-relaxed sm:text-2xl"
                        >
                            {phrase}
                        </motion.p>
                    ))}
                </div>
            </div>
        </section>
    );
}
