import React,{useState} from "react";

function Form(props){

    const[newNote,setNewNote]=useState({title:"",work:""})

    function handleFormSubmit(event){
        event.preventDefault();
        setNewNote({title:"",work:""});
    }

    function handleChange(event){
        const{name,value}=event.target;
        setNewNote((prevValue)=>{
            return {
                ...prevValue,
                [name]:value
            }
        })
    }
    return(
    <div>
        <form onSubmit={handleFormSubmit}>
            <input onChange={handleChange} name="title" type="text" placeholder="Title" value={newNote.title} />
            <input onChange={handleChange} name="work" type="text" placeholder="Take a Note..." value={newNote.work}/>
            <button onClick={()=>{props.addNote(newNote)}}>Add</button>
        </form>
    </div>
    )
}

export default Form;