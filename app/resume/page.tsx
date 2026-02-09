import { Book, Briefcase, GraduationCap } from "lucide-react";
import { getPortfolioData } from "@/lib/data";

export default async function Resume() {
  const data = await getPortfolioData();
  const { resume } = data;

  return (
    <div className="space-y-8">
      <header>
        <h2 className="text-2xl font-bold text-white mb-6 relative inline-block">
          Resume
          <span className="absolute bottom-[-10px] left-0 w-10 h-1.5 bg-blue-500 rounded-full"></span>
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Experience Section */}
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
                <span className="text-blue-400 text-sm mb-2 block">{item.period}</span>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
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
                <span className="text-blue-400 text-sm mb-2 block">{item.period}</span>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Skills Section */}
      <section>
          <h3 className="text-xl font-bold text-white mb-6">My Skills</h3>
          <div className="bg-[#212123] border border-[#383838] p-6 rounded-2xl">
             <div className="space-y-4">
                {resume.skills.map((skill) => (
                  <div key={skill.id}>
                      <div className="flex justify-between mb-1">
                          <span className="text-white font-medium">{skill.name}</span>
                          <span className="text-gray-400">{skill.level}%</span>
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
  );
}
