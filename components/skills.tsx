import {
  BarChart3,
  BriefcaseBusiness,
  Database,
  FileSpreadsheet,
  LineChart,
  PieChart,
} from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "Analytics",
    icon: LineChart,
    skills: ["Excel", "SQL", "Power BI", "Tableau"],
  },
  {
    number: "02",
    title: "Data & Programming",
    icon: Database,
    skills: ["Python", "Pandas", "NumPy", "MySQL"],
  },
  {
    number: "03",
    title: "Analysis",
    icon: BarChart3,
    skills: [
      "Data Cleaning",
      "EDA",
      "Statistics",
      "Data Visualization",
    ],
  },
  {
    number: "04",
    title: "Business & Tools",
    icon: BriefcaseBusiness,
    skills: [
      "Business Analysis",
      "Problem Solving",
      "Git",
      "GitHub",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section border-t border-[#1c1c1c]">
      <div className="container-custom">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

          {/* Section Intro */}
          <div>
            <p className="section-label">02 / Skills</p>

            <h2 className="mt-5 max-w-md text-[clamp(48px,7vw,88px)] font-bold leading-[0.88] tracking-[-0.07em]">
              Tools for
              <br />
              <span className="text-[#d9ff57]">real</span>
              <br />
              problems.
            </h2>

            <p className="mt-8 max-w-sm text-base leading-7 text-[#777]">
              A practical toolkit focused on analyzing data,
              creating clear visualizations and understanding
              business problems.
            </p>
          </div>

          {/* Skill Groups */}
          <div className="border-t border-[#222]">
            {skillGroups.map((group) => {
              const Icon = group.icon;

              return (
                <div
                  key={group.number}
                  className="group grid gap-6 border-b border-[#222] py-8 md:grid-cols-[70px_1fr_1.5fr] md:items-start"
                >
                  <span className="text-xs tracking-widest text-[#555]">
                    {group.number}
                  </span>

                  <div className="flex items-center gap-3">
                    <Icon
                      size={18}
                      className="text-[#777] transition group-hover:text-[#d9ff57]"
                    />

                    <h3 className="text-xl font-semibold transition group-hover:text-[#d9ff57]">
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-[#292929] bg-[#090909] px-3 py-2 text-xs text-[#aaa] transition hover:border-[#d9ff57] hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Skill Strip */}
        <div className="mt-14 grid border-y border-[#222] sm:grid-cols-3">
          <div className="border-b border-[#222] px-6 py-6 sm:border-b-0 sm:border-r">
            <FileSpreadsheet
              size={20}
              className="mb-4 text-[#d9ff57]"
            />
            <p className="text-xs uppercase tracking-widest text-[#555]">
              Data
            </p>
            <p className="mt-2 text-sm text-[#aaa]">
              Clean, organize and understand data.
            </p>
          </div>

          <div className="border-b border-[#222] px-6 py-6 sm:border-b-0 sm:border-r">
            <PieChart
              size={20}
              className="mb-4 text-[#d9ff57]"
            />
            <p className="text-xs uppercase tracking-widest text-[#555]">
              Visualize
            </p>
            <p className="mt-2 text-sm text-[#aaa]">
              Turn numbers into clear dashboards and insights.
            </p>
          </div>

          <div className="px-6 py-6">
            <BriefcaseBusiness
              size={20}
              className="mb-4 text-[#d9ff57]"
            />
            <p className="text-xs uppercase tracking-widest text-[#555]">
              Communicate
            </p>
            <p className="mt-2 text-sm text-[#aaa]">
              Connect analysis with practical business decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}