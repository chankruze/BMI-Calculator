/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu May 27 2021 12:02:08 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

import React, { useState } from 'react';
import { useInputFloat, useInputSelect } from 'geekofia-hooks';
import { getBMIStatus } from '../utils';

import styles from './Calculator.module.sass';

const Calculator = () => {
	const [gender, bindGender, resetGender] = useInputSelect('male');
	const [age, bindAge, resetAge] = useInputFloat();
	const [height, bindHeight, resetHeight] = useInputFloat();
	const [weight, bindWeight, resetWeight] = useInputFloat();
	const [bmi, setBMI] = useState(0);

	const claculateBMI = () => {
		if (height && weight && age) {
			setBMI((weight / Math.pow(height * 0.01, 2)).toFixed(2));
		}
	};

	return (
		<section className={styles.calculatorSec}>
			<div className={styles.calclulatorCard}>
				<div className={styles.left}>
					<div className={styles.wrapperDiv}>
						<label htmlFor="gender">Gender</label>
						<select type="text" id="gender" {...bindGender}>
							<option value="female">Female</option>
							<option value="male">Male</option>
						</select>
					</div>
					<div className={styles.wrapperDiv}>
						<label htmlFor="age">Age</label>
						<input type="number" id="age" placeholder="years" {...bindAge} />
					</div>
					<div className={styles.wrapperDiv}>
						<label htmlFor="height">Height</label>
						<input type="number" id="height" placeholder="cm" {...bindHeight} />
					</div>
					<div className={styles.wrapperDiv}>
						<label htmlFor="weight">Weight</label>
						<input type="number" id="weight" placeholder="kg" {...bindWeight} />
					</div>
					<div className={styles.wrapperDiv}>
						<button onClick={claculateBMI}>Calculate</button>
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.wrapperDiv}>
						{bmi ? (
							<h1>
								{bmi}{' '}
								<span>
									kg/m<sup>2</sup>
								</span>
							</h1>
						) : (
							<h1>--</h1>
						)}
					</div>
					<div className={styles.wrapperDiv}>
						{bmi ? getBMIStatus(bmi) : <h3>--</h3>}
					</div>
				</div>
			</div>
			{/* <div className={styles.left}>
				<div className={styles.container}>
					<div className={styles.wrapperDiv}>
						<label htmlFor="gender">Gender</label>
						<select type="text" id="gender" {...bindGender}>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</select>
					</div>
					<div className={styles.wrapperDiv}>
						<label htmlFor="age">Age</label>
						<input type="number" id="age" {...bindAge} />
					</div>
					<div className={styles.wrapperDiv}>
						<label htmlFor="height">Height</label>
						<input type="number" id="height" placeholder="cm" {...bindHeight} />
					</div>
					<div className={styles.wrapperDiv}>
						<label htmlFor="weight">Weight</label>
						<input type="number" id="weight" placeholder="kg" {...bindWeight} />
					</div>
					<div className={styles.wrapperDiv}>
						<button onClick={claculateBMI}>Calculate</button>
					</div>
				</div>
			</div>
			<div className={styles.right}>
				<div className={styles.container}>
					<div className={cx(styles.wrapperDiv, styles.right)}>
						{bmi ? (
							<h1>
								{bmi}{' '}
								<span>
									kg/m<sup>2</sup>
								</span>
							</h1>
						) : (
							<h1>--</h1>
						)}
					</div>
					<div className={cx(styles.wrapperDiv, styles.right)}>
						{bmi ? getBMIStatus(bmi) : <h3>--</h3>}
					</div>
				</div>
			</div> */}
		</section>
	);
};

export default Calculator;
