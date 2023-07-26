import { ItemRenderPlace } from '../ItemRenderPlace'
import Carousel from '../../../../components/Carousel'
import './index.scss'
export function RenderPlaces({ places, t, handleClickedPlace }) {
  return (
    <>
      <div className="title-related-places">
        <h2>Related Places</h2>
      </div>

      <div className="places">
        <Carousel
          arrayCarousel={places}
          RenderComponent={ItemRenderPlace}
          onClickedItem={handleClickedPlace}
        />
      </div>
    </>
  )
}
