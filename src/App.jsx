import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/auth/Login'
import ProtectedRoute from './routes/ProtectedRoute'
import PharmacyDashboard from './pages/pharmacy/PharmacyDashboard'
import DispenseMedicine from './pages/pharmacy/DispenseMedicine'
import Billing from './pages/pharmacy/Billing'
import MedicineInventory from './pages/pharmacy/MedicineInventory'
import AddMedicine from './pages/pharmacy/AddMedicine'
import PrescriptionQueue from './pages/pharmacy/PrescriptionQueue'

// Doctor pages
import DoctorDashboard from './pages/doctor/DoctorDashboard'
import PatientConsultation from './pages/doctor/PatientConsultation'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />

        {/* Doctor module */}
        <Route path="/doctor" element={
          <ProtectedRoute allowedRole="doctor">
            <DoctorDashboard />
          </ProtectedRoute>
        }/>
        <Route path="/doctor/consultation/:token" element={
          <ProtectedRoute allowedRole="doctor">
            <PatientConsultation />
          </ProtectedRoute>
        }/>
        <Route path="/pharmacy" element={
          <ProtectedRoute allowedRole="pharmacy">
            <PharmacyDashboard />
          </ProtectedRoute>
        }/>
        <Route path="/pharmacy/dispense/:rxId" element={
          <ProtectedRoute allowedRole="pharmacy">
            <DispenseMedicine />
          </ProtectedRoute>
        }/>
        <Route path="/pharmacy/dispense" element={
          <ProtectedRoute allowedRole="pharmacy">
            <DispenseMedicine />
          </ProtectedRoute>
        }/>
        <Route path="/pharmacy/billing" element={
          <ProtectedRoute allowedRole="pharmacy">
            <Billing />
          </ProtectedRoute>
        }/>
        <Route path="/pharmacy/inventory" element={
          <ProtectedRoute allowedRole="pharmacy">
            <MedicineInventory />
          </ProtectedRoute>
        }/>
        <Route path="/pharmacy/add-medicine" element={
          <ProtectedRoute allowedRole="pharmacy">
            <AddMedicine />
          </ProtectedRoute>
        }/>
        <Route path="/pharmacy/prescriptions" element={
          <ProtectedRoute allowedRole="pharmacy">
            <PrescriptionQueue />
          </ProtectedRoute>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App