const upcomingContainer = document.getElementById('upcoming-container');

let dateFilter = eventFilter(data.events, data.currentDate);

function eventFilter(events, currentDate) {
    let dataFilter = []
    for (i = 0; i < events.length; i++) {
        if (events[i].date > currentDate) {
            dataFilter.push(events[i]);
        };
    };
    return dataFilter;
};

showData(upcomingContainer, dateFilter);