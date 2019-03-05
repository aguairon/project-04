/* global describe, it, before, beforeEach, after */

import React from 'react'
import Promise from 'bluebird'
import axios from 'axios'
import sinon from 'sinon'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { MemoryRouter, Route } from 'react-router-dom'
import ArticlesIndex from '../../src/components/articles/ArticlesIndex'


describe('ArticlesIndex test', ()=> {
  let wrapper, response
  before(done => {
    response = Promise.resolve({
      data: [
        {
          content: 'blah',
          created: '2019-03-04 16:01:38',
          creator: {
            email: 'begona@gmail.com',
            id: 2,
            username: 'begona'
          },
          id: 2,
          liked_by: '',
          messages: '',
          title: 'Athos',
          updated_at: '2019-03-04 16:01:38'
        }
      ]
    })

    sinon.stub(axios, 'get').returns(response)
    done()
    after(done => {
      axios.get.restore()
      done()
    })
  })

  beforeEach(done => {
    wrapper = mount(
      <MemoryRouter initialEntries={['/articles']}>
        <Route path="/articles" component={ArticlesIndex} />
      </MemoryRouter>
    )
    done()
  })

  it('should create the correct state', done => {
    response.then(() => {
      wrapper.update()
      expect(wrapper.find('ArticlesIndex').state().articles[0].id).to.eq(2)
      done()
    })
  })
})
