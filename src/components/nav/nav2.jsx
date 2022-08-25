import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/Logo_Minsur_BLANCO.png';
// import { Link } from 'react-scroll';
import './nav2.css';
import { logOutFb } from '../../services/logout';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);
	const navigate = useNavigate();
	const handleLogOut = () => {
		logOutFb();
		navigate('/');
	};
	return (
		<div className='nav-container'>
			<div>
				<img
					src={logo}
					alt='logo minsur'
					style={{ width: '185px', padding: '15px' }}
				></img>
			</div>
			{/* menu */}
			<div className='ul-Menu'>
				<ul className='ul-Tag'>
					<li className='li-menu'>Home</li>

					<li className='li-menu' onClick={handleLogOut}>
						Cerrar sesión
					</li>
				</ul>
			</div>

			{/* hamburger */}
			<div onClick={handleClick} className='div-hamburger'>
				{!nav ? (
					<FaBars style={{ fontSize: '22px' }} />
				) : (
					<FaTimes style={{ fontSize: '22px' }} />
				)}
			</div>
			{/* mobile menu */}
			<ul className={!nav ? 'ul-MenuHbr1' : 'ul-MenuHbr2'}>
				<li className='li-mobile'>Home</li>

				<li className='li-mobile' onClick={handleLogOut}>
					Cerrar sesión
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
