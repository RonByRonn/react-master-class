import styled from "styled-components";

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	padding-bottom: 12px;
`;

interface PriceProps {
	ath_price?: number;
	market_cap?: number;
	percent_change_1h?: number;
	percent_change_24h?: number;
}

function Price({
	ath_price,
	market_cap,
	percent_change_1h,
	percent_change_24h,
}: PriceProps) {
	return (
		<>
			<Row>
				<text>All Time High Price</text>
				<text>{ath_price?.toFixed(2)}</text>
			</Row>
			<Row>
				<text>Market Cap</text>
				<text>{market_cap?.toFixed(2)}</text>
			</Row>
			<Row>
				<text>1-Hour Percent Change</text>
				<text>{percent_change_1h?.toFixed(2)}</text>
			</Row>
			<Row>
				<text>24-Hour Percent Change</text>
				<text>{percent_change_24h?.toFixed(2)}</text>
			</Row>
		</>
	);
}

export default Price;
