import { create } from 'zustand';
import getSelectedCity from './getSelectedCity';
import { City } from '../components/CitySearch';
import { Article } from '../pages/LandingPage';

const defaultCity:City = {
    id: -1,
    name: "Find your city",
    stateName: "",
    hasArticles: false,
};

interface StoreState {
    selectedCity: City;
    setSelectedCity: (city: City) => void;
    selectedArticle: Article |  null;
    setSelectedArticle: (article: Article | null) => void;
}

const useStore = create<StoreState>((set) => ({
    selectedArticle: null,
    selectedCity: getSelectedCity(defaultCity),
    setSelectedCity: (city: City) => set({ selectedCity: city }),
    setSelectedArticle: (article: Article | null) => set({ selectedArticle: article }),
}));

export default useStore;
