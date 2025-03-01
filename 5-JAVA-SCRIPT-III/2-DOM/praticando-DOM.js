function addContact(){
  const contactSection = document.getElementById('contacts-list')

  const h3 = document.createElement('h3')
  h3.innerText = 'Contato'


  const ul = document.createElement('ul')

  const nameLi = document.createElement('li')
  nameLi.innerText = 'Nome'
  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.name = 'fullName'

  nameLi.appendChild(nameInput) //li <- nameInput
  const br = document.createElement('br')
  ul.append(nameLi, br) //ul <- li

  const phoneLi = document.createElement('li')
  phoneLi.innerText = 'Phone'
  const phoneInput = document.createElement('input')
  phoneInput.type = 'text'
  phoneInput.name = 'phone'

  phoneLi.appendChild(phoneInput) //li <- nameInput
  ul.appendChild(phoneLi) //ul <- li

  contactSection.append(h3, ul)
}

function removeContact(){
  const contactSection = document.getElementById('contacts-list')

  const titles = document.getElementsByTagName('h3')
  const contacts = document.getElementsByTagName('ul')

  contactSection.removeChild(titles[titles.length - 1])
  contactSection.removeChild(contacts[contacts.length - 1])
}