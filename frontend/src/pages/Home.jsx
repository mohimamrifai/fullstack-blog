import React from 'react'
import Navbar from './../components/Navbar'
import Articles from "./../components/Articles"
import Footer from "./../components/Footer"
import MainArticle from "./../components/MainArticle"
import Pagination from "./../components/Pagination"
import Subscribe from "./../components/Subscribe"

const Home = () => {
    return (
        <>
            <Navbar />
            <MainArticle />
            <Articles />
            <Pagination />
            <Subscribe />
            <Footer />
        </>
    )
}

export default Home