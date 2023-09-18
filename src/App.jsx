import React from 'react'
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Tamanna from './routes/Tamanna';
import Ahon from './routes/Ahon';
import { HomePage } from './routes/routes';
import LayoutDefault from './public/shared/layout/LayoutDefault';
const App = () => {
  return (
    <>
    
      <Routes>
        <Route path='/' element={<LayoutDefault><HomePage /></LayoutDefault>} />
        <Route path='/tamanna' element={<Tamanna />} />
        <Route path='/ahon' element={<Ahon />} />
      </Routes>
    </>
  )
}

export default App