import React, { useState } from 'react'
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";

const TodoApp = () => {

  let [items,setItems] = useState([
    {id:1, label: "Html & CSS",checked: true},
    {id:2, label: "Javascript",checked: true},
    {id:3, label: "React Js",checked: false},
  ]); 

  let [newItem,setNewItem] = useState("");

  let [isEdit,setEdit] = useState(false);

  let [currentEleID, setCurrentEleID] = useState(null);

  let handleChecked = (id) =>{
      let newListItems = items.map(( item ) => {return item.id === id ? {...item, checked : !item.checked} : item});
      setItems(newListItems)
  }

  let handleAddorSaveItem = () => {
      
    if(isEdit){
       let newListItems = items.map((item) => {
        return item.id === currentEleID ? {...item,label: newItem} : item
       }); 
       setItems(newListItems); 
       setCurrentEleID(null)
       setNewItem("")
       setEdit(false)
    }
    else{
    setItems([...items, {id: items.length+1, label: newItem, checked: false }])
      setNewItem("")
    }

      
  }

  let handleUpdate = (id) =>{
    let listItem = items.find(item => item.id === id); 
    // console.log(listItem)
    setNewItem(listItem.label)
    setEdit(true); 
    setCurrentEleID(id)
  }
  // match ayina id filter chesi, vachina array ki map use chesi id ni 1 nunchi start chesthunam
  let handleDelete = (id) =>{
     let newItems = items.filter(item => item.id !== id).map((item,index)=>{
      return {...item, id : index + 1 };
     });
     console.log(newItems)
     setItems(newItems)
  }

  return (
    <main>
    {/* <Shop/> */}
 <div>
    <input 
    type="text"
    value={newItem} 
    placeholder='Add new item'
    onChange={(e)=>{ setNewItem(e.target.value)}}
    />
   <button onClick={handleAddorSaveItem}>{isEdit ? <FaSave color='green' />:<IoAddCircle color='blue' />} </button>
 </div>
   <ul>
    {
      items.map((item)=>{
       return (
        <li key={item.id} className='item'>
          <input type="checkbox" checked = {item.checked} onChange={ () => handleChecked(item.id)}/>
          <label>{item.label}</label>
          <FaEdit id="edit" role='button' tabIndex={0} onClick={()=> handleUpdate(item.id)}  />
          <FaTrashCan id='delete' role='button' tabIndex={0} onClick={()=> handleDelete(item.id)} />
        </li>
       )
      })
    }
   </ul>

    </main>
  )
}

export default TodoApp

// filter() for delete oper =>  paina handle click lo vachina id and mana state lo unna object id same gah lenivi matram filter chesi oka Array lo store avuthundhi. filter lo true unte filter avudhi, false unte filter avavu, manam delte btn click chesinapudu true unte a particular obbject delete avudhi.
