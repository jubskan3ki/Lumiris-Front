'use client';

import { motion } from 'framer-motion';
import { ArrowUpDown } from 'lucide-react';
import type { GarmentKind, IrisGrade } from '@lumiris/types';
import { cn } from '@lumiris/ui/lib/cn';
import { GARMENT_KIND_LABEL } from '@/lib/shop';
import { MARKETPLACE_SORT_LABEL, MARKETPLACE_SORT_ORDER, type MarketplaceSort } from '@/lib/marketplace';

const CATEGORY_OPTIONS: readonly GarmentKind[] = ['sweater', 'shirt', 'jacket', 'trouser', 'shoe', 'accessory'];
const GRADE_OPTIONS: readonly IrisGrade[] = ['A', 'B', 'C', 'D', 'E'];

export interface BoutiqueFiltersState {
    category: GarmentKind | null;
    grade: IrisGrade | null;
    sort: MarketplaceSort;
}

interface BoutiqueFiltersProps {
    state: BoutiqueFiltersState;
    onChange: (next: BoutiqueFiltersState) => void;
}

export function BoutiqueFilters({ state, onChange }: BoutiqueFiltersProps) {
    return (
        <motion.div
            className="bg-background/85 sticky top-0 z-30 flex flex-col gap-2.5 px-5 pb-3 pt-2 backdrop-blur-xl"
            aria-label="Filtres et tri"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.08 }}
        >
            <ChipRow label="Catégorie">
                <Chip active={state.category === null} onClick={() => onChange({ ...state, category: null })}>
                    Toutes
                </Chip>
                {CATEGORY_OPTIONS.map((kind) => (
                    <Chip
                        key={kind}
                        active={state.category === kind}
                        onClick={() => onChange({ ...state, category: state.category === kind ? null : kind })}
                    >
                        {GARMENT_KIND_LABEL[kind]}
                    </Chip>
                ))}
            </ChipRow>

            <div className="flex items-center gap-2">
                <div className="flex flex-1 gap-1.5 overflow-x-auto">
                    <Chip active={state.grade === null} onClick={() => onChange({ ...state, grade: null })}>
                        Tous grades
                    </Chip>
                    {GRADE_OPTIONS.map((grade) => (
                        <Chip
                            key={grade}
                            active={state.grade === grade}
                            onClick={() => onChange({ ...state, grade: state.grade === grade ? null : grade })}
                        >
                            {grade}
                        </Chip>
                    ))}
                </div>

                <label className="border-border bg-card text-foreground relative inline-flex shrink-0 items-center gap-1.5 rounded-full border py-1.5 pl-3 pr-2 text-xs font-semibold">
                    <ArrowUpDown className="text-muted-foreground h-3.5 w-3.5" strokeWidth={1.5} aria-hidden />
                    <span className="sr-only">Trier par</span>
                    <select
                        value={state.sort}
                        onChange={(e) => onChange({ ...state, sort: e.target.value as MarketplaceSort })}
                        className="bg-transparent pr-1 text-xs font-semibold outline-none"
                        aria-label="Trier les pièces"
                    >
                        {MARKETPLACE_SORT_ORDER.map((sort) => (
                            <option key={sort} value={sort}>
                                {MARKETPLACE_SORT_LABEL[sort]}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
        </motion.div>
    );
}

function ChipRow({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className="flex gap-1.5 overflow-x-auto" role="group" aria-label={label}>
            {children}
        </div>
    );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-pressed={active}
            className={cn(
                'inline-flex shrink-0 items-center rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors',
                active
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-card text-foreground hover:border-foreground/40',
            )}
        >
            {children}
        </button>
    );
}
