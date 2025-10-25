import { useEffect, useRef, useState } from "react"
import wilayah_indo from "../json/wilayah.json"
import { Kota, Provinsi } from "../types/wilayah";
import { useAppDispatch, useAppSelector } from "../hooks";
import { wilayahSet } from "../features/wilayah/wilayahSlice";
import { weatherSet } from "../features/weather/weatherSlice"
import { useNavigate } from "react-router";
import { getWeather } from "../api/BMKGApi";

// TODO buat interface/type untuk wilayah

function LocationForm() {
    const wilayahIndo = useRef(wilayah_indo as Array<Provinsi>)
    const [selectedProvinsi, setSelectedProvinsi] = useState<Provinsi>()
    const [selectedKota, setSelectedKota] = useState<Kota>()
    const [error, setError] = useState<string>("")
    const weatherStatus = useAppSelector((state) => state.weather.status)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        const timerId = setTimeout(() => {
            setError("")
        }, 3000)
        return () => clearTimeout(timerId)
    }, [error])


    function handleProvinsiChange(e: React.ChangeEvent<HTMLSelectElement>) {
        if (e.target.value === "DEFAULT") {
            setSelectedProvinsi(undefined)
            return
        }
        const selectedProvinsi = wilayahIndo.current.find(w => w.kode_wilayah[0] === e.target.value)!;
        setSelectedProvinsi(selectedProvinsi)
    }

    function handleKotaChange(e: React.ChangeEvent<HTMLSelectElement>) {
        if (e.target.value === "DEFAULT") {
            setSelectedKota(undefined)
            return
        }
        const selectedKota = selectedProvinsi?.kota.find(k => k.kode_wilayah[1] === e.target.value);
        setSelectedKota(selectedKota)
    }

    async function handleSubmit() {
        if (selectedProvinsi == null || selectedKota == null) {
            (weatherSet({
                status: "error",
                message: "Form harus diisi semua"
            }))
            setError("Form harus diisi semua")
            console.log(`Form Harus Di isi Provinsi: ${selectedProvinsi?.provinsi} Kota: ${selectedKota?.kota}`)
            return
        }

        dispatch(wilayahSet({
            provinsi: selectedProvinsi,
            kota: selectedKota
        }))

        dispatch(weatherSet({
            status: "loading"
        }))

        const queryKodeWilayah = selectedKota.kecamatan[0].desa[0].kode_wilayah.join('.')
        console.log("Mengambil data cuaca. kode wilayah: " + queryKodeWilayah)
        const res = await getWeather(queryKodeWilayah);

        if (res.status !== 200) {
            setError(res.data?.message ?? "Terjadi kesalahan. Periksa Internet Anda")
            dispatch(weatherSet({
                status: "error",
                message: res.data?.message ?? "Terjadi kesalahan. Periksa Internet Anda"
            }))
            return
        }

        dispatch(weatherSet({
            data: res.data,
            status: "success"
        }))
        navigate("/dashboard")
    }

    return (
        <div className="flex h-screen flex items-center justify-center">

            {error && <div className="w-64 fixed right-5 top-5 p-2 rounded-md bg-red-100 text-red-700 border border-red-400">
                <span className="font-bold">Gagal</span>: {error}
            </div>}

            <div className="absolute bottom-0 right-0 left-0 p-2 flex text-gray-300 text-xs">
                <span>Kode Wilayah: {selectedProvinsi?.kode_wilayah}.{selectedKota?.kode_wilayah[1]}</span>
                <span className="invisible">Made With ❤ By RRafly</span>
            </div>
            
            <div className="max-w-lg w-full p-4 md:p-0">
                <h3 className="text-2xl font-medium text-gray-900 text-center">Aplikasi Perkiraan Cuaca Dengan API BMKG</h3>
                <WilayahSelect
                    title="Pilih Provinsi"
                    onChange={handleProvinsiChange}
                    optionList={wilayahIndo.current.map(wilayah => (
                        <option key={wilayah.kode_wilayah[0]} value={wilayah.kode_wilayah[0]}>{wilayah.provinsi}</option>
                    ))}
                />
                <WilayahSelect
                    title="Pilih Kota"
                    onChange={handleKotaChange}
                    optionList={selectedProvinsi! && selectedProvinsi.kota.map(kota => (
                        <option key={kota.kode_wilayah[1]} value={kota.kode_wilayah[1]}>{kota.kota}</option>
                    ))}
                />
                <button disabled={weatherStatus === "loading"} className="block mt-4 p-1 w-full border-2 border-indigo-600 text-indigo-600 rounded-md block text-sm/6" onClick={handleSubmit}>
                    {weatherStatus === "loading" ? "Loading" : "Cari Perkiraan"}
                </button>
            </div>
        </div>
    )
}


function WilayahSelect({
    title,
    onChange,
    optionList,
}: {
    title: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    optionList: JSX.Element[] | null;
}) {
    return (
        <div className="mb-3">
            <label className="block text-sm/6 font-medium text-gray-900">{title}</label>
            <select className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={onChange} defaultValue={"DEFAULT"}>
                <option disabled value={"DEFAULT"}> -- Pilih -- </option>
                {optionList}
            </select>
        </div>
    )
}

export default LocationForm