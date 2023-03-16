import React from 'react';
import Head from 'next/head';
import { useEffect } from 'react';
import * as zoomApi from '../apis/index';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dashboard from '../components/dashboard/Dashboard';

export default function Home() {
	const getSample = async () => {
		const data = await zoomApi.default.getReport('2023', '03');
		console.log('data,', data);
	};

	useEffect(() => {
		getSample();
	}, []);

	return <Dashboard />;
}
