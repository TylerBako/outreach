import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { useState } from "react"

export default function ProfileCreationPage() {
    const [bio, setBio] = useState("")
    const [selectedCommunities, setSelectedCommunities] = useState<string[]>([])

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
                <div>
                    <input id="community-depression"
                    type="checkbox"
                    value="depression"
                    name="communities"
                    className="peer sr-only"
                    checked={selectedCommunities.includes("depression")}
                    onChange={handleCommunityChange} />
                    <label htmlFor="community-depression">Depression</label>
                </div>

                <div>
                    <input id="community-anxiety"
                    type="checkbox"
                    value="anxiety"
                    name="communities"
                    className="peer sr-only"
                    checked={selectedCommunities.includes("anxiety")}
                    onChange={handleCommunityChange} />
                    <label htmlFor="community-anxiety">Anxiety</label>
                </div>

                <div>
                    <input id="community-bpd"
                    type="checkbox"
                    value="bpd"
                    name="communities"
                    className="peer sr-only"
                    checked={selectedCommunities.includes("bpd")}
                    onChange={handleCommunityChange} />
                    <label htmlFor="community-bpd">BPD</label>
                </div>

                <div>
                    <input id="community-bipolar"
                    type="checkbox"
                    value="bipolar"
                    name="communities"
                    className="peer sr-only"
                    checked={selectedCommunities.includes("bipolar")}
                    onChange={handleCommunityChange} />
                    <label htmlFor="community-bipolar">Bipolar</label>
                </div>

                <div>
                    <input id="community-ptsd"
                    type="checkbox"
                    value="ptsd"
                    name="communities"
                    className="peer sr-only"
                    checked={selectedCommunities.includes("ptsd")}
                    onChange={handleCommunityChange} />
                    <label htmlFor="community-ptsd">PTSD</label>
                </div>

                <div>
                    <input id="community-grief-loss"
                    type="checkbox"
                    value="grief-loss"
                    name="communities"
                    className="peer sr-only"
                    checked={selectedCommunities.includes("grief-loss")}
                    onChange={handleCommunityChange}/>
                    <label htmlFor="community-grief-loss">Grief & Loss</label>
                </div>
                
                <div>
                    <input id="community-ocd"
                    type="checkbox"
                    value="ocd"
                    name="communities"
                    className="peer sr-only"
                    checked={selectedCommunities.includes("ocd")}
                    onChange={handleCommunityChange} />
                    <label htmlFor="community-ocd">OCD</label>
                </div>

                <div>
                    <input id="community-adhd"
                    type="checkbox"
                    value="adhd"
                    name="communities"
                    className="peer sr-only"
                    checked={selectedCommunities.includes("adhd")}
                    onChange={handleCommunityChange} /> 
                    <label htmlFor="community-adhd">ADHD</label>
                </div>

                <div>
                    <input id="community-eating-recovery"
                    type="checkbox"
                    value="eating-recovery"
                    name="communities"
                    className="peer sr-only"
                    checked={selectedCommunities.includes("eating-recovery")}
                    onChange={handleCommunityChange} />
                    <label htmlFor="community-eating-recovery">Eating Recovery</label>
                </div>

                <div>
                    <input id="community-burnout"
                    type="checkbox"
                    value="burnout"
                    name="communities"
                    className="peer sr-only"
                    checked={selectedCommunities.includes("burnout")}
                    onChange={handleCommunityChange} />
                    <label htmlFor="community-burnout">Burnout</label>
                </div>

                <div>
                    <input id="community-loneliness"
                    type="checkbox"
                    value="loneliness"
                    name="communities"
                    className="peer sr-only"
                    checked={selectedCommunities.includes("loneliness")}
                    onChange={handleCommunityChange} />
                    <label htmlFor="community-loneliness">Loneliness</label>
                </div>

                <div>
                    <input id="community-addiction-recovery"
                    type="checkbox"
                    value="addiction-recovery"
                    name="communities"
                    className="peer sr-only"
                    checked={selectedCommunities.includes("addiction-recovery")}
                    onChange={handleCommunityChange} />
                    <label htmlFor="community-addiction-recovery">Addiction Recovery</label>
                </div>
                </div>

                <div>
                    <button type="submit">Join the community</button>
                </div>
                </div>

                </form>
            </TooltipProvider>
            </section>
        </main>
    )
}