"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import Footer from "@/components/Footer";

const QUESTIONS = [
  {
    n: "01",
    q: "What is our real cash position, across every entity, after intercompany?",
    note: "Not the sum of five bank feeds. The consolidated number.",
  },
  {
    n: "02",
    q: "Which jobs are actually making money, and which only look like it?",
    note: "Billed percent against true percent complete, by job.",
  },
  {
    n: "03",
    q: "What is our WIP exposure right now?",
    note: "Underbillings, overbillings, and retainage in one view.",
  },
  {
    n: "04",
    q: "Where are intercompany flows hiding profit or risk?",
    note: "Equipment rents, shared labor, management fees. Traced, not guessed.",
  },
  {
    n: "05",
    q: "Who is utilized, who is idle, and what is that costing?",
    note: "Crews and equipment, priced by the day.",
  },
];

const STEPS = [
  {
    n: "1",
    name: "Assessment",
    price: "$9,500 fixed",
    time: "3 weeks",
    body: "Systems and data inventory across your entities. Data-quality findings. Your owner's-questions list. A fixed-price build roadmap. The deliverable is yours to keep and act on, with us or with anyone else.",
  },
  {
    n: "2",
    name: "The build",
    price: "$45,000 to $95,000 fixed",
    time: "8 to 12 weeks",
    body: "We connect what you already run: QuickBooks or Sage, Procore, ServiceTitan, payroll, the spreadsheets that matter. One consolidated model with intercompany handled correctly. Role-based dashboards for the owner, the controller, PMs, and the field. Objective acceptance milestones. You sign off on working software, not promises.",
  },
  {
    n: "3",
    name: "Managed intelligence",
    price: "from $2,500 / month",
    time: "ongoing",
    body: "We keep the pipelines healthy and the dashboards current. Every Tuesday you get a short, plain-English digest written from your live data: what changed, why, and what deserves your attention. Monthly readout with the owner. Cancel on 30 days' notice.",
  },
];

const FAQS = [
  {
    q: "Do we have to replace our software?",
    a: "No. Connectors, not migrations. Your teams keep QuickBooks, Sage, Procore, ServiceTitan, payroll, and the spreadsheets they trust. We connect them into one model.",
  },
  {
    q: "Where does our data live?",
    a: "In a warehouse you own, under accounts you control. You own your data, your dashboards, and your reports completely. The framework underneath is ours and licensed to you. That is what makes the fixed price possible.",
  },
  {
    q: "Who does the work?",
    a: "Old Forrest, directly. The person who scopes your assessment is the person who builds your model and writes your digest.",
  },
  {
    q: "How fast do we see something?",
    a: "The assessment takes three weeks and ends with a roadmap you can act on. Inside the build, the consolidated cash view is an early milestone, not the finale.",
  },
  {
    q: "What does it cost after the build?",
    a: "Managed intelligence starts at $2,500 a month and you can cancel on 30 days' notice. No long contract. The work has to earn its keep every month.",
  },
];

function DigestMock() {
  return (
    <div className="oi-digest" role="img" aria-label="Sample Tuesday digest email">
      <div className="oi-digest-head">
        <div className="oi-digest-seal" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-mark.png" alt="" />
        </div>
        <div>
          <div className="oi-digest-meta">
            <span className="oi-digest-from">Old Forrest Intelligence</span>
            <span className="oi-digest-time">Tue 6:00 AM</span>
          </div>
          <div className="oi-digest-subject">
            Week 24: WIP exposure up $340K, two jobs driving it
          </div>
        </div>
      </div>

      <div className="oi-digest-body">
        <div className="oi-row">
          <div className="oi-row-label">Cash, all entities</div>
          <div className="oi-row-fig">$2,410,000</div>
          <div className="oi-row-note">
            Up $180K on last week, after intercompany. Entity 3 (Equipment) is
            holding $610K it does not need this month.
          </div>
        </div>
        <div className="oi-row">
          <div className="oi-row-label">WIP exposure</div>
          <div className="oi-row-fig oi-neg">$1,920,000</div>
          <div className="oi-row-note">
            Up $340K. Hartwell Rd and the Lakeview retainage are the drivers.
            Hartwell is billed 41% on 58% complete.
          </div>
        </div>
        <div className="oi-row">
          <div className="oi-row-label">Job margin watch</div>
          <div className="oi-row-fig oi-neg">6.2% vs 11% bid</div>
          <div className="oi-row-note">
            Fuller St. It is labor burn, not materials. Worth a conversation
            with the PM this week.
          </div>
        </div>
        <div className="oi-row">
          <div className="oi-row-label">Utilization</div>
          <div className="oi-row-fig">2 idle crews</div>
          <div className="oi-row-note">
            Tuesday through Thursday. Cost of idle: about $9,300.
          </div>
        </div>
        <div className="oi-digest-foot">
          Reply to this email and we will look into anything that reads wrong.
        </div>
      </div>
    </div>
  );
}

