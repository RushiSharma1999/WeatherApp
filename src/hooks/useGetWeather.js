import React, {useState, useEffect} from "react";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";


export const useGetWeather = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [weather, setWeather] = useState(null)
    const [lat, setLat] = useState(null)
    const [lon, setLon] = useState(null)

    const fetchWeatherData = async () => {
        try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
        )
        const data = await res.json()
            setWeather(data),
            setLoading(false)
        } catch (e) {
        setError('Weather not fetched')
        } finally {
        setLoading(false)
        }
    }
    useEffect(() => { 
        (async () => {
        let {status} = await Location.requestForegroundPermissionsAsync();
        if(status !== "granted") {
            setError("Access to location is needed to run the app");
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setLat(location.coords.latitude)
        setLon(location.coords.longitude)
        await fetchWeatherData(location.coords.latitude, location.coords.longitude)
        })();
    }, [lat, lon])

    return [loading, error, weather]
}