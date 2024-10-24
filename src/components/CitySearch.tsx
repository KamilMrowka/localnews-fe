import axios from "axios";
import { useEffect, useRef, useState } from "react"
import hardSaveSelectedCity from "../functions/hardSaveSelectedCity";
import useStore from "../functions/store"; 

export interface City {
    id: number,
    name: string,
    stateName: string,
    hasArticles: boolean
}


export default function CitySearch() {

    const [query, setQuery] = useState<string>('');
    const [fetchedCities, setFetchedCities] = useState<City[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const debounceTimer = useRef<NodeJS.Timeout | null>(null);

    const selectedCity = useStore((state) => state.selectedCity);
    const setSelectedCity = useStore((state) => state.setSelectedCity);
    const basicUrl = useStore((state) => state.basicUrl);

    const fetchCities = async (searchQuery: string) => {
        try {
            const response = await axios.get(`${basicUrl}cities?query=${searchQuery}`);
            setFetchedCities(response.data);
        } catch (error) {
            console.error("error fetching cities:", error);
        }
    }

    const debounce = (func: Function, delay: number) => {
        return (...args: any[]) => {
            if (debounceTimer.current) clearTimeout(debounceTimer.current);
            debounceTimer.current = setTimeout(() => func(...args), delay);
        };
    };

    const debouncedFetchCities = debounce(fetchCities, 500);

    useEffect(() => {
      if (query.length >= 3) {
        debouncedFetchCities(query);
      } else {
        setFetchedCities([]);
      }
    }, [query]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
                setQuery('');
                setFetchedCities([]);
                if (debounceTimer.current) {
                    clearTimeout(debounceTimer.current);
                }
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    

    return (
        <div ref={inputRef} className="w-full relative">
            <form>
                <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder={selectedCity.name + (selectedCity.id > -1 ? ", " + selectedCity.stateName : "")} className={"w-full px-5 py-2 p-1 text-white focus:outline-none bg-gray-600 focus:border-0" + " " + (fetchedCities.length > 0 ?"rounded-t-xl":"rounded-xl")}></input>
            </form>
            <ul className={"w-full bg-gray-600 border rounded-b-md mt-1 max-h-52 overflow-y-auto absolute" + " " + (fetchedCities.length > 0 ? "":"hidden")}>
                {
                    fetchedCities.length > 0 &&
                    fetchedCities.map((city) => {
                        return <li onClick={() => {
                            hardSaveSelectedCity({city:city, setSelectedCity:setSelectedCity})
                            setQuery('')
                        }} className="mb-3 md:mb-1 hover:cursor-pointer hover:text-green-500 hover:font-extrabold" key={city.id}>{city.name + ", " + city.stateName}</li>
                    })
                }
            </ul>
        </div> 

    )
}