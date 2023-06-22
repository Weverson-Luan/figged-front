/**
 * IMPORTS
 */
import { HashRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Header } from "../components/header";
import { Home } from "../pages/home/home";
import { AprovationListing } from "../pages/aprovation-listing";
import { ApprovalPedendtes } from "../pages/approval-pedendtes";
import { Aprovation } from "../pages/aprovation/aprovation";

function AppRoutes() {
	return (
		<>
			<HashRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/aprovation-listing" element={<AprovationListing />} />
					<Route path="/aprovacao-pedentes" element={<ApprovalPedendtes />} />
					<Route path="/aprovacao/:idBobina" element={<Aprovation />} />
				</Routes>
			</HashRouter>
			<ToastContainer />
		</>
	);
}

/**
 * EXPORTS
 */
export default AppRoutes;
