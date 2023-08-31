import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Form from "./Form"


function App(){

    const[allNotes,setAllNotes]=useState([]);

    function handleOnSubmit(newNote){
        setAllNotes(prevValue =>{
            return [
                ...prevValue,
                newNote
            ];
        });
    }

    function handledelete(id){
        setAllNotes(prevValue=>{
            return prevValue.filter((item,index)=>{return index !== id})
        })
    }

    return (
        <div>
            <Header></Header>
            <Form addNote={handleOnSubmit}></Form>
            {allNotes.map((note,index) => <Note key={index} id={index} title = {note.title} content = {note.work} deleteNote={handledelete}/>)}
            <Footer></Footer>
        </div>
    );
}

export default App;