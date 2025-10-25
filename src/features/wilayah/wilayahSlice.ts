import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Kota, Provinsi } from "../../types/wilayah";

interface KodeWilayah {
    provinsi: Provinsi,
    kota: Kota,
}

const initialState: KodeWilayah = {
    provinsi: {
        kode_wilayah: ['31'],
        provinsi: 'DKI JAKARTA',
        kota: [],
    },
    kota: {
        kode_wilayah: [
            "31",
            "71"
        ],
        kota: 'KOTA ADM. JAKARTA PUSAT',
        type: 'kota',
        kecamatan: []
    },
}

export const wilayahSlice = createSlice({
    name: 'setWilayah',
    initialState,
    reducers: {
        wilayahSet: (state, action: PayloadAction<KodeWilayah>) => {
            state.kota = action.payload.kota
            state.provinsi = action.payload.provinsi
        }
    }
})

export const { wilayahSet } = wilayahSlice.actions

export default wilayahSlice.reducer