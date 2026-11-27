import React, { useRef, useEffect } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(titleRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' });

      const items = sectionRef.current?.querySelectorAll('.experience-card');
      if (items && items.length > 0) {
        tl.fromTo(
          items,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.2)' },
          '-=0.2'
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative w-full text-gray-100 py-16 sm:py-24 px-4 sm:px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center overflow-hidden border-t border-white/5"
    >
      {/* Section Title */}
      <div ref={titleRef} className="flex flex-col items-center text-center mb-10 sm:mb-14 z-10">
        <span className="text-[#a31515] font-bold uppercase text-[10px] sm:text-xs tracking-[0.2em] mb-2 flex items-center gap-1.5">
          <img src="/assets/icon.svg" alt="" aria-hidden="true" className="w-4 h-4 object-contain" />
          Work Experience
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-white">
          EXPERIENCE.
        </h2>
        <div className="w-12 h-1 bg-[#a31515] mt-2.5 rounded-full" />
      </div>

      <div ref={cardsRef} className="relative w-full max-w-4xl flex flex-col gap-6 z-10">
        {EXPERIENCE_DATA.map((exp) => (
          <div key={exp.id} className="experience-card relative">
            <div className="red-halo" aria-hidden="true" />
            <div className="glass glass-panel-card relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col gap-5 sm:gap-6">
              {/* Header row: Role, Company, Location & Date badge */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 border-b border-white/5 pb-5">
                <div>
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="glass-chip p-2 rounded-xl text-red-500 shrink-0">
                      <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-gray-400 pl-0 sm:pl-1">
                    <span className="text-red-400 font-bold">{exp.company}</span>
                    <span className="text-gray-600 hidden sm:inline">&bull;</span>
                    <span className="flex items-center gap-1 text-gray-400">
                      <MapPin className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="shrink-0 self-start sm:self-center">
                  <span className="glass-chip inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono font-bold text-gray-200">
                    <Calendar className="w-3.5 h-3.5 text-red-400" />
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                    <span className="mt-1 shrink-0 text-red-500">
                      <CheckCircle2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Skill chips */}
              {exp.skills && exp.skills.length > 0 && (
                <div className="pt-2 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="glass-chip px-3 py-1 rounded-full text-xs font-semibold text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
