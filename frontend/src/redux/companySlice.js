import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
    name: "company",
    initialState: {
        companies: [],
        singleCompany: null,
    },
    reducers: {
        //actions
        setSingleCompany: (state, action) => {
            state.singleCompany = action.payload;
        },
        setcompanies: (state, action) => {
            state.companies = action.payload;
        }
    }
});

export const { setSingleCompany, setcompanies } = companySlice.actions;
export default companySlice.reducer;