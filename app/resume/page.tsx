import { Book, Briefcase, GraduationCap } from "lucide-react";

export default function Resume() {
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
            {/* Experience Item 1 */}
            <div className="relative">
              <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-blue-500 shadow-[0_0_0_4px_#1e1e1f]"></span>
              <h4 className="text-lg font-bold text-white mb-1">DevOps Engineer</h4>
              <span className="text-blue-400 text-sm mb-2 block">2022 — Present</span>
              <p className="text-gray-400 text-sm leading-relaxed">
                Managed cloud infrastructure on AWS, implemented CI/CD pipelines using Jenkins, and automated deployment processes with Terraform and Ansible.
              </p>
            </div>

            {/* Experience Item 2 */}
            <div className="relative">
              <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-[#2b2b2c] shadow-[0_0_0_4px_#1e1e1f]"></span>
              <h4 className="text-lg font-bold text-white mb-1">Cloud Support Engineer</h4>
              <span className="text-blue-400 text-sm mb-2 block">2020 — 2022</span>
              <p className="text-gray-400 text-sm leading-relaxed">
                Provided technical support for Google Cloud Platform services, troubleshooting issues related to Compute Engine, Kubernetes Engine, and networking.
              </p>
            </div>
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
            {/* Education Item 1 */}
            <div className="relative">
              <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-blue-500 shadow-[0_0_0_4px_#1e1e1f]"></span>
              <h4 className="text-lg font-bold text-white mb-1">University of Technology</h4>
              <span className="text-blue-400 text-sm mb-2 block">2016 — 2020</span>
              <p className="text-gray-400 text-sm leading-relaxed">
                Bachelor of Science in Computer Science. Graduated with honors.
              </p>
            </div>
            
             {/* Education Item 2 */}
             <div className="relative">
              <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-[#2b2b2c] shadow-[0_0_0_4px_#1e1e1f]"></span>
              <h4 className="text-lg font-bold text-white mb-1">Certification</h4>
              <span className="text-blue-400 text-sm mb-2 block">2021</span>
              <p className="text-gray-400 text-sm leading-relaxed">
                AWS Certified Cloud Practitioner & Google Cloud Associate Cloud Engineer.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Skills Section */}
      <section>
          <h3 className="text-xl font-bold text-white mb-6">My Skills</h3>
          <div className="bg-[#212123] border border-[#383838] p-6 rounded-2xl">
             <div className="space-y-4">
                
                {/* Skill Item */}
                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-white font-medium">DevOps (Jenkins, Docker, K8s)</span>
                        <span className="text-gray-400">90%</span>
                    </div>
                    <div className="w-full bg-[#383838] rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                </div>

                {/* Skill Item */}
                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-white font-medium">Cloud (AWS, GCP)</span>
                        <span className="text-gray-400">85%</span>
                    </div>
                    <div className="w-full bg-[#383838] rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                </div>

                {/* Skill Item */}
                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-white font-medium">IaC (Terraform, Ansible)</span>
                        <span className="text-gray-400">80%</span>
                    </div>
                    <div className="w-full bg-[#383838] rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                </div>

                 {/* Skill Item */}
                 <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-white font-medium">Monitoring (Prometheus, Grafana)</span>
                        <span className="text-gray-400">75%</span>
                    </div>
                    <div className="w-full bg-[#383838] rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                </div>

             </div>
          </div>
      </section>
    </div>
  );
}
