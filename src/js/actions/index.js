import * as _ from "lodash";
import { FILTER_COUNTRIES } from "../constants/actionTypes";

const allCountries = require("../../resources/countries.json");

export const filterCountries = keyword => {
    debugger;
    let filteredCountries = allCountries;
    if (keyword) {
        filteredCountries = _.filter(allCountries, keyword);
    }
    return { type: FILTER_COUNTRIES, payload: filteredCountries }
};