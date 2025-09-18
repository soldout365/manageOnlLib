import { useAuth } from '@/stores/auth.store'
import { Navigate } from 'react-router-dom'

const PublicRouter = ({ children }: { children: React.ReactNode }) => {
	const { token } = useAuth()
	if (token) return <Navigate to='/' />
	return <>{children}</>
}

export default PublicRouter
