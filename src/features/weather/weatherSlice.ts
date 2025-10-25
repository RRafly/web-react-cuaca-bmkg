import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PrakiraanResponse } from "../../types/cuaca";

interface WeatherState {
    data?: PrakiraanResponse;
    message?: string;
    status: string;
}

const initialState: WeatherState = {
    data: undefined,
    message: undefined,
    status: "idle"
}

const weatherSlice = createSlice({
    name: "setWeatherData",
    initialState,
    reducers: {
        weatherSet(state, action: PayloadAction<WeatherState>) {
            state.data = action.payload.data;
            state.status = action.payload.status;
            state.message = action.payload.message;
        }
    }
})

export const { weatherSet } = weatherSlice.actions

export default weatherSlice.reducer