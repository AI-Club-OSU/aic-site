import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About - AI Club @ OSU" }] }),
  component: AboutPage,
});
function AboutPage() {
  return (
    <>
      <header className="bg-charcoal text-paper py-14 md:py-16">
        <div className="max-w-site mx-auto px-7">
          <div className="flex items-center gap-2.5 font-mono text-[.78rem] tracking-[.14em] uppercase text-brick mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#e91e25] to-[#7c2166] animate-pulse"></span>{" "}
            ABOUT AI CLUB
          </div>
          <h1 className="font-display font-bold text-[2rem] md:text-[2.9rem] leading-[1.05] mb-4">
            Building the future of AI at Oregon State.
          </h1>
          <p className="text-sand max-w-[60ch]">
            Hands-on projects, technical workshops, mentorship, and industry networking - for
            beginners exploring AI for the first time and experienced developers building advanced
            systems.
          </p>
        </div>
      </header>

      <section className="py-16 md:py-20">
        <div className="max-w-site mx-auto px-7 grid gap-9 md:grid-cols-2 items-start">
          <div>
            <div className="font-mono text-[.78rem] tracking-[.14em] uppercase text-brick mb-4">
              WHO WE ARE
            </div>
            <h2 className="font-display font-bold text-[1.9rem] md:text-[2.1rem] mb-4">
              Learn, collaborate, and create.
            </h2>
            <p className="text-charcoal mb-4">
              The Oregon State University Artificial Intelligence Club brings together students
              passionate about artificial intelligence and machine learning through hands-on
              projects, technical workshops, mentorship, and industry networking.
            </p>
            <p className="text-charcoal mb-4">
              We connect students with industry experts and researchers, support collaborative
              project teams, and showcase student-built AI applications. Through guest speakers from
              organizations including NVIDIA, Google, and NASA, members explore real-world
              applications of AI and learn from professionals working at the forefront of the field.
            </p>
            <p className="text-charcoal">
              Our goal is to make AI accessible, practical, and impactful while strengthening OSU's
              growing AI ecosystem through student-led innovation and industry collaboration.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden aspect-[4/3] bg-paper2">
            <img
              src="/assets/about_pic.png"
              alt="AI Club members at a workshop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <hr className="border-paper2" />

      <section className="py-16 md:py-20">
        <div className="max-w-site mx-auto px-7">
          <div className="max-w-[60ch] mb-9">
            <div className="font-mono text-[.78rem] tracking-[.14em] uppercase text-brick mb-3">
              WHAT WE DO
            </div>
            <h2 className="font-display font-bold text-[1.7rem] md:text-[2rem]">
              Four ways to get involved
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-paper2 rounded-lg p-6">
              <div className="font-mono text-brick text-[.8rem] tracking-wide">01 · BUILD</div>
              <h3 className="font-display font-bold text-[1.1rem] mt-2.5 mb-2">
                Hands-On Projects
              </h3>
              <p className="text-charcoal text-[.92rem]">
                Collaborate in structured project cohorts to develop real AI and machine learning
                applications, with opportunities to present your work at our end-of-term showcase.
              </p>
            </div>
            <div className="bg-paper2 rounded-lg p-6">
              <div className="font-mono text-brick text-[.8rem] tracking-wide">02 · LEARN</div>
              <h3 className="font-display font-bold text-[1.1rem] mt-2.5 mb-2">
                Technical Workshops
              </h3>
              <p className="text-charcoal text-[.92rem]">
                Build practical skills through interactive workshops, beginner-friendly tutorials,
                and team-based technical sessions covering AI, machine learning, and related
                technologies.
              </p>
            </div>
            <div className="bg-paper2 rounded-lg p-6">
              <div className="font-mono text-brick text-[.8rem] tracking-wide">03 · CONNECT</div>
              <h3 className="font-display font-bold text-[1.1rem] mt-2.5 mb-2">
                Industry Connections
              </h3>
              <p className="text-charcoal text-[.92rem]">
                Learn from guest speakers and researchers through presentations, discussions, and
                Q&amp;A sessions featuring professionals from organizations such as NVIDIA, Google,
                and NASA.
              </p>
            </div>
            <div className="bg-paper2 rounded-lg p-6">
              <div className="font-mono text-brick text-[.8rem] tracking-wide">04 · SHIP</div>
              <h3 className="font-display font-bold text-[1.1rem] mt-2.5 mb-2">
                Hackathons &amp; Community Events
              </h3>
              <p className="text-charcoal text-[.92rem]">
                Turn ideas into working prototypes, collaborate across disciplines, and solve
                real-world problems through hackathons and larger community events.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-paper2" />

      <section className="py-16 md:py-20">
        <div className="max-w-site mx-auto px-7">
          <div className="max-w-[60ch] mb-10">
            <div className="font-mono text-[.78rem] tracking-[.14em] uppercase text-brick mb-3">
              OUR GROWTH
            </div>
            <h2 className="font-display font-bold text-[1.7rem] md:text-[2rem] mb-2">
              From 10 members to 200
            </h2>
            <p className="text-charcoal">
              AI Club has evolved into a more accessible, project-driven community focused on
              practical experience, collaboration, and innovation.
            </p>
          </div>
          <div className="grid gap-5 grid-cols-2 lg:grid-cols-3">
            <div className="bg-paper2 rounded-lg p-6">
              <div className="font-mono font-bold text-3xl md:text-4xl text-brick mb-2">200</div>
              <p className="text-charcoal text-[.92rem]">
                Average members in 2025–26, up from 10 in 2024–25.
              </p>
            </div>
            <div className="bg-paper2 rounded-lg p-6">
              <div className="font-mono font-bold text-3xl md:text-4xl text-brick mb-2">20+</div>
              <p className="text-charcoal text-[.92rem]">
                Technical workshops delivered to build practical AI skills.
              </p>
            </div>
            <div className="bg-paper2 rounded-lg p-6">
              <div className="font-mono font-bold text-3xl md:text-4xl text-brick mb-2">5</div>
              <p className="text-charcoal text-[.92rem]">
                Guest speaker events with professionals from NVIDIA, Google, NASA, and more.
              </p>
            </div>
            <div className="bg-paper2 rounded-lg p-6">
              <div className="font-mono font-bold text-3xl md:text-4xl text-brick mb-2">10+</div>
              <p className="text-charcoal text-[.92rem]">
                AI projects developed through collaborative, team-based learning.
              </p>
            </div>
            <div className="bg-paper2 rounded-lg p-6">
              <div className="font-mono font-bold text-3xl md:text-4xl text-brick mb-2">88</div>
              <p className="text-charcoal text-[.92rem]">
                Participants in our first AI &amp; Data Science Hackathon with ACM-W.
              </p>
            </div>
            <div className="bg-paper2 rounded-lg p-6">
              <div className="font-mono font-bold text-3xl md:text-4xl text-brick mb-2">$700+</div>
              <p className="text-charcoal text-[.92rem]">
                In prizes for 60 attendees at our AI for Good Hackathon.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-paper2" />

      <section className="py-16 md:py-20">
        <div className="max-w-site mx-auto px-7 max-w-[760px]">
          <div className="font-mono text-[.78rem] tracking-[.14em] uppercase text-brick mb-3">
            LOOKING AHEAD
          </div>
          <h2 className="font-display font-bold text-[1.7rem] md:text-[2rem] mb-4">
            Where ideas become real-world AI solutions
          </h2>
          <p className="text-charcoal">
            We're continuing to expand our partnerships, grow our project-based learning
            opportunities, and explore larger initiatives in areas such as drone autonomy and
            computer vision. By bringing students together across disciplines and connecting them
            with industry and research, we aim to create an environment where ideas become
            real-world AI solutions.
          </p>
        </div>
      </section>

      <section id="join" className="bg-charcoal text-paper text-center py-16 md:py-20">
        <div className="max-w-site mx-auto px-7">
          <h2 className="font-display font-bold text-[1.9rem] md:text-[2.4rem] mb-3">
            There's a place for you here.
          </h2>
          <p className="text-sand max-w-[52ch] mx-auto mb-7">
            Whether you're curious about AI, looking to build your first project, or ready to
            explore advanced applications - come join us.
          </p>
          <a
            href="mailto:hello@aiclub.osu.edu?subject=Joining%20AI%20Club"
            className="inline-flex items-center gap-2 font-mono text-[.8rem] tracking-wide uppercase px-5 py-2.5 rounded bg-gradient-to-r from-[#e91e25] to-[#7c2166] text-paper no-underline hover:from-[#7c2166] hover:to-[#e91e25] hover:-translate-y-0.5 transition"
          >
            Apply Now
          </a>
        </div>
      </section>
    </>
  );
}
