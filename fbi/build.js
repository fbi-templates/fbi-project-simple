async function remove(_path) {
  if (_path && _path !== '/') {
    return ctx.utils.fs.remove(_path)
  }
}

async function build() {
  try {
    // clean
    const path = require('path')

    await remove(path.join(process.cwd(), ctx.options.parcel.outDir))
    ctx.logger.log(`"${ctx.options.parcel.outDir}" removed`)

    // build
    const Bundler = require('parcel-bundler')
    const configDefault = require('./config/config.default')
    const options = Object.assign({}, configDefault, ctx.options.parcel, {
      watch: false,
      minify: true
    })
    const bundler = new Bundler(ctx.options.parcel.entry, options)

    await bundler.bundle()
  } catch (err) {
    ctx.logger.error(err)
  }
}

module.exports = build