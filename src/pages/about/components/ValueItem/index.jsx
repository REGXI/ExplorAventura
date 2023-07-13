import './index.scss'
export function ValueItem({ title, description, icon }) {
  return (
    <div className="value-item">
      <div className="value-item__icon">
        <img src={icon} alt={title} />
      </div>
      <div className="value-item__text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
