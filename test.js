const test = require('ava')
const r = require('.')

const simpleModuleUrl = 'https://raw.githubusercontent.com/sindresorhus/semver-regex/master/index.js'

test('Require sample module', async t => {
  t.plan(1)
  const simpleModule = await r(simpleModuleUrl)
  t.is(typeof simpleModule, 'function') 
})
