import React, { useState } from 'react'
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/outline'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const [openPassword, setOpenPassword] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('')
    const [loading, setLoading] = useState(false)

    function handleLogin() {
        const data = {
            email,
            password
        }
        setLoading(true)
        axios.post('http://localhost:5000/login', data)
            .then(function ({ data }) {
                if (data.status === 'failed') {
                    setMsg(data.msg)
                    setLoading(false)
                } else {
                    // simpen token ke local storage
                    localStorage.setItem('token', JSON.stringify(data.token));
                    setLoading(false)
                    navigate('/dashboard')
                }
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false)
            });
    }


    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Masuk ke akun Anda
                </h2>
            </div>
            <p className='sm:mx-auto sm:w-full sm:max-w-sm mt-4'>{msg ? msg : ''}</p>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block ps-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="text-sm flex items-center gap-1">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Lupa Password?
                                </a>
                                {
                                    openPassword ? <EyeIcon onClick={() => setOpenPassword(!openPassword)} className="h-4 w-4 cursor-pointer" /> : <EyeSlashIcon onClick={() => setOpenPassword(!openPassword)} className="h-4 w-4 cursor-pointer" />
                                }
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                name="password"
                                type={openPassword ? "text" : "password"}
                                autoComplete="current-password"
                                required
                                className="block ps-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        {loading ? <button type="button" className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" disabled>
                            <div className="animate-spin h-5 w-5 mr-3 border-t-2 border-white rounded-full">
                            </div>
                            Processing...
                        </button> : <button
                            type='button'
                            onClick={handleLogin}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Masuk
                        </button>
                        }

                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Belum punya akun ?{' '}
                    <a href="/register-admin" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Daftar
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Login