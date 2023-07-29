import './index.scss'
import LayoutPage from '../../../../components/LayuotPage'
import busSvg from '../../../../assets/svg/bus.svg'
import cameraSvg from '../../../../assets/svg/camera.svg'
import plane from '../../../../assets/svg/plane.svg'
import location from '../../../../assets/svg/location.svg'

const SERVICES_ITEM = [
  {
    id: 1,
    icon: busSvg,
    title: 'home.services-item-bus',
    description: 'home.services-item-bus-description'
  },
  {
    id: 2,
    icon: cameraSvg,
    title: 'home.services-item-camera',
    description: 'home.services-item-camera-description'
  },
  {
    id: 3,
    icon: plane,
    title: 'home.services-item-plane',
    description: 'home.services-item-plane-description'
  },
  {
    id: 4,
    icon: location,
    title: 'home.services-item-location',
    description: 'home.services-item-location-description'
  }
]

export function Services({ t }) {
  return (
    <LayoutPage
      title="home.services-title"
      subject="home.services-subject"
      titleColor="primary"
      t={t}
    >
      <div className="services__content">
        {SERVICES_ITEM.map((item) => (
          <div key={item.id} className="services__item">
            <div>
              <img src={item.icon} alt={item.title} />
              <h3>{t(item.title)}</h3>
            </div>
            <p>{t(item.description)}</p>
          </div>
        ))}
      </div>
    </LayoutPage>
  )
}
