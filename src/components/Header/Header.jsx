import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export default function Header() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static' sx={{ backgroundColor: '#fff', boxShadow: 'none', borderBottom: '1px solid #E2E2EA' }}>
				<Toolbar>
					<Box
						sx={{
							backgroundColor: '#E2E2EA',
							marginRight: '9px',
							borderRadius: '8px',
							width: '42px',
							height: '40px',
						}}
					/>
					<Typography
						variant='h5'
						component='h1'
						sx={{ flexGrow: 1, color: '#11142D' }}>
						Task Planner
					</Typography>
					<NotificationsNoneIcon
						sx={{ color: '#9A9AB0', marginRight: '33px', fontSize: '20px' }}
					/>
					<Avatar
						src='/broken-image.jpg'
						sx={{
							backgroundColor: '#C4C4C4',
							width: '42px',
							height: '40px',
							marginRight: '17px',
						}}
					/>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: '4px',
						}}>
						<Typography
							component='p'
							sx={{
								color: '#11142D',
								fontWeight: 700,
								fontSize: '16px',
								lineHeight: '120%',
							}}>
							Иванов В.А.
						</Typography>
						<Typography
							component='p'
							sx={{
								color: '#9A9AB0',
								fontWeight: 400,
								fontSize: '12px',
								lineHeight: '120%',
							}}>
							Должность
						</Typography>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
