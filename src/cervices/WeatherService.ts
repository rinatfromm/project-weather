import axios, { AxiosResponse } from "axios";
import { Weather } from "../store/types/types";
import api from "../axios";

export class WeatherService {
    static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
        const url = `/weather?q=${city}`;
        return api.get<Weather>(url);
    }
}