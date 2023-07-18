import './index.scss'
import LayoutPage from '../../../../components/LayuotPage'
import Granada from '../../../../assets/images/granada.webp'
import Jinotega from '../../../../assets/images/jinotega.webp'
import Cornisland from '../../../../assets/images/cornisland.webp'
import Masaya from '../../../../assets/images/masaya.webp'
import Archipielagosolentiname from '../../../../assets/images/archipielagosolentiname.webp'
import Cerronegro from '../../../../assets/images/cerronegro.webp'
export function RecommendedSites({ t }) {
  return (
    <LayoutPage
      className="recommended-sites"
      title="home.sites-recomended-title"
      subject="home.sites-recomended-subject"
      titleColor="primary"
      t={t}
    >
      <div className="recommended-sites__content">
        <section>
          <figure className="recommended-sites__content-item">
            <img loading="lazy" src={Jinotega} alt="Jinotega - Nicaragua" />
          </figure>
          <figure className="recommended-sites__content-item">
            <img loading="lazy" src={Masaya} alt="Masaya - Nicaragua" />
          </figure>
          <figure className="recommended-sites__content-item">
            <img
              loading="lazy"
              src={Archipielagosolentiname}
              alt="Archipiélago de Solentiname - Nicaragua"
            />
          </figure>
        </section>

        <section>
          <figure className="recommended-sites__content-item">
            <img loading="lazy" src={Granada} alt="Granada - Nicaragua" />
          </figure>
        </section>

        <section>
          <figure className="recommended-sites__content-item">
            <img
              loading="lazy"
              src={Cerronegro}
              alt="Cerro negro - Nicaragua"
            />
          </figure>
          <figure className="recommended-sites__content-item">
            <img
              loading="lazy"
              src={Cornisland}
              alt="Corn Island - Nicaragua"
            />
          </figure>
        </section>
      </div>
    </LayoutPage>
  )
}
