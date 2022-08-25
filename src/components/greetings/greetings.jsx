import { Stack } from '@mui/material';
import styles from '../home/Home.module.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useAuth } from '../../context/authContext';

const Greetings = () => {
	// obteniendo nombre del usuario
	let userName;
	// const showName = sessionStorage.getItem('Nombres');

	const { userData } = useAuth();
	console.log('aqui empieza greetings');
	if (userData) {
		userName = userData.Nombres;
	}
	return (
		<Stack
			direction='row'
			sx={{
				height: '80px',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<p className={styles.greetings}>
				Hola <span style={{ fontWeight: '600' }}>{userName}!</span>
			</p>
			<NotificationsNoneIcon
				fontSize='large'
				sx={{ color: '#FFFFFF', margin: '3px' }}
			/>
		</Stack>
	);
};

export default Greetings;
