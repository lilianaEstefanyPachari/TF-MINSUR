import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import TimeCoupon from './components/timeCoupon/TimeCoupon';
import BirthdayCoupon from './components/birthdayCoupon/BirthdayCoupon';
import { AuthProvider } from './context/authContext';
import DetailBenefit from './components/detailBenefit/DetailBenefit';
import BenefitsInformation from './components/benefitsInformation/benefitsInformation';
import { BenefitsProvider } from './context/benefitContext';
import DescriptionBenefit from './components/DescriptionBenefit/DescriptionBenefit';
function App() {
	return (
		<>
			<AuthProvider>
				<BenefitsProvider>
					<BrowserRouter>
						<Routes>
							<Route path='/' element={<Login />} />
							<Route path='/home' element={<Home />} />
							<Route path='/benefits' element={<DetailBenefit />} />
							<Route path='/timecoupon' element={<TimeCoupon />} />
							<Route path='/birthdaycoupon' element={<BirthdayCoupon />} />
							<Route
								path='/benefitsInformation'
								element={<BenefitsInformation />}
							/>
							<Route path='/description' element={<DescriptionBenefit />} />
						</Routes>
					</BrowserRouter>
				</BenefitsProvider>
			</AuthProvider>
		</>
	);
}

export default App;
