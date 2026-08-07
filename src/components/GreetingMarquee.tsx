import { Flower } from './decor'

const GREETINGS = [
  'Hola',
  'Bonjour',
  'Ciao',
  'नमस्ते',
  'こんにちは',
  '안녕하세요',
  '你好',
  'Hallo',
  'Привет',
  'Asalaam alaikum',
  'Hello',
]

function Pill({ word, serif }: { word: string; serif?: boolean }) {
  return (
    <span
      className={`flex h-[24px] shrink-0 items-center justify-center rounded-[33px] bg-ink px-2.5 text-[11px] whitespace-nowrap text-white sm:h-[30px] sm:px-3.5 sm:text-[14px] ${
        serif ? 'font-editorial' : 'font-medium'
      }`}
    >
      {word}
    </span>
  )
}

export default function GreetingMarquee() {
  const run = (
    <div className="flex shrink-0 items-center gap-2 pr-2 sm:gap-2.5 sm:pr-2.5">
      {GREETINGS.map((word, index) => (
        <span key={`${word}-${index}`} className="flex items-center gap-2 sm:gap-2.5">
          <Pill word={word} serif={index === 0} />
          <Flower
            size={index % 2 === 0 ? 32 : 40}
            tone={index % 2 === 0 ? 'light' : 'dark'}
            render={11}
          />
        </span>
      ))}
    </div>
  )

  return (
    <section aria-label="Greetings in many languages" className="relative py-2">
      <p className="sr-only">{GREETINGS.join(', ')}.</p>
      <div className="flex w-full overflow-hidden opacity-90">
        <div aria-hidden className="flex w-max motion-safe:animate-marquee-left">
          {run}
          {run}
        </div>
      </div>
    </section>
  )
}
