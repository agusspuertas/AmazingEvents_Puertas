const pastContainer = document.getElementById('past-container');

let dateFilter = eventFilter(data.events, data.currentDate);

function showData(containerData) {
    const fragment = document.createDocumentFragment();
    for (eventData of dateFilter) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            
        <img src="${eventData.image}" class="card-img-top" alt="Cinema">
        <div class="card-body">
          <h2 class="card-title-main text-dark fw-bold">${eventData.name}</h2>
          <p class="card-text text-darck">${eventData.description}</p>

          <div class="card-data">
          <p class="colorText">Date: ${eventData.date}</p>
      </div>

          <div class="footer-card">
            <span class="text-secondary fw-bold text-dark">Price $${eventData.price}</span>
            <a href="./details.html" class="btn btn-secondary ms-auto">Details</a>
          </div>
        </div>`

        fragment.appendChild(card);
    }
    pastContainer.appendChild(fragment);
}

function eventFilter(events, currentDate) {
    let dataFilter = []
    for (i = 0; i < events.length; i++) {
        if (events[i].date < currentDate) {
            dataFilter.push(events[i]);
        };
    };
    return dataFilter;
}

showData(pastContainer)