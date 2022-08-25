import React from 'react';
import styles from './BirthdayCoupon.module.css';
import Nav from '../nav/Nav';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { es } from 'date-fns/locale';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import Greetings from '../greetings/greetings';
import { SendEmail } from '../../services/sendgrid';

const BirthdayCoupon = () => {
	const [value, setValue] = React.useState(new Date());

	const submitFormBirthday = async e => {
		e.preventDefault();
		console.log(value);

		const msg = {
			to: 'nay.trevejo@gmail.com',
			from: 'fparodig@gmail.com', // Use the email address or domain you verified above
			subject: 'Solicitando permiso de Cumpleaños',
			text: `Hola! Estoy solicitando permiso para el día ${value} por motivo de mi cumpleaños. Muchas gracias.`,
			html: `Hola! Estoy solicitando permiso para el día ${value} por motivo de mi cumpleaños. Muchas gracias.`,
		};

		console.log('Before Email');
		await SendEmail(msg);
		console.log('After Email');
	};

	return (
		<>
			<div className={styles.container}>
				<Stack>
					<Nav></Nav>
				</Stack>
				<Stack>
					<Greetings />
				</Stack>
				<Stack sx={{ background: '#FFFFFF', borderRadius: '20px 20px 0 0' }}>
					<h3 className={styles.tittle}> Cupón de cumpleaños </h3>
					<Divider />
					<Box className={styles.formContainer} sx={{ minWidth: 120 }}>
						<p className={styles.subtittle}> Elige fecha </p>
						<form onSubmit={submitFormBirthday}>
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

							<button className={styles.submitBtn} type='submit'>
								{' '}
								Enviar solicitud{' '}
							</button>
						</form>
					</Box>
				</Stack>
			</div>
		</>
	);
};

export default BirthdayCoupon;
