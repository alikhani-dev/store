import { Navigate } from 'react-router-dom'
import { useAuth } from '../Context'
const ProtectRoute = ({ element }) => {
	const { user } = useAuth()

	if (!user) {
		return <Navigate to='/' />
	}

	return element
}

export default ProtectRoute
