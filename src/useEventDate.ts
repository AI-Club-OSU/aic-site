import { useSyncExternalStore } from "react";

function localDate() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

function subscribe(onChange: () => void) {
  let timer: ReturnType<typeof setTimeout>;
  function schedule() {
    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    timer = setTimeout(() => {
      onChange();
      schedule();
    }, +midnight - +now); // Until the next local midnight.
  }
  function refresh() {
    clearTimeout(timer);
    onChange();
    schedule();
  }
  schedule();
  window.addEventListener("focus", refresh);
  return () => {
    clearTimeout(timer);
    window.removeEventListener("focus", refresh);
  };
}

// Hydrate against the build snapshot first, then use the visitor's local date.
export function useEventDate(buildDate: string) {
  return useSyncExternalStore(subscribe, localDate, () => buildDate);
}
