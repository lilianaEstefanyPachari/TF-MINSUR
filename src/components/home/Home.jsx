import React from 'react';
import styles from './Home.module.css';
import { Stack } from '@mui/material';
import Nav from '../nav/Nav';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Home = () => {
	return (
		<div className={styles.container}>
			<Stack>
				<Nav></Nav>
			</Stack>
			<Stack
				direction='row'
				sx={{
					height: '90px',
					justifyContent: 'center',
					alignItems: 'center',
					padding: '10px',
				}}
			>
				<p className={styles.greetings}>
					Hola, <span>usuario!</span>
				</p>
				<NotificationsNoneIcon
					fontSize='large'
					sx={{ color: '#ffffff', margin: '3px' }}
				/>
			</Stack>
			<Stack></Stack>
			<Stack></Stack>
		</div>
	);
};

export default Home;
