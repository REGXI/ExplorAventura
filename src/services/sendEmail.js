import { sendForm } from 'emailjs-com'

const serviceID = 'service_s6olv7k'
const userID = 'hRPW11MfeZdHDW_1j'

const TEMPLATESID = {
  contact: 'template_zqodkd7',
  package: 'template_1g2g7t6'
}

export const sendEmail = async (template, form) => {
  return await sendForm(serviceID, TEMPLATESID[template], form, userID)
}
