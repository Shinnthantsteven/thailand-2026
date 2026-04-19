const tabs = [
  { id: 'plan', label: 'Full Plan', icon: '🗓️' },
  { id: 'food', label: 'Food Guide', icon: '🍜' },
  { id: 'halal', label: 'Halal Guide', icon: '☪️' },
  { id: 'grab', label: 'Grab + 7-Eleven', icon: '📍' },
  { id: 'tips', label: 'Tips', icon: '💡' },
];

export default function Nav({ activeTab, setActiveTab, darkMode, setDarkMode }) {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="font-serif text-forest-dark dark:text-forest-mid text-lg font-bold leading-tight hidden sm:block">
          Thailand 2026
        </div>
        <nav className="flex gap-1 overflow-x-auto scrollbar-hide flex-1 sm:flex-none justify-center sm:justify-end">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all
                ${activeTab === tab.id
                  ? 'bg-forest-dark text-white shadow-md'
                  : 'text-neutral-muted dark:text-gray-400 hover:bg-forest-light dark:hover:bg-gray-800 hover:text-forest-dark dark:hover:text-forest-mid'
                }
              `}
            >
              <span className="text-base leading-none">{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </nav>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm"
          aria-label="Toggle dark mode"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
}
