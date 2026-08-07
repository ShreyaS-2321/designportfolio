import svgPaths from '@/imports/Frame37/svg-m4eejube4l'
import { imgGroup, imgGroup1, imgGroup2 } from '@/imports/Frame37/svg-m83xs'
import imgCloudLeft from '@/imports/Frame37/71c3d908f7b3572a9bf4db9e54c9f13a9f59867d.png'
import imgCloudRight from '@/imports/Frame37/b8232e346a8ee2c55f3db786fbffd8d0a14aa2fb.png'

export function Cloud({
  src = 'left',
  className = '',
  flip = false,
}: {
  src?: 'left' | 'right'
  className?: string
  flip?: boolean
}) {
  return (
    <img
      alt=""
      aria-hidden
      src={src === 'left' ? imgCloudLeft : imgCloudRight}
      className={`pointer-events-none absolute max-w-none select-none object-contain motion-safe:animate-drift ${
        flip ? '-scale-x-100' : ''
      } ${className}`}
    />
  )
}


export function Flower({
  size = 32,
  tone = 'dark',
  render,
}: {

  size?: number
  tone?: 'dark' | 'light'

  render?: number
}) {
  return (
    <div
      aria-hidden
      className="relative shrink-0 overflow-clip"
      style={{
        width: render ?? size,
        height: render ?? size,
        maskImage: `url("${size >= 40 ? imgGroup1 : imgGroup}")`,
        WebkitMaskImage: `url("${size >= 40 ? imgGroup1 : imgGroup}")`,
        maskSize: '100% 100%',
        WebkitMaskSize: '100% 100%',
        maskRepeat: 'no-repeat',
      }}
    >
      <svg className="absolute inset-0 size-full" fill="none" viewBox={size >= 40 ? '0 0 40 40' : '0 0 32 32'}>
        <path
          clipRule="evenodd"
          d={size >= 40 ? svgPaths.p1e73f700 : svgPaths.pb239800}
          fill={tone === 'dark' ? '#0E0E0E' : '#FFFFFF'}
          fillRule="evenodd"
        />
      </svg>
    </div>
  )
}


export function Sparkle({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`relative shrink-0 overflow-clip ${className || 'size-6'}`}
      style={{
        maskImage: `url("${imgGroup2}")`,
        WebkitMaskImage: `url("${imgGroup2}")`,
        maskSize: '100% 100%',
        WebkitMaskSize: '100% 100%',
        maskRepeat: 'no-repeat',
      }}
    >
      <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 24 24">
        <path d={svgPaths.pf55ae00} fill="white" />
      </svg>
    </div>
  )
}


export function SectionLabel({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <div id={id} className="flex scroll-mt-32 items-center gap-4">
      <span className="flex shrink-0 items-center gap-2">
        <Sparkle className="size-4" />
        <span className="font-editorial text-base text-white sm:text-lg">{children}</span>
      </span>
      <span aria-hidden className="h-0 flex-1 border-t border-dashed border-white/80" />
    </div>
  )
}

export function QuoteMark({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      fill="none"
      viewBox="0 0 102.292 95.226"
      preserveAspectRatio="xMidYMid meet"
    >
      <path d={svgPaths.p430d100} fill="#BBDDFF" stroke="#BBDDFF" strokeWidth="2.29175" />
    </svg>
  )
}

export function ImportIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 24 24">
      <path
        d={svgPaths.p1b96c400}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
      <path
        d="M11.88 4V14.17"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
      <path
        d={svgPaths.p2b261b00}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
    </svg>
  )
}


export function ExternalArrowIcon({ className = 'size-4' }: { className?: string }) {
  return (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 16 16">
      <path
        d="M5 11L11 5M11 5H6M11 5V10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  )
}


export function Sakura({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden className={className} viewBox="0 0 24 24" fill="none">
      {[0, 72, 144, 216, 288].map((angle) => (
        <ellipse
          key={angle}
          cx="12"
          cy="6.6"
          rx="3.5"
          ry="5"
          fill="#FFD7E4"
          stroke="#F7A8C4"
          strokeWidth="0.7"
          transform={`rotate(${angle} 12 12)`}
        />
      ))}
      <circle cx="12" cy="12" r="1.6" fill="#FBBF5B" />
    </svg>
  )
}

export function FigmaMark() {
  return (
    <svg aria-hidden className="size-full" fill="none" viewBox="0 0 48 48">
      <path d={svgPaths.p1755d680} fill="#0ACF83" />
      <path d={svgPaths.p2f168d00} fill="#A259FF" />
      <path d={svgPaths.p293b4100} fill="#F24E1E" />
      <path d={svgPaths.pa224a00} fill="#FF7262" />
      <path d={svgPaths.p2be46f80} fill="#1ABCFE" />
    </svg>
  )
}

export function OpenAiMark() {
  return (
    <svg aria-hidden className="size-full" fill="none" viewBox="0 0 48 48">
      <path d={svgPaths.pe7e0b00} fill="black" />
    </svg>
  )
}

export function PinterestMark() {
  return (
    <svg aria-hidden className="size-full" fill="none" viewBox="0 0 48 48">
      <g clipPath="url(#pinterest-clip)">
        <path d={svgPaths.p32400200} fill="#CB1F27" />
      </g>
      <defs>
        <clipPath id="pinterest-clip">
          <rect fill="white" height="48" width="48" />
        </clipPath>
      </defs>
    </svg>
  )
}
