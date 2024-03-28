import React from 'react'

const Note = ({id, text, editHandler, deleteHadler}) => {
  return (
    <div className='relative items-center justify-center w-full p-3 md:w-1/4'>
         <div className='w-full h-full p-8 bg-transparent border border-gray-600 rounded-md bg-stone-300'>
            <div className='w-full h-full p-5 bg-transparent border border-gray-600 rounded-md focus:outline-none bg-slate-50'>   
                {text}
            </div>
        <div>
            <button  className='px-2 py-1 text-black bg-teal-300 rounded-md hover:bg-blue-200 focus:outline-none' onClick={() => deleteHadler(id)}>Delete</button>
            <button  className='px-2 py-1 text-black bg-teal-300 rounded-md hover:bg-blue-200 focus:outline-none' onClick={() => editHandler(id, text)}>Edit</button>
        </div>
        </div>
      
    </div>
  )
}

export default Note;
