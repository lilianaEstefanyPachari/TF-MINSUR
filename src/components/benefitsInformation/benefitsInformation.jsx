import React, { useState, useEffect } from 'react';
import vacio from '../../assets/vacio.jpg';
import { AiOutlineHeart, AiOutlineCheck } from 'react-icons/ai';
import {
	BsPlusLg,
	BsFillBookmarkStarFill,
	BsFillClockFill,
} from 'react-icons/bs';
import style from './benefitsInformation.module.css';
import { FaCalendarAlt, FaCcMastercard, FaCcVisa } from 'react-icons/fa';
import { HiIdentification } from 'react-icons/hi';
import { getOrder, updateTrue, updateFalse } from '../../services/firestore';
import { useParams, Link } from 'react-router-dom';

const BenefitsInformation = () => {
	const { id } = useParams();
	const [listDesc, setListDesc] = useState([]);

	const getCollection = () => {
		getOrder(setListDesc);
	};

	const updateStatus = item => {
		console.log(item.like);
		if (item.like === true) {
			updateFalse(item.id);
		} else {
			updateTrue(item.id);
		}
	};

	useEffect(() => {
		getCollection();
		console.log(listDesc);
	}, []);

	return (
		<>
			{listDesc.map(desc => (
				<section className={style.sectionStyle} key={desc.id}>
					<div className={style.benefitStyle}>
						<div className={style.alcostado}>
							<div className={style.boxFloating}>
								<h4 style={{ marginTop: 25, fontSize: 20 }}>
									{desc.desc}% Dscto
								</h4>
								<p>Cuenta sueldo</p>
							</div>
						</div>
						<img src={desc.img} alt='' width='20%' />
					</div>
					<div className={style.txtStyle}>
						<p>Detalle de descuento</p>
					</div>
					<div className={style.nameDsctoStyle}>
						<div>
							<h3 style={{ fontSize: 20, color: '#003DA5' }}>{desc.name}</h3>
							<p style={{ fontSize: 15, color: '#4F758B' }}>{desc.category}</p>
						</div>
						<AiOutlineHeart
							onClick={() => {
								updateStatus(desc);
							}}
							style={
								desc.like === true
									? { margin: 20, fontSize: 40, color: 'red' }
									: { margin: 20, fontSize: 40, color: '#768998' }
							}
						/>
					</div>
					<div>
						<h4
							style={{
								fontSize: 14,
								color: '#4F758B',
								fontWeight: 'bold',
								marginLeft: 20,
								marginRight: 20,
							}}
						>
							{desc.description}
						</h4>
						<br />
						<p
							style={{
								fontSize: 14,
								color: '#4F758B',
								marginLeft: 20,
								marginRight: 30,
							}}
						>
							{desc.business}
						</p>
						<div className={style.iconsStyle}>
							<HiIdentification
								style={{
									fontSize: 60,
									color: '#D9D9D9',
									padding: 4,
									marginTop: 3,
									marginLeft: 10,
								}}
							/>
							<BsPlusLg
								style={{
									color: '#003DA5',
									marginTop: 0,
									padding: 4,
									marginRight: 5,
								}}
							/>
							<FaCcVisa
								style={{
									fontSize: 50,
									color: '#D9D9D9',
									padding: 4,
									marginTop: 5,
								}}
							/>
							<FaCcVisa
								style={{
									fontSize: 50,
									color: '#D9D9D9',
									padding: 4,
									marginTop: 5,
								}}
							/>
							<FaCcMastercard
								style={{
									fontSize: 50,
									color: '#D9D9D9',
									padding: 4,
									marginTop: 5,
								}}
							/>
							<FaCcMastercard
								style={{
									fontSize: 50,
									color: '#D9D9D9',
									padding: 4,
									marginTop: 5,
								}}
							/>
						</div>
					</div>
					<div>
						<br />
						<h5 style={{ fontSize: 14, color: '#4F758B' }}>
							Información de la promoción
						</h5>
						<p
							style={{
								marginTop: 10,
								color: '#4F758B',
								fontSize: 14,
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<BsFillClockFill
								style={{
									fontSize: 20,
									color: '#41B6E6',
									marginTop: 5,
									marginRight: 5,
								}}
							/>
							{desc.horario}
						</p>
						<p
							style={{
								color: '#4F758B',
								fontSize: 14,
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<FaCalendarAlt
								style={{
									fontSize: 20,
									color: '#41B6E6',
									marginTop: 5,
									marginRight: 5,
								}}
							/>
							{desc.day}
						</p>
						<p
							style={{
								color: '#4F758B',
								fontSize: 14,
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<BsFillBookmarkStarFill
								style={{
									fontSize: 20,
									color: '#41B6E6',
									marginTop: 5,
									marginRight: 5,
								}}
							/>
							{desc.novalido}
						</p>
					</div>
					<div>
						<br />
						<h5 style={{ fontSize: 14, color: '#4F758B', marginRight: 30 }}>
							Aplica
						</h5>
						<p
							style={{
								marginTop: 10,
								color: '#4F758B',
								fontSize: 14,
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<AiOutlineCheck
								style={{
									fontSize: 20,
									color: '#41B6E6',
									marginTop: 5,
									marginRight: 5,
								}}
							/>{' '}
							{desc.aplica1}
						</p>
						<p
							style={{
								color: '#4F758B',
								fontSize: 14,
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<AiOutlineCheck
								style={{
									fontSize: 20,
									color: '#41B6E6',
									marginTop: 5,
									marginRight: 5,
								}}
							/>{' '}
							{desc.aplica2}
						</p>
						<p
							style={{
								color: '#4F758B',
								fontSize: 14,
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<AiOutlineCheck
								style={{
									fontSize: 20,
									color: '#41B6E6',
									marginTop: 5,
									marginRight: 5,
								}}
							/>{' '}
							{desc.aplica2}
						</p>
					</div>
					<button className={style.useCouponBtn}>Usar cupón</button>
				</section>
			))}
		</>
	);
};

export default BenefitsInformation;
