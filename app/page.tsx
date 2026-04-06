export default function Page() {
  const tools = [
    {
      title: "Planning Poker",
      status: "Live",
      text: "Estimate together with a clean, facilitator-friendly flow designed for fast team alignment.",
      href: "https://poker.faciliaid.com",
      cta: "Open app",
    },
    {
      title: "Workshop Planner",
      status: "Coming next",
      text: "Plan a workshop or session with timing, energy shifts, flow, materials, and facilitation prompts.",
      href: "#",
      cta: "Preview concept",
    },
    {
      title: "Haptic Session Timer",
      status: "Planned",
      text: "Use subtle haptic feedback to know when your one-to-one or coaching session is almost done.",
      href: "#",
      cta: "See roadmap",
    },
  ];

  const resources = [
    {
      title: "Methods & Formats",
      text: "A curated place for workshop structures, facilitation methods, retrospectives, and energizers.",
    },
    {
      title: "External Favorites",
      text: "Useful links to trusted facilitation tools, templates, books, and references.",
    },
    {
      title: "Toolkit Hub",
      text: "A growing home for the apps you build yourself under one calm, recognizable FaciliAid identity.",
    },
  ];

  return (
    <div className="page">
      <main className="shell">
        <nav className="nav">
          <div>
            <div className="brand">FaciliAid</div>
            <div className="tagline">Tools for better facilitation</div>
          </div>
        </nav>

        <section className="hero">
          <div className="heroText">
            <div className="kicker">Calm tools for facilitators, coaches, and workshop hosts</div>
            <h1>A stylish home for tools that help sessions run smoother.</h1>
            <p className="lead">
              FaciliAid is a growing collection of focused tools for facilitation. Some are built
              here, some point to trusted external resources, all are meant to reduce friction and
              help you guide people with confidence.
            </p>
            <div className="actions">
              <a className="primaryBtn" href="#tools">
                Explore tools
              </a>
              <a className="secondaryBtn" href="#vision">
                See what is next
              </a>
            </div>
          </div>

          <div className="heroCard">
            <div className="eyebrow">Featured right now</div>
            <div className="cardTitle">FaciliAid Poker</div>
            <p className="cardText">
              Estimation with a playful, focused interface and facilitator-first flow. Perfect for
              sprint planning, backlog refinement, or quick team alignment.
            </p>
            <a className="cardCta" href="https://poker.faciliaid.com">
              Open Planning Poker
            </a>
          </div>
        </section>

        <section className="section" id="tools">
          <div className="sectionHeader">
            <div>
              <div className="eyebrow">Toolkit</div>
              <h2 className="sectionTitle">Core tools</h2>
            </div>
            <div className="sectionSubtitle">
              Built for practical facilitation: focused interfaces, low distraction, and just enough
              personality.
            </div>
          </div>

          <div className="toolGrid">
            {tools.map((tool) => (
              <div className="toolCard" key={tool.title}>
                <div className="toolStatus">{tool.status}</div>
                <h3 className="toolTitle">{tool.title}</h3>
                <p className="toolText">{tool.text}</p>
                <a className="toolLink" href={tool.href}>
                  {tool.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="resources">
          <div className="sectionHeader">
            <div>
              <div className="eyebrow">Resources</div>
              <h2 className="sectionTitle">A broader facilitation hub</h2>
            </div>
          </div>

          <div className="resourceGrid">
            {resources.map((item) => (
              <div className="sectionCard" key={item.title}>
                <h3 className="toolTitle">{item.title}</h3>
                <p className="toolText">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="vision">
          <div className="sectionCard">
            <div className="eyebrow">What is next</div>
            <h2 className="sectionTitle">FaciliAid is becoming a quiet operating system for facilitators.</h2>
            <p className="cardText">
              The next tools focus on session design and time awareness: a workshop planner for
              shaping flow, pacing, and outcomes, and a haptic session companion that helps you stay
              present with people instead of checking the clock.
            </p>
          </div>
        </section>

        <footer className="footer">FaciliAid — practical tools for facilitation</footer>
      </main>
    </div>
  );
}
