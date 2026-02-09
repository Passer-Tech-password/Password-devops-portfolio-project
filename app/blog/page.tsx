import Link from "next/link";

const blogPosts = [
  {
    title: "Understanding Kubernetes Pod Lifecycle",
    category: "DevOps",
    date: "Feb 09, 2026",
    excerpt: "A deep dive into how Kubernetes manages pod lifecycles and how to handle termination gracefully.",
    slug: "kubernetes-pod-lifecycle",
  },
  {
    title: "Best Practices for Terraform State Management",
    category: "Cloud",
    date: "Jan 25, 2026",
    excerpt: "Learn how to securely manage your Terraform state files in a team environment using remote backends.",
    slug: "terraform-state-management",
  },
  {
    title: "Setting up Prometheus and Grafana for Monitoring",
    category: "SRE",
    date: "Jan 10, 2026",
    excerpt: "A step-by-step guide to setting up a robust monitoring stack for your microservices architecture.",
    slug: "prometheus-grafana-setup",
  },
  {
    title: "CI/CD Pipelines with Jenkins and Docker",
    category: "DevOps",
    date: "Dec 15, 2025",
    excerpt: "Automating the build and deployment process of containerized applications using Jenkins pipelines.",
    slug: "cicd-jenkins-docker",
  },
];

export default function Blog() {
  return (
    <div className="space-y-8">
      <header>
        <h2 className="text-2xl font-bold text-white mb-6 relative inline-block">
          Blog
          <span className="absolute bottom-[-10px] left-0 w-10 h-1.5 bg-blue-500 rounded-full"></span>
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post, index) => (
          <Link href={`/blog/${post.slug}`} key={index} className="block group">
            <div className="bg-[#212123] border border-[#383838] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-blue-500/50 h-full flex flex-col">
              <div className="aspect-video bg-[#2b2b2c] relative">
                 {/* Placeholder Image */}
                 <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-bold text-xl opacity-20">
                     BLOG IMAGE
                 </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                 <div className="flex items-center gap-2 mb-3 text-sm">
                    <span className="text-gray-400">{post.category}</span>
                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                    <span className="text-gray-400">{post.date}</span>
                 </div>
                 
                 <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-500 transition-colors line-clamp-2">
                    {post.title}
                 </h3>
                 
                 <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                 </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
