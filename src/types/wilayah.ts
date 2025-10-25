export interface Desa {
    kode_wilayah: string[];
    desa: string;
}

export interface Kecamatan {
    kode_wilayah: string[];
    kecamatan: string;
    desa: Desa[];
}

export interface Kota {
    kode_wilayah: string[];
    kota: string;
    type: string;
    kecamatan: Kecamatan[];
}

export interface Provinsi {
    kode_wilayah: string[];
    provinsi: string;
    kota: Kota[];
}
