import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core"
import Navbar from './components/Navbar'
import Home from './pages/Home.jsx'
import Leaderboard from './pages/Leaderboard.jsx'
import "./main.scss";
import "./styles.scss";

const App = () => {
  return (
	<MantineProvider>
	<Router className="app-main-container">
	  <Navbar />
	  <Routes>
		<Route index path='/' exact element={<Home/>} />
		<Route index path='/leaderboard' exact element={<Leaderboard/>} />
		<Route path="*" element={<Home to="/" replace />} />
	  </Routes>
	</Router>
	</MantineProvider>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
