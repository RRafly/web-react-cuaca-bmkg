// Root response
export interface PrakiraanResponse {
    lokasi: Lokasi;
    data: DataItem[];
}

// Data tiap wilayah
    export interface DataItem {
      lokasi: Lokasi;
      cuaca: Cuaca[][]; // array of array sesuai JSON
    }

// Cuaca detail
export interface Cuaca {
    datetime: string;
    t: number; // Suhu Udara dalam °C
    tcc: number; // cloud cover
    tp: number; // presipitasi
    weather: number;
    weather_desc: string; // Kondisi Cuaca dalam Indonesia
    weather_desc_en: string; // Kondisi Cuaca dalam English
    wd_deg: number; // Arah Angin dalam derajat
    wd: string; // Arah Angin dari
    wd_to: string; // Arah Angin ke
    ws: number; // Kecepatan Angin dalam km/jam
    hu: number; // Kelembapan Udara dalam %
    vs: number; // visibility
    vs_text: string; //Jarak Pandang dalam km
    time_index: string;
    analysis_date: string; // Waktu produksi data prakiraan cuaca dalam UTC-
    image: string;
    utc_datetime: string; // Waktu dalam UTC-YYYY-MM-DD HH:mm:ss
    local_datetime: string; //Waktu lokal-YYYY-MM-DD HH:mm:ss
  }
  
  // Lokasi
  export interface Lokasi {
    adm1: string;
    adm2: string;
    adm3: string;
    adm4: string;
    provinsi: string;
    kotkab: string;
    kecamatan: string;
    desa: string;
    lon: number;
    lat: number;
    timezone: string;
    type?: string; // kadang ada "type": "adm4", kebanyakan null
  }
  
  