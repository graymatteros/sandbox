"use client";
import { useState } from "react";

/* ── CGS Light Design Tokens ── */
const T = {
  bg: "#f7f8fa",
  surface: "#ffffff",
  surfaceAlt: "#f0f1f4",
  deep: "#0b1221",
  ink: "#0b1221",
  inkSoft: "rgba(11,18,33,0.72)",
  inkDim: "rgba(11,18,33,0.44)",
  rule: "#dfe2e8",
  ruleLight: "rgba(11,18,33,0.08)",
  accent: "#2563eb",
  accentSoft: "rgba(37,99,235,0.06)",
  accentBorder: "rgba(37,99,235,0.15)",
  gold: "#b45309",
  goldSoft: "rgba(180,83,9,0.06)",
  goldBorder: "rgba(180,83,9,0.14)",
  green: "#15803d",
  greenSoft: "rgba(21,128,61,0.06)",
  greenBorder: "rgba(21,128,61,0.14)",
  purple: "#7c3aed",
  purpleSoft: "rgba(124,58,237,0.06)",
  purpleBorder: "rgba(124,58,237,0.14)",
  mid: "#6b7a8d",
  mono: "'JetBrains Mono', monospace",
  display: "'Playfair Display', serif",
  body: "'Outfit', system-ui, sans-serif",
};

