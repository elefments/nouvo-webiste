import Link from 'next/link'
import { snaga, sofia } from '@/lib/fonts'
import './globals.css'

export default function NotFound() {
  return (
    <html lang="el" className={`${snaga.variable} ${sofia.variable}`}>
      <body className="bg-white font-sofia">
        <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          {/* Large decorative number */}
          <div
            className="font-snaga leading-none select-none text-[rgba(0,0,0,0.04)]"
            style={{ fontSize: 'clamp(120px, 25vw, 280px)' }}
            aria-hidden="true"
          >
            404
          </div>

          <div className="-mt-8 relative z-10">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#E34F39] mb-4">
              Σφάλμα 404
            </p>
            <h1
              className="font-snaga tracking-[-0.02em] text-[#1E1E1E] leading-[1.1]"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            >
              Η σελίδα δεν βρέθηκε.
            </h1>
            <p className="mt-4 max-w-[400px] text-[15px] leading-[1.7] text-[#757474] mx-auto">
              Η σελίδα που ψάχνεις δεν υπάρχει ή έχει μετακινηθεί. Επίστρεψε στην αρχική ή επικοινώνησε μαζί μας.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-[#1E1E1E] px-6 py-3 text-[14px] font-medium tracking-wide text-white transition-colors duration-200 hover:bg-[#E34F39]"
              >
                Αρχική σελίδα
              </Link>
              <Link
                href="/epikoinonia"
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,0,0,0.07)] px-6 py-3 text-[14px] font-medium tracking-wide text-[#1E1E1E] transition-colors duration-200 hover:border-[#1E1E1E]"
              >
                Επικοινωνία
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
