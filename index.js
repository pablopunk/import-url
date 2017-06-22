const got = require('got')
const requireString = require('require-from-string')

module.exports = async url => {
  const response = await got(url)
  return requireString(response.body)
}
