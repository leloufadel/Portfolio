const projects = [
  {
    title: 'Tonic',
    jobDescription: {
      company: 'CANOPY',
      role: 'Back End Dev',
      year: '2015',
    },
    img: 'Image/Snapshoot-Portfolio.jpg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    btn1: 'See live',
    btn2: 'See Source',
  },
  {
    title: 'Multi-Post Stories',
    jobDescription: {
      company: 'CANOPY',
      role: 'Back End Dev',
      year: '2015',
    },
    img: 'Image/Snapshoot-Portfolio-2.jpg"',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    btn1: 'See live',

    btn2: 'See Source',
  },
  {
    title: 'Tonic',
    jobDescription: {
      company: 'CANOPY',
      role: 'Back End Dev',
      year: '2015',
    },
    img: 'Image/Snapshoot-Portfolio.jpg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    btn1: 'See live',
    btn2: 'See Source',

  },
  {
    title: 'Multi-Post Stories',
    img: 'Image/Snapshoot-Portfolio-2.jpg',
    jobDescription: {
      company: 'CANOPY',
      role: 'Back End Dev',
      year: '2015',
    },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    btn1: 'See live',
    btn2: 'See Source',

  }];

const section = document.querySelector('.cards');
const pop = document.querySelector('#pop-window');

projects.forEach((project, id) => {
  const cards = document.createElement('div');
  cards.classList.add('job');
  cards.innerHTML = (`
        <img class="projetc-image" src= "${project.img}">
        <div class="content project${id}">
          <h3>${project.title}</h3>
          <ul>
              <li>${project.jobDescription.company}</li>
              <li>${project.jobDescription.role}</li>
              <li>${project.jobDescription.year}</li>
          </ul>
          <p class="description">${project.description}</p>
          <ul>
            <li ><a href="#" class="programming">${project.skills[0]}</a></li>
            <li ><a href="#" class="programming">${project.skills[1]}</a></li>
            <li ><a href="#" class="programming">${project.skills[2]}</a></li>
          </ul>
          <button type="button"  class = ${id}  id="popbtn">See projects</button>
        </div>
        `);
  section.appendChild(cards);
});

function Popup(position) {
  const popContent = document.createElement('section');
  popContent.innerHTML = (`
      <div class="pop-content">
      <div class="head-title">
        <h3>${projects[position].title}</h3>
        <span class="close-icon">&times;</span>
      </div>
      <ul class="work-place">
        <li class="year">${
    projects[position].jobDescription.company
    }&nbsp;&nbsp; &#8226; &nbsp;</li>
        <li class="year gray">${
    projects[position].jobDescription.role
    }&nbsp;&nbsp; &#8226; &nbsp;</li>
        <li class="year gray">${projects[position].jobDescription.year}</li>
      </ul>
      <img class= "popimg" src="${projects[position].img}" alt="">
      <div class="bottom">
        <p>${projects[position].description}</p>
        <div class="right-side">
          <ul class="project-languages">
            <li ><a class= "programming" href="">${projects[position].skills[0]}</a></li>
            <li ><a class= "programming" href="">${projects[position].skills[1]}</a></li>
            <li ><a class= "programming" href="">${projects[position].skills[2]}</a></li>
          </ul>
          <div class="popup-buttons">
            <button type="button" class="pop-btn">
                    <a class="btn-live"href="">
                    ${
    projects[position].btn1
    } &nbsp;&nbsp;&nbsp;
                      <i class="btnicon bi bi-box-arrow-up-right"></i>
                    </a>
            </button>
            <button type="button" class="pop-btn">
                    <a class="btn-live"href="">
                    ${
    projects[position].btn2
    } &nbsp;&nbsp;&nbsp;
                      <i class="btnicon bi bi-github"></i>
                    </a>
            </button>
        </div>
      </div>
      </div>`);

  pop.appendChild(popContent);
  if (pop.style.display === 'block') {
    pop.style.display = 'none';
  } else {
    pop.style.display = 'flex';
    document.querySelector('.close-icon').addEventListener('click', () => {
      pop.removeChild(popContent);
      pop.style.display = 'none';
    });
  }
}
const projectnBtn = document.querySelectorAll('#popbtn');
projectnBtn.forEach((btn, ind) => {
  btn.addEventListener('click', () => {
    Popup(ind);
  });
});