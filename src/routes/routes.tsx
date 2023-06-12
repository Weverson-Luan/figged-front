import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Header } from "../components/header";
import { Home } from "../pages/home";
import { Aprovation } from "../pages/aprovation";
import { ApprovalPedendtes } from "../pages/approval-pedendtes";
function AppRoutes() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/aprovacoes" element={<Home />} />
          <Route path="/aprovacao" element={<Aprovation />} />
          <Route path="/aprovacao-pedentes" element={<ApprovalPedendtes />} />
        </Routes>
      </HashRouter>
      <ToastContainer />
    </>
  );
}

export default AppRoutes;
