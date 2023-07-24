import './index.scss'
import LayoutPage from '../../../../components/LayuotPage'
import { InfoTimeLine } from '../InfoTimeLine'
import { DateTimeLine } from '../DateTimeLine'
import { IndicatorTimeLine } from '../IndicatorTimeLine'
export function TimeLine({ t }) {
  return (
    <LayoutPage
      title="about.timeline-title"
      subject="about.timeline-subject"
      t={t}
    >
      <div className="timeline-content">
        <section className="left-info">
          {/*  */}
          <InfoTimeLine
            title="title"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis"
          />
          <DateTimeLine date="2019" />

          <InfoTimeLine
            title="title"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis"
          />
          <DateTimeLine date="2019" />

          {/*  */}
        </section>
        <section className="draw-timeline">
          <div className="line"> </div>
          {/*  */}
          <IndicatorTimeLine />
          <IndicatorTimeLine colorless={true} />
          <IndicatorTimeLine />
          <IndicatorTimeLine />
          {/*  */}
        </section>
        <section className="right-info">
          {/*  */}
          <DateTimeLine date="2019" />

          <InfoTimeLine
            title="title"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis"
          />
          <DateTimeLine date="2019" />
          <InfoTimeLine
            title="title"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis"
          />
          {/*  */}
        </section>
      </div>
    </LayoutPage>
  )
}
