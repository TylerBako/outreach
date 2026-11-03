import type { Request, Response } from "express"
import prisma from "../db.js"

const allowedCommunityKeys = new Set([
    "depression",
    "bpd",
    "bipolar",
    "anxiety",
    "ptsd",
    "grief-loss",
    "ocd",
    "adhd",
    "eating-recovery",
    "burnout",
    "loneliness",
    "addiction-recovery",
])

export async function createProfile(
    req: Request,
    res: Response
): Promise<void> {
    const authUserId = res.locals.authUserId

    const {
        username,
        bio,
        avatarKey,
        communityKeys,
    } = req.body

    if (typeof authUserId !=="string") {
        res.status(401).json({
            error: "Authentication required",
        })
        return
    }

    if (
        typeof username !=="string" ||
        !/^[a-z0-9_]{3,20}$/.test(username)
    ) {
        res.status(400).json({
            error:
            "Username must contain 3-20 lowercase letters, numbers or underscores.",
        })
        return
    }

    if (
        bio !== undefined &&
        bio !== null &&
        (typeof bio !== "string" || bio.length > 160)
    ) {
        res.status(400).json({
            error: "Bio must contain no more than 160 characters."
        })
        return
}

if (typeof avatarKey !== "string" || avatarKey.trim() === "") {
    res.status(400).json({
        error: "Please select an avatar.",
    })
    return
}

if (
    !Array.isArray(communityKeys) ||
    !communityKeys.every(
        (key): key is string =>
            typeof key === "string" && allowedCommunityKeys.has(key)
    )
) {
    res.status(400).json({
        error: "One r more community selections are invalid.",
    })
    return
}

const existingProfile = await prisma.profile.findUnique({
    where: {
        authUserId,
    },
})

if(existingProfile) {
    res.status(409).json({
        error: "You already have a profile."
    })
    return
}

const existingUsername = await prisma.profile.findUnique({
    where: {
        username,
    }
})

if (existingUsername) {
    res.status(409).json({
        error: "That username is already taken."
    })
    return
}

try {
    const profile = await prisma.profile.create({
        data: {
            authUserId,
            username,
            bio:
                typeof bio === "string" && bio.trim() !== ""
                ? bio.trim()
                : null,
            avatarKey,
            communityKeys: [...new Set(communityKeys)],
        },
        select: {
            id: true,
            username: true,
            bio: true,
            avatarKey: true,
            communityKeys: true,
            createdAt: true
        }
    })

    res.status(201).json({
        profile,
    })
} catch (error) {
    console.error("Failed to create profile", error)

    res.status(500).json({
        error: "Unable to create your profile right now."
    })
}
}

export async function getCurrentProfile(
    _req: Request,
    res: Response
): Promise<void> {
    const authUserId = res.locals.authUserId

    if(typeof authUserId !== "string") {
        res.status(401).json({
            error: "Authentication required",
        })
        return
    }

    try {
        const profile = await prisma.profile.findUnique({
            where: {
                authUserId
            },
            select: {
                id: true,
                username: true,
                bio: true,
                avatarKey: true,
                communityKeys: true,
                createdAt: true,
                updatedAt: true
            }
        })

        if (!profile) {
            res.status(404).json({
                error: "Profile not found"
            })
            return
        }

        res.status(200).json({
            profile
        })
    } catch (error) {
        console.error("Failed to retrieve profile", error)

        res.status(500).json({
            error: "Unable to retrieve your profile right now"
        })
    }
}