import React from 'react';
import style from './Login.module.css';
import { Link } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';
import { MdLockOutline } from 'react-icons/md';
import Logo from '../../assets/Logo_Minsur.png';

const Login = () => {
	return (
		<section>
			<form>
				<img className={style.logo} src={Logo} alt='Logo' />
				<h1>Ingresar</h1>
				<BiUserCircle />
				<input type='email' placeholder='Ingresa tu correo electrónico' />
				<MdLockOutline />
				<input type='password' placeholder='Ingresa tu contraseña' />
				<Link to='#'>¿Olvidaste tu contraseña?</Link>
				<button>Ingresar</button>
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
