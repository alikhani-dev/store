import { Navigate } from 'react-router-dom'
import { useAuth } from '../context'
const ProtectRoute = ({ element }) => {
	const { user } = useAuth()

	if (!user) {
		return <Navigate to='/' />
	}

	return element
}

export default ProtectRoute
