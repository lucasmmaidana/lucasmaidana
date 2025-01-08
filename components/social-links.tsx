import { Github, Linkedin, Codepen } from 'lucide-react'

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      <a
        href="https://linkedin.com/in/lucasmaidana"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:opacity-80 transition-opacity"
        aria-label="LinkedIn Profile"
      >
        <Linkedin className="w-8 h-8" />
      </a>
      <a
        href="https://github.com/lucasmaidana"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:opacity-80 transition-opacity"
        aria-label="GitHub Profile"
      >
        <Github className="w-8 h-8" />
      </a>
      <a
        href="https://codepen.io/lucasmaidana"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:opacity-80 transition-opacity"
        aria-label="CodePen Profile"
      >
        <Codepen className="w-8 h-8" />
      </a>
    </div>
  )
}

