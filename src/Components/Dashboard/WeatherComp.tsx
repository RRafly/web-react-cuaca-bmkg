
import { Cuaca } from "../../types/cuaca"
import styles from "./Dashboard.module.css"
import { getFormattedHour } from "../../helpers"

function WeatherCard({ weatherData }: { weatherData: Cuaca }) {
    const date = new Date(weatherData.datetime ? weatherData.datetime : "0000-06-01T23:00:00+07:00");
    return (
        <div className={`shadow-md flex flex-col grow rounded-md items-center p-3 ${styles["white-gradient-bg"]}`}>
            <p className="text-2xl font-medium -mb-3">{getFormattedHour(date)}</p>
            <img className="w-24 h-[96px]" src={weatherData.image ?? "https://api-apps.bmkg.go.id/storage/icon/cuaca/cerah berawan-pm.svg"} />
            <h3 className="text-4xl font-semibold -mt-3 ml-3">{weatherData.t}<sup className={`${styles["sup-celcius"]} text-base font-bold text-stone-600`}>&deg;C</sup></h3>
            <p className="text-xl font-normal text-gray-500 -mt-2">{weatherData.weather_desc ?? "Cerah Sekali"}</p>

            <div className="flex flex-row gap-4 mt-1 pt-4 w-full justify-between border-t-2">
                <div className="flex flex-col gap-1">
                    <small>Kelembapan</small>
                    <small>Angin</small>
                    <small>Jarak Pandang</small>
                    <small>Tutupan Awan</small>
                </div>
                <div className="flex flex-col gap-1">
                    <small>{weatherData.hu}%</small>
                    <small>{weatherData.ws}km/j</small>
                    <small>{weatherData.vs_text}</small>
                    <small>{weatherData.tcc}%</small>
                </div>
            </div>
        </div>
    )
}

function WeatherNowCard({ weatherData }: { weatherData: Cuaca }) {
    return (
        <div className={`shadow-md flex flex-col grow rounded-md items-center p-4 ${styles["white-gradient-bg"]}`}>
            <h1 className="text-4xl font-medium mb-2 text-gray-700">Sekarang</h1>
            <div className="flex flex-row">
                <img className="w-24 h-[96px]" src={weatherData.image ?? "https://api-apps.bmkg.go.id/storage/icon/cuaca/cerah berawan-pm.svg"} />
                <div className="flex flex-col justify-center">
                <h3 className="text-7xl tracking-tighter font-semibold">{weatherData.t}<sup className={`${styles["sup-celcius-6xl"]} font-bold text-stone-800 text-2xl tracking-normal`}>&deg;C</sup></h3>
                </div>
            </div>

            <p className="font-medium text-3xl -mt-3">{weatherData.weather_desc ?? "Cerah Sekali"}</p>
            
            <div className="flex flex-row gap-4 text-xl font-medium border-t-2 pt-4 mt-2">
                <div className="flex flex-col gap-1">
                    <small>Kelembapan</small>
                    <small>Angin</small>
                </div>
                <div className="flex flex-col gap-1">
                    <small>{weatherData.hu}%</small>
                    <small>{weatherData.ws}km/j</small>
                </div>
                <div className="flex flex-col gap-1">
                    <small>Jarak Pandang</small>
                    <small>Tutupan Awan</small>
                </div>
                <div className="flex flex-col gap-1">
                    <small>{weatherData.vs_text}</small>
                    <small>{weatherData.tcc}%</small>
                </div>
            </div>
        </div>
    )
}

export { WeatherCard, WeatherNowCard }