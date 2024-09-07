const { defineConfig } = require('@vue/cli-service')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const path = require('path')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new PrerenderSPAPlugin({
            // Indique le répertoire de sortie de build de Vue
            staticDir: path.join(__dirname, 'dist'),
            
            // Définis les routes que tu veux pré-rendre
            routes: ['/', '/about', '/contact'],

            // Configuration du renderer Puppeteer
            renderer: new Renderer({
              headless: true,
              renderAfterDocumentEvent: 'render-event', // Utilisé pour déclencher le pré-rendu après que l'app est complètement rendue
            }),
          }),
        ],
      }
    }
  }
})
