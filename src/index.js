import DropDown from './drop-down'

document.addEventListener('DOMContentLoaded', ()=>{
  let dropDown = document.querySelector('#dropDown')
  let toggler = dropDown.querySelector('span')
  let itemsContainer = dropDown.querySelector('ul')
  new DropDown(toggler, itemsContainer)
})