function WindowChaos() {
  const windows = [
    { title: "Consolidation_v14_FINAL(2).xlsx", w: "72%", t: "0", l: "0" },
    { title: "QuickBooks · Entity 1", w: "64%", t: "18%", l: "22%" },
    { title: "Procore · Job Costs", w: "58%", t: "38%", l: "8%" },
    { title: "QuickBooks · Entity 4", w: "60%", t: "55%", l: "30%" },
    { title: "Retainage_tracker_OLD.xlsx", w: "52%", t: "70%", l: "4%" },
  ];
  return (
    <div className="oi-chaos" aria-hidden="true">
      {windows.map((w, i) => (
        <div
          key={w.title}
          className="oi-window"
          style={{ width: w.w, top: w.t, left: w.l, zIndex: i }}
        >
          <div className="oi-window-bar">
            <span className="oi-dot" />
            <span className="oi-dot" />
            <span className="oi-dot" />
            <span className="oi-window-title">{w.title}</span>
          </div>
          <div className="oi-window-grid" />
        </div>
      ))}
    </div>
  );
}

export default function OperationalIntelligenceClient() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const company = String(data.get("company") ?? "");
    const entities = String(data.get("entities") ?? "");
    const systems = String(data.get("systems") ?? "");
    const subject = encodeURIComponent(`Operational intelligence: ${company || name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        `Entities: ${entities}`,
        `Systems: ${systems}`,
        "",
        "I'd like to talk about the assessment.",
      ].join("\n"),
    );
    window.location.href = `mailto:chris@oldforrest.net?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <main className="oi">
      {/* ===== Top bar ===== */}
      <header className="oi-topbar">
        <Link href="/" className="oi-brandlink">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-mark.png" alt="" className="oi-logomark" />
          <Wordmark size="sm" />
        </Link>
        <span className="oi-topbar-tag">Operational Intelligence</span>
        <a className="oi-topbar-cta" href="#start">
          Book a fit call
        </a>
      </header>

      {/* ===== Hero ===== */}
      <section className="oi-hero">
        <motion.p
          className="oi-kicker"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          For owners of multi-entity construction and field-services groups
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          You run several companies.
          <br />
          <em>You can see one at a time.</em>
        </motion.h1>
        <motion.p
          className="oi-sub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
        >
          One consolidated picture across every entity you own, with a
          plain-English digest every Tuesday morning. Fixed prices. Your
          systems stay.
        </motion.p>
        <motion.div
          className="oi-hero-ctas"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
        >
          <a className="oi-btn oi-btn-primary" href="#digest">
            See a sample Tuesday digest
          </a>
          <a className="oi-btn oi-btn-ghost" href="#start">
            Book a fit call
          </a>
        </motion.div>

        <motion.div
          className="oi-hero-visual"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <div className="oi-hero-pane oi-hero-pane-before">
            <div className="oi-pane-label">Today</div>
            <WindowChaos />
          </div>
          <div className="oi-hero-arrow" aria-hidden="true">
            →
          </div>
          <div className="oi-hero-pane oi-hero-pane-after">
            <div className="oi-pane-label">Tuesday</div>
            <div className="oi-dash">
              <div className="oi-dash-card">
                <span className="oi-dash-k">Cash, all entities</span>
                <span className="oi-dash-v">$2.41M</span>
              </div>
              <div className="oi-dash-card">
                <span className="oi-dash-k">WIP exposure</span>
                <span className="oi-dash-v oi-neg">$1.92M</span>
              </div>
              <div className="oi-dash-card">
                <span className="oi-dash-k">Jobs on margin</span>
                <span className="oi-dash-v">11 of 14</span>
              </div>
              <div className="oi-dash-card">
                <span className="oi-dash-k">Idle cost, wk</span>
                <span className="oi-dash-v oi-neg">$9.3K</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===== Five questions ===== */}
      <section className="oi-section oi-questions">
        <div className="oi-section-head">
          <span className="oi-section-no">§1</span>
          <h2>
            Five questions you should be able to answer on any Tuesday.
          </h2>
        </div>
        <ol className="oi-qlist">
          {QUESTIONS.map((item) => (
            <li key={item.n} className="oi-reveal">
              <span className="oi-qnum">{item.n}</span>
              <div>
                <p className="oi-q">{item.q}</p>
                <p className="oi-qnote">{item.note}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="oi-aside">
          If each answer takes a controller three days and a spreadsheet, keep
          reading.
        </p>
      </section>

      {/* ===== The Tuesday digest ===== */}
      <section className="oi-section oi-digest-section" id="digest">
        <div className="oi-section-head">
          <span className="oi-section-no">§2</span>
          <h2>The Tuesday digest.</h2>
        </div>
        <div className="oi-digest-wrap">
          <div className="oi-reveal">
            <DigestMock />
          </div>
          <div className="oi-digest-copy">
            <p>
              Every week, a short note written from your live data. What
              changed, why, and what deserves your attention. It reads like a
              sharp analyst wrote it, because the alternative is a dashboard
              nobody opens.
            </p>
            <p>
              Sample shown with representative numbers. Yours is built around
              your entities, your jobs, and your questions.
            </p>
            <a className="oi-btn oi-btn-primary" href="#start">
              Get a sample for your group
            </a>
          </div>
        </div>
      </section>

      {/* ===== How it works ===== */}
      <section className="oi-section oi-steps">
        <div className="oi-section-head">
          <span className="oi-section-no">§3</span>
          <h2>How it works. Fixed prices, your systems stay.</h2>
        </div>
        <div className="oi-steps-grid">
          {STEPS.map((s) => (
            <article key={s.n} className="oi-step oi-reveal">
              <div className="oi-step-top">
                <span className="oi-step-n">{s.n}</span>
                <h3>{s.name}</h3>
              </div>
              <div className="oi-step-price">
                {s.price} <span>· {s.time}</span>
              </div>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
        <p className="oi-aside">
          You own your data, your dashboards, and your reports. The framework
          underneath is ours and licensed to you. That is what makes the fixed
          price and the speed possible.
        </p>
      </section>

      {/* ===== Why tools failed ===== */}
      <section className="oi-section oi-why">
        <div className="oi-section-head">
          <span className="oi-section-no">§4</span>
          <h2>Why the BI tool you tried didn&apos;t stick.</h2>
        </div>
        <div className="oi-why-grid">
          <div className="oi-why-card">
            <h3>Built for multi-entity reality</h3>
            <p>
              Intercompany eliminations, job costing, WIP. Modeled correctly,
              not skinned over by a generic dashboard product.
            </p>
          </div>
          <div className="oi-why-card">
            <h3>Connectors, not migrations</h3>
            <p>
              Keep QuickBooks. Keep Procore. Keep the spreadsheets your PMs
              love. We connect them, we don&apos;t replace them.
            </p>
          </div>
          <div className="oi-why-card">
            <h3>AI where it earns its keep</h3>
            <p>
              The digest and anomaly notes are written, in plain English, from
              your live numbers. No chat box. No prompt engineering homework.
            </p>
          </div>
        </div>
        <p className="oi-proof">
          The framework underneath was built inside a real multi-entity
          construction and operations group. It runs in production today.
        </p>
      </section>

      {/* ===== Risk reversal ===== */}
      <section className="oi-band">
        <p>
          If the assessment roadmap doesn&apos;t pay for itself,{" "}
          <em>stop there and keep it.</em>
        </p>
        <p className="oi-band-sub">
          The deliverable is yours. Act on it with us or with anyone else.
        </p>
      </section>

      {/* ===== FAQ ===== */}
      <section className="oi-section oi-faq">
        <div className="oi-section-head">
          <span className="oi-section-no">§5</span>
          <h2>Fair questions.</h2>
        </div>
        <div className="oi-faq-list">
          {FAQS.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ===== Form ===== */}
      <section className="oi-section oi-start" id="start">
        <div className="oi-start-grid">
          <div>
            <h2>Start with the assessment.</h2>
            <p>
              $9,500 fixed, three weeks, and a roadmap you keep either way.
              Tell us a little about the group and we&apos;ll set up a
              20-minute fit call. No deck, no pressure.
            </p>
            <p className="oi-start-alt">
              Prefer email?{" "}
              <a href="mailto:chris@oldforrest.net">chris@oldforrest.net</a>
            </p>
          </div>
          <form className="oi-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" type="text" required autoComplete="name" />
            </label>
            <label>
              Email
              <input name="email" type="email" required autoComplete="email" />
            </label>
            <label>
              Company
              <input name="company" type="text" autoComplete="organization" />
            </label>
            <label>
              How many entities do you run?
              <select name="entities" defaultValue="2-3" required>
                <option value="1, for now">1, for now</option>
                <option value="2-3">2 to 3</option>
                <option value="4-7">4 to 7</option>
                <option value="8+">8 or more</option>
              </select>
            </label>
            <label>
              What runs your books and jobs?
              <input
                name="systems"
                type="text"
                placeholder="QuickBooks x4, Procore, ADP, Excel"
              />
            </label>
            <button type="submit" className="oi-btn oi-btn-primary oi-btn-block">
              {sent ? "Opening your email client…" : "Book a fit call"}
            </button>
          </form>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <div className="oi-finebar">
        Not a CPA firm. We build the picture; your accountants stay your
        accountants.
      </div>
      <Footer />

      {/* ===== Scoped styles ===== */}
      <style>{`
        .oi {
          /* Site brand tokens (globals.css @theme), aliased to the page's vocabulary */
          --paper: var(--color-cream, #f6f2e8);
          --paper-2: var(--color-cream-2, #ebe4d3);
          --ink: var(--color-ink, #1a1a1a);
          --ink-soft: var(--color-ink-2, #3b3b3b);
          --ink-faint: var(--color-ink-3, #6b6b6b);
          --forest: var(--color-forest, #1f3d2b);
          --forest-deep: var(--color-forest-deep, #132418);
          --brass: var(--color-ember, #b8621b);
          --brass-bright: var(--color-ember-soft, #d98c4a);
          --red: #9a3b2e;
          --rule: var(--color-rule, #c9bfa8);
          --rule-soft: rgba(201, 191, 168, 0.45);

          font-family: var(--font-inter), sans-serif;
          background-color: var(--paper);
          background-image:
            radial-gradient(ellipse 80% 50% at 50% -10%, rgba(217, 140, 74, 0.08), transparent),
            repeating-linear-gradient(0deg, transparent 0 2px, rgba(19, 36, 24, 0.012) 2px 4px);
          color: var(--ink);
          line-height: 1.55;
          font-size: 17px;
        }
        .oi ::selection { background: var(--brass); color: var(--paper); }
        .oi h1, .oi h2, .oi h3 {
          font-family: var(--font-fraunces), serif;
          letter-spacing: -0.01em;
          color: var(--forest-deep);
        }
        .oi em { font-style: italic; }
        .oi a { color: inherit; }

        /* Top bar */
        .oi-topbar {
          display: flex; align-items: center; gap: 1.25rem;
          padding: 1.1rem clamp(1.25rem, 5vw, 4rem);
          border-bottom: 1px solid var(--rule);
        }
        .oi-brandlink {
          display: inline-flex; align-items: center; gap: 0.7rem;
          text-decoration: none; white-space: nowrap;
        }
        .oi-logomark { width: 38px; height: auto; display: block; }
        .oi-topbar-tag {
          font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--ink-faint); margin-right: auto;
          border-left: 1px solid var(--rule); padding-left: 1.25rem;
        }
        .oi-topbar-cta {
          font-size: 0.85rem; font-weight: 600; text-decoration: none;
          border: 1px solid var(--ink); border-radius: 999px;
          padding: 0.45rem 1.1rem; transition: all 0.18s ease;
          white-space: nowrap;
        }
        .oi-topbar-cta:hover { background: var(--ink); color: var(--paper); }

        /* Hero */
        .oi-hero {
          padding: clamp(3.5rem, 8vw, 6.5rem) clamp(1.25rem, 5vw, 4rem) clamp(3rem, 6vw, 5rem);
          max-width: 1180px; margin: 0 auto; text-align: center;
        }
        .oi-kicker {
          font-size: 0.78rem; letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--brass); font-weight: 600; margin-bottom: 1.5rem;
        }
        .oi-hero h1 {
          font-size: clamp(2.4rem, 6vw, 4.4rem);
          font-weight: 600; line-height: 1.06; margin-bottom: 1.5rem;
        }
        .oi-hero h1 em { color: var(--brass); }
        .oi-sub {
          font-size: clamp(1.05rem, 2vw, 1.25rem); color: var(--ink-soft);
          max-width: 38rem; margin: 0 auto 2.2rem;
        }
        .oi-hero-ctas { display: flex; gap: 0.9rem; justify-content: center; flex-wrap: wrap; }

        .oi-btn {
          display: inline-block; text-decoration: none; font-weight: 600;
          font-size: 0.95rem; padding: 0.85rem 1.7rem; border-radius: 999px;
          transition: all 0.18s ease; border: 1px solid transparent;
          cursor: pointer;
        }
        .oi-btn-primary {
          background: var(--forest); color: var(--paper);
          box-shadow: 0 1px 0 rgba(22,41,30,0.4), 0 10px 24px -12px rgba(22,41,30,0.55);
        }
        .oi-btn-primary:hover { background: var(--ink); transform: translateY(-1px); }
        .oi-btn-ghost { border-color: var(--rule); color: var(--ink); }
        .oi-btn-ghost:hover { border-color: var(--ink); }
        .oi-btn-block { width: 100%; }

        /* Hero visual */
        .oi-hero-visual {
          margin-top: 3.5rem; display: grid;
          grid-template-columns: 1fr auto 1fr; gap: 1.25rem; align-items: stretch;
          text-align: left;
        }
        .oi-hero-pane {
          border: 1px solid var(--rule); border-radius: 10px;
          background: var(--paper-2); padding: 1rem; position: relative;
          min-height: 240px;
        }
        .oi-pane-label {
          position: absolute; top: -0.7rem; left: 1rem;
          font-size: 0.68rem; letter-spacing: 0.18em; text-transform: uppercase;
          background: var(--paper); border: 1px solid var(--rule);
          border-radius: 999px; padding: 0.15rem 0.7rem; color: var(--ink-faint);
        }
        .oi-hero-pane-after .oi-pane-label { color: var(--brass); border-color: var(--brass); }
        .oi-hero-arrow {
          align-self: center; font-size: 1.6rem; color: var(--brass);
          font-family: var(--font-fraunces), serif;
        }

        .oi-chaos { position: relative; height: 100%; min-height: 210px; }
        .oi-window {
          position: absolute; border: 1px solid var(--rule);
          background: #faf7ee; border-radius: 6px; overflow: hidden;
          box-shadow: 0 6px 16px -10px rgba(22,41,30,0.4);
        }
        .oi-window-bar {
          display: flex; align-items: center; gap: 4px;
          padding: 4px 8px; border-bottom: 1px solid var(--rule-soft);
          background: var(--paper-2);
        }
        .oi-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--rule); }
        .oi-window-title {
          font-size: 0.58rem; color: var(--ink-faint); margin-left: 4px;
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .oi-window-grid {
          height: 44px;
          background-image:
            linear-gradient(to right, var(--rule-soft) 1px, transparent 1px),
            linear-gradient(to bottom, var(--rule-soft) 1px, transparent 1px);
          background-size: 22px 11px;
        }

        .oi-dash {
          display: grid; grid-template-columns: 1fr 1fr; gap: 0.7rem;
          height: 100%; align-content: center;
        }
        .oi-dash-card {
          background: #faf7ee; border: 1px solid var(--rule);
          border-radius: 8px; padding: 0.8rem 0.9rem;
          display: flex; flex-direction: column; gap: 0.2rem;
        }
        .oi-dash-k {
          font-size: 0.64rem; letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--ink-faint);
        }
        .oi-dash-v {
          font-size: 1.35rem; font-weight: 600;
          font-variant-numeric: tabular-nums;
          font-family: var(--font-fraunces), serif;
        }
        .oi-neg { color: var(--red); }

        /* Sections */
        .oi-section {
          max-width: 1180px; margin: 0 auto;
          padding: clamp(3rem, 7vw, 5.5rem) clamp(1.25rem, 5vw, 4rem);
          border-top: 1px solid var(--rule);
        }
        .oi-section-head {
          display: flex; align-items: baseline; gap: 1.25rem; margin-bottom: 2.5rem;
        }
        .oi-section-no {
          font-family: var(--font-fraunces), serif;
          color: var(--brass); font-size: 1.1rem; font-weight: 600;
        }
        .oi-section-head h2 {
          font-size: clamp(1.6rem, 3.4vw, 2.4rem); font-weight: 600; line-height: 1.15;
          max-width: 46rem;
        }
        .oi-aside {
          margin-top: 2.25rem; color: var(--ink-faint); font-style: italic;
          font-size: 0.98rem; max-width: 40rem;
        }

        /* Questions */
        .oi-qlist { list-style: none; margin: 0; padding: 0; }
        .oi-qlist li {
          display: flex; gap: 1.6rem; align-items: baseline;
          padding: 1.4rem 0; border-bottom: 1px solid var(--rule-soft);
        }
        .oi-qnum {
          font-family: var(--font-fraunces), serif;
          font-size: 1.6rem; color: var(--brass); font-weight: 600;
          font-variant-numeric: tabular-nums; flex-shrink: 0; width: 3rem;
        }
        .oi-q {
          font-family: var(--font-fraunces), serif;
          font-size: clamp(1.15rem, 2.4vw, 1.55rem); font-weight: 500; line-height: 1.3;
        }
        .oi-qnote { color: var(--ink-faint); font-size: 0.95rem; margin-top: 0.3rem; }

        /* Digest */
        .oi-digest-wrap {
          display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
          gap: 3rem; align-items: center;
        }
        .oi-digest {
          background: #fbf8f0; border: 1px solid var(--rule);
          border-radius: 12px; overflow: hidden;
          box-shadow: 0 24px 48px -24px rgba(22,41,30,0.45);
          transform: rotate(-0.4deg);
        }
        .oi-digest-head {
          display: flex; gap: 1rem; align-items: center;
          padding: 1.1rem 1.4rem; border-bottom: 1px solid var(--rule);
          background: var(--paper-2);
        }
        .oi-digest-seal {
          width: 44px; height: 44px; border-radius: 50%;
          background: var(--paper-2); overflow: hidden;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; border: 2px solid var(--brass);
        }
        .oi-digest-seal img { width: 80%; height: auto; display: block; }
        .oi-digest-meta {
          display: flex; gap: 0.8rem; align-items: baseline;
          font-size: 0.78rem; color: var(--ink-faint);
        }
        .oi-digest-from { font-weight: 600; color: var(--ink-soft); }
        .oi-digest-subject {
          font-family: var(--font-fraunces), serif;
          font-weight: 600; font-size: 1.05rem; margin-top: 0.15rem;
        }
        .oi-digest-body { padding: 0.6rem 1.4rem 1.2rem; }
        .oi-row {
          display: grid; grid-template-columns: 9.5rem 1fr; gap: 0 1rem;
          padding: 0.85rem 0; border-bottom: 1px solid var(--rule-soft);
        }
        .oi-row-label {
          font-size: 0.7rem; letter-spacing: 0.13em; text-transform: uppercase;
          color: var(--ink-faint); padding-top: 0.3rem;
        }
        .oi-row-fig {
          font-family: var(--font-fraunces), serif;
          font-size: 1.25rem; font-weight: 600;
          font-variant-numeric: tabular-nums;
        }
        .oi-row-note { grid-column: 2; color: var(--ink-soft); font-size: 0.92rem; }
        .oi-digest-foot {
          padding-top: 1rem; font-style: italic; color: var(--ink-faint);
          font-size: 0.9rem;
        }
        .oi-digest-copy p { margin-bottom: 1.25rem; color: var(--ink-soft); }
        .oi-digest-copy .oi-btn { margin-top: 0.5rem; }

        /* Steps */
        .oi-steps-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem;
        }
        .oi-step {
          border: 1px solid var(--rule); border-radius: 10px;
          padding: 1.6rem 1.5rem; background: var(--paper-2);
          display: flex; flex-direction: column;
        }
        .oi-step-top { display: flex; align-items: center; gap: 0.9rem; margin-bottom: 0.8rem; }
        .oi-step-n {
          width: 34px; height: 34px; border-radius: 50%;
          border: 1px solid var(--brass); color: var(--brass);
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-fraunces), serif; font-weight: 600;
          flex-shrink: 0;
        }
        .oi-step h3 { font-size: 1.25rem; font-weight: 600; }
        .oi-step-price {
          font-family: var(--font-fraunces), serif;
          color: var(--forest); font-weight: 600; margin-bottom: 0.8rem;
          font-variant-numeric: tabular-nums;
        }
        .oi-step-price span { color: var(--ink-faint); font-weight: 400; }
        .oi-step p { color: var(--ink-soft); font-size: 0.95rem; }

        /* Why */
        .oi-why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
        .oi-why-card {
          border-top: 2px solid var(--brass); padding: 1.25rem 0 0;
        }
        .oi-why-card h3 { font-size: 1.15rem; font-weight: 600; margin-bottom: 0.6rem; }
        .oi-why-card p { color: var(--ink-soft); font-size: 0.95rem; }
        .oi-proof {
          margin-top: 2.5rem; padding: 1.25rem 1.5rem;
          border-left: 3px solid var(--forest);
          background: var(--paper-2); font-style: italic; color: var(--ink-soft);
          max-width: 44rem;
        }

        /* Band */
        .oi-band {
          background: var(--forest); color: var(--paper);
          text-align: center; padding: clamp(3rem, 6vw, 4.5rem) 1.5rem;
        }
        .oi-band p {
          font-family: var(--font-fraunces), serif;
          font-size: clamp(1.5rem, 3.4vw, 2.3rem); font-weight: 500;
          max-width: 50rem; margin: 0 auto; line-height: 1.25;
        }
        .oi-band em { color: var(--brass-bright); }
        .oi-band .oi-band-sub {
          font-family: var(--font-inter), sans-serif;
          font-size: 1rem; color: rgba(244, 239, 227, 0.75); margin-top: 1rem;
        }

        /* FAQ */
        .oi-faq-list details {
          border-bottom: 1px solid var(--rule-soft); padding: 1.1rem 0;
        }
        .oi-faq-list summary {
          font-family: var(--font-fraunces), serif;
          font-size: 1.12rem; font-weight: 600; cursor: pointer;
          list-style: none; display: flex; justify-content: space-between; gap: 1rem;
        }
        .oi-faq-list summary::after { content: "+"; color: var(--brass); font-size: 1.3rem; }
        .oi-faq-list details[open] summary::after { content: "–"; }
        .oi-faq-list details p {
          margin-top: 0.8rem; color: var(--ink-soft); max-width: 44rem; font-size: 0.97rem;
        }

        /* Start / form */
        .oi-start-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 3.5rem; align-items: start;
        }
        .oi-start h2 { font-size: clamp(1.8rem, 3.5vw, 2.5rem); margin-bottom: 1.2rem; }
        .oi-start p { color: var(--ink-soft); margin-bottom: 1rem; max-width: 30rem; }
        .oi-start-alt a { color: var(--forest); font-weight: 600; }
        .oi-form {
          background: var(--paper-2); border: 1px solid var(--rule);
          border-radius: 12px; padding: 1.75rem;
          display: flex; flex-direction: column; gap: 1.1rem;
        }
        .oi-form label {
          display: flex; flex-direction: column; gap: 0.35rem;
          font-size: 0.8rem; font-weight: 600; letter-spacing: 0.04em;
          text-transform: uppercase; color: var(--ink-soft);
        }
        .oi-form input, .oi-form select {
          font-family: var(--font-inter), sans-serif;
          font-size: 1rem; color: var(--ink);
          background: #fbf8f0; border: 1px solid var(--rule);
          border-radius: 8px; padding: 0.7rem 0.9rem;
        }
        .oi-form input:focus, .oi-form select:focus {
          outline: 2px solid var(--brass); outline-offset: 1px;
        }

        /* Fine-print bar above the site footer */
        .oi-finebar {
          border-top: 1px solid var(--rule);
          padding: 1.25rem clamp(1.25rem, 5vw, 4rem);
          font-size: 0.85rem; color: var(--ink-faint); font-style: italic;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .oi-hero-visual { grid-template-columns: 1fr; }
          .oi-hero-arrow { transform: rotate(90deg); justify-self: center; }
          .oi-digest-wrap { grid-template-columns: 1fr; }
          .oi-steps-grid, .oi-why-grid { grid-template-columns: 1fr; }
          .oi-start-grid { grid-template-columns: 1fr; gap: 2rem; }
          .oi-topbar-tag { display: none; }
        }
        @media (max-width: 560px) {
          .oi-row { grid-template-columns: 1fr; }
          .oi-row-note { grid-column: 1; }
          .oi-qlist li { gap: 1rem; }
        }
      `}</style>
    </main>
  );
}
