import styled from "styled-components";

const Father = styled.div`
	display: flex;
`;

const Box = styled.div`
	background-color: ${(props) => props.bgColor};
	width: 100px;
	height: 100px;
`;

const Circle = styled(Box)`
	border-radius: 50px;
`;

const Btn = styled.button`
	color: white;
	background-color: tomato;
	border: 0;
	border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true })`
	background-color: green;
`;

function App() {
	return (
		<Father>
			{/* <Box bgColor="teal" />
			<Circle bgColor="tomato" /> */}
			<Btn>Login</Btn>
			<Btn as="a" href="/">
				Logout
			</Btn>
			<Input />
			<Input />
			<Input />
			<Input />
			<Input />
			<Input />
			<Input />
			<Input />
		</Father>
	);
}

export default App;
