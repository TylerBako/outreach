import { createRemoteJWKSet, jwtVerify } from "jose"
import type { Request, Response, NextFunction } from "express"

const jwksUrl = process.env.NEON_AUTH_JWKS_URL
const authBaseUrl = process.env.NEON_AUTH_BASE_URL

if (!jwksUrl || !authBaseUrl) {
    throw new Error(
        "Neon_AUTH_JWKS_URL and NEON_AUTH_BASE_URL must be configured"
    )
}

const jwks = createRemoteJWKSet(new URL(jwksUrl))
const issuer = new URL(authBaseUrl).origin

export async function requireAuth(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> {
    const authorization = req.header("authorization")

        if(!authorization?.toLowerCase().startsWith("bearer ")) {
            res.status(401).json({
                error:"Authentication required",
            })
            return
        }

        const token =authorization.slice(7).trim()

        try {
            const { payload } = await jwtVerify(token, jwks, {
                issuer,
            })

            if(!payload.sub) {
                res.status(401).json({
                    error: "Invalid authentication token",
                })
                return
            }

            res.locals.authUserId = payload.sub
            next()
        } catch {
            res.status(401).json({
                error: "Invalid or expired authentication token",
            })
        }
}