import React, { useState } from 'react';
import style from './TimeCoupon.module.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const TimeCoupon = () => {
	const [value, setValue] = React.useState(null);
	const [time, setTime] = React.useState('');

	const handleChange = event => {
		setTime(event.target.value);
	};

	const submitForm = () => {
		console.log('hiciste click');
	};

	return (
		<div>
			<h1> Formulario </h1>
			<h3> Solicitante: </h3>
			<p> Nombre y Apellido </p>
			<Box sx={{ minWidth: 120 }}>
				<FormControl fullWidth onSubmit={submitForm} >
					<InputLabel id='demo-simple-select-label'>
						Selecciona turno{' '}
					</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						value={time}
						label='Tiempo de permiso '
						onChange={handleChange}
					>
						<MenuItem value={1}>Mañana</MenuItem>
						<MenuItem value={2}>Tarde</MenuItem>
					</Select>

					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DatePicker
							label='Elige la fecha '
							value={value}
							onChange={newValue => {
								setValue(newValue);
							}}
							renderInput={params => <TextField {...params} />}
						/>
					</LocalizationProvider>
				</FormControl>
				<button> Enviar petición</button>
			</Box>
		</div>
	);
};

export default TimeCoupon;
