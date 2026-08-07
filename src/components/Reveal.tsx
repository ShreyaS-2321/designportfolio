import { useEffect, useRef, useState, type ReactNode } from 'react'

/** Fades and lifts its children into view once, on scroll. */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'li' | 'figure'
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true)
            observer.disconnect()
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,transform] duration-[900ms] ease-out ${
        shown ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
    >
      {children}
    </Tag>
  )
}
