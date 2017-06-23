module.exports = async url => require('require-from-string')((await require('got')(url)).body)
