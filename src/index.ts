import App from './app'

const app = App()

;(() => {
  app.start()
  console.info(`INFO: app is running!`, { app })
})()
