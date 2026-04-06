export default function FaciliAidLandingPage() {
  const tools = [
    {
      title: "Planning Poker",
      status: "Live",
      description:
        "Estimate together with calm, focused flow. Built for teams who want less friction and faster alignment.",
      href: "https://poker.faciliaid.com",
      cta: "Open app",
    },
    {
      title: "Workshop Planner",
      status: "Coming next",
      description:
        "Design sessions with timing, flow, energy shifts, materials, and facilitation prompts in one place.",
      href: "#",
      cta: "Preview concept",
    },
    {
      title: "Haptic Session Timer",
      status: "Planned",
      description:
        "A subtle companion for coaching and one-to-ones that lets you feel time passing without checking your watch.",
      href: "#",
      cta: "See roadmap",
    },
  ];

  const resources = [
    {
      title: "Methods & Formats",
      text: "A curated place for workshop patterns, energizers, retrospectives, and facilitation structures.",
    },
    {
      title: "External Favorites",
      text: "Handpicked links to useful tools, templates, and references that support your facilitation practice.",
    },
    {
      title: "Your Toolkit Hub",
      text: "A growing home for the apps you build yourself, all gathered behind one recognizable FaciliAid identity.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-[-10%] h-96 w-96 rounded-full bg-blue-700/20 blur-3xl" />
        <div className="absolute top-40 right-[-5%] h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <main className="relative mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
        <nav className="mb-16 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
          <div>
            <div className="text-xl font-semibold tracking-tight text-white">FaciliAid</div>
            <div className="text-sm text-slate-400">Tools for better facilitation</div>
          </div>
          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#tools" className="transition hover:text-white">Tools</a>
            <a href="#resources" className="transition hover:text-white">Resources</a>
            <a href="#vision" className="transition hover:text-white">Vision</a>
          </div>
        </nav>

        <section className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-4 inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-200">
              Calm tools for facilitators, coaches, and workshop hosts
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              A stylish home for the tools that help sessions run smoother.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              FaciliAid is a growing collection of focused tools for facilitation. Some are built in-house,
              some point to trusted external resources, all are meant to reduce friction and help you guide
              people with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#tools"
                className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-900/40 transition hover:bg-blue-500"
              >
                Explore tools
              </a>
              <a
                href="#vision"
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10"
              >
                See what is next
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 p-6 shadow-2xl shadow-slate-950/50">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-400">Featured right now</div>
                <div className="text-xl font-semibold text-white">FaciliAid Poker</div>
              </div>
              <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                Live
              </div>
            </div>
            <div className="rounded-2xl border border-blue-400/10 bg-slate-950/70 p-5">
              <div className="mb-4 flex items-center gap-3 text-2xl">
                <span>👕</span>
                <span>🧥</span>
                <span>📦</span>
                <span>🚚</span>
              </div>
              <p className="text-sm leading-7 text-slate-300">
                Estimation with a playful, focused interface and facilitator-first flow. Perfect for sprint planning,
                backlog refinement, or quick team alignment.
              </p>
              <a
                href="https://poker.faciliaid.com"
                className="mt-5 inline-flex rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-200"
              >
                Open Planning Poker
              </a>
            </div>
          </div>
        </section>

        <section id="tools" className="mt-24">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-blue-300">Toolkit</div>
              <h2 className="mt-2 text-3xl font-semibold text-white">Core tools</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-400">
              Built for practical facilitation: focused interfaces, low distraction, and just enough personality.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {tools.map((tool) => (
              <div
                key={tool.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/10"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{tool.title}</h3>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                    {tool.status}
                  </span>
                </div>
                <p className="min-h-[96px] text-sm leading-7 text-slate-300">{tool.description}</p>
                <a
                  href={tool.href}
                  className="mt-5 inline-flex rounded-xl border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200 transition hover:bg-blue-500/20"
                >
                  {tool.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="resources" className="mt-24 grid gap-6 lg:grid-cols-3">
          {resources.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </section>

        <section id="vision" className="mt-24 rounded-[2rem] border border-white/10 bg-gradient-to-r from-blue-950/80 via-slate-900 to-slate-900 p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">What is next</div>
              <h2 className="mt-3 text-3xl font-semibold text-white">FaciliAid is becoming a quiet operating system for facilitators.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-300">
                The next tools focus on session design and time awareness: a workshop planner for shaping flow,
                pacing, and outcomes, and a haptic session companion that helps you stay present with people instead
                of checking the clock.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm text-blue-300">Next build</div>
                <div className="mt-1 text-lg font-semibold text-white">Workshop Planner</div>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Plan flow, activities, timing, room energy, and transitions in one view.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm text-cyan-300">After that</div>
                <div className="mt-1 text-lg font-semibold text-white">Haptic Session Timer</div>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Gentle wrist-based feedback for coaching, one-to-ones, and facilitated conversations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-20 border-t border-white/10 py-8 text-sm text-slate-400">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>FaciliAid — practical tools for facilitation</div>
            <div>Designed in navy blue, built to grow</div>
          </div>
        </footer>
      </main>
    </div>
  );
}
