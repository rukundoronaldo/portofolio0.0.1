import React, { useRef, useState } from 'react';
import linkd from './linkedin-icon.svg'
import emailjs from 'emailjs-com';
import GoodMessage from './GoodMessage'
import BadMessage from './BadMessage'

function Footer() {
    const form = useRef();
    const [error, setError] = useState();
    const [showError, setShowError] = useState("before send");
    const [inputData, setInputData] = useState({user_name: "", user_email: "", user_tel: ""})

    function handleChange(event) {
        const {name, value} = event.target
        setInputData(prevInputData => ({...prevInputData, [name]: value}))
    }

    const sendEmail = (e) => {
    e.preventDefault();

    if (inputData.user_name === ""  || inputData.user_email === "" || inputData.user_tel === "") {
        setShowError("empty");
        console.log("empty");
        return;
    } 
    emailjs.sendForm('service_f9gz7lh', 'template_doizsq7', form.current, 'user_mlwaktPgUpxahAtLGHf3p')
    .then((result) => {
          setShowError('passed');
      }, (error) => {
          setShowError("error");
      });
      setInputData({...inputData, user_name: "", user_email: "", user_tel: ""})
    };

    const errors = () => {
        return (
                showError === "passed" ? <GoodMessage/> : showError === "error" ? <BadMessage/> : showError === "empty" ?  <BadMessage message="your name or email or telphone number is incorrect"/> :""
        )

    }
         
    
    return (
        <footer class="bg-black text-white inset-x-0 bottom-0 p-2 text-xs flex justify-between">
        <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div class="mt-8 overflow-hidden">
                <div class="grid grid-cols-1 md:grid-cols-2">
                    <div class="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                        <h1 class="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                            Get in touch
                        </h1>

                        <div class="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                4 Rue Rosa Bonheur
                            </div>
                        </div>

                        <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                +33 6 16 20 34 95
                            </div>
                        </div>

                        <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                rukundo.ronaldo@epitech.eu
                            </div>
                        </div>
                    </div>

                    <form ref={form} onSubmit={sendEmail} class="p-6 flex flex-col justify-center">
                        <div class="flex flex-col">
                            <label for="name" class="hidden">Full Name</label>
                            <input onChange={handleChange} value={inputData.user_name}  type="name" name="user_name" id="name" placeholder="Full Name" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>

                        <div class="flex flex-col mt-2">
                            <label for="email" class="hidden">Email</label>
                            <input onChange={handleChange} value={inputData.user_email} type="email" name="user_email" id="email" placeholder="Email" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>

                        <div class="flex flex-col mt-2">
                            <label for="tel" class="hidden">Number</label>
                            <input onChange={handleChange} value={inputData.user_tel}  type="tel" name="user_tel" id="tel" placeholder="Telephone Number" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>

                        <button onclick={() => {
                            console.log(error)
                            setShowError(error)
                            }}  type="submit" class="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
                            Submit
                        </button>
                    </form>
                    {
                        errors()
                    }
                </div>
        </div>
    </div>
    

    </footer>
    )
}

export default Footer
