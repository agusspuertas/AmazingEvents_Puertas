// let search = document.getElementById("search")
// let categoryContainer = document.getElementById ("category-form")

// search.addEventListener('keyup', megaFilter)

// function searchEvent (array, word){
//     let arrayFiltered = array.filter(element => element.name.toLowerCase().includes(word))
//     return arrayFiltered
// }

// function megaFilter (){
//     let filterCheckSave = filtercheck(events)
//     let saveEvent =  searchEvent(filterCheckSave, search.value)
//     if (saveEvent.length>0){showData(container, saveEvent)}
//     console.log(filterCheckSave)
// }

// categoryContainer.addEventListener('change', megaFilter)

// function filtercheck(array){
// let checks = document.querySelectorAll ("input[type='checkbox']")
// let arrayChecks = Array.from(checks)
// // console.log(arrayChecks)
// let arrayCheckeds = arrayChecks.filter(check => check.checked)
// let titleCategory = arrayCheckeds.map(check => check.value)
// console.log(titleCategory)
// let arrayFiltered = array.filter(element => titleCategory.includes(element.category))
// if (titleCategory.length == 0){
//     return array
// }else{
//     return arrayFiltered
// }
// }

let search = document.getElementById("search")
let categoryContainer = document.getElementById ("category-form")

search.addEventListener('keyup', megaFilter)

function searchEvent (array, word){
    let arrayFiltered = array.filter(element => element.name.toLowerCase().includes(word))
    return arrayFiltered
}

function megaFilter (){
    let filterCheckSave = filtercheck(events)
    let saveEvent =  searchEvent(filterCheckSave, search.value)
    if (saveEvent.length>0){showData(container, saveEvent)}
    console.log(filterCheckSave)
}

categoryContainer.addEventListener('change', megaFilter)

function filtercheck(array){
let checks = document.querySelectorAll ("input[type='checkbox']")
let arrayChecks = Array.from(checks)
let arrayCheckeds = arrayChecks.filter(check => check.checked)
let titleCategory = arrayCheckeds.map(check => check.value)
console.log(titleCategory)
let arrayFiltered = array.filter(element => titleCategory.includes(element.category))
if (titleCategory.length == 0){
    return array
}else{
    return arrayFiltered
}
}