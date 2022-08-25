import { useState, useEffect } from 'react';
import { useBenefits } from '../../context/benefitContext';
import DetailBenefit from './DetailBenefit';

const Convenios = () => {
	const { benefitsData, getBenefitDataCtx } = useBenefits();
	const [state, setState] = useState(null);
	let data;
	if (state) {
		const dataConvenio = state.filter(item => item.nombreBenef === 'Convenios');
		const [conveniosObj] = dataConvenio;
		data = conveniosObj;
	}

	useEffect(() => {
		const getData = async () => {
			await getBenefitDataCtx().then(data => {
				const benefits = [];
				data.forEach(doc => {
					benefits.push({ ...doc.data(), id: doc.id });
				});
				setState(benefits);
			});
		};
		getData();
	}, []);

	return <>{data && <DetailBenefit data={data}></DetailBenefit>}</>;
};

const SeguroSalud = () => {
	const { benefitsData, getBenefitDataCtx } = useBenefits();
	const [state, setState] = useState(null);
	let data;
	if (state) {
		const dataSeguro = state.filter(
			item => item.nombreBenef === 'Seguro de salud'
		);
		const [conveniosObj] = dataSeguro;
		data = conveniosObj;
	}

	useEffect(() => {
		const getData = async () => {
			await getBenefitDataCtx().then(data => {
				const benefits = [];
				data.forEach(doc => {
					benefits.push({ ...doc.data(), id: doc.id });
				});
				setState(benefits);
			});
		};
		getData();
	}, []);

	return <>{data && <DetailBenefit data={data}></DetailBenefit>}</>;
};

const HomeOffice = () => {
	const { benefitsData, getBenefitDataCtx } = useBenefits();
	const [state, setState] = useState(null);
	let data;
	if (state) {
		const dataHomeOffice = state.filter(
			item => item.nombreBenef === 'Home office'
		);
		const [conveniosObj] = dataHomeOffice;
		data = conveniosObj;
	}

	useEffect(() => {
		const getData = async () => {
			await getBenefitDataCtx().then(data => {
				const benefits = [];
				data.forEach(doc => {
					benefits.push({ ...doc.data(), id: doc.id });
				});
				setState(benefits);
			});
		};
		getData();
	}, []);

	return <>{data && <DetailBenefit data={data}></DetailBenefit>}</>;
};

const LicenciaPorDuelo = () => {
	const { benefitsData, getBenefitDataCtx } = useBenefits();
	const [state, setState] = useState(null);
	let data;
	if (state) {
		const dataLicencia = state.filter(
			item => item.nombreBenef === 'Licencia por duelo'
		);
		const [dataObj] = dataLicencia;
		data = dataObj;
	}

	useEffect(() => {
		const getData = async () => {
			await getBenefitDataCtx().then(data => {
				const benefits = [];
				data.forEach(doc => {
					benefits.push({ ...doc.data(), id: doc.id });
				});
				setState(benefits);
			});
		};
		getData();
	}, []);

	return <>{data && <DetailBenefit data={data}></DetailBenefit>}</>;
};

const LicenciaPaternidad = () => {
	const { benefitsData, getBenefitDataCtx } = useBenefits();
	const [state, setState] = useState(null);
	let data;
	if (state) {
		const dataLicencia = state.filter(
			item => item.nombreBenef === 'Licencia de paternidad'
		);
		const [dataObj] = dataLicencia;
		data = dataObj;
	}

	useEffect(() => {
		const getData = async () => {
			await getBenefitDataCtx().then(data => {
				const benefits = [];
				data.forEach(doc => {
					benefits.push({ ...doc.data(), id: doc.id });
				});
				setState(benefits);
			});
		};
		getData();
	}, []);

	return <>{data && <DetailBenefit data={data}></DetailBenefit>}</>;
};
export {
	Convenios,
	SeguroSalud,
	HomeOffice,
	LicenciaPorDuelo,
	LicenciaPaternidad,
};