/* ── Shared Styles ── */
const S = {
  mono10: { fontFamily: T.mono, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase" },
  mono11: { fontFamily: T.mono, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" },
  mono9: { fontFamily: T.mono, fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase" },
  displayH: { fontFamily: T.display, fontWeight: 600, lineHeight: 1.15 },
  bodyP: { fontSize: 15, lineHeight: 1.78, color: T.ink, margin: "20px 0", maxWidth: 740, fontFamily: T.body },
};

/* ── Components ── */

function SecHead({ num, title, em }) {
  return (
    <div style={{ margin: "72px 0 36px" }}>
      <span style={{ ...S.mono11, color: T.accent, display: "block", marginBottom: 12 }}>{num}</span>
      <h2 style={{ ...S.displayH, fontSize: 30, margin: "0 0 8px" }}>
        {title} {em && <em style={{ fontStyle: "italic", fontWeight: 400, color: T.accent }}>{em}</em>}
      </h2>
      <div style={{ width: 48, height: 2, background: T.accent, marginTop: 14 }} />
    </div>
  );
}

function SubHead({ title, em }) {
  return (
    <h3 style={{ fontFamily: T.display, fontSize: 21, fontWeight: 600, margin: "40px 0 16px", lineHeight: 1.2 }}>
      {title} {em && <em style={{ fontStyle: "italic", fontWeight: 400, color: T.accent }}>{em}</em>}
    </h3>
  );
}

function P({ children }) {
  return <p style={S.bodyP}>{children}</p>;
}

function Callout({ children, variant }) {
  const colors = {
    blue: { border: T.accent, bg: T.accentSoft },
    gold: { border: T.gold, bg: T.goldSoft },
    green: { border: T.green, bg: T.greenSoft },
  };
  const c = colors[variant] || colors.blue;
  return (
    <div style={{ borderLeft: `3px solid ${c.border}`, background: c.bg, padding: "22px 26px", margin: "28px 0", borderRadius: "0 6px 6px 0" }}>
      {children}
    </div>
  );
}

function OfferingBlock({ num, title, tag, color, desc, deliverables }) {
  const iconColors = {
    blue: { bg: T.accentSoft, color: T.accent, border: T.accentBorder },
    gold: { bg: T.goldSoft, color: T.gold, border: T.goldBorder },
    green: { bg: T.greenSoft, color: T.green, border: T.greenBorder },
    purple: { bg: T.purpleSoft, color: T.purple, border: T.purpleBorder },
  };
  const ic = iconColors[color] || iconColors.blue;
  return (
    <div style={{ margin: "40px 0", border: `1px solid ${T.rule}`, borderRadius: 8, overflow: "hidden", background: T.surface }}>
      <div style={{ padding: "22px 28px", borderBottom: `1px solid ${T.rule}`, display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ width: 38, height: 38, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: T.mono, fontSize: 11, fontWeight: 600, background: ic.bg, color: ic.color, border: `1px solid ${ic.border}`, flexShrink: 0 }}>{num}</div>
        <h4 style={{ fontFamily: T.display, fontSize: 21, fontWeight: 600, margin: 0, flex: 1 }}>{title}</h4>
        <span style={{ ...S.mono9, color: T.mid }}>{tag}</span>
      </div>
      <div style={{ padding: "22px 28px", borderBottom: `1px solid ${T.ruleLight}` }}>
        <p style={{ fontSize: 14, lineHeight: 1.72, color: T.inkSoft, margin: 0, maxWidth: 700 }}>{desc}</p>
      </div>
      <div style={{ padding: "22px 28px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {deliverables.map((d) => (
            <div key={d.title} style={{ padding: "14px 18px", background: T.surfaceAlt, border: `1px solid ${T.ruleLight}`, borderRadius: 5 }}>
              <h6 style={{ fontSize: 13, fontWeight: 600, marginBottom: 4, lineHeight: 1.3, color: T.ink }}>{d.title}</h6>
              <p style={{ fontSize: 12, lineHeight: 1.6, color: T.inkSoft, margin: 0 }}>{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SumOffering({ num, title, color, desc, dlvs }) {
  const iconColors = {
    blue: { bg: T.accentSoft, color: T.accent, border: T.accentBorder },
    gold: { bg: T.goldSoft, color: T.gold, border: T.goldBorder },
    green: { bg: T.greenSoft, color: T.green, border: T.greenBorder },
    purple: { bg: T.purpleSoft, color: T.purple, border: T.purpleBorder },
  };
  const ic = iconColors[color] || iconColors.blue;
  return (
    <div style={{ margin: "28px 0", padding: "24px 28px", border: `1px solid ${T.rule}`, borderRadius: 8, background: T.surface }}>
      <h4 style={{ fontFamily: T.display, fontSize: 19, fontWeight: 600, margin: "0 0 8px", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 30, height: 30, borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: T.mono, fontSize: 10, fontWeight: 600, background: ic.bg, color: ic.color, border: `1px solid ${ic.border}`, flexShrink: 0 }}>{num}</div>
        {title}
      </h4>
      <p style={{ fontSize: 14, lineHeight: 1.7, color: T.inkSoft, margin: 0 }}>{desc}</p>
      <div style={{ marginTop: 12, fontFamily: T.mono, fontSize: 11, color: T.mid, lineHeight: 1.8, letterSpacing: "0.02em" }}>{dlvs}</div>
    </div>
  );
}

function FunnelStage({ label, items, variant }) {
  const colors = {
    entry: { bg: T.accentSoft, border: T.accentBorder, label: T.accent },
    ps: { bg: T.goldSoft, border: T.goldBorder, label: T.gold },
    prod: { bg: T.greenSoft, border: T.greenBorder, label: T.green },
  };
  const c = colors[variant];
  return (
    <div style={{ padding: "18px 24px", borderRadius: 6, display: "flex", alignItems: "center", gap: 18, background: c.bg, border: `1px solid ${c.border}`, marginBottom: 2 }}>
      <span style={{ ...S.mono10, color: c.label, width: 110, flexShrink: 0 }}>{label}</span>
      <div style={{ fontSize: 13, lineHeight: 1.7, color: T.ink }}>{items}</div>
    </div>
  );
}

function PullCard({ product, headline, body, fedBy }) {
  return (
    <div style={{ padding: "22px", border: `1px solid ${T.rule}`, borderRadius: 6, background: T.surface }}>
      <span style={{ ...S.mono10, color: T.green, marginBottom: 8, display: "block" }}>{product}</span>
      <h5 style={{ fontSize: 14, fontWeight: 600, margin: "0 0 6px", lineHeight: 1.35 }}>{headline}</h5>
      <p style={{ fontSize: 13, lineHeight: 1.65, color: T.inkSoft, margin: 0 }}>{body}</p>
      <div style={{ marginTop: 10, fontFamily: T.mono, fontSize: 10, color: T.mid, letterSpacing: "0.06em" }}>{fedBy}</div>
    </div>
  );
}

function FlowStep({ phase, title, desc }) {
  return (
    <div style={{ flex: 1, padding: "22px 18px", background: T.accentSoft, border: `1px solid ${T.rule}`, display: "flex", flexDirection: "column" }}>
      <span style={{ ...S.mono10, color: T.accent, marginBottom: 8 }}>{phase}</span>
      <div style={{ fontFamily: T.display, fontSize: 16, fontWeight: 600, marginBottom: 8, lineHeight: 1.2 }}>{title}</div>
      <p style={{ fontSize: 12.5, lineHeight: 1.65, color: T.inkSoft, flex: 1, margin: 0 }}>{desc}</p>
    </div>
  );
}

function EconCard({ value, label, desc }) {
  return (
    <div style={{ padding: "26px", border: `1px solid ${T.rule}`, borderRadius: 6, textAlign: "center", background: T.surface }}>
      <span style={{ fontFamily: T.display, fontSize: 32, fontWeight: 700, color: T.accent, display: "block", marginBottom: 4 }}>{value}</span>
      <span style={{ ...S.mono10, color: T.mid, display: "block", marginBottom: 12 }}>{label}</span>
      <p style={{ fontSize: 13, lineHeight: 1.6, color: T.inkSoft, margin: 0 }}>{desc}</p>
    </div>
  );
}

function VerticalRow({ color, name, desc }) {
  const dotColors = { blue: T.accent, gold: T.gold, green: T.green, purple: T.purple };
  return (
    <div style={{ padding: "22px 28px", borderBottom: `1px solid ${T.ruleLight}` }}>
      <div style={{ ...S.mono10, marginBottom: 10, display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: dotColors[color], flexShrink: 0 }} />
        <span style={{ color: T.mid }}>{name}</span>
      </div>
      <p style={{ fontSize: 13, lineHeight: 1.65, color: T.inkSoft, margin: 0, maxWidth: 700 }}>{desc}</p>
    </div>
  );
}

function PriceCard({ num, title, tag, color, accent, accentSoft, rows, total }) {
  const iconColors = {
    blue: { bg: T.accentSoft, color: T.accent, border: T.accentBorder },
    gold: { bg: T.goldSoft, color: T.gold, border: T.goldBorder },
    green: { bg: T.greenSoft, color: T.green, border: T.greenBorder },
    purple: { bg: T.purpleSoft, color: T.purple, border: T.purpleBorder },
  };
  const ic = iconColors[color] || iconColors.blue;
  return (
    <div style={{ margin: "40px 0", border: `1px solid ${T.rule}`, borderRadius: 8, overflow: "hidden", background: T.surface }}>
      <div className="off-header" style={{ padding: "22px 28px", borderBottom: `1px solid ${T.rule}`, display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ width: 38, height: 38, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: T.mono, fontSize: 11, fontWeight: 600, background: ic.bg, color: ic.color, border: `1px solid ${ic.border}`, flexShrink: 0 }}>{num}</div>
        <h4 style={{ fontFamily: T.display, fontSize: 21, fontWeight: 600, margin: 0, flex: 1 }}>{title}</h4>
        <span style={{ ...S.mono9, color: T.mid }}>{tag}</span>
      </div>
      <div className="price-table-wrap" style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 600 }}>
          <thead>
            <tr style={{ background: accentSoft }}>
              <th style={{ padding: "11px 18px", textAlign: "left", fontFamily: T.mono, fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: accent }}>Deliverable</th>
              <th className="price-desc-col" style={{ padding: "11px 18px", textAlign: "left", fontFamily: T.mono, fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: accent }}>Description</th>
              <th style={{ padding: "11px 18px", textAlign: "right", fontFamily: T.mono, fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: accent, whiteSpace: "nowrap" }}>Market Rate</th>
              <th style={{ padding: "11px 18px", textAlign: "right", fontFamily: T.mono, fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: accent, whiteSpace: "nowrap" }}>WMT Rate</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([name, desc, market, wmt], i) => (
              <tr key={name} style={{ borderTop: `1px solid ${T.ruleLight}`, background: i % 2 === 1 ? "rgba(0,0,0,0.02)" : "transparent" }}>
                <td style={{ padding: "12px 18px", fontSize: 13, fontWeight: 500, color: T.ink, lineHeight: 1.4 }}>{name}</td>
                <td className="price-desc-col" style={{ padding: "12px 18px", fontSize: 12.5, color: T.inkSoft, lineHeight: 1.55, maxWidth: 280 }}>{desc}</td>
                <td style={{ padding: "12px 18px", fontFamily: T.mono, fontSize: 11, color: T.inkDim, textAlign: "right", whiteSpace: "nowrap" }}>{market}</td>
                <td style={{ padding: "12px 18px", fontFamily: T.mono, fontSize: 11, fontWeight: 600, color: T.ink, textAlign: "right", whiteSpace: "nowrap" }}>{wmt}</td>
              </tr>
            ))}
            <tr style={{ borderTop: `2px solid ${T.rule}`, background: T.surfaceAlt }}>
              <td style={{ padding: "14px 18px", fontSize: 14, fontWeight: 700, color: T.ink }}>{total[0]}</td>
              <td className="price-desc-col" style={{ padding: "14px 18px", fontSize: 12, color: T.inkSoft, fontWeight: 500 }}>{total[1]}</td>
              <td style={{ padding: "14px 18px", fontFamily: T.mono, fontSize: 12, color: T.inkDim, textAlign: "right", fontWeight: 500, whiteSpace: "nowrap" }}>{total[2]}</td>
              <td style={{ padding: "14px 18px", fontFamily: T.mono, fontSize: 12, fontWeight: 700, color: accent, textAlign: "right", whiteSpace: "nowrap" }}>{total[3]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ── Deliverables Data ── */
const D1 = [
  { title: "Stakeholder Interview Program", desc: "8-12 structured interviews across leadership, operators, athletes/talent, alumni, coaches, fans. Surfaces where perspectives converge and conflict so the brand builds on truth, not assumption." },
  { title: "Competitive Whitespace Mapping", desc: "6-8 competitors evaluated across positioning axes that emerged from interviews. Identifies defensible whitespace with a defended positioning recommendation." },
  { title: "Brand Bridge & Value Equation", desc: "Synthesize stakeholder inputs into brand building blocks mapped against audience building blocks. Solve the Value Equation: key strengths + personality = audience benefit." },
  { title: "Shared Belief Development", desc: "Short-form strategic statement connecting brand and audience at shared human values. 2-3 options workshopped with stakeholders, refined to final approval." },
  { title: "Cultural & Market Trend Analysis", desc: "Broader forces impacting the competitive landscape: industry shifts, audience behavior, technology disruption, regulatory dynamics." },
  { title: "Organizational Capacity Assessment", desc: "Honest evaluation of team structure, content production capability, tech stack, and decision-making dynamics. Grounds every recommendation in operational truth." },
  { title: "Customer / Fan Journey Documentation", desc: "Map the actual journey from discovery to engagement to transaction to post-experience. Identifies friction points, content gaps, and conversion opportunities." },
  { title: "Individual Discovery Sessions", desc: "30-60 minute sessions with key talent for structured profiles: NIL athlete profiles, performer brand alignment, staff storytelling. Formatted for marketplace matching and content production." },
];

const D2 = [
  { title: "Full-Property SEO Health Audit", desc: "Technical and on-page audit across the entire web presence: architecture, crawlability, indexation, speed, mobile, heading hierarchy, internal linking, content depth." },
  { title: "High-Value Page Identification", desc: "Identify pages driving the most traffic or carrying the most conversion weight. Page-level optimization specs for the top 30-50 priority pages with specific recommended copy." },
  { title: "Competitive Keyword & Search Landscape", desc: "Map where the partner ranks, doesn't rank, and where third-party platforms capture intent that should belong to them. Opportunity sizing by query category." },
  { title: "Schema & Structured Data Architecture", desc: "Comprehensive structured data specification for the full content taxonomy. Designed for rich results, AI citation, and knowledge graph presence. Copy-paste ready JSON-LD templates." },
  { title: "AI Search Readiness Assessment", desc: "Evaluate how content surfaces in ChatGPT, Perplexity, Claude, Google AI Overviews. AEO readiness scorecard with content formatting guide for answer extraction." },
  { title: "Search-Informed Content Architecture", desc: "Translate keyword landscape into content architecture: what pages should exist, how they interlink, where editorial strategy needs new content to close organic gaps." },
  { title: "Brand Search Protection", desc: "Ensure the partner owns name queries, related searches, and comparison queries. Competitive monitoring framework with defensive content recommendations." },
  { title: "On-Page SEO & Copy Audit", desc: "Page-level review of titles, meta descriptions, headings, body content, image alt text, internal linking. Specific recommended copy grounded in brand voice from discovery." },
];

const D3 = [
  { title: "Brand Voice & Style Guide", desc: "Voice parameters derived from discovery: tone, vocabulary, narrative patterns. Do/don't examples, channel-specific adaptations, multi-contributor consistency guidelines." },
  { title: "Content Vertical Strategy", desc: "4-6 thematic pillars organizing what the partner publishes. Each vertical mapped to audience segment, strategic objective, and publishing cadence." },
  { title: "Evergreen Editorial Calendar", desc: "12-month content planning independent of results or news cycles. Identity-building content that compounds: profiles, histories, community narratives, features." },
  { title: "Scalable Content Production Model", desc: "Tiered framework: fully automated (feeds/APIs), semi-automated (AI-assisted drafts), human-curated (flagship features). Production math per FTE with AI capacity projections." },
  { title: "AI Content Production Frameworks", desc: "Tested prompt frameworks calibrated to brand voice. Quality benchmarks with accuracy rates. Production time comparisons: manual vs. AI-assisted across annual volume." },
  { title: "Content Hub & Page Architecture", desc: "Blueprint for how content is organized and surfaced: hub pages, interlinking structure, schema requirements. Prioritized by search demand and audience value." },
  { title: "Multi-Platform Content Adaptation", desc: "Strategy for adapting core editorial across web, app, OTT, social, and email. Not reformatting but rethinking what content does on each surface." },
  { title: "Audience-Specific Content Frameworks", desc: "Content strategies tailored to specific audience segments, each mapped to audience truths from discovery. Segmented briefs with topic priorities and distribution recommendations." },
];

const D4 = [
  { title: "Digital Ecosystem Assessment", desc: "Full digital footprint review: web, mobile, social, email, streaming, CMS. Identify redundancies, gaps, integration opportunities. Ecosystem map with improvement roadmap." },
  { title: "Customer / Fan Engagement Strategy", desc: "Data-informed recommendations for engagement across touchpoints, grounded in audience truth from discovery. Platform, content, and feature recommendations tied to measurable outcomes." },
  { title: "Revenue & Monetization Roadmap", desc: "Optimize digital revenue: ticketing, premium content, subscriptions, sponsorship, e-commerce, fundraising. Phased roadmap with financial modeling and resource requirements." },
  { title: "Technology Stack Advisory", desc: "Assessment of CMS, data, and platform architecture with consolidation and future-proofing recommendations. Build-vs-buy analysis tied to content and engagement strategies." },
  { title: "D2C & Streaming Strategy", desc: "Direct-to-consumer content delivery: OTT platform strategy, subscription model design, content programming, audience development. Revenue projections included." },
  { title: "Data & Intelligence Strategy", desc: "Audience data collection, unification, and activation. Privacy-compliant personalization, segmentation, and predictive engagement. Collection framework with activation playbook." },
  { title: "AI Integration Assessment", desc: "AI opportunities across workflows and consumer experiences: content automation, chatbots, recommendations, dynamic pricing. Prioritized by value, feasibility, and organizational readiness." },
  { title: "Digital Transformation Roadmap", desc: "Multi-year strategic plan connecting all advisory workstreams. Phased implementation with quarterly milestones, resource requirements, and governance framework." },
];

/* ── Page ── */

export default function Page() {
  const [tab, setTab] = useState("summary");

  return (
    <div style={{ fontFamily: T.body, color: T.ink, background: T.bg, minHeight: "100vh" }}>
      <style>{`*{box-sizing:border-box;margin:0;padding:0}body{background:${T.bg};color:${T.ink};font-family:${T.body};-webkit-font-smoothing:antialiased}@keyframes fadeIn{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}@media(max-width:768px){.cover-inner{padding:48px 24px !important}.cover-meta-row{flex-direction:column !important;gap:16px !important}.doc-inner{padding:48px 20px 80px !important}.dlv-grid-2{grid-template-columns:1fr !important}.pull-grid-2{grid-template-columns:1fr !important}.flow-row{flex-direction:column !important}.flow-arrow{transform:rotate(90deg) !important;width:auto !important;height:20px !important}.econ-grid-3{grid-template-columns:1fr !important}.off-header{flex-direction:column !important;align-items:flex-start !important;gap:8px !important}.sum-pull-4{grid-template-columns:1fr 1fr !important}.tab-bar-inner{gap:20px !important;padding:0 20px !important}.price-table-wrap{overflow-x:auto;-webkit-overflow-scrolling:touch}.price-desc-col{display:none !important}.sum-grid-3{grid-template-columns:1fr !important}}`}</style>

      {/* ═══ COVER ═══ */}
      <div style={{ background: T.deep, minHeight: "calc(100vh - 56px)", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "radial-gradient(ellipse 600px 400px at 72% 28%, rgba(37,99,235,0.08), transparent), radial-gradient(ellipse 400px 500px at 25% 75%, rgba(180,83,9,0.04), transparent)" }} />
        <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", background: "repeating-linear-gradient(-45deg, transparent, transparent 14px, rgba(255,255,255,0.02) 14px, rgba(255,255,255,0.02) 15px)" }} />
        <div className="cover-inner" style={{ position: "relative", zIndex: 2, padding: "80px 80px 60px" }}>
          <div style={{ ...S.mono9, color: T.accent, marginBottom: 44, display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ width: 32, height: 1, background: T.accent, display: "inline-block" }} />
            Professional Services &middot; Opportunity Framework
          </div>
          <h1 style={{ fontFamily: T.display, fontSize: 50, fontWeight: 700, lineHeight: 1.06, maxWidth: 720, marginBottom: 26, letterSpacing: "-0.01em", color: "#EEF2F8" }}>
            The Intelligence <em style={{ fontStyle: "italic", fontWeight: 500, color: T.accent }}>Layer</em>
          </h1>
          <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.65, color: "rgba(238,242,248,0.72)", maxWidth: 600, marginBottom: 52, fontFamily: T.body }}>
            A vision for the strategic practice that sits behind QuantOS, FanOS, RevOS, and StoryOS. Making every product smarter, every partner relationship deeper, and the portfolio more defensible.
          </p>
          <div className="cover-meta-row" style={{ display: "flex", gap: 48, borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 26 }}>
            {[["Prepared by", "Chris Gray"], ["For", "WMT Digital, Internal Discussion"], ["Date", "March 2026"]].map(([l, v]) => (
              <div key={l} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ ...S.mono9, color: "rgba(238,242,248,0.4)" }}>{l}</span>
                <span style={{ fontSize: 14, fontWeight: 500, color: "#EEF2F8" }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 28, right: 44, zIndex: 2, ...S.mono9, color: "rgba(238,242,248,0.35)", background: "rgba(37,99,235,0.08)", padding: "6px 14px", borderRadius: 2 }}>
          Internal &middot; Not for Distribution
        </div>
      </div>

      {/* ═══ TAB BAR ═══ */}
      <div style={{ display: "flex", justifyContent: "center", background: T.surface, borderBottom: `1px solid ${T.rule}`, position: "sticky", top: 0, zIndex: 100 }}>
        <div className="tab-bar-inner" style={{ display: "flex", gap: 40, padding: "0 48px" }}>
          {[["summary", "Summary"], ["full", "Full Build"], ["pricing", "Pricing"]].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              style={{
                fontFamily: T.mono, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase",
                color: tab === key ? T.accent : T.mid, padding: "16px 0", cursor: "pointer", border: "none", background: "none",
                borderBottom: tab === key ? `2px solid ${T.accent}` : "2px solid transparent", transition: "color 0.2s",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ═══════════ SUMMARY TAB ═══════════ */}
      {tab === "summary" && (
        <div style={{ animation: "fadeIn 0.3s ease" }}>
          <div className="doc-inner" style={{ maxWidth: 900, margin: "0 auto", padding: "72px 48px 100px" }}>
            <SecHead num="The Thesis" title="The Opportunity" em="I See" />
            <P>After two weeks embedded in the MSG engagement, my mind has been running on what professional services could look like at WMT. Not as a new idea, but as a fully realized version of what already exists. The partner base, the relationships, and the trust are already here. The opportunity is in the structure and the methodology that could turn individual efforts into a scalable practice with real economic weight.</P>
            <P>WMT's partners don't just need platforms. They need strategic intelligence (brand clarity, content systems, search visibility, and digital strategy) that makes the platform work harder. A structured professional services practice generates its own revenue while creating natural pull-through to QuantOS, FanOS, RevOS, and StoryOS. It becomes a new door to the entire ecosystem.</P>
            <Callout>
              <p style={{ fontSize: 15, lineHeight: 1.72, color: T.ink, margin: 0 }}><strong>The thesis:</strong> Professional services is already happening at WMT. The opportunity is to give it structure, a repeatable methodology, and a strategic lead. Turning it from a fragmented support function into WMT's most defensible revenue layer. One that generates its own economics while feeding every existing product line with better-informed, higher-conviction partners.</p>
            </Callout>

            <SecHead num="The Practice" title="Four Offerings" />
            <P>Four defined service offerings, each with a comprehensive deliverable catalog that applies across every partner in the portfolio. The methodology is consistent. The application adapts to the partner's context.</P>

            <SumOffering num="01" title="Strategic Discovery" color="blue" desc="The ideal entry point to every engagement. A structured, multi-stakeholder process that surfaces brand identity, competitive positioning, audience truth, and organizational dynamics. Built on proven brand strategy disciplines: stakeholder interviews, competitive whitespace mapping, Brand Bridge synthesis, Value Equation, and Shared Belief development. Produces a living knowledge asset that informs every downstream service and platform decision." dlvs="Deliverables: Stakeholder Interview Program · Competitive Whitespace Mapping · Brand Bridge & Value Equation · Shared Belief Development · Cultural & Market Trend Analysis · Organizational Capacity Assessment · Customer/Fan Journey Documentation · Individual Discovery Sessions" />
            <SumOffering num="02" title="SEO & AEO Strategy" color="gold" desc="Search optimization grounded in who the partner actually is, not industry templates. Technical SEO, on-page auditing, competitive keyword mapping, structured data architecture, and AI search readiness. Every recommendation informed by discovery output." dlvs="Deliverables: Full-Property SEO Health Audit · High-Value Page Identification & Optimization · Competitive Keyword & Search Landscape · Schema & Structured Data Architecture · AI Search Readiness Assessment · Search-Informed Content Architecture · Brand Search Protection & Ownership · On-Page SEO & Copy Audit" />
            <SumOffering num="03" title="Content Strategy & Editorial" color="green" desc="Content systems designed for scale and identity. Editorial production models, brand voice frameworks, AI-assisted workflows, and publishing architectures, built to produce consistent, identity-aligned content across platforms without requiring massive internal teams." dlvs="Deliverables: Brand Voice & Style Guide · Content Vertical Strategy · Evergreen Editorial Calendar · Scalable Content Production Model · AI Content Production Frameworks · Content Hub & Page Architecture · Multi-Platform Content Adaptation · Audience-Specific Content Frameworks" />
            <SumOffering num="04" title="Digital Strategy & Advisory" color="purple" desc="Platform-level strategic guidance that translates partner goals into actionable digital architecture decisions. This is the offering that most directly creates pull-through to WMT's core products, because every strategic recommendation naturally points to a platform capability WMT already has." dlvs="Deliverables: Digital Ecosystem Assessment · Customer/Fan Engagement Strategy · Revenue & Monetization Roadmap · Technology Stack Advisory · D2C & Streaming Strategy · Data & Intelligence Strategy · AI Integration Assessment · Digital Transformation Roadmap" />

            <SecHead num="The Ecosystem" title="How PS Feeds the" em="Platform" />
            <P>Every PS engagement surfaces implementation needs that map directly to WMT's four product pillars. Discovery reveals what the partner needs. PS offerings address it strategically. The full implementation lives in the existing product ecosystem.</P>

            <div style={{ margin: "36px 0" }}>
              <FunnelStage label="Discovery" items="Surfaces brand identity, audience truth, competitive position, organizational mechanics, content gaps, technology constraints, revenue opportunities" variant="entry" />
              <div style={{ textAlign: "center", padding: "6px 0", color: T.mid, fontSize: 18 }}>↓</div>
              <FunnelStage label="PS Offerings" items="SEO & AEO · Content Strategy · Digital Advisory → each producing deliverables that identify implementation needs" variant="ps" />
              <div style={{ textAlign: "center", padding: "6px 0", color: T.mid, fontSize: 18 }}>↓</div>
              <FunnelStage label="WMT Platform" items="QuantOS · FanOS · RevOS · StoryOS" variant="prod" />
            </div>

            <div className="sum-pull-4" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 14, margin: "32px 0" }}>
              {[
                ["QuantOS", "PS generates the strategic intelligence that makes QuantOS's data, analytics, and marketing services more precise and actionable."],
                ["FanOS", "PS defines what the fan experience platform needs to deliver. Discovery provides the brand parameters for every design and UX decision."],
                ["RevOS", "Revenue strategy identifies monetization opportunities. PS provides the rationale for which RevOS products to deploy and in what order."],
                ["StoryOS", "Content strategy produces the editorial architecture that StoryOS delivers at scale. Discovery calibrates AI content to the partner's actual voice."],
              ].map(([name, desc]) => (
                <div key={name} style={{ padding: "18px", border: `1px solid ${T.rule}`, borderRadius: 6, textAlign: "center", background: T.surface }}>
                  <h5 style={{ ...S.mono11, color: T.green, marginBottom: 8 }}>{name}</h5>
                  <p style={{ fontSize: 12, lineHeight: 1.6, color: T.inkSoft, margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>

            <SecHead num="The Economics" title="How It" em="Compounds" />

            <div className="econ-grid-3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 18, margin: "32px 0" }}>
              <EconCard value="1" label="Direct Revenue" desc="Discovery and strategic services are paid engagements. A strategic asset partners receive and keep." />
              <EconCard value="2" label="Product Pull-Through" desc="Every PS engagement surfaces needs that map to QuantOS, FanOS, RevOS, and StoryOS." />
              <EconCard value="3" label="Competitive Moat" desc="Institutional knowledge doesn't transfer. The longer the relationship, the harder WMT is to replace." />
            </div>

            <SecHead num="What's Next" title="MSG as" em="Proof Case" />
            <P>The MSG engagement is already demonstrating what three of these four offerings look like in practice: SEO strategy, content architecture, digital advisory. Discovery isn't within the current scope, but the work has made the case for it. Every deliverable would be sharper with a formal discovery foundation underneath it.</P>
            <P>If the engagement formalizes, it becomes the natural proof case for the full practice. From there, the question is which existing partners would benefit most from having this layer applied. The answer is probably most of them.</P>

            <Callout>
              <p style={{ fontSize: 15, lineHeight: 1.72, color: T.ink, margin: 0 }}><strong>What I know for certain:</strong> This opportunity is significant. With the right structure and support, professional services becomes a real revenue line for WMT, one that feeds demand across QuantOS, FanOS, RevOS, and StoryOS while deepening every partner relationship in the portfolio. I'd love to be part of building it.</p>
            </Callout>

            <div style={{ marginTop: 72, padding: 44, background: T.surface, border: `1px solid ${T.rule}`, borderRadius: 8, textAlign: "center" }}>
              <h3 style={{ fontFamily: T.display, fontSize: 26, fontWeight: 600, marginBottom: 14 }}>
                The pieces are already here. <em style={{ fontStyle: "italic", fontWeight: 400, color: T.accent }}>Let's connect them.</em>
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.72, color: T.inkSoft, maxWidth: 580, margin: "0 auto" }}>
                WMT has the partners, the trust, and four product pillars that cover data, fan experience, revenue, and storytelling. Professional services is the strategic intelligence layer that makes all four more effective, more personalized, and harder to compete against. I believe this is WMT's next chapter. I'd like to help write it.
              </p>
            </div>
          </div>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "28px 48px", display: "flex", justifyContent: "space-between", borderTop: `1px solid ${T.rule}`, fontFamily: T.mono, fontSize: 10, letterSpacing: "0.10em", color: T.mid }}>
            <span>Chris Gray Strategy &middot; March 2026</span>
            <span>WMT Internal &middot; Not for Distribution</span>
          </div>
        </div>
      )}

      {/* ═══════════ FULL BUILD TAB ═══════════ */}
      {tab === "full" && (
        <div style={{ animation: "fadeIn 0.3s ease" }}>
          <div className="doc-inner" style={{ maxWidth: 900, margin: "0 auto", padding: "72px 48px 100px" }}>
            <SecHead num="01" title="Four Offerings," em="Deep" />
            <P>Four defined service offerings, each with a comprehensive deliverable catalog that applies across every partner in the portfolio. The methodology is consistent. The application adapts to the partner's context, but the work is the work, regardless of vertical.</P>

            <OfferingBlock num="01" title="Strategic Discovery" tag="Foundation" color="blue" desc="The ideal entry point to every engagement. A structured, multi-stakeholder process that surfaces brand identity, competitive positioning, audience truth, and organizational dynamics through guided interviews, competitive whitespace analysis, and strategic synthesis frameworks. The methodology draws from proven brand strategy disciplines to produce a living knowledge asset that informs every downstream service and platform decision." deliverables={D1} />
            <OfferingBlock num="02" title="SEO & AEO Strategy" tag="Visibility" color="gold" desc="Search optimization grounded in who the partner actually is, not industry templates. Technical SEO, on-page auditing, competitive keyword mapping, structured data architecture, and AI search readiness. Every recommendation informed by discovery output: the partner's brand language, competitive position, and business priorities." deliverables={D2} />
            <OfferingBlock num="03" title="Content Strategy & Editorial" tag="Voice" color="green" desc="Content systems designed for scale and identity. Editorial production models, brand voice frameworks, AI-assisted workflows, and publishing architectures, built to produce consistent, identity-aligned content across platforms without requiring massive internal teams." deliverables={D3} />
            <OfferingBlock num="04" title="Digital Strategy & Advisory" tag="Direction" color="purple" desc="Platform-level strategic guidance that translates partner goals into actionable digital architecture decisions. Ecosystem assessments, product roadmap prioritization, customer journey mapping, and competitive positioning. This is the offering that most directly creates pull-through to WMT's core products." deliverables={D4} />

            <SecHead num="02" title="Across the" em="Portfolio" />
            <P>The four offerings are vertical-agnostic. The methodology and deliverables apply consistently across every partner type. What changes is the context: the stakeholders you interview, the competitors you map, the content types you optimize, the revenue streams you assess.</P>

            <div style={{ margin: "32px 0", border: `1px solid ${T.rule}`, borderRadius: 8, overflow: "hidden", background: T.surface }}>
              <VerticalRow color="blue" name="Collegiate Athletics" desc="Notre Dame · Miami · Kentucky · LSU · Clemson · Arkansas · Florida State · Georgia Tech · Kansas · Ohio State · BYU · Cincinnati · Auburn · Stanford · South Carolina · Iowa · Mountain West Conference. Athletic departments are understaffed, under-resourced in strategic marketing, and under pressure to differentiate. Most don't have dedicated SEO, content strategy, or brand positioning capabilities. Professional services fills that gap." />
              <VerticalRow color="gold" name="Professional Sports & Leagues" desc="NFL · USA Basketball · LaLiga · NASCAR · Professional Volleyball Federation · NABC · Collegiate Sports Connect. Leagues and federations operate at different scale with complex stakeholder environments. Professional services can be the entry wedge: a lower-commitment engagement that demonstrates strategic value before a platform deal." />
              <VerticalRow color="green" name="Live Entertainment & Music" desc="Via Aloompa: Live Nation · BET Experience · Outside Lands · BravoCon · NOBULL CrossFit Games · Summerfest. In pipeline: MSG Entertainment. The Aloompa acquisition brought WMT into entertainment with deep mobile expertise. The MSG engagement is the proof case: 16 digital properties, no internal SEO or content strategy, and a 17% decline in ticket revenue." />
              <VerticalRow color="purple" name="E-Commerce & Lifestyle Brands" desc="Silvia Tcherassi · REVELxp. Platform work extending beyond sports into luxury e-commerce and experiential brands. Professional services here is more conversion-focused and brand-sensitive, but the foundational methodology is identical." />
            </div>

            <SecHead num="03" title="Discovery as the" em="Engine" />
            <P>Across every vertical and every offering, discovery is the foundational layer. It's the methodology that makes everything else more precise, more personalized, and more defensible. Without it, services default to industry templates. With it, every recommendation is grounded in verified understanding of who the partner is and what they actually need.</P>
            <P>The methodology is rigorous. It's built on proven brand strategy frameworks: stakeholder interviews that surface competing perspectives, competitive whitespace mapping that identifies defensible positioning, and a Brand Bridge synthesis that connects what the organization offers with what its audience actually values.</P>

            <div className="flow-row" style={{ margin: "36px 0", display: "flex", alignItems: "stretch" }}>
              <FlowStep phase="Phase 1" title="Research & Mapping" desc="Review existing documentation, data, and research. Map stakeholder groups. Evaluate 6-8 competitors. Identify cultural trends impacting the partner's space." />
              <div className="flow-arrow" style={{ width: 20, display: "flex", alignItems: "center", justifyContent: "center", color: T.accent, fontSize: 16, flexShrink: 0 }}>→</div>
              <FlowStep phase="Phase 2" title="Stakeholder Sessions" desc="8-12 guided interviews across the full stakeholder spectrum. Designed to surface where consensus breaks and conviction runs deepest." />
              <div className="flow-arrow" style={{ width: 20, display: "flex", alignItems: "center", justifyContent: "center", color: T.accent, fontSize: 16, flexShrink: 0 }}>→</div>
              <FlowStep phase="Phase 3" title="Strategy Synthesis" desc="Competitive whitespace mapping. Brand Bridge construction. Value Equation solved. Shared Belief developed. Competing perspectives reconciled into strategic truth." />
              <div className="flow-arrow" style={{ width: 20, display: "flex", alignItems: "center", justifyContent: "center", color: T.accent, fontSize: 16, flexShrink: 0 }}>→</div>
              <FlowStep phase="Phase 4" title="Activation" desc="Translate into working assets: brand voice guides, AI knowledge files, content architectures. Partner receives comprehensive brand intelligence. WMT retains structured repository." />
            </div>

            <P>The output is dual-purpose. The partner receives what is often the most rigorous articulation of their brand identity they've ever had. WMT retains a structured knowledge repository: markdown files for AI workflows, brand parameters for content production, competitive positioning data, and strategic context every delivery team can access.</P>

            <Callout variant="gold">
              <p style={{ fontSize: 15, lineHeight: 1.72, color: T.ink, margin: 0 }}><strong>Why this matters at scale:</strong> The more partners WMT puts through discovery, the more institutional knowledge accumulates. Understanding what makes a Power Five department different from a mid-major, or how an entertainment venue's challenges differ from a professional league's, builds pattern recognition that makes every subsequent engagement faster, sharper, and more valuable.</p>
            </Callout>

            <SecHead num="04" title="How PS Feeds the" em="Ecosystem" />
            <P>This is what makes professional services more than a standalone revenue line. WMT's product ecosystem is already organized around four pillars: QuantOS, FanOS, RevOS, and StoryOS. Professional services doesn't compete with any of them. It makes all of them more effective, more personalized, and easier to sell.</P>
            <P>The chain is simple: Discovery reveals what the partner needs. The PS offerings begin to address it strategically. And the full implementation lives in WMT's existing product pillars. Professional services becomes the front door to the entire ecosystem.</P>

            <SubHead title="The" em="Full Chain" />

            <div style={{ margin: "32px 0" }}>
              <FunnelStage label="Discovery" items="Strategic Discovery → surfaces brand identity, audience truth, competitive position, organizational mechanics, content gaps, technology constraints, and revenue opportunities" variant="entry" />
              <div style={{ textAlign: "center", padding: "6px 0", color: T.mid, fontSize: 18 }}>↓</div>
              <FunnelStage label="PS Offerings" items="SEO & AEO Strategy · Content Strategy & Editorial · Digital Strategy & Advisory → each informed by discovery, each producing deliverables that identify implementation needs the partner can't address alone" variant="ps" />
              <div style={{ textAlign: "center", padding: "6px 0", color: T.mid, fontSize: 18 }}>↓</div>
              <FunnelStage label="WMT Platform" items="QuantOS · FanOS · RevOS · StoryOS → the implementation layer that brings strategic recommendations to life across data, fan experience, monetization, and narrative" variant="prod" />
            </div>

            <SubHead title="Pull-Through by" em="Platform Pillar" />
            <P>Here's how professional services naturally creates demand for each OS pillar. These aren't hypothetical. They're the conversations that happen organically when the strategic work reveals implementation gaps:</P>

            <div className="pull-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, margin: "32px 0" }}>
              <PullCard product="→ QuantOS" headline="Discovery and SEO strategy generate the intelligence that QuantOS operationalizes." body="Discovery surfaces audience segments, competitive positioning, and behavioral truths. SEO/AEO strategy produces keyword landscapes, search performance baselines, and competitive monitoring frameworks. All data that feeds directly into QuantOS's fan insight platform, organizational analytics, and marketing services." fedBy="Fed by: Discovery + SEO/AEO Strategy + Digital Advisory" />
              <PullCard product="→ FanOS" headline="Digital strategy and content architecture define what the fan experience platform needs to deliver." body="Advisory work reveals platform gaps: outdated apps, websites that don't reflect the brand, fragmented calendar experiences. Content strategy defines the editorial architecture the platform needs to surface. Discovery provides brand parameters for every design and UX decision." fedBy="Fed by: Discovery + Digital Advisory + Content Strategy" />
              <PullCard product="→ RevOS" headline="Revenue strategy identifies monetization gaps that RevOS's product suite is built to close." body="Digital advisory surfaces dynamic pricing needs, underperforming e-commerce, unexplored subscription models, or ticket purchase friction. Discovery reveals which revenue opportunities align with the partner's brand. RevOS products are the implementation layer." fedBy="Fed by: Discovery + Digital Advisory + SEO Strategy" />
              <PullCard product="→ StoryOS" headline="Content strategy produces the editorial architecture that StoryOS delivers at scale." body="Content strategy surfaces premium narrative assets without distribution, AI-assisted production needs, streaming/OTT potential, or missing video/podcast strategies. Discovery provides the brand voice files that make AI content sound like the partner." fedBy="Fed by: Content Strategy + Discovery + Digital Advisory" />
            </div>

            <Callout variant="green">
              <p style={{ fontSize: 15, lineHeight: 1.72, color: T.ink, margin: 0 }}><strong>The compounding effect:</strong> The partner that engages across professional services doesn't just buy one OS pillar. They buy the ecosystem. Because every recommendation is grounded in shared understanding from discovery, every platform integration is coherent, every content decision is on-brand, and every monetization strategy is aligned. Switching means abandoning institutional knowledge. That's the moat.</p>
            </Callout>

            <SecHead num="05" title="How It" em="Compounds" />
            <P>Professional services generates value through three simultaneous mechanics, each reinforcing the others:</P>

            <div className="econ-grid-3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 18, margin: "32px 0" }}>
              <EconCard value="1" label="Direct Revenue" desc="Discovery and strategic services are paid engagements. Partners invest because the output is intrinsically valuable. A strategic asset they receive and keep." />
              <EconCard value="2" label="Product Pull-Through" desc="Every PS engagement surfaces implementation needs that map to QuantOS, FanOS, RevOS, and StoryOS. The partner who starts with discovery arrives at platform conversations better informed, higher conviction, and faster to close." />
              <EconCard value="3" label="Competitive Moat" desc="Institutional knowledge doesn't transfer. Switching means starting from zero. The longer and deeper the relationship, the harder WMT is to replace." />
            </div>
          </div>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "28px 48px", display: "flex", justifyContent: "space-between", borderTop: `1px solid ${T.rule}`, fontFamily: T.mono, fontSize: 10, letterSpacing: "0.10em", color: T.mid }}>
            <span>Chris Gray Strategy &middot; March 2026</span>
            <span>WMT Internal &middot; Not for Distribution</span>
          </div>
        </div>
      )}

      {/* ═══════════ PRICING TAB ═══════════ */}
      {tab === "pricing" && (
        <div style={{ animation: "fadeIn 0.3s ease" }}>
          <div className="doc-inner" style={{ maxWidth: 900, margin: "0 auto", padding: "72px 48px 100px" }}>
            <SecHead num="The Menu" title="What It" em="Costs" />
            <P>Every deliverable in the professional services practice is individually priced. Partners select what they need. The methodology is consistent. The investment scales with scope.</P>
            <P>Market rates reflect 2025-2026 industry benchmarks for equivalent services from enterprise agencies, brand consultancies, and specialized firms. WMT rates reflect the competitive advantage of an embedded strategic services model: AI-assisted methodology, no agency overhead, and integrated delivery within the WMT ecosystem.</P>

            <PriceCard num="01" title="Strategic Discovery" tag="Foundation" color="blue" accent={T.accent} accentSoft={T.accentSoft} rows={[
              ["Stakeholder Interview Program","6-10 structured interviews with leadership, staff, partners","$15,000-$25,000","$8,000-$12,000"],
              ["Competitive Whitespace Mapping","Market positioning analysis, gap identification, opportunity framework","$10,000-$20,000","$6,000-$10,000"],
              ["Brand Bridge & Value Equation","Core positioning framework connecting brand identity to market value","$15,000-$30,000","$8,000-$15,000"],
              ["Shared Belief Development","Unifying organizational narrative and belief system","$10,000-$20,000","$5,000-$10,000"],
              ["Cultural & Market Trend Analysis","Industry landscape, consumer behavior, market dynamics","$8,000-$15,000","$5,000-$8,000"],
              ["Organizational Capacity Assessment","Team structure, workflow, resource audit against objectives","$8,000-$12,000","$4,000-$7,000"],
              ["Customer/Fan Journey Documentation","Full-lifecycle touchpoint mapping from awareness to advocacy","$10,000-$20,000","$6,000-$10,000"],
              ["Individual Discovery Sessions","1:1 deep-dive sessions with key stakeholders or athletes","$3,000-$5,000 ea","$2,000-$3,000 ea"],
            ]} total={["Full Suite Total","All 8 deliverables","$79K-$147K","$44K-$75K"]} />

            <PriceCard num="02" title="SEO & AEO Strategy" tag="Visibility" color="gold" accent={T.gold} accentSoft={T.goldSoft} rows={[
              ["Full-Property SEO Health Audit","Technical audit, crawl analysis, indexing, site architecture","$10,000-$25,000","$6,000-$12,000"],
              ["High-Value Page ID & Optimization","Priority page analysis with optimization roadmap","$8,000-$15,000","$5,000-$8,000"],
              ["Competitive Keyword & Search Landscape","Full keyword universe mapping, competitor gap analysis","$8,000-$15,000","$5,000-$8,000"],
              ["Schema & Structured Data Architecture","JSON-LD schema strategy, implementation roadmap, rich result targeting","$8,000-$15,000","$5,000-$8,000"],
              ["AI Search Readiness Assessment","AEO strategy for ChatGPT, Perplexity, Google AI Overviews","$10,000-$20,000","$6,000-$10,000"],
              ["Search-Informed Content Architecture","Content structure mapped to search intent and topic clusters","$8,000-$15,000","$5,000-$8,000"],
              ["Brand Search Protection & Ownership","Branded query defense, secondary market mitigation","$5,000-$12,000","$3,000-$6,000"],
              ["On-Page SEO & Copy Audit","Title tags, meta descriptions, heading structure, internal linking","$5,000-$10,000","$3,000-$6,000"],
            ]} total={["Full Suite Total","All 8 deliverables","$62K-$127K","$38K-$66K"]} />

            <PriceCard num="03" title="Content Strategy & Editorial" tag="Voice" color="green" accent={T.green} accentSoft={T.greenSoft} rows={[
              ["Brand Voice & Style Guide","Comprehensive voice framework, tone parameters, usage guidelines","$15,000-$25,000","$8,000-$12,000"],
              ["Content Vertical Strategy","Define content pillars, topics, themes by audience and channel","$8,000-$15,000","$5,000-$8,000"],
              ["Evergreen Editorial Calendar","12-month content calendar with cadence, ownership, seasonal mapping","$5,000-$10,000","$3,000-$6,000"],
              ["Scalable Content Production Model","Workflow design, roles, approval chain, production cadence","$10,000-$20,000","$6,000-$10,000"],
              ["AI Content Production Frameworks","AI-assisted production system with quality control and brand calibration","$10,000-$25,000","$6,000-$12,000"],
              ["Content Hub & Page Architecture","Site structure for content hubs, topic clusters, internal linking","$8,000-$15,000","$5,000-$8,000"],
              ["Multi-Platform Content Adaptation","Repurposing frameworks across web, social, email, in-venue","$5,000-$10,000","$3,000-$6,000"],
              ["Audience-Specific Content Frameworks","Persona-driven content models for distinct audience segments","$8,000-$15,000","$5,000-$8,000"],
            ]} total={["Full Suite Total","All 8 deliverables","$69K-$135K","$41K-$70K"]} />

            <PriceCard num="04" title="Digital Strategy & Advisory" tag="Direction" color="purple" accent={T.purple} accentSoft={T.purpleSoft} rows={[
              ["Digital Ecosystem Assessment","Full-stack audit of digital properties, tools, platforms, integrations","$15,000-$30,000","$8,000-$15,000"],
              ["Customer/Fan Engagement Strategy","Engagement model across digital touchpoints, loyalty, retention","$10,000-$25,000","$6,000-$12,000"],
              ["Revenue & Monetization Roadmap","Digital revenue strategy tied to tickets, sponsorships, merchandise, content","$15,000-$30,000","$8,000-$15,000"],
              ["Technology Stack Advisory","Platform evaluation, integration strategy, build vs. buy analysis","$10,000-$25,000","$6,000-$12,000"],
              ["D2C & Streaming Strategy","Direct-to-consumer content delivery, OTT, membership models","$15,000-$30,000","$8,000-$15,000"],
              ["Data & Intelligence Strategy","First-party data architecture, analytics framework, insight activation","$15,000-$30,000","$8,000-$15,000"],
              ["AI Integration Assessment","AI readiness audit, use case mapping, implementation roadmap","$10,000-$25,000","$6,000-$12,000"],
              ["Digital Transformation Roadmap","Multi-year digital strategy with phasing, priorities, investment model","$20,000-$50,000","$10,000-$25,000"],
            ]} total={["Full Suite Total","All 8 deliverables","$110K-$245K","$60K-$121K"]} />

            <SecHead num="The Total Picture" title="Full Practice" em="Economics" />

            <div style={{ margin: "32px 0", border: `1px solid ${T.rule}`, borderRadius: 8, overflow: "hidden", background: T.surface }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: T.accentSoft }}>
                    {["Vertical","Market Rate","WMT Rate"].map(h=><th key={h} style={{ padding: "12px 18px", textAlign: "left", fontFamily: T.mono, fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: T.accent }}>{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["01: Strategic Discovery","$79K-$147K","$44K-$75K",T.accent],
                    ["02: SEO & AEO Strategy","$62K-$127K","$38K-$66K",T.gold],
                    ["03: Content Strategy & Editorial","$69K-$135K","$41K-$70K",T.green],
                    ["04: Digital Strategy & Advisory","$110K-$245K","$60K-$121K",T.purple],
                  ].map(([v,m,w,c],i)=>(
                    <tr key={v} style={{ borderTop: `1px solid ${T.ruleLight}`, background: i%2===1?"rgba(0,0,0,0.02)":"transparent" }}>
                      <td style={{ padding: "14px 18px", fontSize: 14, fontWeight: 500, color: T.ink }}><span style={{ color: c, fontFamily: T.mono, fontSize: 11, marginRight: 8 }}>{v.slice(0,2)}</span>{v.slice(4)}</td>
                      <td style={{ padding: "14px 18px", fontFamily: T.mono, fontSize: 12, color: T.inkDim }}>{m}</td>
                      <td style={{ padding: "14px 18px", fontFamily: T.mono, fontSize: 12, fontWeight: 600, color: T.ink }}>{w}</td>
                    </tr>
                  ))}
                  <tr style={{ borderTop: `2px solid ${T.rule}`, background: T.surfaceAlt }}>
                    <td style={{ padding: "16px 18px", fontSize: 15, fontWeight: 700, color: T.ink }}>All 32 Deliverables</td>
                    <td style={{ padding: "16px 18px", fontFamily: T.mono, fontSize: 13, color: T.inkDim, fontWeight: 500 }}>$320K-$654K</td>
                    <td style={{ padding: "16px 18px", fontFamily: T.mono, fontSize: 13, fontWeight: 700, color: T.accent }}>$183K-$332K</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Callout>
              <p style={{ fontSize: 15, lineHeight: 1.72, color: T.ink, margin: 0 }}>At the WMT Rate, a single partner engaging two full verticals generates <strong>$82K-$141K</strong> in professional services revenue before any platform pull-through to QuantOS, FanOS, RevOS, or StoryOS.</p>
            </Callout>
            <Callout>
              <p style={{ fontSize: 15, lineHeight: 1.72, color: T.ink, margin: 0 }}>Three partners at similar scope: <strong>$246K-$423K annually</strong> in professional services revenue alone. The practice pays for itself while creating demand for every product WMT already sells.</p>
            </Callout>

            <SecHead num="Notes" title="How to Read" em="This Menu" />
            <div style={{ margin: "24px 0 0", fontSize: 15, lineHeight: 1.85, color: T.ink, maxWidth: 740 }}>
              <p style={{ margin: "0 0 14px" }}><strong>Market Rate:</strong> What a partner would pay an external agency or consultancy for this deliverable in isolation.</p>
              <p style={{ margin: "0 0 14px" }}><strong>WMT Rate:</strong> The competitive rate enabled by the embedded strategic services model. Represents 40-55% of open market pricing.</p>
              <p style={{ margin: "0 0 14px" }}>Deliverables are modular. Partners select what they need. Full vertical suites offer the most value.</p>
              <p style={{ margin: "0 0 14px" }}>Pricing is per-partner, per-engagement. Multi-partner retainer arrangements are separate.</p>
              <p style={{ margin: 0 }}>WMT markup, project management, design support, and platform implementation fees are additional and scoped by WMT.</p>
            </div>
          </div>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "28px 48px", display: "flex", justifyContent: "space-between", borderTop: `1px solid ${T.rule}`, fontFamily: T.mono, fontSize: 10, letterSpacing: "0.10em", color: T.mid }}>
            <span>Chris Gray Strategy &middot; March 2026</span>
            <span>WMT Internal &middot; Not for Distribution</span>
          </div>
        </div>
      )}
    </div>
  );
}
