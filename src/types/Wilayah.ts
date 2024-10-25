export interface Provinsi {
    kode_wilayah: Array<string>,
    provinsi: string,
    kota: Array<Kota>
}

export interface Kota {
    kode_wilayah: Array<string>,
    kota: string,
    type: string,
    kecamatan: Array<{
        kode_wilayah: Array<string>,
        kecamatan: string,
        desa: Array<{
            kode_wilayah: Array<string>,
            desa: string
        }>
    }>
}