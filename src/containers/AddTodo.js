import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Form, Button, Input } from 'antd'
import './../styles/antd.css'

const AddTodo = ({ dispatch }) => {
  let input
  return (
    <div>
      <Form layout="inline" onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <Form.Item>
          <input className='ant-input' ref={node => input = node} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Todo
        </Button>
        </Form.Item>

      </Form>
    </div>
  )
}

export default connect()(AddTodo)
