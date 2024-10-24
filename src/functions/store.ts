import { create } from 'zustand';
import getSelectedCity from './getSelectedCity';
import { City } from '../components/CitySearch';

const defaultCity:City = {
    id: -1,
    name: "Find your city",
    stateName: "",
    hasArticles: false,
};

interface StoreState {
    selectedCity: City;
    setSelectedCity: (city: City) => void;
}

const useStore = create<StoreState>((set) => ({
    selectedCity: getSelectedCity(defaultCity),
    setSelectedCity: (city: City) => set({ selectedCity: city }),
}));

export default useStore;
