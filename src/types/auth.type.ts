export interface LoginResponse {
	access_token: string
}

export interface LoginRequest {
	username: string
	password: string
}
export interface AuthState {
	token: string | null
	isLoading: boolean
	login: (username: string, password: string) => Promise<void>
	logout: () => void
}
