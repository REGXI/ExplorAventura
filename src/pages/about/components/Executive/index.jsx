import './index.scss'
import Jacqueline from '../../../../assets/images/jacqueline.webp'
import Winston from '../../../../assets/images/winston.webp'
import LayoutPage from '../../../../components/LayuotPage'

export function Executive({ t }) {
  return (
    <LayoutPage title="about.executive-title" t={t}>
      <div className="executive-content">
        <section className="jacqueline">
          <div className="executive-image">
            <img src={Jacqueline} alt="Jacqueline A. Martinez" />
          </div>
          <div className="executive-info">
            <div className="executive-info__property">
              <div className="executive-info__property__name">
                <h3>Jacqueline A. Martinez</h3>
                <div className="executive-info__property__name__social">
                  <a href="https://www.facebook.com/jacqueline.martinez.31586">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="https://www.instagram.com/jacquelineamartinez/">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
              <p className="executive-info__property__title">
                {t('jacqueline.title')}
              </p>
            </div>

            <div className="executive-info__summary">
              <p>{t('jacqueline.summary')}</p>
            </div>
          </div>
        </section>

        <section className="winston reverse">
          <div className="executive-image">
            <img src={Winston} alt="Winston A. Castillo" />
          </div>
          <div className="executive-info">
            <div className="executive-info__property">
              <div className="executive-info__property__name">
                <h3>Winston A. Castillo</h3>
                <div className="executive-info__property__name__social">
                  <a href="https://www.facebook.com/winston.martinez.31586">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="https://www.instagram.com/winstonmartinez/">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
              <p className="executive-info__property__title">
                {t('winston.title')}
              </p>
            </div>

            <div className="executive-info__summary">
              <p>{t('winston.summary')}</p>
            </div>
          </div>
        </section>
      </div>
    </LayoutPage>
  )
}
