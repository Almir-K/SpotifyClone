import { Box, Typography, Grid, IconButton, Container, Button } from '@mui/material';
import PlayerControls from '../PlayerControls/PlayerControls';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Album } from '@mui/icons-material';

const PlayerOverlay = ({
	active,
	progress,
	is_paused,
	duration,
	player,
	playerOverlayIsOpen,
	closeOverlay,
	current_track
}) => {
	return (
		<Box
			id="PlayerOverlay"
			sx={{
				width: '100%',
				height: 'calc(100vh - 75px)',
				bgcolor: 'background.paper',
				display: { xs: 'block', md: 'none' },
				position: 'fixed',
				top: 0,
				left: 0,
				transition: 'all 0.3s',
				transform: playerOverlayIsOpen ? 'translateY(0)' : 'translateY(100vh)'
			}}
		>
			<Container
				sx={{
					height: '100%',
					background: 'linear-gradient(0deg, #121212 0%, #39d47250 100%);'
				}}
			>
				<Grid container direction={'column'} justifyContent={'space-between'} sx={{ height: '100%' }}>
					<Grid item xs={1} sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
						<IconButton onClick={closeOverlay} sx={{ paddingLeft: 0 }}>
							<KeyboardArrowDownIcon fontSize="large" sx={{ color: 'text.primary' }} />
						</IconButton>
					</Grid>
					<Grid
						item
						xs={5}
						sx={{
							backgroundImage: `url("${current_track?.album.images[0].url}")`,
							backgroundPosition: 'center',
							backgroundSize: 'cover'
						}}
					></Grid>
					<Grid item sx={1}>
						<Typography variant="body1" sx={{ color: 'text.primary', fontSize: '28px' }}>
							{current_track?.name}
						</Typography>
						<Typography variant="body1" sx={{ color: 'text.primary', fontSize: '18px' }}>
							{current_track?.artists[0].name}
						</Typography>{' '}
						<Grid item sx={2}>
							{active ? (
								<PlayerControls
									progress={progress}
									is_paused={is_paused}
									duration={duration}
									player={player}
								/>
							) : (
								<Box>Please transfer Playback</Box>
							)}
						</Grid>
					</Grid>
				</Grid>
			</Container>
			<Box />
		</Box>
	);
};

export default PlayerOverlay;
