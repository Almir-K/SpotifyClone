import { Box, Button } from '@mui/material';

const Home = () => {
	return (
		<Box
			sx={{
				flex: 1,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				gap: 5
			}}
		>
			<img src="/Almir.jpg" alt="Almir" style={{ maxWidth: '50%', maxHeight: '50%' }} />
			<Button size="large" variant="contained" href="tel:0735269716">
				Ring mig!
			</Button>
		</Box>
	);
};

export default Home;
