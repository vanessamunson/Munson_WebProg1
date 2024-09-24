import { useForm } from "@inertiajs/react";

export default function CreateStudent() {

    const { data, setData, post, errors, processing } = useForm({
        name: "",
        race: "",
        hall: "Attainment",
        username: "",
        password: "",
        department_id: 0,
        emphasis_id: 0
    })

    function submit(e) {
        e.preventDefault();
        post("/students");
    }

    return (
        <>
            <h1>Sign Up</h1>

            <form class="grid grid-rows-5 grid-cols-2 w-full max-w-lg"
                onSubmit={submit}
            >
                <div class="px-4">
                    <div class="w-full px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            First Name
                        </label>
                    </div>
                    <div class="relative">
                        <input class={/*{errors.name && '!border border-red'} ||*/ "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"} 
                            id="grid-first-name" 
                            type="text" 
                            placeholder="Enter name here" 
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                        />
                        {errors.name && <div>{errors.name}</div>}
                    </div>
                </div>
                <div class="px-4">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-race">
                            Race
                        </label>
                    </div>
                    <div class="relative">
                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="grid-race"
                            type="dropdown"
                            value={data.race}
                            onChange={e => setData('race', e.target.value)}
                        >
                            <option>Altmer</option>
                            <option>Argonian</option>
                            <option>Bosmer</option>
                            <option>Breton</option>
                            <option>Dunmer</option>
                            <option>Imperial</option>
                            <option>Khajiit</option>
                            <option>Nord</option>
                            <option>Orsimer</option>
                            <option>Redguard</option>  
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                        {errors.race && <div>{errors.race}</div>}
                    </div>
                </div>
                <div class="col-span-2 px-4">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-username">
                            Username
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="grid-username" 
                            type="text" 
                            placeholder="Write name here"
                            value={data.username}
                            onChange={e => setData('username', e.target.value)}
                        />
                        <p class="text-gray-600 text-xs italic">Must be unique</p>
                    </div>
                    {errors.username && <div>{errors.username}</div>}
                </div>
                <div class="col-span-2 px-4">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Password
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="grid-password" 
                            type="password" 
                            placeholder="******************"
                            value={data.password}
                            onChange={e => setData('password', e.target.value)}
                        />
                        <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    </div>
                    {errors.password && <div>{errors.password}</div>}
                </div>
                <div class="px-4">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-department">
                            Major
                        </label>
                    </div>
                    <div class="relative">
                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="grid-department"
                            type="dropdown"
                            value={data.department_id}
                            onChange={e => setData("department_id", parseInt(e.target.value))}
                        >
                            <option value="3">Alteration</option>
                            <option value="4">Conjuration</option>
                            <option value="1">Destruction</option>
                            <option value="6">Enchanting</option>
                            <option value="5">Illusion</option>
                            <option value="2">Restoration</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                        {errors.department_id && <div>{errors.department_id}</div>}
                    </div>
                </div>
                <div class="px-4">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-emphasis">
                            Emphasis
                        </label>
                    </div>
                    <div class="relative">
                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="grid-emphasis"
                            type="dropdown"
                            value={data.emphasis_id}
                            onChange={e => setData("emphasis_id", parseInt(e.target.value))}
                        >
                            <option value="1">Destruction</option>
                            <option value="2">Restoration</option>
                            <option value="3">Soul Gems</option>
                            <option value="4">Protection</option>
                            <option value="5">Regeneration</option>
                            <option value="6">Shock</option>
                            <option value="7">Frost</option>
                            <option value="8">Flames</option>
                            <option value="9">Atronachs</option>
                            <option value="10">Necromancy</option>  
                            <option value="11">Bound Weaponry</option>  
                            <option value="12">Will Bending</option>  
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                        {errors.emphasis_id && <div>{errors.emphasis_id}</div>}
                    </div>
                </div>
                <div class="px-4">
                    <button class="border-solid border-2 border-sky-500" type="submit" disabled={processing}>Register</button>
                </div>
            </form>
        </>
    )
} 