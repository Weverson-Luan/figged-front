import { HashRouter, Routes,  Route, Navigate } from 'react-router-dom'
import AprovacaoList from './aprovacaoList/AprovacaoList'
import AprovacaoDetail from './aprovacaoDetail/Detail'
import { ToastContainer } from 'react-toastify'
import MainNavbar from './MainNavbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import './app.css'

function App() {
  return (
    <>
      <HashRouter>
        <MainNavbar />
        <Routes>
            <Route path="/" element={<Navigate replace to="aprovacoes/pendentes/1/" />}></Route>
            <Route path="/aprovacoes/:filterType/:page/" element={<AprovacaoList />}></Route>
            <Route path="/aprovacao/:id/" element={<AprovacaoDetail />}></Route>
        </Routes>
      </HashRouter>
      <ToastContainer />
    </>
  )
}

export default App
