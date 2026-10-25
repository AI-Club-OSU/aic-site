export function Footer() {
  return (
    <footer className="bg-charcoal text-sand pt-11 pb-7">
      <div className="max-w-site mx-auto px-7">
        <div className="flex flex-wrap gap-5 items-center justify-between border-t border-paper/10 pt-6">
          <div className="flex items-center gap-3">
            <img src="/assets/ai_logo.png" alt="AI Club logo" className="w-8 h-8 object-contain" />
            <span className="font-display font-bold tracking-wide text-paper text-[1.05rem]">
              AI CLUB
            </span>
          </div>
          <ul className="flex gap-6 list-none m-0 p-0 font-mono text-[.8rem] uppercase tracking-wide">
            <li>
              <a
                href="https://www.instagram.com/osu_aiclub/"
                className="no-underline hover:text-paper transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/sAyYh976N"
                target="_blank"
                rel="noopener"
                className="no-underline hover:text-paper transition-colors"
              >
                Discord
              </a>
            </li>{" "}
          </ul>
        </div>
      </div>
    </footer>
  );
}
