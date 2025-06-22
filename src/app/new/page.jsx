"use client";
import { useRouter } from "next/navigation"; 


function NewPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault()
    const title = e.target.title.value
    const description = e.target.description.value

    const res = await fetch('/api/tasks', {
      method: 'POST',
      body: JSON.stringify({title, description}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    console.log(data);

    router.push("/");
  }
  return (
    <div className="h-screen flex justify-center items-center">
        <form className="bg-slate-800 p-10 lg:w-1/2 md:w-full" onSubmit={onSubmit}>
          <label htmlFor="title" className="font-bold text-sm">Titulo de la tarea</label>
          <input id="title" placeholder="tarea" type="text" className=" border border-gray-400 p-2 mb-4 w-full"/>
          <label htmlFor="description" className="font-bold text-sm">Descripcion de la tarea</label>
          <textarea id="description" placeholder="describe tu tarea" rows="3" className=" border border-gray-400 p-2 mb-4 w-full"></textarea>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">crear</button>
        </form>
      
      
    </div>
  )
}

export default NewPage

