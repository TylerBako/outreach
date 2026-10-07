import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CircleAlert, CircleHelp, Loader2 } from 'lucide-react'

import { neonAuth } from '../lib/neon'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from './ui/tooltip'

const passwordPattern = /^(?=.*[A-Z])(?=.*[^A-Za-z0-9\s]).{8,}$/
const passwordMessage = 'Password must be at least 8 characters and include 1 uppercase letter and 1 special character.'

function getSignUpErrorMessage(message?: string) {
    const normalizedMessage = message?.toLowerCase() ?? ''

    if (normalizedMessage.includes('already exists')) {
        return 'An account already exists with this email address.'
    }

    if (normalizedMessage.includes('password')) {
        return passwordMessage
    }

    if (normalizedMessage.includes('network') || normalizedMessage.includes('fetch')) {
        return 'We could not connect to the authentication service. Please try again'
    }

    return 'We could not create your account. Please check your details and try again.'
}

export default function CustomSignUpForm() {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [submitError, setSubmitError] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setPasswordError('')
        setSubmitError('')

        if(!passwordPattern.test(password)) {
            setPasswordError(passwordMessage)
            return
        }

        setIsSubmitting(true)

        try {
            const { error } = await neonAuth.signUp.email({
                name: name.trim(),
                email: email.trim(),
                password,
            })

            if (error) {
                setSubmitError(getSignUpErrorMessage(error.message))
                return
            }

            navigate('/auth/sign-in', {replace: true})
        } catch {
            setSubmitError('We could not connect to the authentication service. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <TooltipProvider>
            <div className="mx-auto w-full max-w-sm">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-[#302a26]">
                        Sign Up
                    </h1>
                    <p className="mt-3 text-base text-[#302a26]">
                        Create an account to join the community
                    </p>
                </div>

                <form className ="mt-8 space-y-5" onSubmit={handleSubmit}>
                    {submitError && (
                    <Alert variant="destructive">
                        <CircleAlert />
                        <AlertTitle>Unable to create account</AlertTitle>
                        <AlertDescription>{submitError}</AlertDescription>
                    </Alert>
                    )}

                    <div className="space-y-2">
                        <Label htmlFor="sign-up-name" className="text-base font-semibold text-[#302a26]">Name</Label>
                        <Input
                        id="sign-up-name"
                        name="name"
                        autoComplete="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="sign-up-email" className="text-base font-semibold text-[#302a26]">Email</Label>
                        <Input
                        id="sign-up-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required />
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Label htmlFor="sign-up-password" className="text-base font-semibold text-[#302a26]">Password</Label>
                    
                    <Tooltip>
                        <TooltipTrigger render= {
                            <button
                            type="button"
                            aria-label="View password requirements"
                            className="text-[#6f655e]" />}>
                                <CircleHelp className="size-4" />
                        </TooltipTrigger>

                        <TooltipContent side="top" sideOffset={8} className="max-w-[260px] rounded-xl border border-[#4a403a] bg-[#302a26] px-4 py-3 text-sm leading-relaxed text-white shadow-xl">
                        {passwordMessage}
                        </TooltipContent>
                    </Tooltip>
                    </div>

                    <Input
                    id="sign-up-password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value)

                        if (passwordError) {
                            setPasswordError('')
                        }
                    }}
                    aria-invalid={Boolean(passwordError)}
                    aria-describedby={
                        passwordError ? 'sign-up-password-error' : undefined
                    }
                    required />

                    {passwordError && (
                        <p
                        id="sign-up-password-error"
                        className="text-sm text-destructive">
                            {passwordError}
                        </p>
                    )}
                    </div>

                    <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#f58b4f] text-[#302a26] hover:bg-[#ed7d3d]">
                        {isSubmitting ? (
                            <>
                            <Loader2 className="animate-spin" />
                            Creating account...
                            </>
                        ) : (
                         'Sign Up'
                        )}
                    </Button>
                </form>

                <p className="pt-6 text-center text-sm">
                    Already have an account?{' '}
                    <Link to="/auth/sign-in" className="font-semibold">
                    Sign In
                    </Link>
                </p>
            </div>
        </TooltipProvider>
    )
}