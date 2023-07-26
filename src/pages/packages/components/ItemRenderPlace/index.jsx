import './index.scss'

export function ItemRenderPlace({ image, name, onClick }) {
  return (
    <div className="item-place">
      <div className="image-place" onClick={onClick}>
        <img src={image} alt="imagen place" />
      </div>
      <div className="name-place">
        <span>{name}</span>
      </div>

      <div className="options-place">{/* <button>Custome</button> */}</div>
    </div>
  )
}
