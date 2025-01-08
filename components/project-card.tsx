import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  demoUrl?: string
  codeUrl?: string
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  demoUrl,
  codeUrl,
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg">
      <div className="relative h-48">
        <Image
          src={image}
          alt={`Screenshot of ${title}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex gap-4">
          {demoUrl && (
            <Link
              href={demoUrl}
              className="text-[#1B4D4B] hover:underline font-medium"
            >
              Demo
            </Link>
          )}
          {codeUrl && (
            <Link
              href={codeUrl}
              className="text-[#1B4D4B] hover:underline font-medium"
            >
              Code
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

