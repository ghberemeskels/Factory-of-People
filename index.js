const personForm = document.querySelector('form')

const renderColor = (hairColor) => {
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = hairColor
  colorDiv.style.height = '50px'
  colorDiv.style.width = '100px'
  return colorDiv
}

const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')
  listUnorder(form, details)
}
  
  const listUnorder = (form, details) => {
    const personName = form.personName.value
    const hairColor = form.hairColor.value
    const age = form.age.value
    const birthplace = form.birthplace.value
    const unorderList = document.createElement('ul')
    const person = document.createElement('li')
    person.textContent = 'Name: ' + personName
    const hair = document.createElement('li')
    const colorDiv = renderColor(hairColor)
    hair.textContent = 'Hair Color: '
    const personAge = document.createElement('li')
    personAge.textContent = 'Age: ' + age
    const birth = document.createElement('li')
    birth.textContent = 'Birthplace: ' + birthplace
    unorderList.appendChild(person)
    unorderList.appendChild(hair)
    unorderList.appendChild(colorDiv)
    unorderList.appendChild(personAge)
    unorderList.appendChild(birth)
    details.appendChild(unorderList)
    return unorderList
  }

personForm.addEventListener('submit', handleSubmit)