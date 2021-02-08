const projects = [
  {
    name: "Nextbnb",
    img: "./img/nextbnb.png",
    repo: "https://github.com/lucasmmaidana/nextbnb",
    demo: "https://nextbnb-pi.vercel.app/",
    stack: ["Next.js", "MongoDB", "Sass"],
    description:
      "Listing of properties from a database in a static generated site.",
  },
  {
    name: "Supermarket list",
    img: "./img/tradehelm-challenge.png",
    repo: "https://github.com/lucasmmaidana/tradehelm-challenge",
    demo: "https://tradehelm-challenge-zeta.vercel.app/",
    stack: ["React", "TypeScript", "CSS modules"],
    description: "App that saves a list of items in localStorage.",
  },
  {
    name: "Guess the song",
    img:
      "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F45721836-cd86-4f38-9310-a2f4de8f1248%2Fbehance_cover_Taylor_swift_guess_the_song.png?table=block&id=5470237a-0e48-4b53-8d08-c7e1caaaacf4&width=3490&userId=4bb9f704-7013-46e4-a417-bae0aa696d45&cache=v2",
    repo: "https://github.com/lucasmmaidana/taylor-guess-the-song",
    demo: "https://guessthesongtaylorswift.netlify.app/",
    stack: ["React", "SCSS", "Figma"],
    description: "Quizz game in ReactJS.\nHooks, Context, public APIs.",
  },
  {
    name: "PicStore",
    img:
      "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F49e47670-855e-4e5b-baf2-7b76e8c6703f%2Fpicstore.netlify.react_app_.png?table=block&id=4aa90eee-ea9b-4ddb-88e4-50471fd2b46f&width=3490&userId=4bb9f704-7013-46e4-a417-bae0aa696d45&cache=v2",
    repo: "https://github.com/lucasmmaidana/picstore-react-app",
    demo: "https://picstore.netlify.app/",
    stack: ["React", "CSS"],
    description:
      "React app from the 'Advance React' Scrimba.com course.\n Context, Hooks, Router, PropTypes, Custom Hooks.",
  },
  {
    name: "Tienda Split",
    img:
      "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4783cc56-5abe-435e-b45f-b945b77d8c9b%2FsorteoMesa_de_trabajo_1_copiatribus.png?table=block&id=765a6466-e818-4955-ba95-24e197e1cfa0&width=2790&userId=4bb9f704-7013-46e4-a417-bae0aa696d45&cache=v2",
    repo: "https://github.com/lucasmmaidana/Tienda-Split",
    demo: "https://tienda-split.vercel.app/",
    stack: ["HTML", "SCSS", "JavaScript"],
    description: "Ecommerce integrated with WhatsApp",
  },
  {
    name: "SIMGRAF-IO",
    img:
      "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F63d9cc04-0815-42bd-b47c-2570e2087ba4%2FCapture.png?table=block&id=aaa1b445-77eb-41f0-a9a8-cd3524fdee3b&width=2790&userId=4bb9f704-7013-46e4-a417-bae0aa696d45&cache=v2",
    repo: "https://github.com/lucasmmaidana/SIMGRAF-IO-Simplex/",
    demo: "https://simplex-calc.netlify.app/",
    stack: ["HTML", "CSS", "JavaScript"],
    description: "Simplex method calculator",
  },
  {
    name: "Tasks Dashboard",
    img:
      "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fff04e055-3066-41a2-8cc1-41a57983dbad%2Fkids_dashboard.jpg?table=block&id=e7037ce5-d734-4d47-9769-8fcfab8b783a&width=2790&userId=4bb9f704-7013-46e4-a417-bae0aa696d45&cache=v2",
    repo: "https://github.com/lucasmmaidana/kids-dahsboard",
    demo: "https://kids-dashboard.netlify.app/",
    stack: ["HTML", "CSS", "JavaScript"],
    description: "App dashboard UI",
  },
  {
    name: "Skinland E-Commerce",
    img:
      "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fca52e618-2e05-4967-b3d6-785d7f87731c%2Fskinland.design_.png?table=block&id=68df06ac-32a3-4ffc-ba0d-6ed0de460d41&width=2790&userId=4bb9f704-7013-46e4-a417-bae0aa696d45&cache=v2",
    repo: null,
    demo:
      "https://www.notion.so/lucasmaidana/Skinland-E-Commerce-68df06ac32a34ffcba0d6ed0de460d41",
    stack: ["WordPress", "PHP", "CSS"],
    description: "",
  },
  {
    name: "New client form",
    img:
      "https://www.notion.so/image/https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2Ffs%2F17e47680444833.5ce1cbb0e2511.png?table=block&id=5a67561c-9b03-41a5-8af8-7a61e60b6ca7&width=2790&userId=4bb9f704-7013-46e4-a417-bae0aa696d45&cache=v2",
    repo: "https://codepen.io/LucasMaidana/pen/PazqaV",
    demo: "https://codepen.io/LucasMaidana/pen/PazqaV",
    stack: ["HTML", "CSS", "JavaScript"],
    description:
      "UI for a gym's management system. Browser input validation. Microinteractions",
  },

  {
    name: "Fantasmas",
    img:
      "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd7a30fbe-6736-477d-98a7-41143611e5e8%2FCaptura_de_pantalla_2020-08-04_-_12.24.41.png?table=block&id=de334ce9-076b-43ae-a4aa-e8c248caa00b&width=2790&userId=4bb9f704-7013-46e4-a417-bae0aa696d45&cache=v2",
    repo: "view-source:https://jumpers-game.blogspot.com/",
    demo: "https://jumpers-game.blogspot.com/",
    stack: ["HTML", "CSS", "jQuery"],
    description: "Game with CSS animations.",
  },
]

export default projects
