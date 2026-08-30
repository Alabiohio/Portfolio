'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[rgba(var(--secondary-rgb),0.1)] rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-2xl px-6 py-16 text-center glass-card rounded-2xl mx-4 hero-enter border shadow-2xl">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 mb-8 icon-box border-red-500/20">
          <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        
        <h1 className="text-5xl font-black mb-4 font-[var(--font-nova)] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Oops!</h1>
        <h2 className="text-2xl font-bold mb-4 font-[var(--font-acme)] text-[var(--foreground)]">Something went wrong</h2>
        <p className="text-[var(--muted-foreground)] mb-10 text-lg font-[var(--font-sansation)] max-w-md mx-auto">
          An unexpected error has occurred. We've been notified and are looking into it.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => unstable_retry()}
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-[var(--accent-foreground)] bg-[var(--accent)] rounded-full hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(var(--accent-rgb),0.3)] font-[var(--font-sansation)] cursor-pointer"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-[var(--foreground)] bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-full hover:bg-[var(--glass-bg-hover)] transition-all hover:scale-105 active:scale-95 font-[var(--font-sansation)]"
          >
            Go Home
          </a>
        </div>
      </div>
    </main>
  )
}
