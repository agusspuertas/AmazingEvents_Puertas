let categoryContainer= document.getElementById("category-form")

function filtroChecks(events){
    let arrayCategories = events.map(element=>element.category)
    let categoryNoRepeat = new Set(arrayCategories)
    let formArray = Array.from(categoryNoRepeat)
    return formArray
}
    
    function categoryChecks(events) {
        let html = ''
        events.forEach(checks => {
            html += `
            <div class="form-check d-inline-block">
              <input class="form-check-input" type="checkbox" id="${checks}" value="${checks}">
              <label class="form-check-label" for="inlineCheckbox1">${checks}</label>
            </div>
            `
        })
        categoryContainer.innerHTML = html
    }
    
  