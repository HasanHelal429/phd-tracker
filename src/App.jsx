import { useState } from "react";

const schools = [
  {
    rank: 1,
    name: "MIT",
    location: "Cambridge, MA",
    tag: "Broadest research scope",
    color: "purple",
    strengths: ["Condensed matter", "High-energy / particle theory", "Astrophysics & cosmology", "AMO & quantum info", "Nuclear & plasma physics"],
    deadline: "Dec 15",
    gre: "Optional (recommended)",
    phys_gre: "Optional",
    lor: 3,
    sop: true,
    cv: true,
    transcript: true,
    fee: "$90",
    stipend: "~$45k/yr",
    notes: "Full funding guaranteed. Qualifying exams in Classical Mech, E&M, QM, Stat Mech during first two years.",
    url: "https://oge.mit.edu/programs/physics/"
  },
  {
    rank: 2,
    name: "Stanford",
    location: "Stanford, CA",
    tag: "Strong theory + quantum",
    color: "coral",
    strengths: ["Particle physics & theory", "Condensed matter", "Quantum information & computing", "Photonics & applied physics", "Astrophysics"],
    deadline: "Dec 1–2",
    gre: "Required (General)",
    phys_gre: "Optional",
    lor: 3,
    sop: true,
    cv: true,
    transcript: true,
    fee: "~$125",
    stipend: "~$51k/yr",
    notes: "GRE General required as of 2026–27 cycle. Physics GRE optional. Strong connections to SLAC National Lab.",
    url: "https://physics.stanford.edu/prospective-students/graduate-admissions"
  },
  {
    rank: 3,
    name: "Caltech",
    location: "Pasadena, CA",
    tag: "Tiny + elite, space-focused",
    color: "amber",
    strengths: ["Astrophysics & gravitational waves (LIGO)", "High-energy theory", "Condensed matter", "Quantum information", "Nuclear / particle experiment"],
    deadline: "Dec 15",
    gre: "Optional",
    phys_gre: "Optional",
    lor: 3,
    sop: true,
    cv: true,
    transcript: true,
    fee: "$100",
    stipend: "~$40k/yr",
    notes: "Exceptionally small program (~20 admits/yr). 3:1 student-to-faculty ratio. Tied to NASA JPL and LIGO.",
    url: "https://www.pma.caltech.edu/research-and-academics/physics/physics-graduate-studies"
  },
  {
    rank: 4,
    name: "Harvard",
    location: "Cambridge, MA",
    tag: "AMO & condensed matter powerhouse",
    color: "red",
    strengths: ["AMO physics", "Condensed matter / quantum matter", "Biophysics", "Particle theory & cosmology", "Quantum information"],
    deadline: "Dec 15",
    gre: "Optional",
    phys_gre: "Optional",
    lor: 3,
    sop: true,
    cv: true,
    transcript: true,
    fee: "$105",
    stipend: "~$47k/yr",
    notes: "Holistic review — no score cutoffs. Half of undergrad credit hours should be in physics/math/chemistry.",
    url: "https://www.physics.harvard.edu/grad/admissions"
  },
  {
    rank: 5,
    name: "UC Berkeley",
    location: "Berkeley, CA",
    tag: "#1 public; theory + experiment",
    color: "amber",
    strengths: ["Particle physics & theory", "Condensed matter", "Astrophysics & cosmology", "Nuclear physics", "AMO & quantum computing"],
    deadline: "Dec 15",
    gre: "Not reviewed",
    phys_gre: "Optional (required from Fall 2027)",
    lor: 3,
    sop: true,
    cv: false,
    transcript: true,
    fee: "$140",
    stipend: "~$47k/yr",
    notes: "Physics GRE required for Fall 2027+ applicants. Don't submit General GRE — it won't be reviewed. Personal history statement also required.",
    url: "https://physics.berkeley.edu/academic/graduate-degree/graduate-admissions"
  },
  {
    rank: 6,
    name: "Princeton",
    location: "Princeton, NJ",
    tag: "Theory-heavy; plasma physics",
    color: "teal",
    strengths: ["High-energy & particle theory", "Condensed matter theory", "Plasma & fusion physics (PPPL)", "Astrophysics & cosmology", "Quantum field theory"],
    deadline: "Dec 15",
    gre: "Optional",
    phys_gre: "Optional",
    lor: 3,
    sop: true,
    cv: false,
    transcript: true,
    fee: "$75",
    stipend: "~$40k/yr",
    notes: "Access to Princeton Plasma Physics Lab (PPPL), a DOE national lab. First year ends in qualifying prelim exam.",
    url: "https://phy.princeton.edu/academics/graduate-program/graduate-admissions"
  },
  {
    rank: 7,
    name: "University of Chicago",
    location: "Chicago, IL",
    tag: "Theory-first culture",
    color: "gray",
    strengths: ["High-energy theory & particle physics", "Cosmology & astrophysics", "Condensed matter theory", "Biophysics", "Statistical physics"],
    deadline: "Dec 15",
    gre: "Not required (optional)",
    phys_gre: "Required (per catalog — verify with dept)",
    lor: 3,
    sop: true,
    cv: true,
    transcript: true,
    fee: "~$90",
    stipend: "~$38–42k/yr",
    notes: "Strong theoretical tradition. Access to Fermilab and Argonne. Verify GRE status on department site — policy varies between catalog and division site.",
    url: "https://physicsrecruitment.psd.uchicago.edu/apply/"
  },
  {
    rank: 8,
    name: "Cornell",
    location: "Ithaca, NY",
    tag: "CMT & HEP experiment depth",
    color: "red",
    strengths: ["Condensed matter theory & experiment", "High-energy experiment", "AMO physics", "Biophysics", "Particle astrophysics"],
    deadline: "Dec 15",
    gre: "Not required for experimentalists",
    phys_gre: "Required for CM theory & HEP theory",
    lor: 3,
    sop: true,
    cv: false,
    transcript: true,
    fee: "$105",
    stipend: "~$34–38k/yr",
    notes: "Unique GRE policy: Physics GRE required only for condensed matter theory and HEP theory applicants.",
    url: "https://physics.cornell.edu/prospective-graduate-students"
  },
  {
    rank: 9,
    name: "UCSB",
    location: "Santa Barbara, CA",
    tag: "Condensed matter world-class",
    color: "teal",
    strengths: ["Condensed matter (Nobel-level faculty)", "High-energy theory & string theory", "Astrophysics", "Biophysics", "Quantum information"],
    deadline: "Dec 15",
    gre: "Optional",
    phys_gre: "Optional",
    lor: 3,
    sop: true,
    cv: false,
    transcript: true,
    fee: "$135",
    stipend: "~$44k/yr",
    notes: "Home to Kavli Institute for Theoretical Physics (KITP). 3 Nobel laureates on faculty. Consistently top-10 in condensed matter.",
    url: "https://www.physics.ucsb.edu/academics/graduate"
  },
  {
    rank: 10,
    name: "UIUC",
    location: "Urbana-Champaign, IL",
    tag: "Condensed matter + AMO",
    color: "blue",
    strengths: ["Condensed matter experiment", "AMO & quantum information", "High-energy experiment", "Nuclear physics", "Biophysics"],
    deadline: "Jan 15",
    gre: "Optional",
    phys_gre: "Optional",
    lor: 3,
    sop: true,
    cv: false,
    transcript: true,
    fee: "$70",
    stipend: "~$25–32k/yr",
    notes: "Later deadline gives more prep time. Access to NCSA supercomputer. Lower cost of living than coastal programs.",
    url: "https://physics.illinois.edu/admissions/graduates/apply"
  },
  {
    rank: 11,
    name: "Yale",
    location: "New Haven, CT",
    tag: "AMO & nuclear experiment",
    color: "blue",
    strengths: ["AMO physics", "Nuclear & particle experiment", "Condensed matter", "Quantum information", "Astrophysics"],
    deadline: "Dec 15",
    gre: "Optional",
    phys_gre: "Optional",
    lor: 3,
    sop: true,
    cv: true,
    transcript: true,
    fee: "~$105",
    stipend: "~$38k/yr",
    notes: "Holistic review; no preference given to applicants with vs. without GRE scores. 12-month stipend + full tuition + health.",
    url: "https://physics.yale.edu/node/5023"
  },
  {
    rank: 12,
    name: "Columbia",
    location: "New York, NY",
    tag: "HEP & astrophysics depth",
    color: "purple",
    strengths: ["High-energy theory & experiment", "Astrophysics & cosmology", "Condensed matter", "Nuclear physics", "Particle astrophysics"],
    deadline: "Dec 15",
    gre: "Optional",
    phys_gre: "Optional",
    lor: 3,
    sop: true,
    cv: true,
    transcript: true,
    fee: "$110",
    stipend: "~$42k/yr",
    notes: "Home to Nevis Labs. 13 Nobel laureates in department history. NYC location adds cost-of-living considerations.",
    url: "https://physics.columbia.edu/content/graduate-admissions"
  },
  {
    rank: 13,
    name: "UC San Diego",
    location: "La Jolla, CA",
    tag: "Plasma & biophysics leader",
    color: "teal",
    strengths: ["Plasma physics", "Biophysics & biological physics", "Condensed matter", "Astrophysics", "Particle physics"],
    deadline: "Dec 23",
    gre: "Not used in decisions",
    phys_gre: "Required",
    lor: 3,
    sop: true,
    cv: false,
    transcript: true,
    fee: "$135",
    stipend: "~$38k/yr",
    notes: "Physics GRE required (self-report in app + send official scores). General GRE not used. Latest deadline among top programs.",
    url: "https://physics.ucsd.edu/students/graduate/requirements"
  },
  {
    rank: 14,
    name: "University of Michigan",
    location: "Ann Arbor, MI",
    tag: "HEP experiment + nuclear",
    color: "amber",
    strengths: ["High-energy experiment (ATLAS, CMS)", "Nuclear physics", "Condensed matter", "AMO", "Astrophysics & cosmology"],
    deadline: "Dec 15",
    gre: "Optional",
    phys_gre: "Optional",
    lor: 3,
    sop: true,
    cv: false,
    transcript: true,
    fee: "$75",
    stipend: "~$26–32k/yr",
    notes: "Strong CERN connections for experimentalists. Lower cost of living than coastal schools. Fee waivers available.",
    url: "https://lsa.umich.edu/physics/graduates/prospective-students.html"
  },
  {
    rank: 15,
    name: "University of Washington",
    location: "Seattle, WA",
    tag: "Nuclear + AMO + astro",
    color: "green",
    strengths: ["Nuclear theory & experiment", "AMO physics", "Particle astrophysics", "Condensed matter", "Quantum computing"],
    deadline: "Dec 15",
    gre: "Optional",
    phys_gre: "Optional",
    lor: 3,
    sop: true,
    cv: true,
    transcript: true,
    fee: "$85",
    stipend: "~$30–34k/yr",
    notes: "Access to CENPA (nuclear physics lab) and INT (nuclear theory institute). Strong connections to Pacific Northwest National Lab.",
    url: "https://phys.washington.edu/graduate-program"
  },
  {
    rank: 16,
    name: "UCLA",
    location: "Los Angeles, CA",
    tag: "Your home — strong HEP & astro",
    color: "blue",
    strengths: ["High-energy experiment & theory", "Astrophysics & cosmology", "Condensed matter", "AMO & quantum information", "Plasma physics"],
    deadline: "Dec 15",
    gre: "Not required (optional)",
    phys_gre: "Not required (optional)",
    lor: 3,
    sop: true,
    cv: false,
    transcript: true,
    fee: "$135",
    stipend: "~$30–38k/yr",
    notes: "Requires both a Statement of Purpose AND a Personal Statement (two separate documents). GRE scores not given extra weight if submitted. Strong connections to JPL and SLAC.",
    url: "https://www.pa.ucla.edu/graduate-admissions.html"
  },
  {
    rank: 17,
    name: "Johns Hopkins",
    location: "Baltimore, MD",
    tag: "Research from day one",
    color: "teal",
    strengths: ["Astrophysics & cosmology (Space Telescope)", "Particle physics", "Condensed matter", "Biophysics", "Gravitational wave science"],
    deadline: "Dec 15",
    gre: "Optional",
    phys_gre: "Optional",
    lor: 3,
    sop: true,
    cv: false,
    transcript: true,
    fee: "~$105",
    stipend: "~$38–42k/yr",
    notes: "Unusually research-intensive from semester one — students choose a research advisor by end of September of year 1. Home to Space Telescope Science Institute (STScI). Strong astrophysics culture.",
    url: "https://physics-astronomy.jhu.edu/graduate/admissions"
  },
  {
    rank: 18,
    name: "Northwestern",
    location: "Evanston, IL",
    tag: "Multimessenger astro leader",
    color: "purple",
    strengths: ["Multimessenger astrophysics", "Gravitational waves", "Condensed matter & materials", "High-energy astrophysics", "Quantum information"],
    deadline: "Dec 15",
    gre: "Optional (not accepted for Astro PhD)",
    phys_gre: "Optional",
    lor: 3,
    sop: true,
    cv: false,
    transcript: true,
    fee: "$95",
    stipend: "~$34–40k/yr",
    notes: "Note: GRE scores are NOT accepted at all for the Astronomy PhD — don't submit them. For Physics PhD, GRE is optional. Fee waivers available for US citizens/permanent residents (first-come, first-served).",
    url: "https://physics.northwestern.edu/graduate/doctoral-program/admissions/"
  }
];

