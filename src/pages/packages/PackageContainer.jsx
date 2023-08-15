import './packageContainer.scss'
import { getPackageItems } from '../../data/packages'
import { PackageItem } from './components/PackageItem'
import { useEffect, useState } from 'react'
import Accordion from '../../components/Accordion'
import rightLargeIcon from '../../assets/svg/rightLarge.svg'

export default function PackageContainer() {
  const [packagItems, setPakageItems] = useState()
  const [focusedPackage, setFocusedPackage] = useState()

  useEffect(() => {
    setPakageItems(getPackageItems())
    setFocusedPackage(getPackageItems()[0])
  }, [])

  const handleClickPackage = (item) => {
    setFocusedPackage(item)
  }

  return (
    <div className="packageContainer">
      <section className="packageContainer__descriptions-fields">
        <div className="packageContainer__title">
          <h2>
            <span className="fixed-span">UNFORGETTABLE TOURS</span>
            <span className="iconRight">
              ARE <img src={rightLargeIcon} alt="icon" />
            </span>
            <span>WAITING FOR</span>
            <span className="you">YOU</span>
          </h2>
        </div>
        <div className="packageContainer__description">
          <h3>Tour package 7 days</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, voluptates voluptate quod quos
            voluptatibus doloribus quae quas fugit. Quisquam voluptatum,
          </p>
          <button>CONTACT AGENT</button>
        </div>
      </section>
      <section className="packageContainer__focused-package">
        <div className="packageContainer__focused-package__image">
          <img src={focusedPackage?.image} alt="" />
          <h3>Name site</h3>
        </div>
      </section>
      <section className="packageContainer__packages">
        <div className="content_package">
          <h3>Other Packages</h3>
          <div className="content_package__items">
            {packagItems?.map((item) => (
              <PackageItem
                key={item.id}
                title={item.title}
                image={item.image}
                onClick={() => handleClickPackage(item)}
              />
            ))}
          </div>
        </div>

        <div className="content_package-trajectory">
          <h3>Trajectory</h3>
          <div className="content_package-trajectory-focused__items">
            {focusedPackage?.trajectory?.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                description={item.description}
                site={item.site}
                enableButton={true}
                titleButton={'BOOK NOW'}
                onClickedButton={() => console.log('clicked')}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
