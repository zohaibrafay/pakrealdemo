import axios from 'axios';

import {LABOR_REGISTOR_REQUEST} from '../constants/laborConstants';

export const newLabor = (laborData) => async (dispatch) => {
    try {

        dispatch({ type: LABOR_REGISTOR_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/v1/labor/new`, laborData, config)

        dispatch({
            type: NEW_LABOR_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_LABOR_FAIL,
            payload: error.response.data.message
        })
    }
}