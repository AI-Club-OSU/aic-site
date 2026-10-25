import content from "./content/events.json";
export interface ClubEvent {
  title: string;
  date: string;
  tag?: string;
  summary?: string;
  description?: string;
  image?: string;
}
export function parseDate(value: string) {
  const [year, month, day] = value.slice(0, 10).split("-").map(Number);
  return new Date(year, month - 1, day);
}
export function formatDate(value: string) {
  return parseDate(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
export function partitionEvents(events: ClubEvent[], now = new Date()) {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const valid = events.filter(
    (event) => event?.title && event.date && Number.isFinite(+parseDate(event.date)),
  );
  return {
    past: valid
      .filter((event) => parseDate(event.date) < today)
      .sort((a, b) => +parseDate(b.date) - +parseDate(a.date)),
    upcoming: valid
      .filter((event) => parseDate(event.date) >= today)
      .sort((a, b) => +parseDate(a.date) - +parseDate(b.date)),
  };
}

export interface EventsData {
  events: ClubEvent[];
  asOf: string;
}
export function loadEvents(): EventsData {
  for (const event of content.events) {
    if (!event.title || !event.date || !Number.isFinite(+parseDate(event.date))) {
      throw new Error("Every event must have a title and a valid date");
    }
  }
  return { events: content.events, asOf: import.meta.env.BUILD_DATE };
}
