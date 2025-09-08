import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Todo from './Componentes/Todo'
import './App.css'
<App tasks={DATA} />
const taskList = props.tasks?.map((task) => task.name);
function App() {

  const [count, setCount] = useState(0)

  return (
    <>
       <div>

<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  
  <Todo name="Eat" id="todo-0" completed />
  <Todo name="Sleep" id="todo-1" />
  <Todo name="Repeat" id="todo-2" />
</ul>

<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  {taskList}
</ul>
           {/* <Todo/>
             <Todo />
          <Todo /> */}

      {/*  <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div> 
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
