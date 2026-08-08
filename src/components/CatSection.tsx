import imgCat from '@/imports/Frame37/dcafd68410feef7203c4d4cea9b5364c3999eb05.png'
import Reveal from './Reveal'
import { Cloud} from './decor'

export default function CatSection() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20">
      <Cloud src="right" className="-top-10 -right-40 w-[320px] opacity-80 sm:w-[400px]" />
      <Cloud src="left" flip className="bottom-0 -left-40 w-[300px] opacity-70" />

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <Reveal className="relative md:w-[48%]">
          {/* decorative annotation: sits above the phrase and sweeps toward it, never over the letters */}
          <p className="font-serif text-[clamp(1.75rem,4.5vw,2.5rem)] leading-[1.15] text-ink">
            My <span className="italic">meow</span> personality
          </p>
          <p className="mt-4 max-w-[650px] text-[clamp(0.9375rem,1.25vw,1.0625rem)] leading-relaxed text-ink/80">
            I’ve a cat-like personality. I meow in the middle of conversations, and somehow find a way to bring cats into everything. I’ve loved shrimp since I was little, and I used to sneak into the kitchen and eat things from the fridge while everyone was asleep. So, my dad has always said that I’m very cat-like.
          </p>
        </Reveal>

        <Reveal delay={120} className="md:w-[46%]">
          
          <div className="relative mx-auto aspect-[390/420] w-[min(260px,62vw)] overflow-hidden motion-safe:animate-bob">
            <img
              src={imgCat}
              alt="A grey and white kitten wearing a pink bow, holding a lotus-root drink"
              className="absolute left-[-38.5%] top-[-95.2%] w-[175.6%] max-w-none mix-blend-multiply select-none"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
