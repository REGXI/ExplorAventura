import { useState } from 'react'
export const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleOpenModal = () => setIsOpenModal(true)
  const handleCloseModal = () => setIsOpenModal(false)

  return { isOpenModal, handleOpenModal, handleCloseModal }
}
