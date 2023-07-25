import { ItemRenderPlace } from '../ItemRenderPlace'
export function RenderPlaces({ places, t }) {
  console.log(places)

  return (
    <>
      <div className="title-related-places">
        <h2>Related Places</h2>
      </div>

      <div className="places">
        {places?.map((item, index) => {
          return (
            <ItemRenderPlace
              key={index}
              image={item.image}
              name={t(item.name)}
            />
          )
        })}
      </div>
    </>
  )
}
