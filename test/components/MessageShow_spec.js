/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import MessageShow from '../../src/components/messages/MessageShow'

describe('MessageShow test', () => {
  let wrapper
  beforeEach(done => {
    const message= {
      content: 'Blah blah',
      sender: {
        username: 'begona'
      },
      updated_at: '2019-03-04 20:53:21'
    }
    wrapper = shallow(<MessageShow key={message.id} message={message}/>)
    done()
  })

  it('should render the correct HTML', done => {
    expect(wrapper.find('.message').length).to.eq(1)
    expect(wrapper.find('.content').length).to.eq(1)
    expect(wrapper.find('p').length).to.eq(2)
    expect(wrapper.find('span').length).to.eq(1)
    done()
  })

  it('should render the corect data', done => {
    expect(wrapper.find('p').first().text()).to.eq('Blah blah')
    expect(wrapper.find('p').last().text()).to.eq('begona 2019-03-04 20:53:21')
    expect(wrapper.find('span').text()).to.eq('2019-03-04 20:53:21')
    done()
  })
})
