import './App.css';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { getAccessToken } from './utils/getAccesToken';
import { getAccessTokenFromStorage } from './utils/getAccessTokenFromStorage';
import Dashboard from './component/Dashboard/Dashboard';
import Login from './pages/Login';

function App({ spotifyApi }) {
	const [token, setToken] = useState(getAccessTokenFromStorage());

	useEffect(() => {
		// setting the accessToken to token from session storage or from the url
		const accessToken = getAccessTokenFromStorage() || getAccessToken();

		if (accessToken) {
			setToken(accessToken);
			sessionStorage.setItem('spotifyToken', accessToken);
			window.location.hash = '';
		}
	}, []);

	return (
		<Box className="App">
			{token ? (
				<Dashboard spotifyApi={spotifyApi} />
			) : (
				<Routes>
					<Route path="*" element={<Login />} />
				</Routes>
			)}
		</Box>
	);
}

export default App;
