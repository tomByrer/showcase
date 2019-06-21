const captureWebsite = require('capture-website')

const sites = require('./sites.json')

const options = {
  width: 1920,
  height: 1000
}

const urls = sites.reduce((acc, site) => {
  return acc.concat([
    [site.url, site.id],
    [site.secondaryUrl, `${site.id}-2`]
  ])
}, [])

Promise.all(urls.map(([url, filename]) => {
  return captureWebsite.file(url, `images/${filename}.png`, options)
}))

