import './index.scss'
import { useTranslation } from 'react-i18next'
import { valuesData } from '../../data/valuesData'
import { Values } from './components/Value'
// import { TimeLine } from './components/TimeLine'
import { Executive } from './components/Executive'
import { Safetravel } from './components/SafeTravel'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { selectNavigationColor } from '../../store/features/navigationColorSlice'
import abuot_page1 from '../../assets/images/abuot_page1.webp'
import abuot_page2 from '../../assets/images/abuot_page2.webp'
import abuot_page3 from '../../assets/images/abuot_page3.webp'
import abuot_page4 from '../../assets/images/abuot_page4.webp'

import TransitionPage from '../transitonPage'

const AboutPage = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [aboutImages, setAboutImages] = useState(abuot_page1)

  useEffect(() => {
    dispatch(selectNavigationColor('light'))
  }, [dispatch])

  useEffect(() => {
    const images = [abuot_page1, abuot_page2, abuot_page3, abuot_page4]
    const image = images[Math.floor(Math.random() * images.length)]
    setAboutImages(image)
  }, [])

  return (
    <div className="about-page">
      <section className="values">
        <img
          src={aboutImages}
          alt="ExplorAventura information"
          className="background-about-page"
        />
        <Values valuesData={valuesData} t={t} />
      </section>
      {/* <div className="time-line"><TimeLine t={t} /></div> */}

      <section className="executive">
        <Executive t={t} />
      </section>

      <section className="safe-travel">
        <Safetravel t={t} />
      </section>
    </div>
  )
}

export default TransitionPage(AboutPage)
