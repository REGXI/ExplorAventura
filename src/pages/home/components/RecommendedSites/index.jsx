import './index.scss'
import LayoutPage from '../../../../components/LayuotPage'
import Granada from '../../../../assets/images/granada.jpg'
import Jinotega from '../../../../assets/images/jinotega.jpg'
import Cornisland from '../../../../assets/images/cornisland.jpg'
import Masaya from '../../../../assets/images/masaya.jpg'
import Archipielagosolentiname from '../../../../assets/images/archipielagosolentiname.jpg'
import Cerronegro from '../../../../assets/images/cerronegro.jpg'
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
            <img src={Jinotega} alt="Jinotega - Nicaragua" />
          </figure>
          <figure className="recommended-sites__content-item">
            <img src={Masaya} alt="Masaya - Nicaragua" />
          </figure>
          <figure className="recommended-sites__content-item">
            <img
              src={Archipielagosolentiname}
              alt="Archipiélago de Solentiname - Nicaragua"
            />
          </figure>
        </section>

        <section>
          <figure className="recommended-sites__content-item">
            <img src={Granada} alt="Granada - Nicaragua" />
          </figure>
        </section>

        <section>
          <figure className="recommended-sites__content-item">
            <img src={Cerronegro} alt="Cerro negro - Nicaragua" />
          </figure>
          <figure className="recommended-sites__content-item">
            <img src={Cornisland} alt="Corn Island - Nicaragua" />
          </figure>
        </section>
      </div>
    </LayoutPage>
  )
}
