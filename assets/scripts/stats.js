
const statsUpEvents = [];
const statsPasEvents = [];

async function iStats() {
    let eventsData = await getData();
    arrayE = eventsData.events;
    let upcomingEventStats = []
    let pastEventStats = []

    eventsData.events.forEach((event) => {
        eventsData.currentDate > event.date
            ? pastEventStats.push({
                name: event.name,
                assistance: event.assistance,
                capacity: event.capacity,
                category: event.category,
                percentage: ((event.assistance * 100) / event.capacity).toFixed(2),
                price: event.price,
                revenues: event.assistance * event.price,
            })
            : upcomingEventStats.push({
                name: event.name,
                estimate: event.estimate,
                capacity: event.capacity,
                category: event.category,
                percentage: ((event.estimate * 100) / event.capacity).toFixed(2),
                price: event.price,
                revenues: event.estimate * event.price,
            })
        });

        console.log(pastEventStats);
        console.log(upcomingEventStats);

        const attendancePercentage = [...pastEventStats].sort(
            (a, b) => b.attendance - a.attendance
          );
        
          const scapacity = [...eventsData.events].sort(
            (a, b) => b.capacity - a.capacity
          );

    let statics = `
    <td>${attendancePercentage[0].name}
    (${attendancePercentage[0].percentage}%)
    </td>
    <td> ${attendancePercentage[attendancePercentage.length -1].name} (${attendancePercentage[attendancePercentage.length -1].percentage}%) 
    </td>
    <td>${scapacity[0].name}
    (${scapacity[0].scapacity})</td>
    `;
     document.getElementById("eventStats").innerHTML = statics
    
     const catUpcomingEvents = [
        ...new Set(upcomingEventStats.map((evento) => evento.category)),
      ];
      const catPastEvents = [
        ...new Set(pastEventStats.map((evento) => evento.category)),
      ];
        
          

      
      catUpcomingEvents.forEach((category) => {
        const catEvents = upcomingEventStats.filter(
          (event) => event.category === category
        );
        const catRevenues = catEvents.reduce(
          (total, event) => total + event.revenues,
          0
        );
        const catAttendance = catEvents.reduce(
          (total, event) => total + event.estimate,
          0
        );
        const catCapacity = catEvents.reduce(
          (total, event) => total + event.capacity,
          0
        );
        const catAttendanceP = (
          (catAttendance * 100) /
          catCapacity
        ).toFixed(2);
        upcomingEventStats.push({
          category,
          revenues: catRevenues,
          percentage: catAttendanceP,
        });
      });

      let upcomingTable = "";
  upcomingEventStats.forEach((event) => {
    const statisticsCategory = `
    <tr>
      <td>${event.category}</td>
      <td>${event.revenues}</td>
      <td>${event.percentage}%</td>
    </tr>`;

    upcomingTable += statisticsCategory;
  });
  document.getElementById("upcomingStatsHTML").innerHTML =
    upcomingTable;


    

    catPastEvents.forEach((category) => {
    const catEvents = pastEventStats.filter(
      (event) => event.category === category
    );
    const catRevenues = catEvents.reduce(
      (total, event) => total + event.revenues,
      0
    );
    const catAttendance = catEvents.reduce(
      (total, event) => total + event.assistance,
      0
    );
    const catCapacity = catEvents.reduce(
      (total, event) => total + event.capacity,
      0
    );
    const catAttendancePor = (
      (catAttendance * 100) /
      catCapacity
    ).toFixed(2);
    pastEventStats.push({
      category,
      revenues: catRevenues,
      percentage: catAttendancePor,
    });
  });


  let statsPastEventsTable = "";
  pastEventStats.forEach((event) => {
    const statisticsCat = `
    <tr>
      <td>${event.category}</td>
      <td>${event.revenues}</td>
      <td>${event.percentage}%</td>
    </tr>`;

    statsPastEventsTable += statisticsCat;
  });
  document.getElementById("pastStatsHTML").innerHTML =
  statsPastEventsTable;
}
iStats();





















































































// //Tabla Upcoming
// let tablaUp = ''
// function createTableUp(eventos){  
//     eventos.forEach((datos) =>{
//       tablaUp += `<tr>
//           <td colspan="3">${datos}</td>         
//           <td>$${arrayRevenues[eventos.indexOf(datos)]}</td> 
//           <td>${arrayPercentage[eventos.indexOf(datos)]}%</td>         
//           </tr>`;}       
//       )   
//     tableUp.innerHTML = tablaUp
// }
// //Tabla Past
// let tablaPast = "";
// function createTablePast(eventos) {
//   eventos.forEach((datos) => {
//     tablaPast += `<tr>
//           <td colspan="3">${datos}</td>         
//           <td>$${arrayRevenues[eventos.indexOf(datos)]}</td> 
//           <td>${arrPer[eventos.indexOf(datos)]}%</td>         
//           </tr>`;
//   });
//   tablePast.innerHTML = tablaPast;
// }

