const PrerenderPlugin = require('prerender-spa-plugin');
const path = require('path');
const Renderer = PrerenderPlugin.PuppeteerRenderer;

module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: ['/'],
        renderer: new Renderer({
          headless: true,
          renderAfterDocumentEvent: 'render-event',
        }),
      }),
    ],
  },
};
