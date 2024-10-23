import axios from "axios";
import { useEffect, useState } from "react"

export interface City {
    id: number,
    name: string,
    stateName: string,
    hasArticles: boolean
}

export default function CitySearch() {
    const [query, setQuery] = useState<string>('');
    const [fetchedCities, setFetchedCities] = useState<City[]>([]);

    const fetchCities = async (searchQuery: string) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/cities?query=${searchQuery}`);
            setFetchedCities(response.data);
        } catch (error) {
            console.error("error fetching cities:", error);
        }
    }

    const debounce = (func: Function, delay: number) => {
        let timer: NodeJS.Timeout;
        return (...args: any[]) => {
          clearTimeout(timer);
          timer = setTimeout(() => func(...args), delay);
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
    

    return (
        <div className="w-full relative">
            <form>
                <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Find your city" className={"w-full px-5 py-2 p-1 text-white focus:outline-none bg-gray-600 focus:border-0" + " " + (fetchedCities.length > 0 ?"rounded-t-xl":"rounded-xl")}></input>
            </form>
            <ul className={"w-full bg-gray-600 border rounded-b-md mt-1 max-h-52 overflow-y-auto absolute" + " " + (fetchedCities.length > 0 ? "":"hidden")}>
                {
                    fetchedCities.length > 0 &&
                    fetchedCities.map((city) => {
                        return <li className="mb-3 md:mb-1 hover:cursor-pointer hover:text-green-500 hover:font-extrabold" key={city.id}>{city.name + ", " + city.stateName}</li>
                    })
                }
            </ul>
        </div> 

    )
}