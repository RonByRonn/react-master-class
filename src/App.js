import styled, { keyframes } from "styled-components";

const rotation = keyframes`
0% {
  transform: rotate(0deg);
  border-radius: 0px;
}
50% {
  border-radius: 100px;
}
100% { 
  transform: rotate(360deg);
  border-radius: 0px;
}
`;

const Box = styled.div`
	height: 200px;
	width: 200px;
	justify-content: center;
	align-items: center;
	background-color: tomato;
	animation: ${rotation} linear infinite 2s;
	display: flex;
	span {
		font-size: 80px;
		&:hover {
			font-size: 160px;
		}
		&:active {
			opacity: 0;
		}
	}
`;

function App() {
	return (
		<div>
			<Box>
				<span>😎</span>
			</Box>
		</div>
	);
}

export default App;
