import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import StartPage from '../Pages/StartPage.jsx'
// components
// import StartPage from '../src/Pages/StartPage.jsx'
// import DemoPlay from '../src/Pages/DemoPlay.jsx'

const Routes =()=>{


		return(
		

			<BrowserRouter>

						<Route path="/" exact>
							{ ({ match }) => <StartPage show={match !== null} /> }
						</Route>
						
						{/* <Route path="/demo">
							{ ({ match }) => <DemoPlay show={match !== null} /> }
						</Route> */}
					
			
			</BrowserRouter>

    )}



export default Routes;