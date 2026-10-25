import { loadEvents } from "../events";
import { createFileRoute, Link } from "@tanstack/react-router";
import { RecentEvents } from "../components/Events";
export const Route = createFileRoute("/")({
  loader: () => loadEvents(),
  head: () => ({ meta: [{ title: "AI Club @ OSU - Where AI Meets Curiosity" }] }),
  component: HomePage,
});
function HomePage() {
  const data = Route.useLoaderData();
  return (
    <>
      <header className="bg-charcoal text-paper py-20 md:py-24 overflow-hidden">
        <div className="max-w-site mx-auto px-7 grid gap-10 md:grid-cols-[1.1fr_.9fr] items-center">
          <div>
            <div className="flex items-center gap-2.5 font-mono text-[.78rem] tracking-[.14em] uppercase text-brick mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#e91e25] to-[#7c2166] animate-pulse"></span>{" "}
              STUDENT-RUN · OREGON STATE UNIVERSITY
            </div>
            <h1 className="font-display font-bold text-[2.2rem] md:text-[3.4rem] leading-[1.05] mb-5">
              Where AI meets curiosity.
            </h1>
            <p className="text-sand text-[1.08rem] max-w-[52ch] mb-7">
              A student-run community exploring machine learning, applied research, and the future
              of technology - through workshops, hackathons, and projects you actually ship. All
              levels welcome, no experience needed.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Link
                to="/events/"
                hash="upcoming"
                className="inline-flex items-center gap-2 font-mono text-[.8rem] tracking-wide uppercase px-5 py-2.5 rounded bg-gradient-to-r from-[#e91e25] to-[#7c2166] text-paper no-underline hover:from-[#7c2166] hover:to-[#e91e25] hover:-translate-y-0.5 transition"
              >
                See Upcoming Events
              </Link>
              <Link
                to="/about/"
                className="inline-flex items-center gap-2 font-mono text-[.8rem] tracking-wide uppercase px-5 py-2.5 rounded border border-paper/40 text-paper no-underline hover:border-paper hover:-translate-y-0.5 transition"
              >
                Learn About Us →
              </Link>
            </div>
          </div>
          <div
            className="bg-ink border border-paper/10 rounded-lg font-mono text-[.84rem] text-[#d9d2c2] overflow-hidden shadow-2xl shadow-black/50"
            aria-hidden="true"
          >
            <div className="flex gap-1.5 px-3.5 py-2.5 bg-white/5">
              <span className="w-2.5 h-2.5 rounded-full bg-paper/25"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-paper/25"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-paper/25"></span>
            </div>
            <div className="px-5 pt-5 pb-6 space-y-1.5">
              <div>
                <span className="text-brick">$</span> whoami
              </div>
              <div>osu_ai_club - est. 2022</div>
              <div>
                <span className="text-brick">$</span> membership --growth
              </div>
              <div>2024/25 avg: 10 → 2025/26 avg: 200</div>
              <div>
                <span className="text-brick">$</span> guest_speakers.list()
              </div>
              <div>[ "Nvidia", "NASA", "Google" ]</div>
              <div>
                <span className="text-brick">$</span>{" "}
                <span className="inline-block w-2 h-4 bg-gradient-to-r from-[#e91e25] to-[#7c2166] align-middle animate-caret"></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-paper border-b border-paper2">
        <div className="max-w-site mx-auto px-7 grid grid-cols-3 gap-5 py-10">
          <div className="text-center">
            <div className="font-mono font-bold text-3xl md:text-4xl text-brick">200</div>
            <div className="font-mono text-xs tracking-wide uppercase text-charcoal">
              Avg. Members
            </div>
          </div>
          <div className="text-center">
            <div className="font-mono font-bold text-3xl md:text-4xl text-brick">20+</div>
            <div className="font-mono text-xs tracking-wide uppercase text-charcoal">Workshops</div>
          </div>
          <div className="text-center">
            <div className="font-mono font-bold text-3xl md:text-4xl text-brick">10+</div>
            <div className="font-mono text-xs tracking-wide uppercase text-charcoal">
              AI Projects
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-20">
        <div className="max-w-site mx-auto px-7 grid gap-9 md:grid-cols-2 items-start">
          <div>
            <div className="font-mono text-[.78rem] tracking-[.14em] uppercase text-brick mb-4">
              ABOUT US
            </div>
            <h2 className="font-display font-bold text-[1.9rem] md:text-[2.1rem] mb-4">
              Built by members, for members.
            </h2>
            <p className="text-charcoal mb-4">
              We're a student-run club dedicated to exploring artificial intelligence - from
              beginner workshops to real research. Everyone is welcome, no experience needed.
            </p>
            <p className="text-charcoal mb-6">
              We've grown from an average of 10 members to 200 in a single year. We learn by doing -
              through project cohorts, workshops, hackathons, and guest talks from NVIDIA, Google,
              and NASA.
            </p>
            <Link
              to="/about/"
              className="inline-flex items-center gap-2 font-mono text-[.8rem] tracking-wide uppercase px-5 py-2.5 rounded border border-ink/30 text-ink no-underline hover:border-ink transition"
            >
              Read our full story →
            </Link>
          </div>
          <div className="bg-gradient-to-r from-[#e91e25] to-[#7c2166] rounded-lg p-8 min-h-[280px] flex items-center justify-center">
            <svg
              viewBox="0 0 320 260"
              fill="none"
              className="w-full max-w-[340px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="160" cy="130" r="10" fill="#f3ece1" />
              <g stroke="#f3ece1" strokeWidth="1.4" opacity="0.85">
                <circle cx="160" cy="130" r="46" strokeDasharray="4 6" />
                <circle cx="160" cy="130" r="86" strokeDasharray="2 8" />
                <circle cx="160" cy="130" r="120" />
              </g>
              <circle cx="206" cy="130" r="5" fill="#f3ece1" />
              <circle cx="160" cy="216" r="5" fill="#f3ece1" />
              <circle cx="80" cy="70" r="5" fill="#f3ece1" />
              <circle cx="260" cy="60" r="5" fill="#f3ece1" />
              <line x1="160" y1="130" x2="206" y2="130" stroke="#f3ece1" strokeWidth="1.4" />
              <line x1="160" y1="130" x2="160" y2="216" stroke="#f3ece1" strokeWidth="1.4" />
              <line x1="160" y1="130" x2="80" y2="70" stroke="#f3ece1" strokeWidth="1.4" />
              <line x1="160" y1="130" x2="260" y2="60" stroke="#f3ece1" strokeWidth="1.4" />
            </svg>
          </div>
        </div>
      </section>

      <hr className="border-paper2" />

      <section className="py-16 md:py-20">
        <div className="max-w-site mx-auto px-7">
          <div className="max-w-[60ch] mb-9">
            <div className="font-mono text-[.78rem] tracking-[.14em] uppercase text-brick mb-3">
              RECENT STORIES
            </div>
            <h2 className="font-display font-bold text-[1.7rem] md:text-[2rem]">
              What we've been up to
            </h2>
          </div>

          <RecentEvents data={data} limit={2} />
        </div>
      </section>

      <section id="join" className="bg-charcoal text-paper text-center py-16 md:py-20">
        <div className="max-w-site mx-auto px-7">
          <h2 className="font-display font-bold text-[1.9rem] md:text-[2.4rem] mb-3">
            Ready to join?
          </h2>
          <p className="text-sand max-w-[46ch] mx-auto mb-7">
            New members are welcome year-round - bring curiosity, we'll bring the rest.
          </p>
          <Link
            to="/about/"
            hash="join"
            className="inline-flex items-center gap-2 font-mono text-[.8rem] tracking-wide uppercase px-5 py-2.5 rounded bg-gradient-to-r from-[#e91e25] to-[#7c2166] text-paper no-underline hover:from-[#7c2166] hover:to-[#e91e25] hover:-translate-y-0.5 transition"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </>
  );
}
