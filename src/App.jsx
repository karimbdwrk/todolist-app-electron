// import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
// import { AuthProvider } from "./context/AuthContext";
// // import { AuthProvider } from "./AuthContext";

// import Header from "./sections/global/Header";

// import HomePage from "./pages/HomePage";
// import SignUpPage from "./pages/SignUpPage";
// import SignInPage from "./pages/SignInPage";
// import DashboardPage from "./pages/DashboardPage";
// import TodoListPage from "./pages/TodoListPage";
// import TodoLists from "./pages/TodoLists";

// import "./App.css";

// function App() {
// 	return (
// 		<Router>
// 			<AuthProvider>
// 				<Header />
// 				<Routes>
// 					<Route path='/' element={<HomePage />} />
// 					<Route path='/signup' element={<SignUpPage />} />
// 					<Route path='/signin' element={<SignInPage />} />
// 					<Route path='/dashboard' element={<DashboardPage />} />
// 					<Route path='/todolist' element={<TodoListPage />} />
// 					<Route path='/todolists' element={<TodoLists />} />
// 					<Route path='*' element={<p>404!</p>} />
// 				</Routes>
// 			</AuthProvider>
// 		</Router>
// 	);
// }

// export default App;

import React from "react";
import { Col, Layout, Row } from "antd";
import AppHeader from "./components/Appheader/Appheader";
import AppRoutes from "./Routes";
const { Header, Content } = Layout;

const App = () => {
	return (
		<Layout>
			<Row gutter={[0, 32]}>
				<Col span={24}>
					<Header>
						<AppHeader />
					</Header>
				</Col>
				<Col span={22} offset={1}>
					<Content>
						<AppRoutes />
					</Content>
				</Col>
			</Row>
		</Layout>
	);
};

export default App;
