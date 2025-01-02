import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import New from './pages/New'
import NotFound from './pages/NotFound'


function App()
{


  return (
    <>
      <Routes>
        {/* pate='/' -> http://localhost:5173 과 동일함. */}
        <Route path='/' element={<Home></Home>} />
        <Route path='/new' element={<New />} />
        <Route path='/diary' element={<Diary />} />
        <Route path='/edit' element={<Edit />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
    </>
  )
}

export default App
