import axios from "axios";
import { SET_LOADING, STOP_LOADING } from "../types";

// SET loading to TRUE
export const setLoading = () => ({
	type: SET_LOADING
});

// STOP loading to TRUE
export const stopLoading = () => ({
	type: STOP_LOADING
});
