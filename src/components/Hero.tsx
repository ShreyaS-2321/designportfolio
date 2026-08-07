import heroProfile from '@/heroprofile.svg'
import { Cloud, Sakura} from './decor'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[50svh] flex-col justify-center overflow-hidden pt-28 pb-8 sm:pt-32"
    >
      <Cloud 
        src="left" 
        className="-left-20 -top-10 w-[240px] opacity-90 sm:-left-24 sm:-top-20 sm:w-[460px]" 
      />
      <Cloud 
        src="right" 
        className="-right-16 top-16 w-[200px] opacity-90 sm:-right-12 sm:top-4 sm:w-[420px]" 
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="relative mx-auto w-[min(360px,72vw)] sm:w-[min(400px,54vw)]">
          <img
            src={heroProfile}
            alt="Shreya smiling with a cup of coffee, framed inside a retro wooden television"
            className="block w-full select-none"
            width={300}
            height={300}
          />
        </div>

        <div className="relative z-10 mx-auto -mt-6 flex w-full max-w-[420px] flex-col items-center text-center sm:-mt-10">
          <h1 className="font-serif text-[clamp(1.875rem,5.5vw,2.5rem)] leading-tight text-ink">
            Hi, I am <em className="italic">Shreya</em>
          </h1>
          <p className="text-[clamp(1rem,2.6vw,1.25rem)] font-medium text-ink">UI/UX Designer</p>
          <Sakura className="mt-2 size-8" />
        </div>
      </div>
    </section>
  )
}