import { Link } from 'react-router-dom'
import { AuthView } from '@neondatabase/neon-js/auth/react/ui'

type AuthPageProps = {
    pathname: 'sign-in' | 'sign-up'
}

export default function AuthPage({ pathname }: AuthPageProps) {
    return (
        <main className="min-h-scren flex items-center justify-center bg-[#f6efe4] px-6 py-12">
            <section className="w-full max-w-md rounded-3x1 border border-[#efe6da] bg-white p-8 text-left shadow-[0_20px_60px_rgba(43,38,34,0.10)]">
                <Link to="/" className="mb-8 flex items-center justify-center gap-3 text-2x1 font-extrabold text-[#302a26]">
                    <span className="flex size-11 items-center justify-center rounded-x1 bg-[#f29057] text-white">
                        ∞
                    </span>
                    Outreach
                </Link>

                <AuthView pathname={pathname} />
            </section>
        </main>
    )
}