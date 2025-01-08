import Image from "next/image"
import {Nav} from "@/components/nav"
import {SocialLinks} from "@/components/social-links"
import {ProjectCard} from "@/components/project-card"
import {Button} from "@/components/ui/button"

const projects = [
  {
    title: "Greenbox",
    description: "Marketing landing page for a venture capital company.",
    image: "/projects/greenbox.jpg",
    technologies: ["REACT", "JAVASCRIPT", "SASS"],
    demoUrl: "#",
  },
  {
    title: "Nextbnb",
    description: "Listing of properties from a MongoDB Atlas example database in a static generated site.",
    image: "/projects/nextbnb.jpg",
    technologies: ["NEXT.JS", "MONGODB", "SASS"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Guess the song",
    description: "Quiz game in ReactJS. Hooks, Context, public APIs and CSS animations. Design and prototyping in Figma.",
    image: "/projects/guess-the-song.jpg",
    technologies: ["REACT", "NEXT", "HTML"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Supermarket list",
    description: "App that saves a list of items in localStorage.",
    image: "/projects/supermarket-list.jpg",
    technologies: ["REACT", "TYPESCRIPT", "LOCALSTORAGE"],
    demoUrl: "#",
    codeUrl: "#",
  },
]

export default function Home() {
  return (
    <main className="relative">
      <Nav />

      {/* Hero Section */}
      <section className="min-h-screen relative">
        <div className="container mx-auto px-4 min-h-screen flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Lucas Maidana</h1>
              <p className="text-xl text-white mb-8 max-w-lg">
                Hi! I'm a <span className="font-semibold">Frontend developer</span> from Argentina. I love creating accessible web experiences.
              </p>
              <SocialLinks />
            </div>
            <div className="relative">
              <div className="absolute -top-8 right-0 bg-white rounded-full px-3 py-1 text-[#1B4D4B] font-medium">Hire me! 👋</div>
              <div className="w-64 h-64 rounded-full overflow-hidden bg-[#153C3A]">
                <Image src="/avatar.png" alt="" width={256} height={256} className="w-full h-full object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Designing the future, one line of code at a time. From crafting visually stunning <span className="font-semibold">CSS</span> to staying on top of the latest{" "}
            <span className="font-semibold">UX</span> and <span className="font-semibold">accessibility</span> trends, I bring passion and expertise to every project. Most of my projects are boosted
            with <span className="font-semibold">React.js</span>. I also study Systems Engineering at university.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[#1B4D4B]">
              Load more projects
            </Button>
          </div>
        </div>
      </section>

      {/* Talks Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12">Talks</h2>
          <div className="bg-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white">Web accessibility</h3>
            <p className="text-white/80">at DevTalks, April 16th 2021 (Spanish)</p>
            <a href="#" className="text-white hover:underline mt-2 inline-block">
              Slides
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Contact</h2>
          <p className="text-xl text-white mb-8">I am available to join your team right now!</p>
          <a href="mailto:lucasmaidanasoy@gmail.com" className="inline-block bg-white/20 hover:bg-white/30 transition-colors rounded-full px-6 py-3 text-white mb-8">
            lucasmaidanasoy@gmail.com
          </a>
          <div className="flex justify-center gap-4">
            <Button variant="secondary" asChild>
              <a href="#" download>
                CV (Spanish)
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="#" download>
                Resume (English)
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
