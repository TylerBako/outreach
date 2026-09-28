import { AuthView } from '@neondatabase/neon-js/auth/react/ui'

type AuthPageProps = {
    pathname: 'sign-in' | 'sign-up'
}

export default function AuthPage({ pathname }: AuthPageProps) {
    return (
        <main className="min-h-screen grid grid-cols-1 bg-[#f6efe4] md:grid-cols-12">
            <section className="flex flex-col items-center justify-center px-6 py-12 text-center md:col-span-5">
                <h1 className="text-5x1 font-extrabold text-[#302a26]">
                    Find your community
                </h1>

                <p className="mt-8 max-w-xl text-xl text-[#302a26]">
                    Connect with like-minded people, share your experiences, and build meaningful relationships
                </p>
            </section>

            <section className="flex items-center justify-center px-6 py-12 md:col-span-7">
                <div className="home-auth-card w-full max-w-xl rounded-3xl border border-[#efe6da] bg-white p-8">
                    <AuthView pathname={pathname} /> 
                </div>
            </section>
        </main>
    )
}