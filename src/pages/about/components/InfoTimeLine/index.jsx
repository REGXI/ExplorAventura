import './index.scss'
export function InfoTimeLine({ title, description }) {
  return (
    <div className="info">
      <div className="description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
