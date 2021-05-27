/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Nov 24 2020 07:04:05 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react';

import Calculator from './Calculator';

import styles from './App.module.sass';

const App = () => {
	return (
		<div className={styles.app}>
			<h1 className={styles.heading}>BMI Calculator</h1>
			<Calculator />
		</div>
	);
};

export default App;
