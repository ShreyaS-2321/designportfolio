import { useState } from 'react'
import imgHalo from '@/project1.png'
import imgGpay from '@/project2.svg'
import imgMotion1 from '@/motion1.png'
import imgMotion2 from '@/motion2.png'
import Reveal from './Reveal'
import { ExternalArrowIcon, SectionLabel } from './decor'

const HALO_DRIBBBLE_URL = 'https://dribbble.com/shots/27467301-Halo-Your-Social-Orbit-App-Design?utm_source=Clipboard_Shot&utm_campaign=Shreya88&utm_content=Halo%20%7C%20Your%20Social%20Orbit%20(App%20Design)&utm_medium=Social_Share'
const GPAY_DRIBBBLE_URL = 'https://dribbble.com/shots/27399210-CASE-STUDY-GOOGLE-PAY?utm_source=Clipboard_Shot&utm_campaign=Shreya88&utm_content=CASE%20STUDY%20%7C%20GOOGLE%20PAY&utm_medium=Social_Share'

const CATEGORIES = ['UI/UX', 'Figma Motion', 'UX Teardown'] as const
type Category = typeof CATEGORIES[number]

type Project = {
  id: string
  title: string
  blurb: string
  year: string
  tools: string
  image: string
  alt: string
  tint: string
  url: string
  category: Category
}

const PROJECTS: Project[] = [
  // --- UI/UX PROJECTS ---
  {
    id: 'halo',
    title: 'Halo',
    blurb: 'Designed a privacy-first social platform that helps users connect with nearby people based on shared interests and social mood',
    year: '2026',
    tools: 'Figma',
    image: imgHalo,
    alt: 'Halo app screens showing an interest picker and a nearby-people match card',
    tint: '#f4efff',
    url: HALO_DRIBBBLE_URL,
    category: 'UI/UX',
  },
  {
    id: 'gpay',
    title: 'Google Pay UX Case Study',
    blurb: 'A UX case study on adding expense categorization to Google Pay\'s payment flow to help users understand spending patterns',
    year: '2026',
    tools: 'Figma',
    image: imgGpay,
    alt: 'A hand holding a phone with a payment screen open',
    tint: '#eaf3ff',
    url: GPAY_DRIBBBLE_URL,
    category: 'UI/UX',
  },

  // --- FIGMA MOTION PROJECTS ---
  {
    id: 'motion-1',
    title: 'Sunflower Animation - Figma Motion',
    blurb: 'My first animation of a blooming sunflower with Figma Motion :)',
    year: '2026',
    tools: 'Figma',
    image: imgMotion1,
    alt: 'Figma motion animation of a sunflower blooming',
    tint: '#fff4ea',
    url: 'https://www.figma.com/community/file/1668810584094593349/sunflower-animation-figma-motion',
    category: 'Figma Motion',
  },
  {
    id: 'motion-2',
    title: 'Doraemon Vector Illustration & Animation',
    blurb: 'Created these Doraemon vector illustration completely from scratch in Figma!',
    year: '2026',
    tools: 'Figma',
    image: imgMotion2,
    alt: 'Doraemon vector illustrations with meme animation',
    tint: '#f0fdf4', 
    url: 'https://www.figma.com/community/file/1669415833724828642/doraemon-vector-illustration-grinning-droopy-animation',
    category: 'Figma Motion',
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      id={`project-${project.id}`}
      className="group relative scroll-mt-32"
    >
      <div className="relative z-10 w-[88%] rounded-[20px] border border-white/65 bg-white/72 p-5 shadow-[0_10px_30px_rgba(13,151,255,0.18)] backdrop-blur-[16px] transition-transform duration-500 transform-gpu group-hover:-translate-y-[3px] sm:w-[46%] sm:p-6">
        <h3 className="font-serif text-[clamp(1.25rem,2.2vw,1.625rem)] leading-[1.15] text-ink">
          {project.title}
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-ink/80">{project.blurb}</p>

        <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
          <div>
            <dt className="text-[11px] uppercase tracking-[0.14em] text-ink/50">Year</dt>
            <dd className="mt-0.5 text-[14px] font-medium text-ink">{project.year}</dd>
          </div>
          <div>
            <dt className="text-[11px] uppercase tracking-[0.14em] text-ink/50">Tools</dt>
            <dd className="mt-0.5 text-[14px] font-medium text-ink">{project.tools}</dd>
          </div>
        </dl>

        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex h-9 items-center gap-1.5 rounded-[33px] bg-ink px-4 text-[13px] text-white transition-transform duration-300 transform-gpu hover:-translate-y-0.5"
        >
          View
          <ExternalArrowIcon className="size-4" />
        </a>
      </div>

      <div
        className="-mt-9 h-[280px] overflow-hidden rounded-[22px] sm:-mt-16 sm:h-[380px]"
        style={{ backgroundColor: project.tint }}
      >
        <img
          src={project.image}
          alt={project.alt}
          className="h-full w-full object-cover transition-transform duration-700 transform-gpu group-hover:scale-[1.03]"
        />
      </div>
    </article>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('UI/UX')

  const filteredProjects = PROJECTS.filter((p) => p.category === activeCategory)

  return (
    <section className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-8">
      <SectionLabel id="projects">Work</SectionLabel>

      {/* Category Selector */}
      <div className="mt-6 flex justify-center">
        <div className="flex max-w-full gap-2 overflow-x-auto p-1 [-ms-overflow-style:none] [scrollbar-width:none]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`flex h-9 shrink-0 items-center rounded-[33px] px-5 text-[13px] whitespace-nowrap transition-colors duration-300 ${
                activeCategory === cat
                  ? 'bg-ink text-white shadow-md'
                  : 'border border-white/70 bg-white/50 text-ink hover:bg-white/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="mt-10 min-h-[400px]">
        {activeCategory === 'UX Teardown' ? (
          <Reveal>
            <div className="flex h-[380px] w-full flex-col items-center justify-center rounded-[24px] border border-dashed border-ink/20 bg-white/40 px-6 text-center shadow-sm">
              <h3 className="font-serif text-2xl text-ink">UX Teardowns</h3>
              <p className="mt-2 text-[15px] italic text-ink/60">Writing in progress. Check back soon!</p>
            </div>
          </Reveal>
        ) : (
          /* Projects Grid */
          <div key={activeCategory} className="grid gap-10 lg:grid-cols-2 lg:gap-8 animate-[fade-in_400ms_ease-out]">
            {filteredProjects.map((project, index) => (
              <Reveal key={project.id} delay={index * 90}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}