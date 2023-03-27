let search = document.getElementById("search")

search.addEventListener('input', megaFilter)

function searchEvent (array){
    let arrayFiltered = array.filter(element => element.name.toLowerCase().includes(search.value.toLowerCase()))
    return arrayFiltered
}

function megaFilter (){
    cards(filterCheck(searchEvent(arrayEvents)))
}

categoryContainer.addEventListener('change', megaFilter)

function filterCheck(array){
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