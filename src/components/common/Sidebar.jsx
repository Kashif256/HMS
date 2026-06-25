import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Sidebar({ links, activeLink, onLinkClick }) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <aside className="w-56 bg-white border-r border-gray-100 flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="p-4 border-b border-gray-100">
        <h1 className="text-blue-600 font-bold text-base">MediCare HMS</h1>
        <p className="text-xs text-gray-400">Hospital Management</p>
      </div>

      {/* User Info */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
            {user?.name?.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">{user?.name}</p>
            <p className="text-xs text-green-500">● Active</p>
          </div>
        </div>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 p-3 flex flex-col gap-1">
        {links.map(link => (
          <button
            key={link}
            onClick={() => onLinkClick(link)}
            className={`text-left px-3 py-2 rounded-lg text-sm transition
              ${activeLink === link
                ? 'bg-blue-50 text-blue-600 font-medium'
                : 'text-gray-600 hover:bg-gray-50'
              }`}
          >
            {link}
          </button>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-100">
        <button
          onClick={handleLogout}
          className="text-sm text-red-500 hover:text-red-600 w-full text-left"
        >
          ← Logout
        </button>
      </div>
    </aside>
  )
}

export default Sidebar