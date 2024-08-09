import { useState } from "react"

export function NewTodoForm(props){
    const [newItem, setNewItem ] = useState("")
    
  function handleSubmit(e){
    e.preventDefault()
    if (newItem === "") return

   // eslint-disable-next-line react/prop-types
   props.onSubmit(newItem)

   setNewItem("")
  }
    return(
        <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item" className="newItemTxt">New Item</label>
          <input 
          value={newItem} 
          onChange={e => setNewItem(e.target.value)} 
          type="text" 
          id="item"
          />
        </div>
        <button className="btnAdd">Add</button>
      </form>
    )
}