import Reveal from './Reveal'
import { Cloud, Sakura } from './decor'

const LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shreya-shrivastava-261245256/' },
    { label: 'Dribbble', href: 'https://dribbble.com/Shreya88' },
  { label: 'Behance', href: 'https://www.behance.net/shreyashrivas21' },
]

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-28 overflow-hidden pt-12 pb-16">
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
    </section>
  )
}
