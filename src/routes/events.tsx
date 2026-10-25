import { loadEvents } from "../events";
import { createFileRoute, Link } from "@tanstack/react-router";
import { RecentEvents, UpcomingEvents } from "../components/Events";
export const Route = createFileRoute("/events")({
  loader: () => loadEvents(),
  head: () => ({ meta: [{ title: "Events - AI Club @ OSU" }] }),
  component: EventsPage,
});
function EventsPage() {
  const data = Route.useLoaderData();
  return (
    <>
      <header className="bg-charcoal text-paper py-14 md:py-16">
        <div className="max-w-site mx-auto px-7">
          <div className="flex items-center gap-2.5 font-mono text-[.78rem] tracking-[.14em] uppercase text-brick mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-brick to-brickdk animate-pulse"></span>{" "}
            EVENTS
          </div>
          <h1 className="font-display font-bold text-[2rem] md:text-[2.9rem] leading-[1.05] mb-4">
            What we've done, and what's next.
          </h1>
          <p className="text-sand max-w-[56ch]">
            One workshop every week, one big event every month - plus the occasional hackathon.
          </p>
        </div>
      </header>

      <section id="recent" className="py-16 md:py-20">
        <div className="max-w-site mx-auto px-7">
          <div className="max-w-[60ch] mb-9">
            <div className="font-mono text-[.78rem] tracking-[.14em] uppercase text-brick mb-3">
              RECENT STORIES
            </div>
            <h2 className="font-display font-bold text-[1.7rem] md:text-[2rem]">
              What we have been up to
            </h2>
          </div>

          <RecentEvents data={data} />
        </div>
      </section>

      <hr className="border-paper2" />

      <section id="upcoming" className="py-16 md:py-20">
        <div className="max-w-site mx-auto px-7">
          <div className="max-w-[60ch] mb-9">
            <div className="font-mono text-[.78rem] tracking-[.14em] uppercase text-brick mb-3">
              UPCOMING EVENTS
            </div>
            <h2 className="font-display font-bold text-[1.7rem] md:text-[2rem]">What's next</h2>
          </div>

          <UpcomingEvents data={data} />
        </div>
      </section>

      <section id="join" className="bg-charcoal text-paper text-center py-16 md:py-20">
        <div className="max-w-site mx-auto px-7">
          <h2 className="font-display font-bold text-[1.9rem] md:text-[2.4rem] mb-3">
            Ready to join?
          </h2>
          <p className="text-sand max-w-[46ch] mx-auto mb-7">
            Come to a workshop before you commit - that's the best way to see if it's for you.
          </p>
          <Link
            to="/about/"
            hash="join"
            className="inline-flex items-center gap-2 font-mono text-[.8rem] tracking-wide uppercase px-5 py-2.5 rounded-sm bg-linear-to-r from-brick to-brickdk text-paper no-underline hover:from-brickdk hover:to-brick hover:-translate-y-0.5 transition"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </>
  );
}
