'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function EmergencyButton() {
  const [showQuickExit, setShowQuickExit] = useState(false)

  const quickExit = () => {
    // Clear browser history
    window.history.replaceState(null, '', 'https://www.google.com')

    // Redirect to Google
    window.location.replace('https://www.google.com')
  }

  return (
    <>
      {/* Emergency Button - Fixed position */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        {/* Quick Exit Button (shows on hover) */}
        {showQuickExit && (
          <button
            onClick={quickExit}
            className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-700 transition font-semibold text-sm flex items-center gap-2 animate-fade-in"
            title="Quitter immédiatement vers Google"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Sortie Rapide
          </button>
        )}

        {/* Main Emergency Button */}
        <div
          onMouseEnter={() => setShowQuickExit(true)}
          onMouseLeave={() => setShowQuickExit(false)}
        >
          <Link
            href="/urgence"
            className="bg-red-600 text-white px-6 py-3 rounded-full shadow-2xl hover:bg-red-700 transition font-bold flex items-center gap-2 ring-4 ring-red-200"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            URGENCE
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </>
  )
}
