const { defineConfig } = require('@vue/cli-service');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const path = require('path');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new PrerenderSPAPlugin({
            staticDir: path.join(__dirname, 'dist'),
            routes: [
              '/' // Pré-rendre uniquement la page d'accueil
            ],
            renderer: new Renderer({
              headless: true,
              renderAfterDocumentEvent: 'render-event',
            }),
          }),
        ],
      };
    }
  },
});
