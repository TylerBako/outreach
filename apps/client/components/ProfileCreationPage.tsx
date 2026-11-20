import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { useState } from "react"
import { authenticatedFetch } from "../lib/api"

export default function ProfileCreationPage() {
    const [bio, setBio] = useState("")
    const [selectedCommunities, setSelectedCommunities] = useState<string[]>([])
    const [username, setUsername] = useState("")
    const [avatarKey, setAvatarKey] = useState("")

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    
    const profileData = {
        username,
        bio,
        avatarKey,
        communityKeys: selectedCommunities,
    }

    try {
        const response = await authenticatedFetch("/profile", {
            method: "POST",
            body: JSON.stringify(profileData),
        })

        const data = await response.json()

        if(!response.ok) {
            throw new Error(data.error || "Failed to create profile")
        }

        console.log("Profile created:", data)
    } catch (error) {
        console.error("Profile creation failed", error)
    }

    }


    const communities = [
        { key: "depression", label: "Depression"},
        { key: "bpd", label: "BPD"},
        { key: "bipolar", label: "Bipolar" },
        { key: "anxiety", label: "Anxiety" },
        { key: "ptsd", label: "PTSD" },
        { key: "grief-loss", label: "Grief & Loss" },
        { key: "ocd", label: " OCD" },
        { key: "adhd", label: "ADHD" },
        { key: "eating-recovery", label: "Eating Recovery" },
        { key: "burnout", label: "Burnout" },
        { key: "loneliness", label: "Loneliness" },
        { key: "addiction-recovery", label: "Addiction Recovery"}
        ]


        function handleCommunityChange(event: React.ChangeEvent<HTMLInputElement>) {
            const {value, checked } = event.target
            setSelectedCommunities((currentCommunities) => {
                if (checked) {
                    return [...currentCommunities, value]
                }

                return currentCommunities.filter(
                    (communityKey) => communityKey !== value
                )
            })
        }

    return(
        <main className="min-h-screen bg-[#f6efe4] px-6 py-12">
            
            <h1>Welcome to Outreach</h1>
            <p>Let&apos;s set up your profile. It only takes a minute, and you can change any of it later.</p>
            <section className="mx-auto w-full max-w-2xl bg-white p-8">
            <h2>Create your profile</h2>

            <TooltipProvider>
            <form className="space-y-6" onSubmit={handleSubmit}>
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
                        checked={avatarKey === "willow"}
                        onChange={(event) => setAvatarKey(event.target.value)}
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
                        checked ={avatarKey === "river"}
                        onChange={(event) => setAvatarKey(event.target.value)}
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
                        checked={avatarKey === "ember"}
                        onChange={(event) => setAvatarKey(event.target.value)}
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
                        checked={avatarKey === "nova"}
                        onChange={(event) => setAvatarKey(event.target.value)}
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
                <div className="flex flex-col gap-2">
                <div className="inline-flex items-center justify-center gap-2">
                    <label htmlFor="username" className="font-semibold">
                        Username
                    </label>

                    <Tooltip>
                        <TooltipTrigger
                            type="button"
                            aria-label="Show username requirments"
                            className="flex size-6 w-6 h-6 items-center justify-center rounded-full border border-[#f29057] bg-[#fff3eb] p-0 text-sm font-bold text-[#d96f35] transition-colors hover:bg-[#f29057] hover:text-white"
                            >
                                ?
                        </TooltipTrigger>

                        <TooltipContent className="bg-[#302a26] !text-white shadow-lg">
                            Your username appears on posts and comments, use lowercase letters, numbers and underscores only.
                        </TooltipContent>
                    </Tooltip>
                </div>

                    <input id="username"
                    name="username"
                    type="text"
                    placeholder="@quietwillow"
                    className="rounded-xl border border-gray-300 px-4 py-3 bg-[#f6efe4]"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    />

                    <p className="text-sm text-gray-500">3-20 characters</p>
                <div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                    <label htmlFor="bio" className="font-semibold">Short bio<span className="font-normal text-gray-500">(optional)</span></label>

                    <span className="text-sm text-gray-500">{bio.length}/160</span>
                    </div>

                    <textarea id="bio"
                    name="bio"
                    maxLength={160}
                    value={bio}
                    onChange={(event) => setBio(event.target.value)}
                    rows={4}
                    placeholder="A little about you, only if you'd like to share."
                    className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 bg-[#f6efe4]"
                    ></textarea>
                </div>
                </div>
                <div>
                    <label>Communities to join</label>
                    <p>Choose any that feel relevant. You can change these anytime</p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2.5">
                    {communities.map((community) => (
                    <div key={community.key}>
                        <input
                        id={`community-${community.key}`}
                        type="checkbox"
                        value={community.key}
                        name="communities"
                        className="peer sr-only"
                        checked={selectedCommunities.includes(community.key)}
                        onChange={handleCommunityChange} />

                        <label
                        htmlFor={`community-${community.key}`}
                        className="inline-block cursor-pointer rounded-full border px-4 py-2 peer-checked:bg-[#f29057] peer-checked:text-white">
                            {community.label}
                        </label>
                        </div>
                    ))}
                </div>
                    <button type="submit"
                    className="w-full rounded-xl bg-[#f29057] px-4 py-3 font-semibold text-white hover:bg-[#df7c45]">Join the community</button>
                
                </div>

                </form>
            </TooltipProvider>
            </section>
        </main>
    )
}