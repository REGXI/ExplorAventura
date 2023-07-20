import './index.scss'
import { useTranslation } from 'react-i18next'
import { valuesData } from '../../data/valuesData'
import { Values } from './components/Value'
import { TimeLine } from './components/TimeLine'
import { Executive } from './components/Executive'
export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <div className="about-page">
      <section className="values">
        <Values valuesData={valuesData} t={t} />
      </section>
      <div className="time-line">
        <TimeLine t={t} />
      </div>

      <section className="executive">
        <Executive t={t} />
      </section>
    </div>
  )
}
