const container = document.getElementById('upcoming-container');
console.log(data)
let dateFilter = eventFilter(data.events, data.currentDate);
events = dateFilter 

function eventFilter(events, currentDate) {
    let dataFilter = []
    for (i = 0; i < events.length; i++) {
        if (events[i].date > currentDate) {
            dataFilter.push(events[i]);
        };
    };
    return dataFilter;
};

showData(container, dateFilter);

