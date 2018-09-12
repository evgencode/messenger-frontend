import { describe, it, each, after, beforeEach, afterEach } from 'mocha'
import sinon from 'sinon'
import { expect } from 'chai'
import colors from 'colors'

global.store = {
  user: 'Test',
  id: 100
}
beforeEach('this runs before each test in each file', function() {
  let { file } = this.currentTest
  console.log(`file: ${file}`.underline.red)
})

describe('Props test', () => {
  beforeEach('Add prop to global', () => {
    global.store.sinon = true
  })

  it('check sinon prop exists', () => {
    expect(global.store.sinon).to.be.equal(true)
  })
})

describe('Chaijs tests', () => {
  it('should test something', () => {
    console.log(1)
  })
})
