import React, { FC } from 'react';
import { Route, Routes, Router } from "react-router-dom";
import PersonInformetion from './Table/table';
import Form from './Form/form'

const App: FC = () => {
  return (
    <div className="App">
      
        <Routes>
          <Route path='/form' element={<Form />} />
          <Route path='/person-informetion' element={<PersonInformetion />} />
        </Routes>
      

    </div>
  );
}

export default App;
