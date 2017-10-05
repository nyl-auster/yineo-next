import Layout from '../components/Layout'
import Router from 'next/router'

/*
Router.onRouteChangeStart = url => {
  console.log('Route started: ', url)
}

Router.onRouteChangeComplete = url => {
  console.log('Route completed routing to : ', url)
}
*/

const Index = () => (
  <Layout>
    <div className="section">
      <p><strong>Développeur freelance à Nantes</strong>, je suis spécialisé dans le JavaScript et plus spécifiquement <strong>React, Next, Vue.js et Nuxt.js.</strong> </p>
      <p> Mon site est moche parce que j'adore la technique et les trucs sous le capot mais je sais pas faire des designs</p>
      <p>Pour ce site a toutefois une particularité intéressante : entièrement codé en JavaScript, il est pourtant bien référencé sur internet, c'est du <strong>React aussi bien référ un site en html</strong></p>
      <p><br/> Grâce aux solutions <strong>Next.js</strong> et <strong>Nuxt.js</strong>, je peux vous aider à mettre en place des sites qui tire parti de la puissance de React ou Vue.js sans sacrifier votre SEO.</p>
    </div>
  </Layout>
)

export default Index
