import Reveal from './Reveal'
import book1 from '@/book1.jpeg'
import book2 from '@/book2.jpeg'
import book3 from '@/book3.jpg'
import drawing1 from '@/d1.jpeg'
import drawing2 from '@/d2.jpeg'
import drawing3 from '@/d3.jpeg'
import drawing4 from '@/d4.jpeg'
import drawing5 from '@/d5.jpeg'  
import drawing6 from '@/d6.jpeg'
import { Cloud, Sakura, SectionLabel } from './decor'

const BOOKS = [
  {
    title: 'The Palace of Illusions',
    label: 'Reading now',
    note: 'If you like mythology, you will love this! A retelling of the Mahabharata from Draupadi’s perspective.',
    image: book1,
    alt: 'An open book resting on a bed',
    tilt: '-rotate-2',
  },
  {
    title: 'The Alchemist',
    label: 'Completed recently',
    note: 'The story is about believing in your dreams, while reading one might agree or disagree with the author\'s perspective, but the storytelling is 10 on 10.',
    image: book2,
    alt: 'A small stack of books on a white table',
    tilt: 'rotate-2',
  },
  {
    title: 'Ikigai',
    label: 'Next on the pile',
    note: 'Sitting on my desk, quietly judging me for not starting it yet.',
    image: book3,        
    alt: 'A book lying on a soft textile',
    tilt: '-rotate-1',
  },
]

const DRAWINGS = [
  {
    caption: 'I love sweet things!',
    aside: 'Used alcohol markers',
    image: drawing1,
    alt: 'A soft pencil sketch in a sketchbook',
    tilt: 'rotate-1',
  },
  {
    caption: '❤️🖤',
    aside: 'Mandala Art',
    image: drawing2,
    alt: 'A pencil drawing of figures',
    tilt: '-rotate-2',
  },
  {
    caption: 'My first mandala drawing, I made this during covid lockdown.',
    aside: 'Mandala Art',
    image: drawing3,
    alt: 'A pencil drawing on white paper',
    tilt: 'rotate-2',
  },
  {
    caption: 'Cute doodles :)',
    aside: 'Used alcohol markers',
    image: drawing4,
    alt: 'A perspective drawing',
    tilt: '-rotate-1',
  },
  {
    caption: 'Drew this during durga puja festival.',
    aside: 'Mandala Art',
    image: drawing5,
    alt: 'A pen sketch of faces',
    tilt: 'rotate-3',
  },
  {
    caption: 'Made this during Janmasthami festival 🦚',
    aside: 'Mandala Art',
    image: drawing6,
    alt: 'A charcoal sketch',
    tilt: '-rotate-2',
  },
]

export default function DeskSection() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20">
      <Cloud src="left" className="top-10 -left-36 w-[300px] opacity-70" />
      <Sakura className="absolute right-10 top-24 size-6 opacity-80 motion-safe:animate-bob" />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <SectionLabel>Beyond the pixels</SectionLabel>

        <Reveal className="mt-5">
          <p className="max-w-[560px] font-serif text-[clamp(1.5rem,3.4vw,2rem)] leading-[1.2] text-ink">
            A little corner for the things I like when I’m <em className="italic">not</em> designing.
          </p>
        </Reveal>

        <h3 className="mt-10 font-editorial text-[15px] uppercase tracking-[0.16em] text-white/90">
          Book reading
        </h3>
        <ul className="mt-5 flex snap-x gap-5 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3">
          {BOOKS.map((book, index) => (
            <Reveal
              as="li"
              key={book.title}
              delay={index * 80}
              className={`w-[74vw] shrink-0 snap-center sm:w-auto ${
                index === 1 ? 'sm:mt-8' : index === 2 ? 'sm:mt-4' : ''
              }`}
            >
              <article
                className={`flex h-full gap-4 rounded-[20px] border border-white/70 bg-white/75 p-4 shadow-[0_12px_32px_rgba(13,151,255,0.14)] backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1 hover:rotate-0 ${book.tilt}`}
              >
                <img
                  src={book.image}
                  alt={book.alt}
                  className="h-[112px] w-[84px] shrink-0 rounded-[10px] bg-softblue object-cover"
                />
                <div className="flex flex-col">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-ink/50">{book.label}</p>
                  <h4 className="mt-1 font-serif text-[20px] leading-[1.15] text-ink">
                    {book.title}
                  </h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink/75">{book.note}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <h3 className="mt-14 font-editorial text-[15px] uppercase tracking-[0.16em] text-white/90 sm:ml-[8%]">
          My little drawings
        </h3>
        

        <ul className="mt-5 flex flex-col gap-6 sm:ml-[8%] sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8">
          {DRAWINGS.map((drawing, index) => (
            <Reveal
              as="li"
              key={index}
              delay={index * 90}
              className={index === 1 ? 'sm:mt-6' : index === 2 ? 'lg:mt-4' : ''}
            >
              <figure
                className={`flex h-full flex-col justify-between rounded-[20px] border border-white/70 bg-white/80 p-3 shadow-[0_12px_32px_rgba(13,151,255,0.14)] backdrop-blur-sm transition-transform duration-500 hover:rotate-0 ${drawing.tilt}`}
              >
                <img
                  src={drawing.image}
                  alt={drawing.alt}
                  className="aspect-[4/3] w-full rounded-[12px] bg-softblue object-contain"
                />
                <figcaption className="mt-3 flex items-start justify-between gap-2 px-1">
                  <p className="text-[12px] leading-tight text-ink/80">{drawing.caption}</p>
                  <span className="shrink-0 font-serif text-[13px] italic text-ink/50 whitespace-nowrap pt-0.5">
                    {drawing.aside}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}