# Web cuaca BMKG tingkat adm4 berbasis React JS
Aplikasi web untuk menampilkan prakiraan cuaca wilayah Indonesia menggunakan API publik wilayah tingkat 4 BMKG.

## Stack
- React + TypeScript (Vite)
- React Router
- Redux
- Tailwind CSS

## Data/API
- API publik wilayah tingkat 4 BMKG [data.bmkg.go.id/prakiraan-cuaca](https://data.bmkg.go.id/prakiraan-cuaca/)
- Kode Wilayah JSON dari [RRafly/Kode-Wilayah-CSV-to-JSON](https://github.com/RRafly/Kode-Wilayah-CSV-to-JSON), Keputusan Menteri Dalam Negeri Nomor 100.1.1-6117 Tahun 2022 

> [!WARNING]
> Wajib untuk mencantumkan BMKG (Badan Meteorologi, Klimatologi, dan Geofisika) sebagai sumber data dan menampilkannya pada aplikasi/sistem Anda.

## Fitur
- Halaman Input form Provinsi dan Kota.
  (Karena API BMKG perlu menggunakan kode wilayah administrasi tingkat IV, `provinsi.kotkab.kecamatan.desa`, Maka kecamatan dan desa di pilih secara otomatis yang terdekat)

- Halaman prakiraan cuaca terdiri:
  - Provinsi dan kota yang di pilih
  - Ganti wilayah
  - Data prakiraan per 1 hari
  - Data prakiraan per 3 jam

## Route
- `/form`       Halaman Input form Provinsi dan Kota
- `/dashboard`  Halaman prakiraan cuaca

## Cara Menjalankan

1. Install dependency:
```sh
npm install
```

2. Jalankan development server:
```sh
npm run dev
```

3. Atau Build production:
```sh
npm run build
npm run preview
```

## Struktur
- Entry:
  - [`src/main.tsx`](src/main.tsx) 
  - [`src/App.tsx`](src/App.tsx)
  - [`vite.config.ts`](vite.config.ts)
- State:
  - [`store`](src/store.ts) — Redux store
  - [`wilayahSet`](src/features/wilayah/wilayahSlice.ts) — slice wilayah
  - [`weatherSet`](src/features/weather/weatherSlice.ts) — slice cuaca
- API:
  - [`getWeather`](src/api/BMKGApi.ts) — endpoint BMKG
- Form & data:
  - [`LocationForm`](src/form/LocationForm.tsx) — form pilih provinsi dan kota
  - [`src/json/wilayah.json`](src/json/wilayah.json) — data wilayah (provinsi & kota)
- UI:
  - [`WeatherCard`, `WeatherNowCard`](src/Components/Dashboard/WeatherComp.tsx) — component tampilan cuaca
  - [`src/Components/Dashboard/Dashboard.module.css`](src/Components/Dashboard/Dashboard.module.css) (styling)

