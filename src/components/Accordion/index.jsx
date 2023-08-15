import { useState, useEffect, useRef } from 'react'
import './index.scss'
import Chevron from './chevron.svg'

export default function Accordion({
  site,
  title,
  description,
  enableButton = false,
  onClickedButton,
  titleButton
}) {
  const [toggle, setToggle] = useState(false)
  const [heightEl, setHeightEl] = useState()

  const refHeight = useRef()

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`)
  }, [])

  const toggleState = () => setToggle(!toggle)

  return (
    <div className="accordion">
      <div onClick={toggleState} className="accordion-visible">
        <div>
          <span>{title}</span>
          <h4>{site}</h4>
        </div>
        <img className={toggle ? 'active' : ''} src={Chevron} />
      </div>

      <div
        className={toggle ? 'accordion-toggle animated' : 'accordion-toggle'}
        style={{ height: toggle ? heightEl : '0px' }}
        ref={refHeight}
      >
        <p aria-hidden={toggle ? 'true' : 'false'}>{description}</p>

        {enableButton && (
          <button onClick={onClickedButton} className="accordion-button">
            {titleButton}
          </button>
        )}
      </div>
    </div>
  )
}
