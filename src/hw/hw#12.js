// console.log('HW# 12: ')
// const BASE = 'https://swapi.dev/api/';
// const people = `people/?page=`;
// const planets = `planets/?page=`;


// function getInfoPeople(page){
//     const config = {
//         method: 'GET',
//         url: BASE + 'users',
//         params: {
//             page: page
//         }
//     };
//     return axios.get(BASE + people + page)
//     .then((res) => {
//         return res.data.results;
//     });
// }

// function getInfoPlenets(page){
//     const config = {
//         method: 'GET',
//         url: BASE + 'name',
//         params: {
//             page: page
//         }
//     };
//     return axios.get(BASE + planets + page)
//     .then((res) => {
//         return res.data.results;
//     });
// }


// function renderUsers(users){
//     const container = document.querySelector('.users');
//     container.innerHTML = '';

//     users.forEach(user => {
//     const userElement = document.createElement('div');
//     userElement.innerHTML = `
//     <h4>${'Имя: ' + user.name}</h4>
//     <h4>${'Дата рождения: ' + user.birth_year}</h4>
//     <h4>${'Пол: ' + user.gender}</h4>
//     `;
//     container.append(userElement);
//     })
// }

// function renderPlanets(users){
//     const container = document.querySelector('.users');
//     container.innerHTML = '';

//     users.forEach(user => {
//     const userElement = document.createElement('div'); 
//     userElement.innerHTML = `
//     <h4>${'Имя: ' + user.name}</h4>
    
//     `;
//     container.append(userElement);
//     })
// }


// let currenPage = 1;
// document.getElementById('next').addEventListener('click' , () => {
//         getInfoPeople(++currenPage).then(renderUsers);
//         document.getElementById('page').innerHTML = 'Page: ' + currenPage;
//     });
//  document.getElementById('prev').addEventListener('click' , () => {
//      getInfoPeople(--currenPage).then(renderUsers);
//      document.getElementById('page').innerHTML = 'Page: ' + currenPage;
// });
// document.getElementById('planetsP').addEventListener('click' , () => {
//     getInfoPlenets(++currenPage).then(renderPlanets);
// });
// document.getElementById('planetsM').addEventListener('click' , () => {
//     getInfoPlenets(--currenPage).then(renderPlanets);
// });



// getInfoPeople().then(renderUsers)

