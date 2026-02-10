import { Book, Briefcase, GraduationCap, Award } from "lucide-react";
import { getPortfolioData } from "@/lib/data";

export default async function Resume() {
  const data = await getPortfolioData();
  const { resume } = data;

  const generalSkills = resume.skills.filter(s => s.category === 'Skills' || !s.category);
  const codeSkills = resume.skills.filter(s => s.category === 'Code Skills');

  return (
    <div className="space-y-12">
      <header>
        <h2 className="text-2xl font-bold text-white mb-6 relative inline-block">
          Resume
          <span className="absolute bottom-[-10px] left-0 w-10 h-1.5 bg-blue-500 rounded-full"></span>
        </h2>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Experience Section */}
        <div className="lg:col-span-7">
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-2 rounded-lg bg-[#2b2b2c] text-blue-500 shadow-md">
                <Briefcase size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">Experience</h3>
            </div>

            <div className="space-y-8 border-l border-[#383838] ml-4 pl-8 relative">
              {resume.experience.map((item, index) => (
                <div className="relative" key={item.id}>
                  <span className={`absolute -left-[37px] top-1 h-4 w-4 rounded-full shadow-[0_0_0_4px_#1e1e1f] ${index === 0 ? 'bg-blue-500' : 'bg-[#2b2b2c]'}`}></span>
                  <h4 className="text-lg font-bold text-white mb-1">{item.role}</h4>
                  <span className="text-blue-400 text-sm mb-1 block">{item.company}</span>
                  <span className="text-gray-500 text-xs mb-4 block">{item.period}</span>
                  <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Education & Nonformal Section */}
        <div className="lg:col-span-5 space-y-12">
          {/* Education */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-2 rounded-lg bg-[#2b2b2c] text-blue-500 shadow-md">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-8 border-l border-[#383838] ml-4 pl-8 relative">
              {resume.education.map((item, index) => (
                <div className="relative" key={item.id}>
                  <span className={`absolute -left-[37px] top-1 h-4 w-4 rounded-full shadow-[0_0_0_4px_#1e1e1f] ${index === 0 ? 'bg-blue-500' : 'bg-[#2b2b2c]'}`}></span>
                  <h4 className="text-lg font-bold text-white mb-1">{item.school}</h4>
                  <span className="text-blue-400 text-sm mb-1 block">{item.degree}</span>
                  <span className="text-gray-500 text-xs mb-2 block">{item.period}</span>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Nonformal Education */}
          {resume.nonformalEducation && resume.nonformalEducation.length > 0 && (
            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2 rounded-lg bg-[#2b2b2c] text-blue-500 shadow-md">
                  <Award size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">Nonformal Education</h3>
              </div>

              <div className="space-y-8 border-l border-[#383838] ml-4 pl-8 relative">
                {resume.nonformalEducation.map((item, index) => (
                  <div className="relative" key={item.id}>
                    <span className={`absolute -left-[37px] top-1 h-4 w-4 rounded-full shadow-[0_0_0_4px_#1e1e1f] ${index === 0 ? 'bg-blue-500' : 'bg-[#2b2b2c]'}`}></span>
                    <h4 className="text-lg font-bold text-white mb-1">{item.organization}</h4>
                    <span className="text-blue-400 text-sm mb-1 block">{item.program}</span>
                    <span className="text-gray-500 text-xs mb-2 block">{item.period}</span>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Skills Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
            <h3 className="text-xl font-bold text-white mb-6">Skills</h3>
            <div className="bg-[#212123] border border-[#383838] p-6 rounded-2xl">
               <div className="space-y-4">
                  {generalSkills.map((skill) => (
                    <div key={skill.id}>
                        <div className="flex justify-between mb-1">
                            <span className="text-white font-medium text-sm">{skill.name}</span>
                            <span className="text-gray-400 text-xs">{skill.proficiency || `${skill.level}%`}</span>
                        </div>
                        <div className="w-full bg-[#383838] rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
                        </div>
                    </div>
                  ))}
               </div>
            </div>
        </section>

        <section>
            <h3 className="text-xl font-bold text-white mb-6">Code Skills</h3>
            <div className="bg-[#212123] border border-[#383838] p-6 rounded-2xl">
               <div className="space-y-4">
                  {codeSkills.map((skill) => (
                    <div key={skill.id}>
                        <div className="flex justify-between mb-1">
                            <span className="text-white font-medium text-sm">{skill.name}</span>
                            <span className="text-gray-400 text-xs">{skill.proficiency || `${skill.level}%`}</span>
                        </div>
                        <div className="w-full bg-[#383838] rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
                        </div>
                    </div>
                  ))}
               </div>
            </div>
        </section>
      </div>
    </div>
  );
}
