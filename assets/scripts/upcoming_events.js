const upcomingContainer = document.getElementById('upcoming-container');

let dateFilter = eventFilter(data.events, data.currentDate);

function showData(containerData) {
    for (eventData of dateFilter) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        
        <img src="${eventData.image}" class="card-img-top" alt="Cinema">
        <div class="title-container d-flex justify-content-around">
                    <h5 class="card-title">${eventData.category}</h5>
                    <p class="colorText">${eventData.place}</p>
                </div>
        <div class="card-body">
          <h2 class="card-title-main text-dark fw-bold">${eventData.name}</h2>
          <p class="card-text text-darck">${eventData.description}</p>

          <div class="card-data">
          <p>Capacity: ${eventData.capacity}</p>
          <p class="colorText">Date: ${eventData.date}</p>
      </div>

          <div class="footer-card">
            <span class="text-secondary fw-bold text-dark">Price $${eventData.price}</span>
            <a href="./details.html" class="btn btn-secondary ms-auto">Details</a>
          </div>
        </div>`

        containerData.append(card);
    };
};

function eventFilter(events, currentDate) {
    let dataFilter = []
    for (i = 0; i < events.length; i++) {
        if (events[i].date > currentDate) {
            dataFilter.push(events[i]);
        };
    };
    return dataFilter;
};

showData(upcomingContainer);