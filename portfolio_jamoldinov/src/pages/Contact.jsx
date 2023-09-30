import React from 'react'
import { Form } from 'react-router-dom'
import FromInput from '../components/FormInput'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>
          <section className="h-screen flex justify-center items-center p-2">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-200 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Contact</h4>
        <FromInput type="text" label="Username" name="username" />
        {/* <FromInput type="text" label="Text" name="text" /> */}
        <p>Please write if you have any questions...</p>
        <textarea name="text"  cols="20" rows="5" className='rounded-xl'></textarea>
       
        <div className="mt-4 flex justify-center">
          <button className='btn btn-primary py-1 px-4 duration-300 hover:scale-105'>Submit</button>
        </div>
        
          <div className=' grid lg:grid-cols-2 md:grid-cols-2 gap-2 mt-3   '><p className='text-md font-semibold'>
        Social networks:</p>
          <div className="flex items-center gap-4">
              <Link to="https://github.com/jamoldinov" className='duration-300 hover:scale-125'>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#00d5ff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.25 22.5v-3.865a3.361 3.361 0 0 0-.94-2.607c3.14-.35 6.44-1.538 6.44-6.99a5.43 5.43 0 0 0-1.5-3.746 5.058 5.058 0 0 0-.09-3.765s-1.18-.35-3.91 1.478a13.397 13.397 0 0 0-7 0C6.52 1.177 5.34 1.527 5.34 1.527a5.058 5.058 0 0 0-.09 3.765 5.43 5.43 0 0 0-1.5 3.775c0 5.413 3.3 6.602 6.44 6.991a3.366 3.366 0 0 0-.94 2.577V22.5"></path>
                  <path d="M9.25 19.503c-5 1.498-5-2.496-7-2.996"></path>
                </svg>
              </Link>

              <Link to="https://www.linkedin.com/in/jamoldinov-kamoliddin/"  className='duration-300 hover:scale-125'>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#00d5ff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <path d="M2 9h4v12H2z"></path>
                  <path d="M4 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4z"></path>
                </svg>
              </Link>
              <Link to='https://www.instagram.com/jamoldinov_kamoliddin/' className='duration-300 hover:scale-125'>
              <svg width="24" height="24" fill="none" stroke="#00d5ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
   <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
   <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
   <path d="M17.5 6.5h.01"></path>
</svg>
              </Link>
              <Link to='https://www.facebook.com/jamoldinov.kamoliddin' className='duration-300 hover:scale-125'>
              <svg width="24" height="24" fill="none" stroke="#00d5ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
   <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
              </Link>
              <Link to='https://twitter.com/Jamoldinov_02' className='duration-300 hover:scale-125'>
              <svg width="24" height="24" fill="none" stroke="#00d5ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
   <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83A7.72 7.72 0 0 0 23 3Z"></path>
</svg>
              </Link>
            </div>
          </div>
        
      </Form>
    </section>
    </div>
  )
}

export default Contact