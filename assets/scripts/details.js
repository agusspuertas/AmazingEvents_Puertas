let container = document.getElementById ('detailContainer')
let events = data.events
let queryString = document.location.search
let params = new URLSearchParams(queryString)
let idEvent = params.get('id')
let event = events.filter(ev => ev._id == idEvent)
detailCard (event)
function detailCard (array){
    let htmlDetailCard= ''
    for (const element of array) {
        htmlDetailCard += `<img src="${element.image}" alt="Item Image" class="col-md-6 img-fluid h-50 px-0">
        <div class="col-md-6 bg-dark p-4 d-flex flex-column">
          <h2 class="text-primary fw-bold mb-4">Item Details</h2>
          <div class="mb-4">
            <h3 class="text-secondary fw-bold me-2 d-inline-block">Name: ${element.name}</h3>
          </div>
          <div class="mb-4">
            <h3 class="text-secondary fw-bold me-2 d-inline-block">Date: ${element.date}</h3>
          </div>
          <div class="mb-4">
            <h3 class="text-secondary fw-bold me-2 d-inline-block">Descripcion: ${element.description}</h3>
          </div>
          <div class="mb-4">
            <h3 class="text-secondary fw-bold me-2 d-inline-block">Category: ${element.category}</h3>
          </div>
          <div class="mb-4">
            <h3 class="text-secondary fw-bold me-2 d-inline-block">Place: ${element.place}</h3>
          </div>
          <div class="mb-4">
            <h3 class="text-secondary fw-bold me-2 d-inline-block">Capacity: ${element.capacity}</h3>
          </div>
          <div class="mb-4">
            <h3 class="text-secondary fw-bold me-2 d-inline-block">Assistance or Estimate:${element.assistance}</h3>
          </div>
          <div class="mb-4">
            <h3 class="text-secondary fw-bold me-2 d-inline-block">Price: ${element.price}</h3>
          </div>
        </div>
        `
    }
    container.innerHTML = htmlDetailCard
}
