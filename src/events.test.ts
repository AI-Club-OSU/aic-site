import { describe, expect, it } from "vite-plus/test";
import { parseDate, partitionEvents } from "./events";

describe("event dates", () => {
  it("parses CMS dates in local time, including date values with timestamps", () => {
    const date = parseDate("2026-10-07T00:00:00Z");
    expect([date.getFullYear(), date.getMonth(), date.getDate(), date.getHours()]).toEqual([
      2026, 9, 7, 0,
    ]);
  });
  it("keeps today upcoming and sorts both lists chronologically", () => {
    const events = [
      { title: "Later", date: "2026-11-01" },
      { title: "Older", date: "2026-10-01" },
      { title: "Today", date: "2026-10-25" },
      { title: "Recent", date: "2026-10-24" },
      { title: "Invalid", date: "invalid" },
    ];
    const result = partitionEvents(events, new Date(2026, 9, 25, 18));
    expect(result.past.map((event) => event.title)).toEqual(["Recent", "Older"]);
    expect(result.upcoming.map((event) => event.title)).toEqual(["Today", "Later"]);
    expect(events[0].title).toBe("Later");
  });
});
