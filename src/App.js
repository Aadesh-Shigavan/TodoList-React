import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import TodoLists from './TodoLists';

function App() {

  const[inpList,setInpList] = useState('');
  const[items,setItems] = useState([])
 

  const InputEvent = (event)=>{

    setInpList(event.target.value);
    
  }

  const listOfItems = ()=>{

    if(inpList.length === 0){
      alert("Invalid Input");
    }
    else{
    setItems((oldItems)=>{
      return [...oldItems,inpList]
    })
    setInpList("");
  }
}

  const deleteItems = (id)=>{
    console.log("deleted");
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !== id;
      })
    })
}


  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1> Todo List </h1>
          <br />
          <input  type="text" placeholder='Add a task' value={inpList} onChange={InputEvent}/>
          <button onClick={listOfItems}> + </button>

          <ol>
            {/*<li> {inpList} </li>*/}
            {items.map((itemval,index)=>{
             return <TodoLists key={index} id={index} text={itemval} onSelect={deleteItems}/>
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
