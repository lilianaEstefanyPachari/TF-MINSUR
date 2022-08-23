import React from 'react';
import styles from './Home.module.css';
import { Stack } from '@mui/material';
import Nav from '../nav/Nav';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { SimpleAccordion } from '../accordion/accordion';
import icon1 from '../../assets/Frame1.png';
import icon2 from '../../assets/Frame2.png';

const Home = () => {
	const beneficios = {
		description: 'Convenios',
		title:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.',
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
					sx={{ color: '#ffffff', margin: '3px' }}
				/>
			</Stack>
			<Stack sx={{ background: '#ffffff', borderRadius: '20px 20px 0 0' }}>
				<Stack direction='row' sx={{ justifyContent: 'space-around' }}>
					<p className={styles.benefits}>Mis beneficios</p>
					<p className={styles.projects}>Proyectos y programas</p>
				</Stack>
				<Stack sx={{ padding: '10px' }}>
					<SimpleAccordion
						src={icon1}
						title='Convenios'
						description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.'
					></SimpleAccordion>
					<SimpleAccordion
						src={icon2}
						title='Convenios'
						description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.'
					></SimpleAccordion>
					<SimpleAccordion
						title='Convenios'
						description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.'
					></SimpleAccordion>
					<SimpleAccordion
						title='Convenios'
						description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.'
					></SimpleAccordion>
					<SimpleAccordion
						title='Convenios'
						description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.'
					></SimpleAccordion>
					<SimpleAccordion
						title='Convenios'
						description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.'
					></SimpleAccordion>
					<SimpleAccordion
						title='Convenios'
						description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.'
					></SimpleAccordion>{' '}
					<SimpleAccordion
						title='Convenios'
						description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.'
					></SimpleAccordion>
					<SimpleAccordion
						title='Convenios'
						description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.'
					></SimpleAccordion>
				</Stack>
			</Stack>
			<Stack></Stack>
		</div>
	);
};

export default Home;
