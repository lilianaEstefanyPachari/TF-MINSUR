import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import vacio from '../../assets/vacio.jpg';
import style from './DescriptionBenefit.module.css';

const DescriptionBenefit = () => {
	return (
		<section>
			<div className={style.topDescription}>
				<button className={style.btnComeBack}>
					<MdKeyboardArrowLeft style={{ fontSize: 20 }} /> Regresar
				</button>
				<select className={style.btnSelect}>
					<option value='0'>Prueba 1</option>
					<option value='1'>Prueba 2</option>
					<option value='2'>Prueba 3</option>
				</select>
			</div>
			<div className={style.container}>
				<div className={style.alcostado}>
					<div className={style.boxFloating}>
						<h4>50% Dscto</h4>
						<p>Cuenta sueldo</p>
					</div>
					<img src={vacio} alt='' />
				</div>
				<div className={style.descripBenefit}>
					<AiOutlineHeart
						style={{ margin: 20, fontSize: 40, color: '#768998' }}
					/>
					<div>
						<h3 className={style.benefitName}>Nombre del descuento</h3>
						<p style={{ color: '#4F758B' }}>Descripción</p>
						<button className={style.btnDetaills}>Ver detalle</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DescriptionBenefit;
