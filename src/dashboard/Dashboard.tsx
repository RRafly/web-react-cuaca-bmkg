import { Cuaca } from "../types/cuaca"
import { useNavigate } from "react-router"
import { useAppSelector } from "../hooks"
import { WeatherCard, WeatherNowCard } from "../Components/Dashboard/WeatherComp"
import { daysInWeek, monthsInYear } from "../constants"

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
                <div className="bg-white flex flex-row items-center justify-between shadow-md rounded-md p-3">
                    <div className="flex flex-col">

                    </div>
                    <div className="flex flex-col me-4">
                        <h3 className="text-lg font-semibold ">{weatherData.data?.lokasi.kotkab}</h3>
                        <h5 className="text-sm font-normal text-gray-500">{weatherData.data?.lokasi.provinsi}</h5>
                    </div>
                    <div>
                        <button className="block p-1 rounded-md border border-indigo-600 text-indigo-600 rounded-md block text-base/6" onClick={handleWilayahChange} type="button">
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


interface DayCardProps {
    cuaca: Cuaca[] | undefined;
}

function DayCard({ cuaca }: DayCardProps) {
    if (!cuaca) {
        return <div>Loading...</div>;
    }
    const date = new Date(cuaca[0].datetime);
    return (
        <div className="shadow-md p-4 me-3 rounded-md bg-white flex flex-col gap-3">
            <div>
                <h3 className="font-semibold text-2xl">{daysInWeek[date.getDay()]} {date.getDate()} {monthsInYear[date.getMonth()]} {date.getFullYear()}</h3>
            </div>
            <div className="flex flex-row gap-4 items-stretch">
                {cuaca.map((cuaca, index) => (
                    <WeatherCard key={index} weatherData={cuaca} />
                ))}
            </div>
        </div>
    )
}

