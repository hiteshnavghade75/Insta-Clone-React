import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import LandingPage from './LandingPage'
import PostView from './PostView'
import PostForm from './PostForm'

export default function AppRouter(){
    return<div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage/>}/>
                <Route path='/createPost' element={<PostForm/>}/>
                <Route path='/postview' element={<PostView/>}/>
            </Routes>
        </BrowserRouter>
    </div>
}
