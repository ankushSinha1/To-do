## Get it Done!

It is a To-Do app made using ReactJS. For state management, I have used useState hook, along with Redux.

It contains 3 components:  

**Todos.js** - This component renders the input field and the 'add' button. When a user enters the title of a new task and clicks on the add button, a new task will be pushed in the redux state, using the **addToDo** action.

**DisplayToDos.js** - This component renders the 3 filter buttons (Active, Completed and All) and all the tasks corresponding to the currently selected section. It renders all the tasks using the map function and TodoItem.js component.

**TodoItem.js** - This component renders each task, its title, status and corresponding buttons to mark as done and delete. On pressing the double-tick icon(*mark as done* button), the completedTodo prop is called which changes its status from *not done* to *done*. When the cross icon(*delete* button) is clicked, the removeTodo prop is called which removes the particular todo from the state. 

Along with this, custom styling is also done using CSS and stored in **main.css**.
