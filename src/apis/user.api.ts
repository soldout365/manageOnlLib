import axiosInstance from '@/configs/instance'
import type { UserType } from '@/types/user.type'

export const userApis = {
	getInfoCurrentUser: async (token: string): Promise<UserType> => {
		const res = await axiosInstance.get('/users/me', {
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: 'application/json'
			}
		})
		console.log('Get Current User API Response:', res)
		return res.data
	}
}
