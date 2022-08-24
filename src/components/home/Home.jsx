import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import { Stack } from '@mui/material';
import Nav from '../nav/Nav';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { SimpleAccordion } from '../accordion/accordion';
import icon1 from './iconsHome/icon1.png';
import icon2 from './iconsHome/icon2.png';
import icon3 from './iconsHome/icon3.png';
import icon4 from './iconsHome/icon4.png';
import icon5 from './iconsHome/icon5.png';
import icon6 from './iconsHome/icon6.png';
import icon7 from './iconsHome/icon7.png';
import icon8 from './iconsHome/icon8.png';
import icon9 from './iconsHome/icon9.png';
import { useAuth } from '../../context/authContext';
import { getBenefitsQuerySnapshot } from '../../services/firestore';
const Home = () => {
	// simulando data para props
	const actionBtn = {
		opc1: 'Solicitar beneficio',
		opc2: 'Solicitar beneficioooo',
	};

	const [benefitsData, setBenefitsData] = useState([]);
	// obteniendo beneficios de data
	useEffect(() => {
		const getBenefits = async () => {
			try {
				const querySnapshot = await getBenefitsQuerySnapshot();
				const benefits = [];
				querySnapshot.forEach(doc => {
					benefits.push({ ...doc.data(), id: doc.id });
				});
				setBenefitsData(benefits);
				console.log(benefits);
			} catch (error) {
				console.log(error);
			}
		};
		getBenefits();
		console.log(benefitsData);
	}, []);
	// nombre del usuario
	let userName;
	const { userData } = useAuth();
	if (userData) {
		userName = userData.Nombres;
	}
	// manejando vistas
	const [stateViewOptions, setStateViewOptions] = useState(true);
	const viewOptionsController = () => setStateViewOptions(true);
	return (
		<div className={styles.container}>
			<Stack>
				<Nav></Nav>
			</Stack>
			<Stack
				direction='row'
				sx={{
					height: '80px',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<p className={styles.greetings}>
					Hola, <span style={{ fontWeight: '600' }}>{userName}!</span>
				</p>
				<NotificationsNoneIcon
					fontSize='large'
					sx={{ color: '#FFFFFF', margin: '3px' }}
				/>
			</Stack>
			<Stack sx={{ background: '#FFFFFF', borderRadius: '20px 20px 0 0' }}>
				<Stack
					direction='row'
					sx={{ justifyContent: 'space-around', padding: '5px' }}
				>
					<p
						onClick={viewOptionsController}
						className={
							stateViewOptions ? `${styles.textActive}` : `${styles.proyects}`
						}
					>
						Mis beneficios
					</p>
					<p
						onClick={() => setStateViewOptions(false)}
						className={
							!stateViewOptions ? `${styles.textActive}` : `${styles.proyects}`
						}
					>
						Proyectos y programas
					</p>
				</Stack>
				{stateViewOptions && (
					<Stack sx={{ padding: '10px' }}>
						<SimpleAccordion
							actionBtn='Solicitar beneficio'
							src={icon1}
							title='Convenios'
							description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.'
						></SimpleAccordion>
						<SimpleAccordion
							actionBtns={actionBtn}
							src={icon2}
							title='Cupones tiempo libre'
							description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.'
						></SimpleAccordion>
						<SimpleAccordion
							src={icon3}
							title='Cupones de descuentos'
							description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.'
							actionBtn='Solicitar beneficio'
						></SimpleAccordion>
						<SimpleAccordion
							src={icon4}
							title='Seguro de salud'
							description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.'
							actionBtn='Solicitar beneficio'
						></SimpleAccordion>
						<SimpleAccordion
							src={icon5}
							title='Home office'
							description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.'
							actionBtn='Solicitar beneficio'
						></SimpleAccordion>
						<SimpleAccordion
							src={icon6}
							title='Horarios flexibles'
							description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.'
							actionBtn='Solicitar beneficio'
						></SimpleAccordion>
						<SimpleAccordion
							src={icon7}
							title='Horario de verano'
							description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.'
							actionBtn='Solicitar beneficio'
						></SimpleAccordion>{' '}
						<SimpleAccordion
							src={icon8}
							title='Licencia de paternidad'
							description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.'
							actionBtn='Solicitar beneficio'
						></SimpleAccordion>
						<SimpleAccordion
							src={icon9}
							title='Licencia por duelo'
							description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.'
							actionBtn='Solicitar beneficio'
						></SimpleAccordion>
					</Stack>
				)}
				{!stateViewOptions && (
					<Stack sx={{ padding: '10px' }}>
						<SimpleAccordion
							actionBtn='participar'
							src={icon1}
							title='Programa1'
							description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.'
						></SimpleAccordion>
						<SimpleAccordion
							actionBtn='participar'
							src={icon1}
							title='Programa2'
							description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.'
						></SimpleAccordion>
						<SimpleAccordion
							actionBtn='participar'
							src={icon1}
							title='Programa3'
							description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.'
						></SimpleAccordion>
						<SimpleAccordion
							actionBtn='participar'
							src={icon1}
							title='Programa4'
							description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.'
						></SimpleAccordion>
						<SimpleAccordion
							actionBtn='participar'
							src={icon1}
							title='Programa5'
							description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.'
						></SimpleAccordion>
						<SimpleAccordion
							actionBtn='participar'
							src={icon1}
							title='Programa6'
							description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.'
						></SimpleAccordion>
					</Stack>
				)}
			</Stack>
			<Stack
				sx={{
					color: '#FFFFFF',
					fontWeight: '700',
					margin: '0 auto',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<p>Powered by squad Minsur</p>
			</Stack>
		</div>
	);
};
export default Home;
