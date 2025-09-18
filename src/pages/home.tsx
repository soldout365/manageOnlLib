import { Button } from '@/components/ui/button'
import { useAuth } from '@/stores/auth.store'

const HomePage = () => {
	const { logout } = useAuth()
	return (
		<Button
			className='h-screen flex items-center justify-center bg-blue-500 hover:bg-green-600  text-white font-semibold px-100 py-2 rounded-md transition-colors'
			onClick={logout}
		>
			Logout
		</Button>
	)
}

export default HomePage
