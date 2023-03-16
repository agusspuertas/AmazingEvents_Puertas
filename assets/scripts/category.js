let cantegoryContainer= document.getElementById("category-form")
let events = data.events;
let arrayCategories = events.map(element=>element.category)
let categoryNoRepeat = new Set(arrayCategories)
let formArray = Array.from(categoryNoRepeat)

console.log (formArray)

function categoryChecks(array, container) {
    let html = ''
    for (const cheks of array) {
        html += `
        <div class="form-check d-inline-block">
          <input class="form-check-input" type="checkbox" id="${cheks}" value="${cheks}">
          <label class="form-check-label" for="inlineCheckbox1">${cheks}</label>
        </div>
        `
    }
    container.innerHTML = html
}

categoryChecks(formArray, cantegoryContainer)