import { useTranslation } from 'react-i18next'
import Layout from '../../components/Layout'
import { Home } from './components/Home'

export default function HomePage() {
  const { t } = useTranslation()
  return (
    <Layout>
      <section className="home">
        <Home {...{ t }} />
      </section>
      <section className="recommended-sites">
        <h2>Recommended Sites</h2>
      </section>
      <section className="services">
        <h2>Services</h2>
      </section>
      <section className="testimonials">
        <h2>Testimonials</h2>
      </section>
    </Layout>
  )
}
