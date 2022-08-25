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
import { getCollections } from '../../services/firebase_config';
import { useParams, Link } from 'react-router-dom';

const BenefitsInformation = () => {
	const { id } = useParams();
	const [listDesc, setListDesc] = useState([]);
	const getCollection = async () => {
		setListDesc(await getCollections('cuponesdesc'));
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
							style={{ margin: 20, fontSize: 40, color: '#768998' }}
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
							Lorem ipsum dolor sit amet, consectet
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
							Lorem ipsum dolor sit amet, consectet
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
							Lorem ipsum dolor sit amet, consectet
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
							Lorem ipsum dolor sit amet, consectet
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
							Lorem ipsum dolor sit amet, consectet
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
							Lorem ipsum dolor sit amet, consectet
						</p>
					</div>
					<button className={style.useCouponBtn}>Usar cupón</button>
				</section>
			))}
		</>
	);
};

export default BenefitsInformation;
