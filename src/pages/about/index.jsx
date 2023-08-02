import './index.scss'
import { useTranslation } from 'react-i18next'
import { valuesData } from '../../data/valuesData'
import { Values } from './components/Value'
// import { TimeLine } from './components/TimeLine'
import { Executive } from './components/Executive'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { selectNavigationColor } from '../../store/features/navigationColorSlice'
import AboutImage from '../../assets/images/about-image.webp'
export default function AboutPage() {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(selectNavigationColor('light'))
  }, [dispatch])

  return (
    <div className="about-page">
      <section className="values">
        <img src={AboutImage} alt="" className="background-about-page" />
        <Values valuesData={valuesData} t={t} />
      </section>
      <div className="time-line">{/* <TimeLine t={t} /> */}</div>

      <section className="executive">
        <Executive t={t} />
      </section>
    </div>
  )
}
