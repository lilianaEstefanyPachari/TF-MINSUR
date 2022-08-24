import React, { useState } from 'react';
import style from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';
import { MdLockOutline } from 'react-icons/md';
import Logo from '../../assets/Logo_Minsur.png';
import { useAuth } from '../../context/authContext';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { loginMicrosoft } from '../../services/auth';
import Popup from '../popups/Popup';

// corrigiendo
const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	const { signIn } = useAuth();

	const handleEmailAndPassword = async e => {
		e.preventDefault();
		try {
			await signIn(email, password);
			navigate('/');
		} catch (error) {
			switch (error.code) {
				case '':
					setError('Campos vacíos. Ingrese correo y contraseña');
					break;
				case 'auth/user-not-found':
					setError('Usuario no registrado');
					break;
				case 'auth/wrong-password':
					setError('Contraseña inválida.Intente nuevamente');
					break;
				case 'auth/invalid-email':
					setError('Ingrese un correo válido');
					break;
				case 'auth/internal-error':
					setError('Ingrese su contraseña');
					break;
				default:
					setError('Otro error');
			}
		}
	};

	return (
		<section className={style.container}>
			<div className={style.logoContainer}>
				<img className={style.logo} src={Logo} alt='Logo' />
			</div>
			<h3 className={style.title}>Inicio sesión</h3>
			<form>
				<TextField
					onChange={e => {
						setEmail(e.target.value);
					}}
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
					onChange={e => {
						setPassword(e.target.value);
					}}
				/>
				<Link className={style.link} to='#'>
					¿Olvidaste tu contraseña?
				</Link>
				<button className={style.submitBtn} onClick={handleEmailAndPassword}>
					Ingresar
				</button>
				<button
					className={style.submitBtn1}
					onClick={loginMicrosoft}
				>
					<img
						src={require('../../assets/Icono-microsoft.png')}
						className={style.imgIco}
					/>
					<div className={style.divTxt}> Ingresar con Microsoft</div>
				</button>
			</form>
			{error && <Popup>{error}</Popup>}
		</section>
	);
};
export default Login;