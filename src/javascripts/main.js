import '../styles/main.scss'

const projects = [
  {
    title: "Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },

  {
    title: "Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },

  {
    title: "Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  }
]


const printToDom = (elmentId, str) =>{
  const selectedDiv = document.querySelector(elmentId);
  selectedDiv.innerHTML = str;
}


const buildProjectCards = (projectCollection) =>{
  let domString = '';
  for (let i=0; i < projectCollection.length; i++)
    if (projectCollection[i].available){
      domString += `<div class="projectcard">`;
      domString += `<header>${projectCollection[i].title}</header>`
      domString += `<img src="${projectCollection[i].screenshot}">`
      domString += `<div class="description">${projectCollection[i].description}</div>`
      domString += `<h4>Technologies Used:</h4>`
      domString += `<div class="description">${projectCollection[i].technologiesUsed}</div>`
      domString += `<h4>Links:</h4>`
      domString += `<a href="${projectCollection[i].url}">Project URL</a><br>` 
      domString += `<a href="${projectCollection[i].githubUrl}">Github URL</a>` 
      domString += `</div>`
    }
  printToDom("#projectsPage",domString)
}

const init = () => {
  buildProjectCards(projects)
}

init()
