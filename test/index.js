const chai = require('chai')
const { expect } = chai
const sinon = require('sinon')
const sinonChai = require('sinon-chai')

chai.use(sinonChai)
global.expect = expect
global.sinon = sinon