/* eslint-disable react/prop-types */
import { CardMedia, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import btnImg from '../iconsHome/btn1.png';
import btnImg2 from '../iconsHome/btn2.png';
import styles from '../Home.module.css';

const HomeBtn = props => {
	return (
		<Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
			<Button
				style={{ textTransform: 'none' }}
				variant='contained'
				sx={{
					backgroundColor: '#41B6E6',
					borderRadius: '24px',
					width: '70%',
					height: '40px',
					fontWeight: '700',
					marginTop: '20px',
				}}
			>
				{props.actionBtn}
			</Button>
		</Stack>
	);
};

const HomeBtns = () => {
	return (
		<Stack
			direction='row'
			sx={{
				justifyContent: 'space-between',
				alignItems: 'center',
				marginTop: '8px',
			}}
		>
			<button className={`${styles.BenefitBtns} ${styles.btnColor}`}>
				<Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
					<CardMedia
						component='img'
						image={btnImg}
						sx={{ width: '30px', height: '30px' }}
					/>
					<p>Solicita aquí tu cupón de medio día libre</p>
				</Stack>
			</button>
			<button className={`${styles.BenefitBtns} ${styles.btnColor2}`}>
				<Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
					<CardMedia
						component='img'
						image={btnImg2}
						sx={{ width: '30px', height: '30px' }}
					/>
					<p>Solicita aquí tu cupón de día libre por cumpleaños</p>
				</Stack>
			</button>
		</Stack>
	);
};

export { HomeBtn, HomeBtns };
