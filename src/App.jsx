// src/App.js
import React, { useState } from 'react';

import Header from './Components/Header';


const App = () => {
  

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Student Attendance</h2>
        
      </div>
    </div>
  );
}

export default App
