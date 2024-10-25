import { useEffect, useRef, useState } from "react"
import WilayahSelect from "../Component/WilayahSelect"
import wilayah_indo from "../json/wilayah.json"
import { Kota, Provinsi } from "../types/wilayah";

// TODO buat interface/type untuk wilayah

function BaseForm() {
    const wilayahIndo = useRef(wilayah_indo as Array<Provinsi>)
    const [selectedProvinsi, setSelectedProvinsi] = useState<Provinsi>()
    const [selectedKota, setSelectedKota] = useState<Kota>()

    function handleProvinsiChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const selectedProvinsi = wilayahIndo.current.find(w => w.kode_wilayah[0] === e.target.value)!;
        setSelectedProvinsi(selectedProvinsi)
    }

    function handleKotaChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const selectedKota = selectedProvinsi?.kota.find(w => w.kode_wilayah[0] === e.target.value);
        setSelectedKota(selectedKota)
    }

    function handleClick() {
    }

    return (
        <div className="w-full flex h-screen justify-center items-center ">
            <div className="border border-slate-300 w-96 rounded-lg px-8 bg-white">
                <WilayahSelect
                title="Pilih Provinsi" 
                onChange={handleProvinsiChange}
                optionList={ wilayahIndo.current.map(wilayah => (
                    <option key={wilayah.kode_wilayah[0]} value={wilayah.kode_wilayah}>{wilayah.provinsi}</option>
                ))}
                />
                <WilayahSelect
                key={selectedProvinsi?.kode_wilayah[0]}
                title="Pilih Kota"
                onChange={handleKotaChange}
                optionList={ selectedProvinsi && selectedProvinsi.kota.map(kota => (
                    <option key={kota.kode_wilayah[1]} value={kota.kode_wilayah}>{kota.kota}</option>
                )) }
                />
                <button onClick={handleClick}>
                    Cari Perkiraan
                </button>
            </div>
        </div>
    )
}


export default BaseForm