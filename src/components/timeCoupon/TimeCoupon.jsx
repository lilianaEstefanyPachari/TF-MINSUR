import React, { useState } from 'react';
import styles from './TimeCoupon.module.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Nav from '../nav/Nav';
import Select from '@mui/material/Select';
// import { Calendar } from '../calendar/Calendar';
import Stack from '@mui/material/Stack';
import isWeekend from 'date-fns/isWeekend';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Divider from '@mui/material/Divider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import TextField from '@mui/material/TextField';
import { es } from 'date-fns/locale';

const TimeCoupon = () => {
	const [value, setValue] = React.useState(null);
	const [turn, setTurn] = React.useState('');

	const handleChange = event => {
		setTurn(event.target.value);
	};

	const submitForm = e => {
		e.preventDefault();
		console.log(e);
		console.log(value);
		console.log(turn);

		console.log('hiciste click');
	};

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
					sx={{ color: '#FFFFFF', margin: '3px' }}
				/>
			</Stack>

			<Stack sx={{ background: '#FFFFFF', borderRadius: '20px 20px 0 0' }}>
				<h3 className={styles.tittle}> Cupón medio día libre </h3>
				<Divider />
				<Box className={styles.formContainer} sx={{ minWidth: 120 }}>
					<p className={styles.subtittle}> Elige fecha y horario </p>
					<form onSubmit={submitForm}>
						<InputLabel id='dateLabel'>Elige Fecha</InputLabel>
						<LocalizationProvider dateAdapter={AdapterDateFns} locale={es}>
							<StaticDatePicker
								displayStaticWrapperAs='desktop'
								orientation='portrait'
								openTo='day'
								value={value}
								shouldDisableDate={isWeekend}
								onChange={newValue => {
									setValue(newValue);
								}}
								renderInput={params => <TextField {...params} />}
							/>
						</LocalizationProvider>

						<InputLabel>Horario</InputLabel>
						<Select
							sx={{
								width: '300px',
								color: '#003da5',
								fontWeight: 'bold',
							}}
							id='selectYourTurn'
							className={styles.selectInput}
							value={turn}
							onChange={handleChange}
						>
							<MenuItem
								sx={{
									color: '#003da5',
									fontWeight: 'bold',
								}}
								value={1}
							>
								Turno: 9:00 am - 1:00 pm
							</MenuItem>
							<MenuItem
								sx={{
									color: '#003da5',
									fontWeight: 'bold',
								}}
								value={2}
							>
								Turno: 2:00 pm - 6:00 pm
							</MenuItem>
						</Select>

						<button className={styles.submitBtn} type='submit'>
							{' '}
							Enviar solicitud{' '}
						</button>
					</form>
				</Box>
			</Stack>
		</div>
	);
};

export default TimeCoupon;
