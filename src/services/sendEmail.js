import { sendForm } from 'emailjs-com'

const serviceID = 'service_s6olv7k'
const userID = 'hRPW11MfeZdHDW_1j'

const TEMPLATESID = {
  contact: 'template_zqodkd7',
  package: 'template_yze9mzc'
}

export const sendEmail = async (template, form) => {
  return await sendForm(serviceID, TEMPLATESID[template], form, userID)
}

export const converObjectToHtmlForm = (data) => {
  const form = document.createElement('form')

  for (const key in data) {
    const input = document.createElement('input')
    input.name = key
    input.value = data[key]
    form.appendChild(input)
  }

  return form
}
