import React, {useEffect, useState}  from 'react'
import CreateNote from './CreateNote'
import {v4 as uuid} from 'uuid';

const Notes = () => {
    const [inputText, setInputText] = useState("")
    const [notes, setNotes] = useState([])
    const saveHander = () =>{
        setNotes((prevNotes)=>[
            ...prevNotes,{
                id:uuid(),
                text: inputText
            }
            
        ])
        setInputText("")
    }
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("Notes"))
        if(data){
            setNotes(data)
        }
    }, [])

    useEffect(()=>{
        window.localStorage.setItem("Notes",JSON.stringify(notes))
    },[notes])
  return (
    <div>
      <CreateNote
      inputText={inputText}
      setInputText={setInputText}
      saveHander={saveHander}
      />
    </div>
  )
}

export default Notes
