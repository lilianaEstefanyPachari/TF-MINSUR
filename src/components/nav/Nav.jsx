import React from 'react';
import { Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import logo from '../../assets/Logo_Minsur_BLANCO.png';
import styles from './Nav.module.css';
const Nav = () => {
	return (
		<Stack
			direction='row'
			spacing={2}
			sx={{
				background: '#003DA5',
				height: '90px',
				justifyContent: 'space-between',
				alignItems: 'center',
				padding: '10px',
			}}
		>
			<div>
				<img className={styles.logo} src={logo} />
			</div>
			<div>
				<SearchIcon fontSize='large' sx={{ color: '#FFFFFF', margin: '3px' }} />
				<DensityMediumIcon
					fontSize='large'
					sx={{ color: '#FFFFFF', margin: '3px' }}
				/>
			</div>
		</Stack>
	);
};
export default Nav;
