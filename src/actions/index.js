let nextTodoId = 0
export const addTodo = content => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  content
})

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id,
})


export const toggleTodo = todo => ({
  type: 'TOGGLE_TODO',
  todo
})
