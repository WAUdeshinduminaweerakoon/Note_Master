import React from 'react'

const CreateNote = ({inputText, setInputText, saveHander}) => {
    const char =200;
    const charLimit = char - inputText.length;
  return (
    <div className='relative items-center justify-center w-full p-3 md:w-1/4'>
      <div className='w-full h-full p-8 bg-transparent border border-gray-600 rounded-md bg-stone-300'>
        <textarea 
        cols = {20}
        rows = {10}
        placeholder='Type......'
        onChange={(e) => setInputText(e.target.value)}
        maxLength={200}
        className='w-full h-full p-5 bg-transparent border border-gray-600 rounded-md focus:outline-none bg-slate-50'
        >

        </textarea>
        <div className='flex items-center justify-between mt-2'>
            <span>{charLimit}</span>
            <button onClick={saveHander} className='px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none'>Save</button>
        </div>
      
    </div>
    </div>
  )
}

export default CreateNote
