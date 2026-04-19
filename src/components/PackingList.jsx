import { useState } from 'react';
import { packingList } from '../data/tips';

const categoryColors = {
  clothing: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  essentials: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  health: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
  tech: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  money: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  apps: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
};

export default function PackingList() {
  const [checked, setChecked] = useState({});

  const toggle = (i) => setChecked(prev => ({ ...prev, [i]: !prev[i] }));
  const checkedCount = Object.values(checked).filter(Boolean).length;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
      <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
        <h3 className="font-serif text-lg font-bold text-neutral-ink dark:text-gray-100">Packing List</h3>
        <span className="text-sm text-neutral-muted dark:text-gray-400">{checkedCount}/{packingList.length} packed</span>
      </div>
      {checkedCount === packingList.length && checkedCount > 0 && (
        <div className="px-4 py-2 bg-forest-light dark:bg-forest-dark/20 text-center text-sm text-forest-dark dark:text-forest-mid font-medium">
          ✅ All packed — you're ready for Thailand!
        </div>
      )}
      <div className="divide-y divide-gray-50 dark:divide-gray-800">
        {packingList.map((p, i) => (
          <label
            key={i}
            className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
          >
            <input
              type="checkbox"
              checked={!!checked[i]}
              onChange={() => toggle(i)}
              className="w-5 h-5 accent-forest-dark shrink-0 cursor-pointer"
            />
            <span className={`flex-1 text-sm transition-all ${checked[i] ? 'line-through text-neutral-muted dark:text-gray-500' : 'text-neutral-ink dark:text-gray-100'}`}>
              {p.item}
            </span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[p.category]}`}>
              {p.category}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
