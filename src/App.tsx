import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from './AuthContext';

import Header from './sections/global/Header'

import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import DashboardPage from './pages/DashboardPage'
import TodoListPage from './pages/TodoListPage'


import "./App.css";

function App() {

	return (
    <Router>     
        <AuthProvider>    
            <Header />                   
            <Routes>                                                                        
                <Route path="/" element={<HomePage />}/>
                <Route path="/signup" element={<SignUpPage />}/>
                <Route path="/signin" element={<SignInPage />}/>
                <Route path="/dashboard" element={<DashboardPage />}/>
                <Route path="/todolist" element={<TodoListPage />}/>
                <Route path="*" element={<p>404!</p>}/>
            </Routes>
        </AuthProvider>
    </Router>
	);
}

export default App;
