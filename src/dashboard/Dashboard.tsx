import { useNavigate } from "react-router"
import { useAppSelector } from "../hooks"
import { WeatherNowCard, DayCard } from "../Components/Dashboard/WeatherComp"

export function Dashboard() {

    const weatherData = useAppSelector((state) => state.weather)
    const navigate = useNavigate()
    console.log(weatherData)
    const currentWeather = weatherData.data?.data[0].cuaca[0][0]

    async function handleWilayahChange() {
        navigate("/form")
    }

    return (
        <>
            <div className="max-w-7xl lg:px-8 px-4 flex justify-end mt-3">
                <div className="bg-gray-800 text-white flex flex-row items-center justify-between shadow-md rounded-md p-3">
                    <div className="flex flex-col">

                    </div>
                    <div className="flex flex-col me-4">
                        <h3 className="text-lg font-semibold ">{weatherData.data?.lokasi.kotkab}</h3>
                        <h5 className="text-sm font-normal text-gray-300">{weatherData.data?.lokasi.provinsi}</h5>
                    </div>
                    <div>
                        <button className="block p-1 rounded-md border border-indigo-400 text-indigo-400 rounded-md block text-base/6" onClick={handleWilayahChange} type="button">
                            Ganti Lokasi
                        </button>
                    </div>
                </div>
            </div>
            <div className="mx-auto w-full max-w-7xl lg:px-8 px-4">
                <div className="flex justify-center items-center flex-col mt-3">
                    {currentWeather && <WeatherNowCard weatherData={currentWeather} />}
                </div>

                <div className="overflow-hidden rounded-md mt-5">
                    <div className="flex flex-row whitespace-nowrap overflow-x-auto">
                        {weatherData.data?.data[0].cuaca.map((cuaca, key) => (
                            <DayCard cuaca={cuaca} key={key} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
