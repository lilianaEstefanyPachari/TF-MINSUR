import React from 'react';
import vacio from '../../assets/vacio.jpg';
import { AiOutlineHeart, AiOutlineCheck } from 'react-icons/ai';
import { BsSquareFill, BsPlusLg } from 'react-icons/bs';

const BenefitsInformation = () => {
	return (
		<section>
			<div>
				<img src={vacio} alt='' width='20%' />
				<h4>50% de descuento</h4>
				<p>Cuenta sueldo</p>
			</div>
			<div>
				<p>Detalle de descuento</p>
			</div>
			<div>
				<div>
					<h3>Nombre del descuento</h3>
					<p>Categoria del descuento</p>
				</div>
				<AiOutlineHeart />
			</div>
			<div>
				<h4>Tienes 50% de descuento en toda la carta ......</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adip.....</p>
				<BsSquareFill /> <BsPlusLg /> <BsSquareFill /> <BsSquareFill />{' '}
				<BsSquareFill /> <BsSquareFill />
			</div>
			<div>
				<h5>Información de la promoción</h5>
				<p>Lorem ipsum dolor sit amet, consectet</p>
				<p>Lorem ipsum dolor sit amet, consectet</p>
				<p>Lorem ipsum dolor sit amet, consectet</p>
			</div>
			<div>
				<h4>Aplica</h4>
				<p>
					<AiOutlineCheck /> Lorem ipsum dolor sit amet, consectet
				</p>
				<p>
					<AiOutlineCheck /> Lorem ipsum dolor sit amet, consectet
				</p>
				<p>
					<AiOutlineCheck /> Lorem ipsum dolor sit amet, consectet
				</p>
			</div>
			<button>Usar cupón</button>
		</section>
	);
};

export default BenefitsInformation;
