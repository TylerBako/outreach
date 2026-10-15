import { Router } from "express"
import { createProfile } from "../Controllers/profile.js"
import { requireAuth } from "../Middleware/requireAuth.js"

const profileRouter = Router()

profileRouter.post("/", requireAuth, createProfile)

export default profileRouter

