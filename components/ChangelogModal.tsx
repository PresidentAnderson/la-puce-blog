'use client'

import { useState } from 'react'
import { getAllChangelog, type ChangelogEntry } from '@/lib/changelog'

const categoryIcons = {
  feature: '✨',
  improvement: '🔧',
  bugfix: '🐛',
  design: '🎨',
  security: '🔒',
}

const categoryLabels = {
  feature: 'New Features',
  improvement: 'Improvements',
  bugfix: 'Bug Fixes',
  design: 'Design Updates',
  security: 'Security',
}

const typeColors = {
  major: 'bg-red-100 text-red-700',
  minor: 'bg-blue-100 text-blue-700',
  patch: 'bg-green-100 text-green-700',
}

export default function ChangelogModal() {
  const [isOpen, setIsOpen] = useState(false)
  const changelog = getAllChangelog()

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="text-gray-600 hover:text-blue-600 transition flex items-center gap-1 text-sm"
        aria-label="View Changelog"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        Changelog
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-6 py-4 border-b bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Changelog</h2>
                  <p className="text-sm opacity-90">
                    Recent updates and improvements
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition"
                  aria-label="Close"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(80vh-120px)] px-6 py-4">
              {changelog.map((entry, index) => (
                <div
                  key={entry.version}
                  className={`${index > 0 ? 'mt-8 pt-8 border-t' : ''}`}
                >
                  {/* Version Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      v{entry.version}
                    </h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        typeColors[entry.type]
                      }`}
                    >
                      {entry.type}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(entry.date).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>

                  {/* Changes by Category */}
                  {entry.changes.map((change, changeIndex) => (
                    <div key={changeIndex} className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                        <span>{categoryIcons[change.category]}</span>
                        {categoryLabels[change.category]}
                      </h4>
                      <ul className="space-y-1 ml-6">
                        {change.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-gray-700 text-sm flex items-start gap-2"
                          >
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t bg-gray-50">
              <p className="text-sm text-gray-600 text-center">
                <a
                  href="https://github.com/PresidentAnderson/la-puce-blog/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View full changelog on GitHub →
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
