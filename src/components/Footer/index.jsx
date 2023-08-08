import './index.scss'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Jacqueline from '../../assets/images/jacqueline.webp'
import Winston from '../../assets/images/winston.webp'
export default function Footer() {
  const { t } = useTranslation()

  // return current year
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <section className="summary">
          <h3>ExplorAventura</h3>
          <p>{t('footer.summary')}</p>

          <div className="social">
            <a href="https://www.facebook.com/ExplorAventura-Travel-101501368925201">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://www.instagram.com/exploraventura_travel/">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </section>

        <section className="quick-link">
          <h3>{t('general.quick-link')}</h3>
          <ul>
            <li>
              <Link to="/">{t('navigation.home')}</Link>
            </li>
            <li>
              <Link to="/sites">{t('navigation.sites')}</Link>
            </li>
            <li>
              <Link to="/package">{t('navigation.package')}</Link>
            </li>
          </ul>
        </section>

        <section className="contact">
          <h3>{t('general.contact')}</h3>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt" />{' '}
              <span>Granada - Nicaragua</span>
            </li>
            <li>
              <i className="fas fa-phone-alt" />{' '}
              <p>
                <span>(505) 8565 1394</span>
                <br />
                <span>(505) 7832 1145</span>
              </p>
            </li>
            <li>
              <i className="fas fa-envelope" />{' '}
              <span> info@exploraventuratravel.com </span>
            </li>
          </ul>
        </section>

        <section className="executive">
          <div>
            <h3>Jacqueline Martinez</h3>

            <img src={Jacqueline} alt="Jacqueline" />
          </div>
          <div>
            <h3>Winston Castillo</h3>

            <img src={Winston} alt="Winston" />
          </div>
        </section>
      </div>

      <div className="footer-copyright">
        <p>
          © {currentYear} ExplorAventura. {t('footer.all-rights-reserved')}{' '}
          <a href="https://exploraventuratravel.com" target="_blank">
            exploraventuratravel.com
          </a>{' '}
          {t('general.by')}{' '}
          <a href="https://regxi.com" target="_blank">
            REGXI S.A
          </a>
        </p>
      </div>
    </footer>
  )
}
