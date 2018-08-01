import { shallow, mount, render } from 'enzyme'
import React from 'react'
import { assert, expect } from 'chai'

const Modal = ({ children }) => {
  return <div className="modal">{children}</div>
}

const ModalWrapper = shallow(
  <Modal>
    <span>Hello</span>
  </Modal>
)

describe('React Enzyme Tests', () => {
  describe('<Modal />', () => {
    it('should render children when passed in', () => {
      expect(ModalWrapper.contains(<span>Hello</span>)).to.equal(true)
    })
  })
})
