/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu May 27 2021 12:02:38 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

import React from 'react';

export const getBMIStatus = (bmi) => {
	// Obesity (Class III)
	if (bmi > 40) return <h3 style={{ color: 'red' }}>Obesity - Class III</h3>;

	// Obesity (Class II)
	if (bmi >= 35 && bmi < 40)
		return <h3 style={{ color: 'red' }}>Obesity - Class II</h3>;

	// Obesity (Class I)
	if (bmi >= 30 && bmi < 35)
		return <h3 style={{ color: 'red' }}>Obesity - Class I</h3>;

	// Overweight
	if (bmi >= 25 && bmi < 30)
		return <h3 style={{ color: '#ff9900' }}>Overweight</h3>;

	// Normal weight
	if (bmi >= 18.5 && bmi < 25)
		return <h3 style={{ color: 'green' }}>Normal</h3>;

	// Mild Thinness
	if (bmi >= 17 && bmi < 18.5)
		return (
			<h3 style={{ color: '#ff3737' }}>
				Under weight
				<br />
				(Mild Thinness)
			</h3>
		);

	// Moderate Thinness
	if (bmi >= 16 && bmi < 17)
		return (
			<h3 style={{ color: '#ff3737' }}>
				Under weight
				<br />
				(Moderate Thinness)
			</h3>
		);

	// Severe Thinness
	if (bmi < 17)
		return (
			<h3 style={{ color: '#ff3737' }}>
				Under weight
				<br />
				(Severe Thinness)
			</h3>
		);
};
