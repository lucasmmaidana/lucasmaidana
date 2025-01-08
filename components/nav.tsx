import Link from 'next/link'

export function Nav() {
  return (
    <nav className="absolute top-0 w-full p-6">
      <ul className="flex justify-center gap-8">
        <li>
          <Link href="/" className="text-white hover:opacity-80 transition-opacity">
            Home
          </Link>
        </li>
        <li>
          <Link href="/projects" className="text-white hover:opacity-80 transition-opacity">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/talks" className="text-white hover:opacity-80 transition-opacity">
            Talks
          </Link>
        </li>
        <li>
          <Link href="/blog" className="text-white hover:opacity-80 transition-opacity">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}

