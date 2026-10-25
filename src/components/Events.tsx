import { useEventDate } from "../useEventDate";
import { useEffect, useRef, useState } from "react";
import { type ClubEvent, type EventsData, formatDate, parseDate, partitionEvents } from "../events";

function EventImage({ event }: { event: ClubEvent }) {
  return (
    <img
      src={event.image || "/assets/ai_logo.png"}
      alt={event.title}
      className={`w-full h-full ${event.image ? "object-cover object-top" : "object-contain p-10"}`}
    />
  );
}
function EventModal({ event, onClose }: { event: ClubEvent; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.current?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      aria-labelledby="event-modal-title"
      className="bg-transparent p-5 max-w-none max-h-none w-screen h-screen m-0 backdrop:bg-ink/70 open:flex items-center justify-center"
    >
      <div className="bg-charcoal text-paper rounded-lg border-2 border-brick max-w-lg w-full max-h-[88vh] overflow-y-auto relative shadow-2xl">
        <button
          onClick={onClose}
          autoFocus
          aria-label="Close"
          className="absolute top-4 right-4 text-sand hover:text-paper font-mono text-2xl leading-none z-10"
        >
          &times;
        </button>
        <div className="p-6 md:p-8">
          <div className="bg-paper rounded-lg aspect-16/10 overflow-hidden mb-6">
            <EventImage event={event} />
          </div>
          <span className="inline-block bg-sand text-ink font-mono text-[.68rem] uppercase tracking-wide px-2.5 py-1 rounded-full mb-3">
            {event.tag || "Event"}
          </span>
          <div className="font-mono text-[.75rem] text-brick mb-2">{formatDate(event.date)}</div>
          <h3 id="event-modal-title" className="font-display font-bold text-xl mb-3">
            {event.title}
          </h3>
          <p className="text-sand">{event.description || event.summary}</p>
        </div>
      </div>
    </dialog>
  );
}
export function RecentEvents({
  limit,
  data: { events, asOf },
}: {
  limit?: number;
  data: EventsData;
}) {
  const [selected, setSelected] = useState<ClubEvent | null>(null);
  const date = useEventDate(asOf);
  const past = partitionEvents(events, parseDate(date)).past.slice(0, limit);
  return (
    <>
      <div
        id="recent-grid"
        className={`grid gap-5 md:grid-cols-2 ${limit ? "" : "lg:grid-cols-3"}`}
        aria-live="polite"
      >
        {!past.length ? (
          <p className="text-charcoal font-mono text-sm">No past events yet.</p>
        ) : (
          past.map((event) => (
            <button
              key={`${event.date}-${event.title}`}
              onClick={() => setSelected(event)}
              aria-haspopup="dialog"
              className="bg-charcoal text-paper text-left rounded-lg overflow-hidden flex flex-col border-2 border-brick cursor-pointer transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 focus-visible:ring-2 focus-visible:ring-brick focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              <div className="bg-paper aspect-16/10 relative overflow-hidden w-full">
                <EventImage event={event} />
                <span className="absolute top-3 left-3 z-10 bg-sand text-ink font-mono text-[.68rem] uppercase tracking-wide px-2.5 py-1 rounded-full">
                  {event.tag || "Event"}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <span className="font-mono text-[.75rem] text-brick mb-2">
                  {formatDate(event.date)}
                </span>
                <span className="font-display font-bold text-[1.05rem] mb-2.5">{event.title}</span>
                <span className="text-sand text-[.92rem] flex-1">
                  {event.summary || event.description}
                </span>
                <span className="story-foot-rule mt-3.5 pt-3 font-mono text-[.72rem] text-sand uppercase tracking-wide">
                  Written by AI Club · Click to view details
                </span>
              </div>
            </button>
          ))
        )}
      </div>
      {selected && <EventModal event={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
export function UpcomingEvents({ data: { events, asOf } }: { data: EventsData }) {
  const date = useEventDate(asOf);
  const upcoming = partitionEvents(events, parseDate(date)).upcoming;
  return (
    <div id="upcoming-list" className="flex flex-col gap-4" aria-live="polite">
      {!upcoming.length ? (
        <p className="text-charcoal font-mono text-sm">
          No upcoming events posted yet - check our Discord for the latest.
        </p>
      ) : (
        upcoming.map((event) => (
          <div
            key={`${event.date}-${event.title}`}
            className="flex items-center gap-5 flex-wrap bg-paper2 rounded-lg px-5 py-4"
          >
            <div className="bg-linear-to-r from-brick to-brickdk text-paper font-mono font-bold rounded-md px-4 py-3 text-center min-w-[78px] leading-tight">
              <span className="block text-xl">{parseDate(event.date).getDate()}</span>
              <span className="text-[.7rem] uppercase tracking-wide">
                {parseDate(event.date).toLocaleDateString("en-US", { month: "short" })}
              </span>
            </div>
            <div className="flex-1 min-w-[200px]">
              <h3 className="font-display font-bold text-[1.05rem] mb-1">{event.title}</h3>
              <p className="text-charcoal text-[.92rem] m-0">
                {event.summary || event.description}
              </p>
            </div>
            <span className="bg-charcoal text-paper font-mono text-[.7rem] uppercase tracking-wide px-3 py-1.5 rounded-full">
              {event.tag || "Event"}
            </span>
          </div>
        ))
      )}
    </div>
  );
}
