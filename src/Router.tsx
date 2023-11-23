import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Coin from "./pages/Coin";
import Coins from "./pages/Coins";

const Wrapper = styled.div``;

const Button = styled.button`
	position: absolute;
	top: 50px;
	left: 200px;
`;

interface RouterProps {
	toggleDarkMode: () => void;
}

function Router({ toggleDarkMode }: RouterProps) {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Wrapper>
				<Button onClick={toggleDarkMode}>Toggle Dark Mode</Button>
				<Switch>
					<Route path="/:coinId">
						<Coin />
					</Route>
					<Route path="/">
						<Coins />
					</Route>
				</Switch>
			</Wrapper>
		</BrowserRouter>
	);
}

export default Router;
