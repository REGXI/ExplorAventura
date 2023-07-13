import LayoutPage from '../../../../components/LayuotPage'
export function TimeLine({ t }) {
  return (
    <LayoutPage
      title="about:timeline.title"
      subject="about:timeline.subject"
      titleColor="blue"
      t={t}
    >
      <div className="timeline"></div>
    </LayoutPage>
  )
}
