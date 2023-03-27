  const container = document.getElementById("card-container");
  
function cards(dataEvents) {
  if (dataEvents.length === 0){
    container.innerHTML = `<h1>No result found</h1>`;
    return
  }
  let tarjeta = "";
  dataEvents.forEach((arrayElement) => {
    tarjeta += `
      <div class="card mx-3 my-5">
        <img src="${arrayElement.image}" class="card-img-top" alt="Cinema">
        <div class="card-body">
          <h2 class="card-title-main text-dark fw-bold">${arrayElement.name}</h2>
          <p class="card-text text-darck">${arrayElement.description}</p>
          <div class="card-data">
            <p class="colorText">Date: ${arrayElement.date}</p>
          </div>
          <div class="footer-card">
            <span class="text-secondary fw-bold text-dark">Price $${arrayElement.price}</span>
            <a href="./details.html?id=${arrayElement._id}" class="btn btn-secondary ms-auto">Details</a>
          </div>
        </div>
      </div>
    `;
  });
  container.innerHTML = tarjeta;
}

async function iniciar (){
  let dataEvents = await getData()
  arrayEvents = dataEvents.events
  cards(arrayEvents) 
  categoryChecks(filtroChecks(arrayEvents))
}

iniciar()


 