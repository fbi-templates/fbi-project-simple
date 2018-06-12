const path = require('path')

module.exports = {
  // https://en.parceljs.org/api.html#bundler
  parcel: {
    entry: [path.join(process.cwd(), 'src/index.html')],
    outDir: 'dist',
    outFile: 'index.html',
    publicUrl: '/',
    watch: true,
    cache: true,
    cacheDir: '.cache',
    minify: false,
    target: 'browser',
    https: false,
    logLevel: 3,
    hmrPort: 0,
    sourceMaps: true,
    hmrHostname: '',
    detailedReport: false
  },
  server: {
    host: 'localhost',
    port: 8888
  },
}
