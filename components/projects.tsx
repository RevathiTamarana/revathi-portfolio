import {
  ArrowUpRight,
  Github,
  ExternalLink,
} from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section border-t border-[#1c1c1c]">
      <div className="container-custom">
        <p className="section-label">03 / Selected Work</p>

        <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="section-title max-w-3xl">
            Projects built
            <br />
            around <span className="text-[#d9ff57]">real questions.</span>
          </h2>

          <p className="max-w-sm text-sm leading-7 text-[#666]">
            A selection of analytics and technology projects
            exploring data, business problems and social impact.
          </p>
        </div>

        <div className="mt-20 space-y-5">
          {portfolio.projects.map((project) => (
            <article
              key={project.number}
              className="project-card border border-[#222] bg-[#090909] p-7 md:p-10"
            >
              <div className="grid gap-10 lg:grid-cols-[100px_1fr_280px]">
                <div className="text-sm text-[#555]">
                  {project.number}
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-[0.16em] text-[#d9ff57]">
                    {project.category}
                  </p>

                  <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-base leading-7 text-[#777]">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[#292929] px-3 py-2 text-xs text-[#888]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#555]">
                      Tools
                    </p>

                    <div className="mt-4 space-y-2">
                      {project.tools.map((tool) => (
                        <p
                          key={tool}
                          className="text-sm text-[#aaa]"
                        >
                          {tool}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 flex gap-3">
                    <a
                      href={project.github}
                      target={project.github !== "#" ? "_blank" : undefined}
                      rel="noreferrer"
                      className="flex items-center gap-2 border border-[#292929] px-4 py-3 text-xs transition hover:border-[#d9ff57] hover:text-[#d9ff57]"
                    >
                      <Github size={15} />
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      target={project.demo !== "#" ? "_blank" : undefined}
                      rel="noreferrer"
                      className="flex items-center gap-2 border border-[#292929] px-4 py-3 text-xs transition hover:border-[#d9ff57] hover:text-[#d9ff57]"
                    >
                      <ExternalLink size={15} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <ArrowUpRight
                  size={20}
                  className="text-[#444] transition group-hover:text-[#d9ff57]"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}