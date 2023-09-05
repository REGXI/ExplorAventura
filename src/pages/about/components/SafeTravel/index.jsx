import './index.scss'
import LayoutPage from '../../../../components/LayuotPage'
import safetravel from '../../../../assets/images/safetravel.webp'

export function Safetravel({ t }) {
  return (
    <LayoutPage title="Certifications" t={t} className={'safe-travel'}>
      <div className="safe-travel__image">
        <img
          src={safetravel}
          alt="Safe travel"
          className="background-safe-travel"
        />
      </div>
    </LayoutPage>
  )
}
