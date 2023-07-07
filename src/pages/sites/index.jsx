import { useTranslation } from 'react-i18next'
import { useRef, useEffect, useState } from 'react'
import './index.scss'

const data = [
  {
    img: 'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg',
    country: 'Vietnam',
    place: 'Ha Noi',
    describe: 'Ha Noi is the capital of Vietnam'
  },
  {
    img: 'https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg',
    country: 'Alaska - USA',
    place: 'Alaska',
    describe: 'Alaska is the largest state in the United States by area'
  },
  {
    img: 'https://st4.depositphotos.com/23862650/25152/i/450/depositphotos_251521566-stock-photo-flinged-disk-no1-at-badenweiler.jpg',
    country: 'Germany',
    place: 'Badenweiler',
    describe:
      'Badenweiler is a spa town in the district of Breisgau-Hochschwarzwald in Baden-Württemberg, Germany'
  },
  {
    img: 'https://wwwhatsnew.com/wp-content/uploads/2022/10/Estos-son-los-10-mejores-sistemas-para-pasar-de-texto-a-imagen.jpg',
    country: 'Denizli - Turkey',
    place: 'Pamukkale',
    describe:
      'Pamukkale, meaning "cotton castle" in Turkish, is a natural site in Denizli in southwestern Turkey'
  }
]

export default function SitesPage() {
  const { t } = useTranslation()
  const introduce = useRef(null)
  const ordinalNumber = useRef(null)
  const thumbnailListWrapper = useRef(null)
  const nextBtn = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    introduce.current.innerHTML = ''
    ordinalNumber.current.innerHTML = ''
    thumbnailListWrapper.current.innerHTML = ''

    for (let i = 0; i < data.length; i++) {
      const introduceContent = document.createElement('div')
      introduceContent.classList.add('wrapper')
      introduceContent.innerHTML = `
          <span> 
            <h5 class="country" style="--idx: 0">${data[i].country}</h5>
          </span>
          <span>
            <h1 class="place" style="--idx: 1">${data[i].place}</h1>
          </span>
          <span>
            <p class="describe" style="--idx: 2">${data[i].describe}</p>
          </span>
          <span>
            <button class="discover-button" style="--idx: 3">Discover Now</button>
          </span>
        `
      introduce.current.appendChild(introduceContent)

      const ordinalNumberContent = document.createElement('h2')
      ordinalNumberContent.textContent = `0${i + 1}`
      ordinalNumber.current.appendChild(ordinalNumberContent)
    }

    introduce.current.children[0].classList.add('active')
    ordinalNumber.current.children[0].classList.add('active')

    const thumbnailListWrapperContent = thumbnailListWrapper.current
    const thumbnailZoom = document.createElement('div')
    thumbnailZoom.classList.add('thumbnail', 'zoom')
    const thumbnailZoomImg = document.createElement('img')
    thumbnailZoomImg.src = data[0].img
    thumbnailZoomImg.alt = 'thumbnail'
    thumbnailZoom.appendChild(thumbnailZoomImg)
    thumbnailListWrapperContent.appendChild(thumbnailZoom)

    for (let i = 1; i < data.length; i++) {
      const thumbnail = document.createElement('div')
      thumbnail.classList.add('thumbnail')
      thumbnail.style.setProperty('--idx', i - 1)
      const thumbnailImg = document.createElement('img')
      thumbnailImg.src = data[i].img
      thumbnailImg.alt = 'thumbnail'
      thumbnail.appendChild(thumbnailImg)
      thumbnailListWrapperContent.appendChild(thumbnail)
    }
  }, [])

  const handleNextButton = () => {
    // Deshabilitar el botón temporalmente
    nextBtn.current.disabled = true

    // Clonar el primer elemento y agregarlo al final
    let clone = thumbnailListWrapper.current.children[0].cloneNode(true)
    clone.classList.remove('zoom')
    thumbnailListWrapper.current.appendChild(clone)
    thumbnailListWrapper.current.children[1].classList.add('zoom')

    setTimeout(() => {
      // Eliminar el primer elemento después de un retardo
      thumbnailListWrapper.current.removeChild(
        thumbnailListWrapper.current.children[0]
      )
      nextBtn.current.disabled = false
    }, 800)

    for (let i = 2; i < thumbnailListWrapper.current.childElementCount; i++) {
      // Actualizar el índice en el estilo de los elementos restantes
      thumbnailListWrapper.current.children[i].style.setProperty('--idx', i - 2)
    }

    // Actualizar el estado del currentIndex
    setCurrentIndex((prevIndex) => {
      if (prevIndex < data.length - 1) {
        return prevIndex + 1
      } else {
        return 0
      }
    })

    // Remover la clase 'active' de todos los elementos
    for (let i = 0; i < data.length; i++) {
      introduce.current.children[i].classList.remove('active')
      ordinalNumber.current.children[i].classList.remove('active')
    }

    // Agregar la clase 'active' al elemento actual
    introduce.current.children[currentIndex].classList.add('active')
    ordinalNumber.current.children[currentIndex].classList.add('active')
    ordinalNumber.current.children[currentIndex].textContent = `0${
      currentIndex + 1
    }`
  }

  return (
    <div className="sites-container">
      <div className="container">
        <div className="content">
          <div className="introduce" ref={introduce}></div>
          <div className="thumbnail-list">
            <div className="wrapper" ref={thumbnailListWrapper}></div>
          </div>
        </div>

        <div className="navigation">
          <button
            className="next-button"
            onClick={handleNextButton}
            ref={nextBtn}
          >
            Next
          </button>
          <span className="line"></span>
          <span className="ordinal-number" ref={ordinalNumber}></span>
        </div>
      </div>
    </div>
  )
}
