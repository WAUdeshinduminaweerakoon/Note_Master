import React from 'react';

const Note = ({ id, text, editHandler, deleteHadler }) => {
  return (
    <div className='relative items-center justify-center px-3 '>
      <div className='w-full h-full p-10 bg-transparent border border-gray-600 rounded-md bg-stone-300'>
        <div className='w-full h-full p-5 overflow-auto bg-transparent border border-gray-600 rounded-md focus:outline-none bg-slate-50'>
          {text}
        </div>
        <div className='px-2 py-1'>
          <button className='px-1 py-1 text-black bg-red-400 rounded-xl hover:bg-green-500 focus:outline-none ' onClick={() => deleteHadler(id)}>Delete</button>
          <button className='px-1 py-1 text-black bg-red-400 rounded-xl hover:bg-green-500 focus:outline-none ' onClick={() => editHandler(id, text)}>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default Note;
