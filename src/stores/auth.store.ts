import type { AuthState, LoginResponse } from '@/types/auth.type'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { authApis } from '@/apis/auth.api'

export const useAuth = create<AuthState>()(
	persist(
		(set) => ({
			token: null,
			isLoading: false,

			login: async (username, password) => {
				set({ isLoading: true })
				try {
					const res: LoginResponse = await authApis.login({ username, password })
					set({ token: res.access_token, isLoading: false })
					console.log('Login response:', res)
				} catch (error) {
					set({ isLoading: false })
					throw error
				}
			},

			logout: () => {
				set({ token: null })
			}
		}),
		{ name: 'auth-storage' }
	)
)
