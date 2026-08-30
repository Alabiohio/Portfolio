import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[rgba(var(--accent-rgb),0.1)] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[rgba(var(--secondary-rgb),0.1)] rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-2xl px-6 py-16 text-center glass-card rounded-2xl mx-4 hero-enter border shadow-2xl">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[rgba(var(--accent-rgb),0.1)] mb-8 icon-box">
          <svg className="w-10 h-10 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        <h1 className="text-8xl font-black mb-4 font-[var(--font-nova)] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] animate-gradient-x">404</h1>
        <h2 className="text-3xl font-bold mb-4 font-[var(--font-acme)] text-[var(--foreground)]">Page Not Found</h2>
        <p className="text-[var(--muted-foreground)] mb-10 text-lg font-[var(--font-sansation)] max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <Link 
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-[var(--accent-foreground)] bg-[var(--accent)] rounded-full hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(var(--accent-rgb),0.3)] font-[var(--font-sansation)]"
        >
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    </main>
  )
}
