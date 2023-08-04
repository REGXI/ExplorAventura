import { toast } from 'react-toastify'

// Constants for toast options
const TOAST_OPTIONS = {
  position: 'bottom-right',
  autoClose: 3000
}
const TOAST_TYPES = ['success', 'error', 'info', 'warn']
export const notify = ({ message, type }) => {
  if (TOAST_TYPES.includes(type)) {
    toast[type](message, TOAST_OPTIONS)
  } else {
    toast(message, TOAST_OPTIONS)
  }
}
