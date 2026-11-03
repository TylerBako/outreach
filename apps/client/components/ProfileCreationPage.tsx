import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"


export default function ProfileCreationPage() {
    return(
        <main className="min-h-screen bg-[#f6efe4] px-6 py-12">
            
            <h1>Welcome to Outreach</h1>
            <p>Let&apos;s set up your profile. It only takes a minute, and you can change any of it later.</p>
            <section className="mx-auto w-full max-w-2xl bg-white p-8">
            <h2>Create your profile</h2>

            <TooltipProvider>
            <form className="space-y-6">
                <fieldset>
                    <legend>Your avatar</legend>
                    <p>Pick a shape that feels like you</p>

                    <div className="flex flex-row items-center justify-center gap-4">
                    <div>
                        <input id="avatar-willow"
                        className="peer sr-only"
                        type="radio"
                        name="avatar"
                        value="willow"
                        aria-label="Willow avatar"
                        required />

                        <label htmlFor="avatar-willow"
                        className="block cursor-pointer rounded-full peer-checked:ring-4 peer-checked:ring-orange-400" >

                            <img
                            src="https://api.dicebear.com/10.x/line-face/svg?seed=Willow"
                            alt=""
                            className="size-16 rounded-full"/>
                        </label>
                    </div>

                    <div>
                        <input
                        id="avatar-river"
                        className="peer sr-only"
                        type="radio"
                        name="avatar"
                        value="river"
                        aria-label="River avatar"
                        />
                        <label
                        htmlFor="avatar-river"
                        className="block cursor-pointer rounded-full peer-checked:ring-4 peer-checked:ring-orange-400"
                        >
                            <img
                            src="https://api.dicebear.com/10.x/line-face/svg?seed=River"
                            alt=""
                            className="size-16 rounded-full"
                            />
                        </label>
                    </div>

                    <div>
                        <input
                        id="avatar-ember"
                        className="peer sr-only"
                        type="radio"
                        name="avatar"
                        value="ember"
                        aria-label="Ember avatar"
                        />
                        <label
                        htmlFor="avatar-ember"
                        className="block cursor-pointer rounded-full peer-checked:ring-4 peer-checked:ring-orange-400"
                        >
                            <img
                            src="https://api.dicebear.com/10.x/line-face/svg?seed=Ember"
                            alt=""
                            className="size-16 rounded-full"
                            />
                        </label>
                    </div>

                    <div>
                        <input
                        id="avatar-nova"
                        className="peer sr-only"
                        type="radio"
                        name="avatar"
                        value="nova"
                        aria-label="Nova avatar"
                        />
                        <label
                        htmlFor="avatar-nova"
                        className="block cursor-pointer rounded-full peer-checked:ring-4 peer-checked:ring-orange-400"
                        >
                            <img
                            src="https://api.dicebear.com/10.x/line-face/svg?seed=Nova"
                            alt=""
                            className="size-16 rounded-full"
                            />
                        </label>
                    </div>
                    </div>
                </fieldset>

                <div className="inline-flex items-center justify-center gap-2">
                    <label htmlFor="username" className="font-semibold">
                        Username
                    </label>
                                        <Tooltip>
                        <TooltipTrigger
                            type="button"
                            aria-label="Show username requirments"
                            className="flex size-5 items-center justify-center rouned-full border border-gray-500 text-sm text-gray-500"
                            >
                                ?
                        </TooltipTrigger>

                        <TooltipContent className="bg-[#302a26] !text-wite shadow-lg">
                            Your username appears on posts and comments, use lowercase letters, numbers and underscores only.
                        </TooltipContent>
                    </Tooltip>
                    <p className="text-sm text-gray-500">3-20 characters</p>
                </div>

                    <input id="username"
                    name="username"
                    type="text"
                    placeholder="@quietwillow"
                    className="rounded-xl border border-gray-300 px-4 py-3"
                    />

                <div>
                    <label htmlFor="bio">Short bio</label>
                    <textarea id="bio" name="bio" maxLength={160} placeholder="A little about you, only if you'd like to share."></textarea>
                </div>

                <div>
                    <label>Communities to join</label>
                    <p>Choose any that feel relevant. You can change these anytime</p>
                </div>

                <div>
                    <button type="submit">Join the community</button>
                </div>

                </form>
            </TooltipProvider>
            </section>
        </main>
    )
}