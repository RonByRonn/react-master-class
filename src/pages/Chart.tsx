import ApexChart from "react-apexcharts";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";

interface IHistorical {
	time_open: number;
	time_close: number;
	open: number;
	high: number;
	low: number;
	close: number;
	volume: number;
	market_cap: number;
}

interface ChartProps {
	coinId: string;
}

function Chart({ coinId }: ChartProps) {
	const { isLoading, data } = useQuery<IHistorical[]>(
		["ohlcv", coinId],
		() => fetchCoinHistory(coinId)
		// {
		// 	refetchInterval: 10000,
		// }
	);
	return (
		<div>
			{isLoading ? (
				"Loading chart..."
			) : (
				<ApexChart
					type="candlestick"
					// type="line"
					series={[
						{
							name: "Price",
							data:
								data?.map((i) => ({
									x: new Date(i.time_close * 1000).toUTCString(),
									y: [i.open, i.high, i.low, i.close],
								})) ?? [],
						},
					]}
					// series={[
					// 	{
					// 		name: "Price",
					// 		data: data?.map((price) => price.close) ?? [],
					// 	},
					// ]}
					// options={{
					// 	chart: {
					// 		height: 500,
					// 		width: 500,
					// 		toolbar: {
					// 			show: false,
					// 		},
					// 		background: "transparent",
					// 	},
					// 	grid: {
					// 		show: false,
					// 	},
					// 	yaxis: {
					// 		show: false,
					// 	},
					// 	xaxis: {
					// 		type: "datetime",
					// 		labels: {
					// 			style: {
					// 				colors: "tomato",
					// 			},
					// 		},
					// 		// axisTicks: {
					// 		// 	show: false,
					// 		// },
					// 		// axisBorder: {
					// 		// 	show: false,
					// 		// },

					// 		categories: data?.map((price) =>
					// 			new Date(price.time_close * 1000).toUTCString()
					// 		),
					// 	},
					// 	// theme: { mode: "dark" },
					// 	stroke: {
					// 		curve: "smooth",
					// 		width: 4,
					// 	},
					// 	fill: {
					// 		type: "gradient",
					// 		gradient: { gradientToColors: ["blue"], stops: [0, 100] },
					// 	},
					// 	colors: ["red"],
					// 	tooltip: {
					// 		y: {
					// 			formatter: (value) => `$ ${value.toFixed(2)}`,
					// 		},
					// 	},
					// }}
					options={{
						chart: {
							type: "candlestick",
							height: 350,
						},
						title: {
							text: "CandleStick Chart",
							align: "left",
							style: {
								color: "tomato",
							},
						},
						xaxis: {
							type: "datetime",
							labels: {
								style: {
									colors: "tomato",
								},
							},
							tooltip: {
								enabled: true,
							},
						},
						yaxis: {
							tooltip: {
								enabled: true,
							},
							labels: {
								style: {
									colors: "tomato",
								},
							},
						},
					}}
				/>
			)}
		</div>
	);
}

export default Chart;
