import './index.scss'
export const PackageItem = ({ image, title, onClick }) => {
  return (
    <div className="packageContainer__package-item" onClick={onClick}>
      <div className="package-item__image">
        <img src={image} alt={title} />
      </div>
      <div className="package-item__title">{title}</div>
    </div>
  )
}
