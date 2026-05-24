import type { Metadata } from 'next';
import { MethodeHero } from '@/features/methode-hero';
import { MethodePillars } from '@/features/methode-pillars';
import { MethodeGrades } from '@/features/methode-grades';
import { MethodeRules } from '@/features/methode-rules';
import { MethodeComparison } from '@/features/methode-comparison';
import { MethodeGovernance } from '@/features/methode-governance';

export const metadata: Metadata = {
    title: 'Methodologie Iris - Score transparent et non achetable | LUMIRIS',
    description:
        'Decouvrez la methodologie Iris : un score environnemental calcule sur 4 piliers (40/25/25/10), open source, auditable et non achetable.',
};

export default function MethodePage() {
    return (
        <main className="min-h-screen">
            <MethodeHero />
            <MethodePillars />
            <MethodeGrades />
            <MethodeRules />
            <MethodeComparison />
            <MethodeGovernance />
        </main>
    );
}
