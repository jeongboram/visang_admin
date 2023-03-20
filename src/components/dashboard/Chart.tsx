import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import * as zoomApi from '@apis/index';
import { Report } from '@mui/icons-material';

// Generate Sales Data

type Report = {
	year: number;
	month: number;
	dates: [];
};

export default function Chart() {
	const theme = useTheme();

	const [isLoading, setIsLoading] = useState(false);
	const [dailyReport, setDailyReport] = useState<Report | null>(null);
	const [dataRes, setDataRes] = useState([]);

	const getSample = async () => {
		const res = await zoomApi.default.getReport('2023', '03');
		setIsLoading(true);
		setDailyReport(res.data);
		let createdDatas: any = [];
		for (let i = 0; i <= res.data?.dates.length; i++) {
			createdDatas.push(createDatas(res.data?.dates[i]?.date.slice(5, 10), res.data?.dates[i]?.sessions));
		}
		setDataRes(createdDatas);
		setIsLoading(false);

		console.log('dailyReport', dailyReport);
	};

	const createDatas = (time: string, amount?: number) => {
		return { time, amount };
	};

	useEffect(() => {
		getSample();
	}, []);

	return (
		<React.Fragment>
			<Title>데일리 리포트 {`${dailyReport?.year}년 ${dailyReport?.month}월`}</Title>
			{!isLoading && (
				<ResponsiveContainer>
					<LineChart
						data={dataRes}
						margin={{
							top: 16,
							right: 16,
							bottom: 0,
							left: 24,
						}}
					>
						<XAxis dataKey="time" stroke={theme.palette.text.secondary} style={theme.typography.body2} />
						<YAxis stroke={theme.palette.text.secondary} style={theme.typography.body2}>
							<Label
								angle={270}
								position="left"
								style={{
									textAnchor: 'middle',
									fill: theme.palette.text.primary,
									...theme.typography.body1,
								}}
							>
								Sales ($)
							</Label>
						</YAxis>
						<Line isAnimationActive={false} type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
					</LineChart>
				</ResponsiveContainer>
			)}
		</React.Fragment>
	);
}
