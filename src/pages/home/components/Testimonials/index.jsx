import LayoutPage from '../../../../components/LayuotPage'
import './index.scss'

const TESTIMONIALS_ITEM = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    description: 'home.testimonials-item-description-1'
  },
  {
    id: 2,
    name: 'David Thompson',
    description: 'home.testimonials-item-description-2'
  },
  {
    id: 3,
    name: 'Sophia Ramirez',
    description: 'home.testimonials-item-description-3'
  }
]
export function Testimonials({ t }) {
  return (
    <LayoutPage
      className="testimonials"
      title="home.testimonials-title"
      subject="home.testimonials-subject"
      titleColor="primary"
      t={t}
    >
      <div className="testimonials__content">
        {TESTIMONIALS_ITEM.map((item) => (
          <div key={item.id} className="testimonials__item">
            <div>
              <i className="fas fa-quote-left"></i>
              <p>{t(item.description)}</p>
            </div>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </LayoutPage>
  )
}
