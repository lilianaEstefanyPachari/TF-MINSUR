import React from 'react';
import style from './Login.module.css';
import { Link } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';
import { MdLockOutline } from 'react-icons/md';
import Logo from '../../assets/Logo_Minsur.png';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

const Login = () => {
	return (
		<section>
			<div className={style.logoContainer}>
				<img className={style.logo} src={Logo} alt='Logo' />
			</div>
			<form>
				{/* <h1>Ingresar</h1> */}
				<TextField
					id='outlined-start-adornment'
					label='Correo electrónico'
					variant='outlined'
					type='email'
					placeholder='Ingresa tu correo electrónico'
					sx={{ m: 1, width: '30ch' }}
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<BiUserCircle />
							</InputAdornment>
						),
					}}
				/>
				<TextField
					id='outlined-password-input'
					label='Contraseña'
					type='password'
					placeholder='Ingresa tu contraseña'
					sx={{ m: 1, width: '30ch' }}
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<MdLockOutline />
							</InputAdornment>
						),
					}}
				/>
				<Link className={style.link} to='#'>
					¿Olvidaste tu contraseña?
				</Link>
				<button className={style.submitBtn}>Ingresar</button>
			</form>

			{/* <div id={style.container}>
				<div id={style.modal}>
					<h2>Aviso</h2>
					<p> El usuario y/o contraseña no son correctos, vovler a intentar.</p>
					<button>Aceptar</button>
				</div>
			</div> */}
		</section>
	);
};

export default Login;
