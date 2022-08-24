import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import TimeCoupon from './components/timeCoupon/TimeCoupon';
import DescriptionBenefit from './components/DescriptionBenefit/DescriptionBenefit';
import BenefitsInformation from './components/benefitsInformation/BenefitsInformation';
import BirthdayCoupon from './components/birthdayCoupon/BirthdayCoupon';
import { AuthProvider } from './context/authContext';

function App() {
	return (
		<>
			<AuthProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Login />} />
						<Route path='/home' element={<Home />} />
						<Route path='/formFreeTime' element={<TimeCoupon />} />
						<Route path='/Description' element={ <DescriptionBenefit />} />
						<Route path='/Information' element={ <BenefitsInformation />} />
						<Route path='/Description' element={<DescriptionBenefit />} />
					</Routes>
				</BrowserRouter>
			</AuthProvider>
		</>
	);
}

export default App;
