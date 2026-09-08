import PublicNavbar from './PublicNavbar'
import { AuthView } from '@neondatabase/neon-js/auth/react/ui'


export default function HomePage() {
    
    return (
    <div className="min-h-screen flex flex-col">
        <PublicNavbar />
        <main className="flex-1 grid grid-cols-1 md:grid-cols-12">
            <section className="flex flex-col items-center justify-center px-6 py-12 md:col-span-5">
                <h1>Find your community</h1>
                <p className="text-2xl">Connect with like-minded people, share your experiences, and build meaningful relationships</p>
            </section>

            <section className="min-h-[480px] flex items-center justify-center md:col-span-7 px-6 py-12">
                <div className="w-full max-w-xl bg-white rounded-3xl p-8 border border-[#efe6da] home-auth-card md:h-3/4 md:min-h-[520px] md:max-h-[720px] flex items-center">
                    <AuthView pathname="sign-in" />
                </div>
            </section>
        </main>
    </div>
    )
}