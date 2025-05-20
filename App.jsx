import React, {useState} from "react";
import Create from './components/Created'
import Read from './components/Read'
const App = () => {

  const [todos, settodos] = useState([
    {id : 1 , title : "Kam Karna Sikh" , isCompleted : false}
  ]);


  return (
    <div className='text-white flex w-screen h-screen bg-gray-800 p-10'>
      <Create todos = {todos} settodos={settodos}/>
      <Read todos = {todos} settodos={settodos}/>
    </div>
  )
}

export default App