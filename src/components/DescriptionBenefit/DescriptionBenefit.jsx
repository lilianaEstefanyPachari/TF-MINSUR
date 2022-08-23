import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import vacio from '../../assets/vacio.jpg';
import style from './DescriptionBenefit.module.css';

const DescriptionBenefit = () => {
	return (
		<section>
			<div>
				<button>
					<MdKeyboardArrowLeft /> Regresar
				</button>
				<select>
					<option value='0'>Prueba 1</option>
					<option value='1'>Prueba 2</option>
					<option value='2'>Prueba 3</option>
				</select>
			</div>
			<div>
				<img src={vacio} alt='' width='20%' />
				<h4>50% de descuento</h4>
				<p>Cuenta sueldo</p>
				<div className={style.descripBenefit}>
					<AiOutlineHeart />
					<div>
						<h3>Nombre del descuento</h3>
						<p>Descripción</p>
						<button>Ver detalle</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DescriptionBenefit;
