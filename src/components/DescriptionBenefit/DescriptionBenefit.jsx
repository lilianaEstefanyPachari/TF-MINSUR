import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import vacio from '../../assets/vacio.jpg';
import style from './DescriptionBenefit.module.css';
import { getCollections } from '../../services/firebase_config';
import { Link } from 'react-router-dom';

const DescriptionBenefit = () => {
	const [listDesc, setListDesc] = useState([]);
	const [filter, setFilter] = useState(listDesc);

	const getCollection = async () => {
		setListDesc(await getCollections('cuponesdesc'));
		setFilter(await getCollections('cuponesdesc'));
	};
	useEffect(() => {
		getCollection();
		console.log(listDesc);
	}, []);
	const filterCategory = category => {
		setFilter(listDesc.filter(x => x.category === category));
	};
	return (
		<section>
			<div className={style.topDescription}>
				<button className={style.btnComeBack}>
					<MdKeyboardArrowLeft style={{ fontSize: 20 }} /> Regresar
				</button>
				<select
					className={style.btnSelect}
					onChange={x => filterCategory(x.target.value)}
				>
					<option value='Alimentos - Parrillas'>Alimentos - Parrillas</option>
					<option value='Gimnasio'>Gimnasio</option>
					<option value='Viajes'>Viajes</option>
				</select>
			</div>
			{filter.map(item => (
				<div className={style.container} key={item.id}>
					<div className={style.alcostado}>
						<div className={style.boxFloating}>
							<h4>{item.desc}% Dscto</h4>
							<p>Cuenta sueldo</p>
						</div>
						<img src={item.img} alt='Beneficio' />
					</div>
					<div className={style.descripBenefit}>
						<AiOutlineHeart
							style={{ margin: 20, fontSize: 40, color: '#768998' }}
						/>
						<div>
							<h3 className={style.benefitName}>{item.name}</h3>
							<p style={{ color: '#4F758B' }}>
								{item.description.slice(0, 40) + '...'}
							</p>
							<Link
								to={`/Description/${item.id}`}
								className={style.btnDetaills}
							>
								Ver detalle
							</Link>
						</div>
					</div>
				</div>
			))}
		</section>
	);
};

export default DescriptionBenefit;
