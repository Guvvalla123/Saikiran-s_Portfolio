import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/MainLayout.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<PortfolioPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
