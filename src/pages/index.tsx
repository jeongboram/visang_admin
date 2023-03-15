import React from 'react';
import Head from 'next/head';
import { useEffect } from 'react';
import * as zoomApi from '../apis/index';
import Button from '@mui/material/Button';

export default function Home() {
	const getSample = async () => {
		const data = await zoomApi.default.getReport('2023', '03');
		console.log('data,', data);
	};

	useEffect(() => {
		getSample();
	}, []);

	return (
		<div>
			<Button variant="contained">Hello World</Button>
		</div>
	);
}
