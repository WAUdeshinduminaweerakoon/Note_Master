import React, {useEffect, useState}  from 'react';
import CreateNote from './CreateNote';
import {v4 as uuid} from 'uuid';
import Note from './Note';

const Notes = () => {
    const [inputText, setInputText] = useState("");
    const [notes, setNotes] = useState([]);
    const [editToggle, setEditToggle]= useState(null);

    const editHandler = (id, text) =>{
        setEditToggle(id);
        setInputText(text);

    }
    const saveHander = () =>{
        if(editToggle){
            setNotes(notes.map((note)=>(
                note.id === editToggle?
                {...note, text: inputText}
                : note
            )));
        }else{
            setNotes((prevNotes)=>[
                ...prevNotes,{
                    id:uuid(),
                    text: inputText
                }
                
            ]);
        }

        setInputText("");
        setEditToggle(null);
    };

    const deleteHadler = (id) => {
        const newNotes = notes.filter(n => n.id !== id);
        setNotes(newNotes);

    };
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("Notes"));
        if(data){
            setNotes(data);
        }
    }, []);

    useEffect(()=>{
        window.localStorage.setItem("Notes",JSON.stringify(notes));
    },[notes]);
  return (
    <div  className='grid grid-cols-3 gap-x-4 gap-y-3'>
        {
            notes.map((note)=>(
                editToggle === note.id ?(
                <CreateNote
                    // key={note.id}
                    inputText={inputText}
                    setInputText={setInputText}
                    saveHander={saveHander}
                />
                ):(
                <Note
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    editHandler = {editHandler}
                    deleteHadler = {deleteHadler}
                
                />        
                )
            ))
        }{
            editToggle == null && (
            <CreateNote
                inputText={inputText}
                setInputText={setInputText}
                saveHander={saveHander}
            />)

        }
      
    </div>
  );
}

export default Notes;
