
const cssnano = require('cssnano')({ preset: 'default' })

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-import'),
    require('tailwindcss')('./tailwind.config.js'),
    ...(process.env.NODE_ENV === 'production' ? [cssnano] : [])
  ]
}