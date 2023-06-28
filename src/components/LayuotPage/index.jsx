import './index.scss'

export default function LayoutPage({
  children,
  className,
  title,
  subject,
  titleColor,
  t
}) {
  return (
    <div className={`layout__page ${className}`}>
      <div className="layout__page-header">
        <h2 className="layout__page-title" data-color={titleColor}>
          {t(title)}
        </h2>
        <p className="layout__page-subject">{t(subject)}</p>
      </div>

      {children}
    </div>
  )
}
