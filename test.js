const test = require('ava')

const simpleModuleUrl = 'https://raw.githubusercontent.com/sindresorhus/semver-regex/master/index.js'

test('Require sample module', async t => {
  t.plan(1)
  const simpleModule = await require('.')(simpleModuleUrl)
  t.is(typeof simpleModule, 'function') 
})
