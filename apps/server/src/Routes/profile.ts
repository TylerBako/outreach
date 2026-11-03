import { Router } from "express"
import { requireAuth } from "../Middleware/requireAuth.js"
import { createProfile, getCurrentProfile } from "../Controllers/profile.js"

const profileRouter = Router()

profileRouter.post("/", requireAuth, createProfile)
profileRouter.get("/", requireAuth, getCurrentProfile)
profileRouter.get("/", requireAuth, createProfile)

export default profileRouter

