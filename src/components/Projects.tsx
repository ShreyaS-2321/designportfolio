import imgHalo from '@/project1.png'
import imgGpay from '@/project2.svg'
import Reveal from './Reveal'
import { ExternalArrowIcon, SectionLabel } from './decor'

const HALO_DRIBBBLE_URL = 'https://dribbble.com/shots/27467301-Halo-Your-Social-Orbit-App-Design?utm_source=Clipboard_Shot&utm_campaign=Shreya88&utm_content=Halo%20%7C%20Your%20Social%20Orbit%20(App%20Design)&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Shreya88&utm_content=Halo%20%7C%20Your%20Social%20Orbit%20(App%20Design)&utm_medium=Social_Share'
const GPAY_DRIBBBLE_URL = 'https://dribbble.com/shots/27399210-CASE-STUDY-GOOGLE-PAY?utm_source=Clipboard_Shot&utm_campaign=Shreya88&utm_content=CASE%20STUDY%20%7C%20GOOGLE%20PAY&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Shreya88&utm_content=CASE%20STUDY%20%7C%20GOOGLE%20PAY&utm_medium=Social_Share'

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
}

const PROJECTS: Project[] = [
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
          View Project
          <ExternalArrowIcon className="size-4" />
        </a>
      </div>

      <div
        className="-mt-9 h-[280px] overflow-hidden rounded-[22px] sm:-mt-12 sm:h-[380px]"
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
  return (
    <section className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-8">
      <SectionLabel id="projects">Projects</SectionLabel>

      <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-8">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.id} delay={index * 90}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}