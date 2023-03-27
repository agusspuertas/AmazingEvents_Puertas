async function upcomingEvents(){
    let  dataEvents = await getData();
    arrayEvents = dataEvents.events
    let currentDate = dataEvents.currentDate;
    arrayEvents = arrayEvents.filter(
        (data) => Date.parse(currentDate) < Date.parse(data.date)
    );
   cards(arrayEvents)
}
upcomingEvents()