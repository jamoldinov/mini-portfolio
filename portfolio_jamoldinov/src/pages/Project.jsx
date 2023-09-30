import React from 'react'
import { Link } from 'react-router-dom'

function Project() {
  return (
    <div>
        <section className="">
           <div className='mt-8'>
            <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                <li className='text-center shadow-xl hover:shadow-2xl duration-500 hover:scale-125 rounded-2xl p-2'>
                    <img src="./img/comfy.jpg" alt=""  className='object-cover w-96 rounded-xl'/>
                    <h2 className='my-3'>Name: <i>Comfy</i></h2>
                    <p className=' mb-3'>Text: <i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam voluptatem, harum placeat distinctio totam maxime?</i></p>
                    <Link to='https://github.com/jamoldinov' className='btn btn-primary rounded-lg'>Read more</Link>
                </li>
                <li className='text-center duration-500 hover:scale-125 shadow-xl hover:shadow-2xl rounded-2xl p-2'>
                    <img src="./img/cinema.jpg" alt=""  className='object-cover w-96 rounded-xl'/>
                    <h2 className='my-3'>Name: <i>Cinema</i></h2>
                    <p className='w-96 mb-3'>Text: <i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam voluptatem, harum placeat distinctio totam maxime?</i></p>
                    <Link to='https://github.com/jamoldinov' className='btn btn-primary rounded-lg'>Read more</Link>
                </li>
                <li className=' duration-500 hover:scale-125 text-center shadow-xl hover:shadow-2xl rounded-2xl p-2'>
                    <img src="./img/countires.jpg" alt=""  className='object-cover w-96 rounded-xl'/>
                    <h2 className='my-3'>Name: <i>Countires</i></h2>
                    <p className='w-96 mb-3'>Text: <i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam voluptatem, harum placeat distinctio totam maxime?</i></p>
                    <Link to='https://github.com/jamoldinov' className='btn btn-primary rounded-lg'>Read more</Link>
                </li>
                <li className='text-center shadow-xl duration-500 hover:scale-125 hover:shadow-2xl rounded-2xl p-2'>
                    <img src="./img/users.jpg" alt=""  className='object-cover w-96 rounded-xl'/>
                    <h2 className='my-3'>Name: <i>Users</i></h2>
                    <p className='w-96 mb-3'>Text: <i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam voluptatem, harum placeat distinctio totam maxime?</i></p>
                    <Link to='https://github.com/jamoldinov' className='btn btn-primary rounded-lg'>Read more</Link>
                </li>
                <li className='text-center shadow-xl duration-500 hover:scale-125 hover:shadow-2xl rounded-2xl p-2'>
                    <img src="./img/crud.png" alt=""  className='object-cover w-96 rounded-xl'/>
                    <h2 className='my-3'>Name: <i>Crud</i></h2>
                    <p className='w-96 mb-3'>Text: <i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam voluptatem, harum placeat distinctio totam maxime?</i></p>
                    <Link to='https://github.com/jamoldinov' className='btn btn-primary rounded-lg'>Read more</Link>
                </li>
                <li className='text-center shadow-xl duration-500 hover:scale-125 hover:shadow-2xl rounded-2xl p-2'>
                    <img src="./img/audio.png" alt=""  className='object-cover w-96 rounded-xl'/>
                    <h2 className='my-3'>Name: <i>AudioPhile</i></h2>
                    <p className='w-96 mb-3'>Text: <i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam voluptatem, harum placeat distinctio totam maxime?</i></p>
                    <Link to='https://github.com/jamoldinov' className='btn btn-primary rounded-lg'>Read more</Link>
                </li>
                <li className='text-center shadow-xl duration-500 hover:scale-125 hover:shadow-2xl rounded-2xl p-2'>
                    <img src="./img/basket.png" alt=""  className='object-cover w-96 rounded-xl'/>
                    <h2 className='my-3'>Name: <i>Basket</i></h2>
                    <p className='w-96 mb-3'>Text: <i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam voluptatem, harum placeat distinctio totam maxime?</i></p>
                    <Link to='https://github.com/jamoldinov' className='btn btn-primary rounded-lg'>Read more</Link>
                </li>
            </ul>
           </div>
        </section>
    </div>
  )
}

export default Project