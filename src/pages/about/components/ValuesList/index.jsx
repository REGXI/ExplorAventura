import './index.scss'
import { ValueItem } from '../ValueItem'
export function ValuesList({ valuesData, t }) {
  return (
    <div className="values-list">
      {valuesData.map((value) => (
        <ValueItem
          key={value.id}
          title={t(value.title)}
          description={t(value.description)}
          icon={value.icon}
        />
      ))}
    </div>
  )
}
