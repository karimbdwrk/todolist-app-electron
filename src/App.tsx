import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'


import "./App.css";

function App() {
	// const [count, setCount] = useState(0)

	return (
    <Router>                            
        <Routes>                                                                        
            <Route path="/" element={<HomePage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="/signin" element={<SignInPage/>}/>
        </Routes>
    </Router>
	);
}

export default App;
