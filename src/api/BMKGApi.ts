export async function getWeather(kode_wilayahIV: string) {
    const url = "https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=" + kode_wilayahIV;
    try {
        const res = await fetch(url)
        return {
            status: res.status,
            message: res.statusText,
            data: await res.json()
        }; 
    } catch (error: any) {
        return {
            status: error == typeof TypeError ? 0 : 500,
            message: error.message,
            data: null
        };
    }
}

