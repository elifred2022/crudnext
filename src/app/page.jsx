import {prisma} from '@/libs/prisma'

async function loadTasks() {
  // obtener de la base de datos
  /*const res = await fetch('http://localhost:3000/api/tasks')
  //const data = await res.json()
  //console.log(data);*/

  //mejor metodo;
  return await prisma.task.findMany()
 // console.log(tasks);

}

async function HomePage() {
  const tasks = await loadTasks()
  console.log(tasks);
  
  return (
    <section className='container mx-auto'>
      <div className='grid grid-cols-3 gap-3 mt-10'>
      {tasks.map((task)=>(
        <div key={task.id} className='bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer'>
          <h3 className='font-bolt text-2xl mb-2'>{task.title}</h3>
          <p>{task.description} </p>
          <p>{new Date(task.createdAt).toLocaleDateString()} </p>
        </div>
      ))

      }
     
    </div>

    </section>
    
  )
}

export default HomePage
