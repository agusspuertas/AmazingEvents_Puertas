let URL = "https://mindhub-xj03.onrender.com/api/amazing"
let localURL = "http://127.0.0.1:5501/assets/json/data.json"
let arrayEvents = []

async function getData() {
    let data = await fetch(URL)
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .catch((error) => {
        let localData = fetch (localURL)
        .then(response => response.json())
        .then(localData => {
          return localData;
        })
        return localData;
      })
      
      return data
    }
 


















//   async function getData() {
//     let data = await fetch("https://mindhub-xj03.onrender.com/api/amazing")
//       .then(response => response.json())
//       .then(data => {
//         return data;
//       });
//   return Object.values(data);
  
//   }
  

//   async function iniciar(){
//     let dataEvents = await getData()
//     cards(dataEvents)
//   }
//   iniciar()


//   const container = document.getElementById("card-container");
  
// function cards(dataEvents) {
//   let tarjeta = "";
//   dataEvents.forEach((arrayElement) => {
//     tarjeta += `
//       <div class="card mx-3 my-5">
//         <img src="${arrayElement.image}" class="card-img-top" alt="Cinema">
//         <div class="card-body">
//           <h2 class="card-title-main text-dark fw-bold">${arrayElement.name}</h2>
//           <p class="card-text text-darck">${arrayElement.description}</p>
//           <div class="card-data">
//             <p class="colorText">Date: ${arrayElement.date}</p>
//           </div>
//           <div class="footer-card">
//             <span class="text-secondary fw-bold text-dark">Price $${arrayElement.price}</span>
//             <a href="./details.html?id=${arrayElement._id}" class="btn btn-secondary ms-auto">Details</a>
//           </div>
//         </div>
//       </div>
//     `;
//   });
//   container.innerHTML = tarjeta;
// }

 
 