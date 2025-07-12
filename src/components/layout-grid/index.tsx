'use client';
import { useRef } from 'react';
import { LayoutCard } from '@/components/layout-card';
import type { Layout } from '@/types';
import { cn } from '@/lib/utils';

type LayoutGridProps = {
  layouts: Layout[];
  onLayoutClick: (layout: Layout, element: HTMLDivElement) => void;
  children?: React.ReactNode;
  gridType: 'blog' | 'post';
};

export function LayoutGrid({ layouts, onLayoutClick, children, gridType }: LayoutGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  const gridClasses = {
    blog: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12',
    post: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12',
  };

  return (
    <div ref={gridRef} className="relative">
      <div className={cn('grid', gridClasses[gridType])}>
        {layouts.map((layout) => (
          <div
            key={layout.name}
            className="flex flex-col items-center gap-4 cursor-pointer"
            onClick={(e) => onLayoutClick(layout, e.currentTarget as HTMLDivElement)}
          >
            <h3 className="text-xl font-semibold tracking-tight">{layout.name}</h3>
            <div className="w-full">
              <LayoutCard
                imageUrl={layout.imageUrl}
                imageHint={layout.imageHint}
                comingSoon={layout.comingSoon}
              />
            </div>
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}
