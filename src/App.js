import styles from './app.module.css';
import data from './data.json';
import { useState } from 'react';

export const App = () => {
	const [steps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	const firstStep = activeIndex === 0;
	const lastStep = activeIndex === steps.length - 1;

	const backButton = () => {
		if (!firstStep) {
			setActiveIndex(activeIndex - 1);
		}
	};

	const nextButton = () => {
		if (!lastStep) {
			setActiveIndex(activeIndex + 1);
		}
	};

	const handleStepClick = (index) => {
		setActiveIndex(index);
	};

	const handleRestart = () => {
		setActiveIndex(0);
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>{steps[activeIndex].content}</div>
					<ul className={styles['steps-list']}>
						{steps.map((step, index) => (
							<li
								key={index}
								className={`${styles['steps-item']} ${
									index <= activeIndex ? styles.done : ''
								} ${index === activeIndex ? styles.active : ''}`}
							>
								<button className={styles['steps-item-button']} onClick={() => handleStepClick(index)}>
									{index + 1}
								</button>
								{step.title}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button className={styles.button} onClick={backButton} disabled={firstStep}>
							Назад
						</button>
						<button className={styles.button} onClick={lastStep ? handleRestart : nextButton}>
							{lastStep ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
