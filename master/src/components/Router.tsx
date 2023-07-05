
import { Route, Routes } from 'react-router-dom'
import Register from '../pages/Register'

export default function Router(): any {
    return
    <Routes>
        <Route path='/'></Route>
        <Route path='/category'></Route>
        <Route path='/search'></Route>
        <Route path='/productlist'></Route>
        <Route path='/profile'></Route>
        <Route path='/signin'></Route>
        <Route path='/register' element={<Register />} ></Route>
        <Route path='/signout'></Route>
    </Routes>
}

