import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import { Stack } from '@mui/material';
import Nav from '../nav/Nav';
import { SimpleAccordion } from '../accordion/accordion';
import Greetings from '../greetings/greetings';

import {
	getBenefitsQuerySnapshot,
	getProgramsQuerySnapshot,
} from '../../services/firestore';

const Home = () => {
	// simulando data para props
	const actionBtn = {
		opc1: 'Solicitar beneficio',
		opc2: 'Solicitar beneficioooo',
	};

	const [benefitsData, setBenefitsData] = useState([]);
	const [programsData, setProgramsData] = useState([]);
	let timeCupons = null;
	let otherBenefits = null;
	let educationPrograms = null;
	let otherPrograms = null;
	if (benefitsData.length) {
		timeCupons = benefitsData.filter(e => e.IdBenef < 2);
		otherBenefits = benefitsData.filter(e => e.IdBenef >= 2);
	}
	if (programsData.length) {
		educationPrograms = programsData.filter(e => e.IdBenef < 3);
		otherPrograms = programsData.filter(e => e.IdBenef >= 3);
	}

	// obteniendo beneficios de data
	useEffect(() => {
		const getBenefitsAndPrograms = async () => {
			try {
				const querySnapshotBenefits = await getBenefitsQuerySnapshot();
				const querySnapshotPrograms = await getProgramsQuerySnapshot();
				const benefits = [];
				const programs = [];
				querySnapshotBenefits.forEach(doc => {
					benefits.push({ ...doc.data(), id: doc.id });
				});
				setBenefitsData(benefits);
				querySnapshotPrograms.forEach(doc => {
					programs.push({ ...doc.data(), id: doc.id });
				});
				setProgramsData(programs);
				console.log(benefits);
				console.log(programs);
			} catch (error) {
				console.log(error);
			}
		};
		getBenefitsAndPrograms();
	}, []);

	// manejando vistas
	const [stateViewOptions, setStateViewOptions] = useState(true);
	const viewOptionsController = () => setStateViewOptions(true);
	return (
		<div className={styles.container}>
			<Stack>
				<Nav></Nav>
			</Stack>

			<Greetings></Greetings>
			<Stack
				className={styles.viewport}
				sx={{
					background: '#FFFFFF',
					borderRadius: '20px 20px 0 0',
					paddingBottom: '15px',
				}}
			>
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
						{timeCupons && (
							<SimpleAccordion
								actionBtns={actionBtn}
								src={timeCupons[0].icon}
								title='Cupones de tiempo libre'
								description={timeCupons[0].descBenef}
							></SimpleAccordion>
						)}
						{otherBenefits &&
							otherBenefits.map(e => (
								<SimpleAccordion
									actionBtn='Ver detalle'
									src={e.icon}
									title={e.nombreBenef}
									description={e.descBenef}
									key={e.IdBenef}
								></SimpleAccordion>
							))}
					</Stack>
				)}

				{!stateViewOptions && (
					<Stack sx={{ padding: '10px' }}>
						{educationPrograms && (
							<SimpleAccordion
								actionBtns={actionBtn}
								src={educationPrograms[0].icon}
								title='Educación'
								description={educationPrograms[0].DescPrograma}
							></SimpleAccordion>
						)}
						{otherPrograms &&
							otherPrograms.map(e => (
								<SimpleAccordion
									key={e.IdPrograma}
									actionBtn='Ver detalle'
									src={e.icon}
									title={e.NombPrograma}
									description={e.DescPrograma}
								></SimpleAccordion>
							))}
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
					height: '50px',
				}}
			>
				<p>Powered by squad Minsur</p>
			</Stack>
		</div>
	);
};
export default Home;
