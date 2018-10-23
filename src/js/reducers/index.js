import { FILTER_COUNTRIES } from "../constants/actionTypes";

const allCountries = require("../../resources/countries.json");

const initialState = {
    countries: allCountries
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case FILTER_COUNTRIES:
        {
            const countries = action.payload || [];
            return { countries };
        }
        default:
            return state;
    }
};

export default rootReducer;