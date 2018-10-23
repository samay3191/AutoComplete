import store from "./store/index";
import { filterCountries } from "./actions/index";

window.store = store;
window.filterCountries = filterCountries;