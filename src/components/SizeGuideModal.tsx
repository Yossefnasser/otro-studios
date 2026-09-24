import React, { useState } from 'react';
import { X } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  const [unit, setUnit] = useState<'cm' | 'in'>('cm');

  if (!isOpen) return null;

  const data = [
    { size: 'S', chestCm: 114, chestIn: 44.8, lengthCm: 71, lengthIn: 28.0, shoulderCm: 56, shoulderIn: 22.0 },
    { size: 'M', chestCm: 120, chestIn: 47.2, lengthCm: 73, lengthIn: 28.7, shoulderCm: 58, shoulderIn: 22.8 },
    { size: 'L', chestCm: 126, chestIn: 49.6, lengthCm: 75, lengthIn: 29.5, shoulderCm: 60, shoulderIn: 23.6 },
    { size: 'XL', chestCm: 132, chestIn: 52.0, lengthCm: 77, lengthIn: 30.3, shoulderCm: 62, shoulderIn: 24.4 },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div
        className="w-full max-w-2xl bg-surface border border-outline/70 shadow-2xl p-6 sm:p-8 my-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-outline/40">
          <div>
            <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-[0.2em] block mb-1">
              [ANATOMICAL PROPORTIONS]
            </span>
            <h2 className="font-syne text-2xl font-extrabold uppercase text-on-surface">
              SIZE ARCHITECTURE MATRIX
            </h2>
          </div>
          <button onClick={onClose} className="text-on-surface hover:opacity-60 transition-opacity">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center justify-between py-4">
          <p className="font-grotesk text-[13px] text-on-surface-variant">
            All OTRO garments are tailored with an intentionally dropped shoulder and architectural chest volume.
          </p>
          <div className="flex items-center border border-outline/70 font-mono text-[11px]">
            <button
              onClick={() => setUnit('cm')}
              className={`px-3 py-1 cursor-pointer ${unit === 'cm' ? 'bg-on-surface text-surface font-bold' : 'text-on-surface'}`}
            >
              CM
            </button>
            <button
              onClick={() => setUnit('in')}
              className={`px-3 py-1 cursor-pointer ${unit === 'in' ? 'bg-on-surface text-surface font-bold' : 'text-on-surface'}`}
            >
              IN
            </button>
          </div>
        </div>

        <table className="w-full text-left font-mono text-[12px] border border-outline/50 my-2">
          <thead>
            <tr className="bg-surface-subtle border-b border-outline/50 text-on-surface-variant text-[11px]">
              <th className="py-3 px-4">SIZE</th>
              <th className="py-3 px-4">CHEST ({unit.toUpperCase()})</th>
              <th className="py-3 px-4">LENGTH ({unit.toUpperCase()})</th>
              <th className="py-3 px-4">SHOULDER ({unit.toUpperCase()})</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline/40">
            {data.map((row) => (
              <tr key={row.size} className="hover:bg-surface-subtle/40">
                <td className="py-3 px-4 font-bold text-on-surface">{row.size}</td>
                <td className="py-3 px-4 text-on-surface tabular-nums">
                  {unit === 'cm' ? row.chestCm : row.chestIn}
                </td>
                <td className="py-3 px-4 text-on-surface tabular-nums">
                  {unit === 'cm' ? row.lengthCm : row.lengthIn}
                </td>
                <td className="py-3 px-4 text-on-surface tabular-nums">
                  {unit === 'cm' ? row.shoulderCm : row.shoulderIn}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pt-4 mt-2 text-[12px] font-mono text-on-surface-variant flex justify-between">
          <span>RECOMMENDATION: ORDER TRUE TO SIZE FOR SIGNATURE ARCHITECTURAL FIT</span>
          <button onClick={onClose} className="font-bold text-on-surface hover:underline">
            DISMISS
          </button>
        </div>
      </div>
    </div>
  );
};
