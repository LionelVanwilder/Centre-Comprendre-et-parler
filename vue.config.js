const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Centre-Comprendre-et-parler/'  // Assurez-vous que cela correspond au nom du dépôt GitHub
    : '/'
})
