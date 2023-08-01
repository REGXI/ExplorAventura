import './index.scss'
import { ValuesList } from '../ValuesList'
export function Values({ valuesData, t }) {
  return (
    <div className="container-values">
      {/* <div className="content-values"> */}
      {/* <div className="content-values__title"> */}
      {/* <span>{t('general.our')}</span>
          <h2>{t('about.values')}</h2> */}
      {/* </div> */}
      {/* <div className="content-values__content"> */}
      {/* <ValuesList valuesData={valuesData} t={t} /> */}
      {/* </div> */}
      {/* </div> */}

      <div className="goal-statement">
        <div className="goal-statement__title">
          <span>{t('general.our')}</span>
          <h2>{t('about.goal-statement')}</h2>
        </div>
        <div className="goal-statement__content">
          <p>{t('about.goal-statement-description')}</p>
        </div>
      </div>
    </div>
  )
}
