const introTitle = document.querySelectorAll('.intro__iconsTitle')

const hideContent = (card) => {
  card.classList.remove('intro__iconsTitle--open')
  card.nextElementSibling.classList.remove('intro__iconsHiddenContent--open')
  card
    .querySelector('.intro__iconsArrow')
    .classList.remove('intro__iconsArrow--open')
  card.querySelector('.intro__iconsTitleText').classList.remove('red-text')
}

const showContent = (card) => {
  card.classList.add('intro__iconsTitle--open')
  card.nextElementSibling.classList.add('intro__iconsHiddenContent--open')
  card
    .querySelector('.intro__iconsArrow')
    .classList.add('intro__iconsArrow--open')
  card.querySelector('.intro__iconsTitleText').classList.add('red-text')
}

const toggleCard = (card, index) => {
  if (!card.classList.contains('intro__iconsTitle--open')) {
    introTitle.forEach((card) => {
      hideContent(card)
    })
    showContent(card)
  } else {
    hideContent(card)
  }
}

introTitle.forEach((element, index) => {
  element.addEventListener('click', () => toggleCard(element, index))
})

const cards = document.querySelectorAll('.ingr__singleCard')

cards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('is-flipped')
  })
})

const products = document.querySelectorAll('.wheel__product')
const options = document.querySelectorAll('.wheel__option')
const backgrounds = document.querySelectorAll('.wheel__bg')
const wheelContainer = document.querySelector('.wheel__container')

const productsImg = document.querySelectorAll('.wheel__productSingle')
const productsInfo = document.querySelectorAll('.wheel__product-info')
const productsCarousel = document.querySelectorAll('.wheel__productSingle')

const selectProduct = (product) => {
  const productId = product.querySelector('.wheel__option').id
  wheelContainer.style.transform = `rotate(${product.dataset.rotation})`
  backgrounds.forEach((bg) => bg.classList.remove('wheel__bg--active'))
  product.querySelector('.wheel__bg').classList.add('wheel__bg--active')
  productsInfo.forEach((info) => {
    info.classList.remove('wheel__product-info--active')
    if (productId === info.dataset.productid) {
      info.classList.add('wheel__product-info--active')
    }
  })
  productsCarousel.forEach((product) => {
    product.classList.remove('wheel__productSelected')
    if (productId === product.dataset.productid) {
      product.classList.add('wheel__productSelected')
    }
  })
}
products.forEach((product) => {
  product.addEventListener('click', () => selectProduct(product))
})
options.forEach((option) => {
  new CircleType(document.getElementById(option.id)).radius(180)
})
