import { useState, useEffect } from 'react'
import Reveal from './Reveal'
import { Cloud, Sakura } from './decor'
import spincat from "@/spincat.png"

const LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shreya-shrivastava-261245256/' },
  { label: 'Dribbble', href: 'https://dribbble.com/Shreya88' },
  { label: 'Behance', href: 'https://www.behance.net/shreyashrivas21' },
]

const QUOTES = [
  "It is never too late to be what you might have been.",
  "Your pace is still progress.",
  "Everything you can imagine is real.",
  "Embrace the journey.",
  "You are capable of amazing things.",
  "Stay curious, stay kind.",
  "Happiness depends upon ourselves.",
  "Some endings are quiet beginnings.",
  "Bloom where you feel alive.",
  "You are allowed to begin again."
]

function QuoteSpinner() {
  const [isSpinning, setIsSpinning] = useState(false)
  const [quote, setQuote] = useState<string | null>(null)
  const [rotation, setRotation] = useState(0)

  // Automatically hide the quote after 5 seconds
  useEffect(() => {
    if (quote) {
      const hideTimeout = setTimeout(() => {
        setQuote(null)
      }, 5000)

      return () => clearTimeout(hideTimeout)
    }
  }, [quote])

  const handleSpin = () => {
    if (isSpinning) return
    setIsSpinning(true)
    setQuote(null) 

    const extraSpins = 1080 + Math.floor(Math.random() * 720)
    setRotation((prev) => prev + extraSpins)

    setTimeout(() => {
      const randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)]
      setQuote(randomQuote)
      setIsSpinning(false)
    }, 2000)
  }

  return (
    <div className="absolute bottom-6 right-4 z-50 flex flex-col items-center sm:bottom-10 sm:right-10">
      
      <div 
        className={`mb-4 w-44 rounded-2xl bg-white p-4 text-center font-serif text-[15px] leading-tight text-ink shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500 ease-out sm:w-52 ${
          quote ? 'translate-y-0 scale-100 opacity-100' : 'pointer-events-none translate-y-4 scale-95 opacity-0'
        }`}
      >
        <p>"{quote}"</p>
        <div className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 rounded-sm bg-white" />
      </div>

      <button
        onClick={handleSpin}
        aria-label="Spin for a random quote"
        // Slightly reduced the size to make the outer ring tighter
        className="group relative flex size-24 items-center justify-center rounded-full bg-ink shadow-xl outline-none transition-transform hover:scale-105 focus-visible:ring-4 focus-visible:ring-ink/20 sm:size-[104px]"
      >
        <div
          className="absolute inset-0 rounded-full transition-transform ease-[cubic-bezier(0.25,0.1,0.25,1)]"
          style={{ 
            transform: `rotate(${rotation}deg)`, 
            transitionDuration: '2000ms' 
          }}
        >
          {/* Inner div to handle the continuous slow spin */}
          <div className="absolute inset-0 animate-[spin_12s_linear_infinite]">
            
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
              <path id="curve" d="M 50 16 A 34 34 0 1 1 49.9 16" fill="transparent" />
              <text className="fill-white/90 text-[10px] font-bold uppercase tracking-[0.16em]">
                <textPath href="#curve" startOffset="25%" textAnchor="middle">
                  TAP THE CAT 
                </textPath>
                <textPath href="#curve" startOffset="75%" textAnchor="middle">
                  FOR GOOD VIBES 
                </textPath>
              </text>
            </svg>
          
          </div>
        </div>

        <div className="relative z-10 flex size-11 items-center justify-center overflow-hidden rounded-full bg-white shadow-inner sm:size-12">
           <img src={spincat} alt="cat" className="h-[36px] object-contain" />
        </div>
      </button>
    </div>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-28 overflow-hidden pt-12 pb-32 sm:pb-24">
      <Cloud src="right" className="top-0 -right-32 w-[300px] opacity-60" />

      <Sakura className="absolute top-10 left-[12%] size-5 opacity-80 motion-safe:animate-bob" />
      <Sakura className="absolute top-1/2 right-[14%] size-4 opacity-70 motion-safe:animate-drift" />
      <Sakura className="absolute bottom-14 left-[22%] size-3.5 opacity-60 motion-safe:animate-bob" />
      <Sakura className="absolute bottom-24 right-[26%] size-6 opacity-50 motion-safe:animate-drift" />

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center gap-6 px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="max-w-[520px] font-serif text-[clamp(1.75rem,4.5vw,2.5rem)] leading-[1.15] text-ink">
            Let's create <em className="italic">something</em> together.
          </h2>
        </Reveal>

        <Reveal delay={100} className="flex flex-col items-center gap-5">
          <a
            href="mailto:shreyashrivastava2371@gmail.com"
            className="flex h-11 items-center rounded-[33px] bg-ink px-6 text-[15px] text-white transition-transform hover:-translate-y-0.5"
          >
            shreyashrivastava2371@gmail.com
          </a>
          <ul className="flex flex-wrap items-center justify-center gap-2">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 items-center rounded-[33px] border border-white/70 bg-white/40 px-3.5 text-[13px] text-ink backdrop-blur-sm transition-colors hover:bg-white/75"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="flex items-center gap-2 font-editorial text-[14px] text-ink/70">
            <Sakura className="size-3.5" />
            Designed with love, caffeine and a little meow.
            <Sakura className="size-3.5" />
          </p>
          <p className="text-[12px] text-ink/50">© {new Date().getFullYear()} Shreya</p>
        </Reveal>
      </div>

      <QuoteSpinner />
    </section>
  )
}