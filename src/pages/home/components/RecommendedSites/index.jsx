import './index.scss'
import LayoutPage from '../../../../components/LayuotPage'
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
            <img src="https://via.placeholder.com/500" alt="" />
          </figure>
          <figure className="recommended-sites__content-item">
            <img src="https://via.placeholder.com/500" alt="" />
          </figure>
          <figure className="recommended-sites__content-item">
            <img src="https://via.placeholder.com/500" alt="" />
          </figure>
        </section>

        <section>
          <figure className="recommended-sites__content-item">
            <img src="https://via.placeholder.com/500" alt="" />
          </figure>
        </section>

        <section>
          <figure className="recommended-sites__content-item">
            <img src="https://via.placeholder.com/500" alt="" />
          </figure>
          <figure className="recommended-sites__content-item">
            <img src="https://via.placeholder.com/500" alt="" />
          </figure>
        </section>
      </div>
    </LayoutPage>
  )
}
