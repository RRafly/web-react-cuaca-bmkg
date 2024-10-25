async function getBMKGWeather(kode_wilayah: Array<string>) {
    const kodeWilayah = kode_wilayah.join(".")
    const promise = fetch(`https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=${kodeWilayah}`)
    
}