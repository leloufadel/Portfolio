const projects = [
    {
      title: 'Tonic',
      jobDescription: {
        company: 'CANOPY',
        role: 'Back End Dev',
        year: '2015',
      },
      img: 'image/Snapshoot-Portfolio.jpg',
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
      img: 'image/Snapshoot-Portfolio-2.jpg"',
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
      img: 'image/Snapshoot-Portfolio.jpg',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      skills: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
      btn1: 'See live',
      btn2: 'See Source',
  
    },
    {
      title: 'Multi-Post Stories',
      img: 'image/Snapshoot-Portfolio-2.jpg',
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
        console.log("hi")
        Popup(ind);
      });
    });




   
    // projects.forEach((project, id) => {
    //   const overlaye = document.createElement('div');
    //   overlaye.classList.add('overlay');
    //   overlaye.setAttribute('data-project-id', id);
   
    //   overlaye.innerHTML = (`
    //       <img class="projetc-image" src= "${project.img}">
    //       <div class="content project${id}">
    //         <h3>${project.title}</h3>
    //         <ul>
    //             <li>${project.jobDescription.company}</li>
    //             <li>${project.jobDescription.role}</li>
    //             <li>${project.jobDescription.year}</li>
    //         </ul>
    //         <p class="description">${project.description}</p>
    //         <ul>
    //           <li ><a href="#" class="programming">${project.skills[0]}</a></li>
    //           <li ><a href="#" class="programming">${project.skills[1]}</a></li>
    //           <li ><a href="#" class="programming">${project.skills[2]}</a></li>
    //         </ul>
    //         <button type="button" class = "${project.id}" id="popbtn"  >See projects</button>
    //       </div>
    //       `);
    //       document.querySelector('body').appendChild(overlaye);
    //   });

    //   document.querySelectorAll('#popbtn').forEach(button => {
    //     const projectId = button.getAttribute('data-project-id');
    //     const overlay = document.querySelector(`[data-project-id="${projectId}"]`);
    //     console.log(projectId);
    //     button.addEventListener('click', () => {
    //       console.log("hello")
    //       overlay.style.display = 'block';
    //     });
    //   });




  // document.querySelector('#popbtn-1').addEventListener((e) => {

  // })
  // projects.forEach((project, id) => {
  //   const overlaye = document.createElement('div');
  //   overlaye.classList.add('job');
  //   overlaye.innerHTML = (`
  //     <img class="projetc-image" src= "${project.img}">
  //     <div class="content project${id}">
  //       <h3>${project.title}</h3>
  //       <ul>
  //           <li>${project.jobDescription.company}</li>
  //           <li>${project.jobDescription.role}</li>
  //           <li>${project.jobDescription.year}</li>
  //       </ul>
  //       <p class="description">${project.description}</p>
  //       <ul>
  //         <li ><a href="#" class="programming">${project.skills[0]}</a></li>
  //         <li ><a href="#" class="programming">${project.skills[1]}</a></li>
  //         <li ><a href="#" class="programming">${project.skills[2]}</a></li>
  //       </ul>
  //       <button type="button" id="popbtn" Onclick = "popUp()">See projects</button>
  //     </div>
  //     `);
  //     document.querySelector('body').appendChild(overlaye);
  // });
  // projects.forEach((project, id) => {
  //     const overlayy = document.querySelector(`.overlaye${id}`);
  //     console.log(overlayy);
  //     document.querySelector(`#popbtn`).addEventListener('click', () => {
  //       overlayy.style.display = 'block';
  //     });
  //   })
  
  // Pop up window work section

// for (let i = 0; i < projects.length; i += 1) {
//   const overlay = document.createElement('div');
//   overlay.className = `overlay-${i}`;
//   overlay.innerHTML = `
//   <div class="modal" style="padding: 2%;">
          

//           <div class="">
//             <div style="display: flex; justify-content: space-between;">
//               <h2 class="project-title" style="color: #091E42;">${projects[i].name}</h2>
//             <button class="close-modal-${i} cross">&times;</button>
//             </div>
            
//             <div class="frame-2">
//               <div class="client">
//                 <p class="client-text" style="color: #344563">CANOPY</p>
//               </div>

//               <img class="container" src="assets/Counter.png" alt="Counter" />

//               <p class="role role-text">BackEnd Dev</p>

//               <img class="container" src="assets/Counter.png" alt="Counter" />

//               <p class="year-label year-text">2015</p>
//             </div>

//         </div>

//         <img
//             class="overlay-image-container"
//             src=${projects[i].image}
//             alt="Snapshoot Portfolio-2"
//           />

//           <div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
//             <div style="width: 65%; padding-right: 2%; display: inline-block;">
//               <p class="" style="margin-bottom: 0.5rem; font-size: 1.1rem; color: #344563;">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit enim architecto in impedit ab fugit, laboriosam voluptatem, repellendus dolore molestias harum reprehenderit iste maxime soluta.
//               </p>
    
              
//             </div>
            
  
//             <div style="display: inline;">
//               <ul class="tags" style="margin-bottom: 2rem;">
//                 <li class="tag-html"><p class="tag-text-html">HTML</p></li>
//                 <li class="tag-css"><p class="tag-text-css">CSS</p></li>
//                 <li class="tag-js"><p class="tag-text-js">JavaScript</p></li>
//               </ul>
    
//               <div style="display: flex; gap: 2%; ">
//               <a style="text-decoration: none;" href=${projects[i].liveLink}> <button class="normal-button" style="color: #6070FF;" ><span class="colors">See live</span> <img class="liveIcon" src="assets/liveIcon.png" alt="Live Icon" /></button> </a>
    
//                <a href=${projects[i].sourceLink}> <button class="normal-button" style="color: #6070FF;"><span class="colors">See source</span> <img class="liveIcon" src="assets/sourceIcon.png" alt="Source Icon" /></button> </a>
//               </div>
//             </div>
//           </div>

//       </div>

//   `;
//   document.querySelector('body').appendChild(overlay);
// }

// for (let i = 0; i < projects.length; i += 1) {
//   const overlayy = document.querySelector(`.overlay-${i}`);
//   console.log(overlayy);
//   document.querySelector(`#popbtn-${i}`).addEventListener('click', () => {
//     overlayy.style.display = 'block';
//   });
// }

// for (let i = 0; i < projects.length; i += 1) {
//   document.querySelector(`.close-modal-${i}`).addEventListener('click', () => {
//     document.querySelector(`.overlay-${i}`).style.display = 'none';
//   });
// }

// const popUp = ((e)  => {
      
    
//     })





//       popUp.addEventListener('click', () => {
//         const cards= document.createElement('div');
//       });
//       projects.forEach((project, id) => {
//         const cards = document.createElement('div');
//         cards.classList.add('job');
//     })
