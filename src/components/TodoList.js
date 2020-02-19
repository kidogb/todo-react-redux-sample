import React from 'react'
import PropTypes from 'prop-types'
import {Table, Button, Modal} from 'antd'
import ButtonGroup from 'antd/lib/button/button-group';


const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  console.log(todos, toggleTodo);
  const viewTodo = (todo) => {
    console.log('View: ', todo)
    toggleTodo(todo)
  }
  
  const removeTodo = (todo) => {
    console.log('Deleted ',todo)
    deleteTodo(todo.id)
  }
  
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: '10%'
    },
    {
      title: 'Todo',
      dataIndex: 'content',
      key: 'content',
      width: '60%'
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      width: '30%',
      render: (text,todo) => (
      <ButtonGroup>
        <Button icon="eye" onClick = {() => {viewTodo(todo)}}></Button>
        <Button icon="delete" onClick = {() => {removeTodo(todo)}}></Button>
      </ButtonGroup>
      )
    }
  ];
  return (
    <Table dataSource={todos} columns={columns} />
  )
}


TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoList
