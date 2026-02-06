import ServiceCard from "@/components/ServiceCard";
import { Cloud, Code, Infinity, Terminal } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-white mb-6 relative inline-block">
          About Me
          <span className="absolute bottom-[-10px] left-0 w-10 h-1.5 bg-blue-500 rounded-full"></span>
        </h2>
        <p className="text-gray-400 leading-7 mb-4">
          A passionate and skilled DevOps, SRE, and Cloud Engineer with a strong background in infrastructure provisioning, automation, and monitoring. I have completed and been certified by Google Cloud for Associate Cloud Engineer and AWS for AWS Certified Cloud Practitioner.
        </p>
        <p className="text-gray-400 leading-7">
          Have experience working with tools such as Jenkins, Terraform, and Ansible to streamline development processes and ensure efficient code deployment. Proficient in managing and monitoring cloud infrastructure services on AWS and GCP, as well as maintaining high availability in Kubernetes-based container clusters. Successfully implemented monitoring and logging tools like ELK, Grafana, and Datadog to ensure comprehensive visibility into system performance and implemented GitOps for managing infrastructure as code. My expertise also includes integrating automation testing into the CI/CD pipeline and developing scripts to automate tasks, improving efficiency and reducing manual effort.
        </p>
        <p className="text-gray-400 leading-7 mt-4">
          With a Bachelor's degree in Computer Science and a strong GPA, I am committed to continuous learning and professional growth. I am seeking opportunities to leverage my skills and contribute to the success of DevOps, SRE and Cloud engineering projects.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-white mb-6">What I'm Doing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard
            title="DevOps"
            description="I enjoy to improve the speed and quality of delivery, automate and achieve CI/CD."
            icon={Infinity}
          />
          <ServiceCard
            title="Cloud Engineer"
            description="I enjoy design, secure and maintenance of an organization's cloud-based infrastructure and application."
            icon={Cloud}
          />
          <ServiceCard
            title="SRE"
            description="I curious the processes and tools that ensure the scalability, reliability and availability of software systems."
            icon={Terminal}
          />
          <ServiceCard
            title="Software Development"
            description="I enjoy learning software development either for personal or specific purposes."
            icon={Code}
          />
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-white mb-6">Clients</h3>
        <div className="flex gap-8 overflow-x-auto pb-4 items-center">
            <div className="opacity-50 hover:opacity-100 transition-opacity flex items-center gap-2 cursor-pointer">
                {/* Logo placeholder */}
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold">t</div>
                <span className="text-xl font-bold text-blue-400">transletin</span>
            </div>
            <div className="opacity-50 hover:opacity-100 transition-opacity flex items-center gap-2 cursor-pointer">
                 <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 font-bold">B</div>
                <span className="text-xl font-bold text-yellow-400">Buangdisini</span>
            </div>
        </div>
      </section>
    </div>
  );
}
