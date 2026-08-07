import imgCanva from "@/imports/Frame37/cf7119921455338a45531b57e11d9ae68aee47db.png";
import imgClaude from "@/imports/Frame37/86abb1710ae8235f1a5af50ea1c36223ce30dc62.png";
import imgGemini from "@/imports/Frame37/d63c4d2b3f4aa6163f936e8c3c1632feb32f37bc.png";
import imgNotion from "@/imports/Frame37/db8ae21655c7793eab04588a83ee961caf2e541a.png";
import Reveal from "./Reveal";
import {
  FigmaMark,
  OpenAiMark,
  PinterestMark,
  QuoteMark,
  SectionLabel,
} from "./decor";

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shreya-shrivastava-261245256/",
  },
  { label: "Dribbble", href: "https://dribbble.com/Shreya88" },
  { label: "Behance", href: "https://www.behance.net/shreyashrivas21" },
];

function Tool({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <li
      title={name}
      className="flex size-[48px] items-center justify-center rounded-[8px] border border-dashed border-softblue p-2 transition-transform duration-300 hover:-translate-y-1 sm:size-[54px]"
    >
      <span className="size-[28px] sm:size-[32px]">{children}</span>
      <span className="sr-only">{name}</span>
    </li>
  );
}

export default function About() {
  return (
    <section className="relative mx-auto w-full max-w-[1200px] px-5 pt-10 sm:px-8">
      <SectionLabel id="about">About me</SectionLabel>

      <Reveal className="mt-6">
        <div className="rounded-[24px] bg-white px-5 py-7 shadow-[0_14px_38px_rgba(13,151,255,0.16)] sm:rounded-[32px] sm:px-9 sm:py-9">
          <QuoteMark className="h-[34px] w-[38px] sm:h-[44px] sm:w-[48px]" />

          <div className="mt-4 flex  flex-col gap-3.5 text-[clamp(0.9375rem,1.25vw,1.0625rem)] leading-relaxed text-ink/90">
            <p>
              My design journey started with a random fascination for logos back
              in 2019. I even made a few logos using a logo generator app, lol.
              In 2022, I joined college as a Computer Science student,
              thinking I’d mostly be spending my time coding. Somewhere along
              the way, I discovered Canva and eventually found Figma, a tool I
              now spend most of my time on.
            </p>
            <p>
              Since then, I’ve been designing, experimenting, and constantly learning. Being a CS student has also made me curious about the space between design and technology, how something can not only look good but also work well and feel right to the people using it.
            </p>
          </div>

          <h2 className="mt-7 text-[15px] font-medium tracking-wide text-ink/70 uppercase">
            My Tools
          </h2>
          <ul className="mt-3.5 flex flex-wrap items-center gap-3 sm:gap-4">
            <Tool name="Figma">
              <FigmaMark />
            </Tool>
            <Tool name="Canva">
              <img alt="" src={imgCanva} className="size-full object-contain" />
            </Tool>
            <Tool name="ChatGPT">
              <OpenAiMark />
            </Tool>
            <Tool name="Claude">
              <img
                alt=""
                src={imgClaude}
                className="size-full object-contain"
              />
            </Tool>
            <Tool name="Google Gemini">
              <img
                alt=""
                src={imgGemini}
                className="size-full object-contain"
              />
            </Tool>
            <Tool name="Pinterest">
              <PinterestMark />
            </Tool>
            <Tool name="Notion">
              <img
                alt=""
                src={imgNotion}
                className="size-full object-contain"
              />
            </Tool>
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-2 border-t border-dashed border-softblue pt-5">
            <span className="mr-1 font-editorial text-[14px] text-ink/60">
              Find me here
            </span>
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 items-center rounded-[33px] border border-ink/15 px-3.5 text-[13px] text-ink transition-colors hover:bg-ink hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
