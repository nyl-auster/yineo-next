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
      <p>Développeur freelance à Nantes, je suis spécialisé dans le JavaScript et plus spécifiquement React, Next, Vue.js et Nuxt.js. </p>
    </div>
  </Layout>
)

export default Index
