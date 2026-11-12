import React, { useState } from 'react'
import Card from './Card'
import {Plus} from 'lucide-react'
import {Trash} from 'lucide-react'


const App = () => {


  const [title, setTitle] = useState('')
  let [des, setDes] = useState('')
  const [task, setTask] = useState([])


  const submitHandler = (e) =>{
    e.preventDefault()
    console.log("form submitted")
    setTask([...task, {title, des}])
    setTitle('')
    setDes('')
  }
  const deleteHandler = (e)=>{
    const delTask = [...task]
    delTask.splice(e, 1)
    setTask(delTask)
  }

  return (
    <div className="w-full h-screen bg-black text-white p-3">
      <div className='lg:flex  w-full h-full px-4  lg:justify-between'>
        <div className="flex flex-col h-1/2 lg:h-full gap-10 lg:w-1/2 ">
          <h1 className="font-bold text-5xl text-center lg:mb-5 mb-1 font-mono" >Notes Application</h1>
          <form onSubmit={(e)=>{submitHandler(e)}} className='flex lg:full flex-row  items-center h-1/2'>
            
              <div className='flex flex-col w-full gap-4 px-10 items-start'>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder='Enter Heading' className='px-5 py-2 rounded border-2 font-medium capitalize text-center w-1/2 lg:w-full outline-none'/>
                <textarea type="text" value={des} onChange={(e)=>{setDes(e.target.value)}} placeholder='Write Details' className='px-5 py-2 rounded border-2 w-1/2 lg:w-full flex font-medium items-start outline-none flex-row max-h-32 ' />
                <button  className='flex active:scale-90 outline-none flex-row hover:bg-slate-600 gap-2 w-1/2 lg:w-full border-2 py-1 px-5 rounded-full font-medium justify-center bg-white text-black'>
                  <Plus/>
                  Add Notes
                </button>
              </div>   
          </form>
        </div>
        <div id='notesViewer' className="lg:border-l-3 sm:border-t-3 border-slate-600 lg:h-full h-1/2 w-full overflow-auto lg:w-1/2 p-5 scrollbar-thumb-slate-600 scrollbar-thin scrollbar-track-slate-300">
          <h2 className="font-bold text-3xl text-center" >Your Notes</h2>
          <div className="cardHolder flex flex-row flex-wrap gap-4 mt-5">
            {task.map(function(elem, idx){
              return <div key={idx} className="card h-52 hover:bg-amber-200 bg-cover text-gray-700 w-40 rounded-2xl px-1 py-2.5  bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSprLtbfR7pNrP2llW86CO0bQzI8hcYame5ipuIVdOp_Q&s=10')]">
                <div className="textSec h-8/10 mb-2 pb-2 ">
                  <h2 className="font-bold text-xl h-1/5 mt-0.5 text-center">{elem.title}</h2>
                  <p className="font-medium leading-tight pt-1.5 text-mauve-500 m-1 h-4/5 text-xs overflow-hidden">{elem.des}</p>
                </div>
                <div className="delSec text-red-100 flex flex-row gap-2 bg-red-500 rounded font-small  py-0.5 px-8 active:scale-78 hover:bg-red-900 w-35" onClick={()=>{deleteHandler(idx)}}  >
                  <Trash color="#fff" strokeWidth={1.2} />
                  <button className=" flex justify-center" > Delete </button>
                </div>
              </div>
            })}     
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default App