const colorMap = {
  purple: { bg: "#EEEDFE", text: "#3C3489", border: "#AFA9EC" },
  coral: { bg: "#FAECE7", text: "#993C1D", border: "#F0997B" },
  amber: { bg: "#FAEEDA", text: "#854F0B", border: "#EF9F27" },
  red: { bg: "#FCEBEB", text: "#A32D2D", border: "#F09595" },
  teal: { bg: "#E1F5EE", text: "#0F6E56", border: "#5DCAA5" },
  gray: { bg: "#F1EFE8", text: "#5F5E5A", border: "#B4B2A9" },
  blue: { bg: "#E6F1FB", text: "#185FA5", border: "#85B7EB" },
  green: { bg: "#EAF3DE", text: "#3B6D11", border: "#97C459" }
};

const CheckIcon = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
    <polyline points="1.5,5.5 4.5,8.5 9.5,2.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const reqItems = [
  { key: "sop", label: "Statement of Purpose" },
  { key: "cv", label: "CV / Resume" },
  { key: "transcript", label: "Official Transcripts" },
];

export default function PhDTracker() {
  const [selected, setSelected] = useState(0);
  const [completed, setCompleted] = useState({});
  const [search, setSearch] = useState("");
  const [filterGre, setFilterGre] = useState("all");

  const school = schools[selected];
  const color = colorMap[school.color];

  const togCheck = (schoolIdx, key) => {
    const id = `${schoolIdx}-${key}`;
    setCompleted(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const isChecked = (schoolIdx, key) => !!completed[`${schoolIdx}-${key}`];

  const schoolProgress = (idx) => {
    const s = schools[idx];
    const keys = ["sop", "cv", "transcript", "lor", "deadline"];
    const done = keys.filter(k => isChecked(idx, k)).length;
    return Math.round((done / keys.length) * 100);
  };

  const filtered = schools.filter(s => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.strengths.some(st => st.toLowerCase().includes(search.toLowerCase()));
    const matchGre = filterGre === "all" ||
      (filterGre === "optional" && (s.gre.toLowerCase().includes("optional") || s.gre.toLowerCase().includes("not"))) ||
      (filterGre === "required" && s.gre.toLowerCase().includes("required"));
    return matchSearch && matchGre;
  });

  const totalDone = Object.values(completed).filter(Boolean).length;
  const totalPossible = schools.length * 8;

  return (
    <div style={{ fontFamily: "var(--font-sans)", padding: "1rem 0", color: "var(--text-primary)" }}>
      <h2 className="sr-only">Top 15 Physics PhD Programs – Application Checklist</h2>

      {/* Header stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: "1.5rem" }}>
        {[
          { label: "Programs", val: 19 },
          { label: "Tasks completed", val: totalDone },
          { label: "Overall progress", val: Math.round((totalDone / totalPossible) * 100) + "%" }
        ].map(s => (
          <div key={s.label} style={{ background: "var(--surface-1)", borderRadius: "var(--radius)", padding: "0.75rem 1rem" }}>
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 2 }}>{s.label}</div>
            <div style={{ fontSize: 22, fontWeight: 500 }}>{s.val}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div style={{ display: "flex", gap: 8, marginBottom: "1rem", flexWrap: "wrap" }}>
        <input
          placeholder="Search school or subfield…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ flex: 1, minWidth: 180, fontSize: 13 }}
        />
        <select value={filterGre} onChange={e => setFilterGre(e.target.value)} style={{ fontSize: 13, padding: "6px 10px" }}>
          <option value="all">All GRE policies</option>
          <option value="optional">GRE optional / not required</option>
          <option value="required">GRE required</option>
        </select>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 16, alignItems: "start" }}>
        {/* School list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {filtered.map((s, i) => {
            const idx = schools.indexOf(s);
            const pct = schoolProgress(idx);
            const c = colorMap[s.color];
            const isActive = idx === selected;
            return (
              <button
                key={s.name}
                onClick={() => setSelected(idx)}
                style={{
                  textAlign: "left",
                  background: isActive ? c.bg : "var(--surface-1)",
                  border: isActive ? `1px solid ${c.border}` : "0.5px solid var(--border)",
                  borderRadius: "var(--radius)",
                  padding: "8px 10px",
                  cursor: "pointer",
                  transition: "all 0.12s"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                  <span style={{ fontSize: 13, fontWeight: 500, color: isActive ? c.text : "var(--text-primary)" }}>
                    {s.rank}. {s.name}
                  </span>
                  <span style={{ fontSize: 11, color: pct === 100 ? "var(--text-success)" : "var(--text-muted)" }}>
                    {pct}%
                  </span>
                </div>
                <div style={{ height: 3, background: "var(--border)", borderRadius: 99, overflow: "hidden" }}>
                  <div style={{ height: 3, width: pct + "%", background: c.border, borderRadius: 99, transition: "width 0.3s" }} />
                </div>
              </button>
            );
          })}
          {filtered.length === 0 && (
            <div style={{ fontSize: 13, color: "var(--text-muted)", padding: "1rem 0.5rem" }}>No matches.</div>
          )}
        </div>

        {/* Detail panel */}
        <div style={{ background: "var(--surface-2)", border: `0.5px solid ${color.border}`, borderRadius: 12, padding: "1.25rem", minHeight: 400 }}>
          {/* School header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 500, color: color.text, background: color.bg, display: "inline-block", padding: "2px 10px", borderRadius: "var(--radius)", marginBottom: 6 }}>
                #{school.rank} · {school.tag}
              </div>
              <h3 style={{ margin: 0, fontSize: 20, fontWeight: 500 }}>{school.name}</h3>
              <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 2 }}>{school.location}</div>
            </div>
            <a
              href={school.url}
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: 12, color: color.text, border: `0.5px solid ${color.border}`, borderRadius: "var(--radius)", padding: "4px 10px", textDecoration: "none" }}
            >
              Apply ↗
            </a>
          </div>

          {/* Quick stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginBottom: "1.25rem" }}>
            {[
              { label: "Deadline", val: school.deadline },
              { label: "Stipend", val: school.stipend },
              { label: "App fee", val: school.fee }
            ].map(s => (
              <div key={s.label} style={{ background: "var(--surface-1)", borderRadius: "var(--radius)", padding: "8px 10px" }}>
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 2 }}>{s.label}</div>
                <div style={{ fontSize: 14, fontWeight: 500 }}>{s.val}</div>
              </div>
            ))}
          </div>

          {/* Research strengths */}
          <div style={{ marginBottom: "1.25rem" }}>
            <div style={{ fontSize: 12, fontWeight: 500, color: "var(--text-muted)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>Research strengths</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {school.strengths.map(s => (
                <span key={s} style={{ fontSize: 12, padding: "3px 10px", borderRadius: 99, background: color.bg, color: color.text, fontWeight: 500 }}>{s}</span>
              ))}
            </div>
          </div>

          {/* GRE policy */}
          <div style={{ marginBottom: "1.25rem", padding: "10px 12px", background: "var(--surface-1)", borderRadius: "var(--radius)", borderLeft: `3px solid ${color.border}` }}>
            <div style={{ fontSize: 12, fontWeight: 500, color: "var(--text-muted)", marginBottom: 4 }}>GRE policy</div>
            <div style={{ fontSize: 13, color: "var(--text-primary)" }}>General: {school.gre}</div>
            <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>Physics GRE: {school.phys_gre}</div>
          </div>

          {/* Checklist */}
          <div style={{ marginBottom: "1.25rem" }}>
            <div style={{ fontSize: 12, fontWeight: 500, color: "var(--text-muted)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>Application checklist</div>
            {[
              { key: "sop", label: "Statement of Purpose written & tailored" },
              { key: "cv", label: "CV/Resume updated" },
              { key: "transcript", label: "Transcripts ordered" },
              { key: "lor", label: `${school.lor} letters of recommendation secured` },
              { key: "deadline", label: `Deadline tracked (${school.deadline})` },
              { key: "gre_done", label: "GRE scores sent (if applicable)" },
              { key: "fee", label: `Application fee prepared (${school.fee}) or waiver applied` },
              { key: "faculty", label: "Potential advisors emailed" },
            ].map(item => {
              const done = isChecked(selected, item.key);
              return (
                <div
                  key={item.key}
                  onClick={() => togCheck(selected, item.key)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "7px 0",
                    borderBottom: "0.5px solid var(--border)",
                    cursor: "pointer"
                  }}
                >
                  <div style={{
                    width: 18, height: 18, borderRadius: 4, flexShrink: 0,
                    background: done ? color.border : "transparent",
                    border: done ? `none` : "1.5px solid var(--border-strong)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.15s"
                  }}>
                    {done && <CheckIcon />}
                  </div>
                  <span style={{ fontSize: 13, color: done ? "var(--text-muted)" : "var(--text-primary)", textDecoration: done ? "line-through" : "none" }}>
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Notes */}
          <div style={{ fontSize: 13, color: "var(--text-secondary)", background: "var(--surface-1)", padding: "10px 12px", borderRadius: "var(--radius)", lineHeight: 1.6 }}>
            <span style={{ fontWeight: 500, color: "var(--text-primary)" }}>Note: </span>{school.notes}
          </div>
        </div>
      </div>
    </div>
  );
}