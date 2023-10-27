import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavbarDashboard from '../components/NavbarDashboard'
import PostList from '../components/PostList'
import { getDataUser } from '../utils/getDataUser'
import { getPosts } from '../utils/getPosts'


const Dashboard = () => {

  const navigate = useNavigate()
  const token = JSON.parse(localStorage.getItem('token'));
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  const fetchData = async (token) => {
    try {
      const userData = await getDataUser(token);
      const {data} = await getPosts(token);
      setUser(userData);
      setPosts(data)
    } catch (error) {
      navigate('/login-admin');
      console.error(error);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate('/login-admin')
    } else {
      // get data
      fetchData(token)
    }
  }, [])

  return (
    <>
      <NavbarDashboard user={user} />
      <header className="bg-white shadow mt-20">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Welcome, {user?.username} 🖐</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <PostList posts={posts} />
        </div>
      </main>
    </>
  )
}

export default Dashboard