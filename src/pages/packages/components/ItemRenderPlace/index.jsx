import './index.scss'

export function ItemRenderPlace({ image, name }) {
  return (
    <div className="item-place">
      <div className="image-place">
        <img src={image} alt="imagen place" />
      </div>
      <div className="name-place">
        <span>{name}</span>
      </div>

      <div className="options-place">{/* <button>Custome</button> */}</div>
    </div>
  )
}
