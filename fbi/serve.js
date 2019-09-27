async function serve () {
  process.env.NODE_ENV = 'development'
  const Bundler = require('parcel-bundler')
  const app = require('express')()
  const configDefault = require('./config/config.default')

  ctx.logger.log('Entries:\n', ctx.options.parcel.entry.join('\n'))

  const options = Object.assign({}, configDefault, ctx.options.parcel)
  const bundler = new Bundler(ctx.options.parcel.entry, options)
  app.use(bundler.middleware())
  app.listen(ctx.options.server.port)
  ctx.logger.info(`Server runing at http://${ctx.options.server.host}:${ctx.options.server.port}`)
}

module.exports = serve
