export default class DropDown {
  constructor(toggler, itemsContainer, options) {
    this.toggler = toggler
    this.itemsContainer = itemsContainer

    this.options = Object.assign({
      transition: 'height 0.5s ease'
    }, this.options)

    this.bind()
    this.build()
  }

  build(){
    this.applyStyles(this.toggler, {
      cursor: 'pointer'
    })

    this.itemsContainer._height = this.itemsContainer.getBoundingClientRect().height
    this.applyStyles(this.itemsContainer, {
      overflow: 'hidden',
      height: '0px',
      transition: this.options.transition
    })

  }

  bind(){
    this.toggler.addEventListener('click', ()=>{
      this.toggler.classList.toggle('active')
      if(this.toggler.classList.contains('active')) this.fold()
      else this.unfold()
    })
  }

  fold(){
    this.itemsContainer.style.height = this.itemsContainer._height + 'px'
  }
  unfold(){
    this.itemsContainer.style.height = '0px'
  }

  applyStyles(element, styles){
    for(let key in styles) element.style[key] = styles[key]
  }
}
