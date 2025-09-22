import React, { useState } from 'react'
import { toast } from 'sonner'

const ContactForm = async() => {
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('form submitted')

    const {name,email,message} = formData;

    if(!name || !email || !message) {
        toast.error("Please fill all the Field");
        return ;

    }
    //call your api here to submit the form

    // here's a mock api call for you
    const response =await new Promise((resolve,reject)=>{
         setTimeout(() => {
        toast.success("Form submitted Succesfully")
    }, 1000);
    })
   if(response){
    toast.success("Form submitted Successfully ")
   }
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={handleSubmit} className="py-10 flex flex-col gap-6 max-w-2xl mx-auto">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm font-medium tracking-tight text-neutral-600"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          placeholder="Charlie"
          className="shadow-aceternity rounded-md px-2 py-1
           focus:outline-none focus:ring-2 focus:ring-primary text-sm"
        />
        </div>
   <div className="flex flex-col gap-2">
 <label
          htmlFor="email"
          className="text-sm font-medium tracking-tight text-neutral-600"
        >
          Email Address
        </label>
           <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          placeholder="you@example.com"
          className="shadow-aceternity rounded-md px-2 py-1
           focus:outline-none focus:ring-2 focus:ring-primary text-sm"        />
   </div>
       
   <div className="flex flex-col gap-2">
 <label
          htmlFor="text"
          className="text-sm font-medium tracking-tight text-neutral-600"
        >
          Message
        </label>
           <textarea rows={5}
          
          id="message"
          name="message"
          onChange={handleChange}
          placeholder="write here..."
          className="resize-none  shadow-aceternity rounded-md px-2 py-1
           focus:outline-none focus:ring-2 focus:ring-primary text-sm"        />
   </div>
       
     <button type='submit' className='rounded-md bg-primary px-4 py-2 text-white'>
        Send Message
     </button>
      
    </form>
  )
}

export default ContactForm
