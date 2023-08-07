import { motion } from 'framer-motion'
import { Backdrop } from '../Backdrop'
import './index.scss'

const variants = {
  hidden: {
    y: '-100vh',
    opacity: 0
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
      type: 'spring',
      stiffness: 500,
      damping: 27
    }
  },
  exit: {
    y: '100vh',
    opacity: 0
  }
}

export default function Modal({ handleClose, children }) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal orange-gradient"
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}

        <i className="fas fa-times close-modal" onClick={handleClose} />
      </motion.div>
    </Backdrop>
  )
}
