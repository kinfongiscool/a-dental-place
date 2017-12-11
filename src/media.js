import { css } from 'styled-components';

const sizes = {
  giant: 1800,
	desktop: 1200,
	tablet: 900,
	phone: 600,
  tiny: 400
};

export const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${sizes[label] / 16}em) {
			${css(...args)}
		}
	`

	return acc
}, {});
