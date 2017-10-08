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

const HomePage = () => (
  <Layout>
    <div className="section">
      <p><strong>Développeur freelance à Nantes</strong>, je suis spécialisé dans le JavaScript et plus spécifiquement <strong>React, Next, Vue.js et Nuxt.js.</strong> </p>
      <p>Ce site possède une caractéristique intéressante : entièrement codé en JavaScript, il est pourtant bien référencé et indexé : c'est du <strong>React aussi bien référencé qu'un site en html</strong></p>
      <br />
      <p>Grâce aux solutions <strong>Next.js</strong> et <strong>Nuxt.js</strong>, je peux vous aider à mettre en place des sites qui tire parti de la puissance de React ou Vue.js sans sacrifier votre SEO.</p>
      <br />
      <p>Si ces problématiquement de référencement du JavaSCript vous intéresse, ou tout simplement que vous avez besoin d'une ressource React efficace en renfort sur un de vos projets : <a href="/contact"> contactez moi !</a></p>
    </div>
  </Layout>
)



export default HomePage
