/**
 * Storybook example for Bar01 chart
 *
 */

import React from 'react';
import BarChart01 from './bar01';
import { tailwindConfig } from '../../utils/Utils';

export default {
	title: 'Charts/Bar/Bar01',
	component: BarChart01,
};

const Template = (args) => <BarChart01 {...args} />;

export const Default = Template.bind({});
Default.args = {
	width: 595,
	height: 248,
	data: {
		labels: [
			'12-01-2020',
			'01-01-2021',
			'02-01-2021',
			'03-01-2021',
			'04-01-2021',
			'05-01-2021',
		],
		datasets: [
			// Light blue bars
			{
				label: 'Direct',
				data: [800, 1600, 900, 1300, 1950, 1700],
				backgroundColor: tailwindConfig().theme.colors.blue[400],
				hoverBackgroundColor: tailwindConfig().theme.colors.blue[500],
				barPercentage: 0.66,
				categoryPercentage: 0.66,
			},
			// Blue bars
			{
				label: 'Indirect',
				data: [4900, 2600, 5350, 4800, 5200, 4800],
				backgroundColor: tailwindConfig().theme.colors.indigo[500],
				hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
				barPercentage: 0.66,
				categoryPercentage: 0.66,
			},
		],
	},
};
