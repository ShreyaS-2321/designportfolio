import Reveal from './Reveal'
import { ExternalArrowIcon, Flower, Sakura, SectionLabel } from './decor'

const EXPERIMENTS = [
  {
    title: 'Memochi',
    blurb:
      'A playful digital sticky-note canvas for collecting thoughts, ideas and little moments.',
    tags: ['Figma', 'Supabase'],
    gradient: 'linear-gradient(140deg, #ffffff 0%, #eef4ff 55%, #e6ecff 100%)',
    badge: 'flower' as const,
  },
  {
    title: 'MeowAtlas',
    blurb:
      'A playful cat-inspired exploration project built around discovering and collecting places, stories, or ideas.',
    tags: ['Design', 'In progress'],
    gradient: 'linear-gradient(140deg, #ffffff 0%, #f3f0ff 55%, #ece7ff 100%)',
    badge: 'sakura' as const,
  },
]

export default function SideProjects() {
  return (
    <section className="relative mx-auto w-full max-w-[1200px] px-5 pt-14 sm:px-8 sm:pt-16">
      <SectionLabel>Little experiments</SectionLabel>

      <Reveal className="mt-4">
        <p className="max-w-[420px] text-[15px] leading-relaxed text-ink/85">
          Small things I make when I want to try something new.
        </p>
      </Reveal>

      <ul className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:max-w-[860px]">
        {EXPERIMENTS.map((item, index) => (
          <Reveal as="li" key={item.title} delay={index * 80}>
            <article
              className="group h-full rounded-[18px] border border-white/70 p-5 shadow-[0_8px_24px_rgba(13,151,255,0.12)] transition-transform duration-500 hover:-translate-y-1"
              style={{ backgroundImage: item.gradient }}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex size-8 items-center justify-center rounded-[10px] bg-white/80 shadow-[0_2px_8px_rgba(13,151,255,0.14)]">
                  {item.badge === 'flower' ? (
                    <Flower size={32} tone="dark" render={16} />
                  ) : (
                    <Sakura className="size-4.5" />
                  )}
                </span>
                <ExternalArrowIcon className="size-4 text-ink/35 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
              </div>

              <h3 className="mt-4 font-serif text-[20px] leading-[1.15] text-ink">{item.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-ink/75">{item.blurb}</p>

              <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] tracking-[0.12em] text-ink/50 uppercase">
                {item.tags.map((tag, tagIndex) => (
                  <span key={tag}>
                    {tag}
                    {tagIndex < item.tags.length - 1 && <span className="ml-2">•</span>}
                  </span>
                ))}
              </p>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
