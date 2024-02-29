import { useRef, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [ x , setx ] = useState([])

  const inputRef = useRef()

  const add = () => {
      const value = inputRef.current.value
      const newData = {completed : false , value}
      setx([...x , newData])

      inputRef.current.value = ""
  }

  const itemDone = (index) => {
    const newx = [...x]

    newx[index].completed = !x[index].completed

    setx(newx)
  }


  const toDelete = (index) => {
    const newx = [...x]

    newx.splice(index , 1)

    setx(newx)
  }

  return (
    
    <div className=" row">
      <div className='App mt-5 col-md-4 col-10 mx-auto'>
        <h2>To Do List 📑</h2>

        <ul>
              {
                  x.map(({value , completed} , index ) => {
                    return <div className='div10'><li className={ completed ? "diffstyle" : "" } onClick={ () => {itemDone(index)}}>{value}</li>
                    
                    <span onClick={() => toDelete(index)}>❌</span>
                    </div>
                  })
              }
        </ul>

          <input className='' ref={inputRef} placeholder='Enter New Task...'/>

          <button onClick={add}>Add</button>
          </div>
    </div>
    
  );
}

export default App;
