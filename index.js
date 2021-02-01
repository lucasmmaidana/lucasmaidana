import projects from "./projects.js"

const projectsDiv = document.getElementById("projects-list")

let html = ""

projects.forEach((project) => {
  let stack = ""
  project.stack.forEach((tech) => {
    stack += `<span>${tech}</span> `
  })

  html += `
        <div class="project">        
          <div>
            <div class="project__img">
             <a href="${project.demo && project.demo}">
              <img loading="lazy" src="${project.img}" alt="${project.name}">
             </a>
            </div>
            <div class="project__info">
                  <h3>${project.name}</h3>
                  <div class="project__stack">
                  ${stack}
                  </div>
                  <p class="project__description">${project.description.replace(
                    /(?:\r\n|\r|\n)/g,
                    "<br>"
                  )}</p>
              </div>
          </div>
          <div class="project__links">
              ${project.demo ? `<a href="${project.demo}">Demo</a>` : ""}
              ${project.repo ? `<a href="${project.repo}">Code</a>` : ""}
          </div>
        </div>
    `
})

projectsDiv.innerHTML = html
