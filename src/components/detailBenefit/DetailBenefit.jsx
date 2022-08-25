import React, { useState } from 'react';
import styles from './DetailBenefit.module.css';
import icon from '../../components/home/iconsHome/icon1.png';
import { AiOutlineHeart } from 'react-icons/ai';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const DetailBenefit = props => {
	const [popupActive, setPopupActive] = useState(false);

	const handleClose = () => {
		setPopupActive(false);
		//   setForm({
		// 	title: "",
		// 	desc: "",
		// 	tasks: [],
		//   });
	};

	return (
		<section className={styles.container}>
			<div className={styles.divHeader}>
				<div className={styles.backHeader}>
					<h2>Detalle de beneficio</h2>
				</div>
			</div>
			<div className={styles.divImage}>
				<img src={props.data.icon} />
			</div>
			<div className={styles.subtitle}>
				<h2 className={styles.title}>{props.data.nombreBenef}</h2>
				<AiOutlineHeart style={{ fontSize: '25px' }}></AiOutlineHeart>
			</div>

			<div className={styles.description}>
				<p>{props.data.detalle}</p>
			</div>
			<div className={styles.checksTitle}>
				<h3 className={styles.title}>Aplica:</h3>
			</div>
			<div className={styles.checks}>
				<ul>
					{props.data.requisitos.map(item => (
						<li key={item}>{item}</li>
					))}
				</ul>
			</div>
			<div className={styles.btnDiv}>
				<Button
					onClick={() => setPopupActive(!popupActive)}
					style={{ textTransform: 'none', maxWidth: '300px' }}
					variant='contained'
					sx={{
						backgroundColor: '#41B6E6',
						borderRadius: '24px',
						width: '70%',
						height: '40px',
						fontWeight: '800',
						marginTop: '10px',
					}}
				>
					Solicitar beneficio
				</Button>
			</div>
			<Stack
				sx={{
					color: '#FFFFFF',
					fontWeight: '700',
					margin: '0 auto',
					justifyContent: 'center',
					alignItems: 'center',
					height: '50px',
					background: '#003DA5',
					width: '100%',
				}}
			>
				<p>Powered by squad Minsur</p>
			</Stack>

			<Dialog
				open={popupActive}
				onClose={() => {
					setPopupActive(false);
				}}
			>
				<DialogTitle>Formulario de solicitud</DialogTitle>
				<DialogContent>
					<form>
						<Box mb={2}>
							<TextField
								fullWidth
								id='outlined-basic'
								label='datos'
								variant='outlined'
							/>
						</Box>
						<Box mb={2}>
							<TextField
								fullWidth
								id='outlined-basic'
								label='datos'
								variant='outlined'
							/>
						</Box>
						<Box mb={2}>
							<TextField
								fullWidth
								id='outlined-basic'
								label='datos'
								variant='outlined'
							/>
						</Box>
						<DialogActions>
							<Button
								onClick={handleClose}
								variant='contained'
								sx={{
									backgroundColor: '#3c5c7a',
									borderRadius: '24px',
									width: '70%',
									height: '40px',
									fontWeight: '800',
									marginTop: '10px',
								}}
							>
								Cerrar
							</Button>
							<Button
								type='submit'
								variant='contained'
								sx={{
									backgroundColor: '#41B6E6',
									borderRadius: '24px',
									width: '70%',
									height: '40px',
									fontWeight: '800',
									marginTop: '10px',
								}}
							>
								Enviar
							</Button>
						</DialogActions>
					</form>
					{/* {JSON.stringify(form)} */}
				</DialogContent>
			</Dialog>
		</section>
	);
};

export default DetailBenefit;
