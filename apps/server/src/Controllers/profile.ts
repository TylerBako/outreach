import type { Request, Response } from "express"

export async function createProfile(
    _req: Request,
    res: Response): Promise<void> {
        res.status(501).json({
            error: "Profile creation is not implemented yet"
        })
    }
