import type { ReactNode } from 'react'
import { NeonAuthUIProvider } from '@neondatabase/neon-js/auth/react/ui'
import { neonAuth } from '../lib/neon'

type AuthProviderProps = {
    children: ReactNode
}

export default function AuthProvider({ children }: AuthProviderProps) {
    return (
        <NeonAuthUIProvider authClient={neonAuth}>
            {children}
        </NeonAuthUIProvider>
    )
}