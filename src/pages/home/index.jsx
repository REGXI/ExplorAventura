import { useTranslation } from 'react-i18next'
import Layout from '../../components/Layout'
import { Home } from './components/Home'
import { RecommendedSites } from './components/RecommendedSites'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { selectNavigationColor } from '../../store/features/navigationColorSlice'

export default function HomePage() {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(selectNavigationColor('default'))
  }, [dispatch])

  return (
    <Layout>
      <section className="home">
        <Home {...{ t }} />
      </section>
      <section className="recommended-sites">
        <RecommendedSites {...{ t }} />
      </section>
      <section className="services">
        <Services {...{ t }} />
      </section>
      <section className="testimonials">
        <Testimonials {...{ t }} />
      </section>
    </Layout>
  )
}
