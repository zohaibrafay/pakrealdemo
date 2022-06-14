import axios from 'axios';

import {VEHICLE_REGISTOR_REQUEST} from '../constants/vehicleConstants';

export const newVehicle = (vehicleData) => async (dispatch) => {
    try {

        dispatch({ type: VEHICLE_REGISTOR_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/v1/vehicle/new`, vehicleData, config)

        dispatch({
            type: NEW_VEHICLE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_VEHICLE_FAIL,
            payload: error.response.data.message
        })
    }
}