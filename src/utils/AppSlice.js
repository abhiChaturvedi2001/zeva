import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
    name: "AppSlice",
    initialState: {
        productsData: [],
        filterData: [],
    },
    reducers: {
        addData: (state, action) => {
            const data = action.payload;
            state.productsData = [...data];
        },
        addFilterData: (state, action) => {
            const data = action.payload;
            state.filterData = [...data]
        },
        // when i click all plesae show the all the product data into filter
        filterByCategory: (state, action) => {
            const category = action.payload;
            if (category === "All") {
                state.filterData = [...state.productsData];
                // and if click any button then filter form product data and push that filter data into filterProducts Array
            } else {
                state.filterData = state.productsData.filter(
                    (items) => items.category === category
                );
            }
        },
        filterByRange: (state, action) => {
            const rangeValue = action.payload;
            state.filterData = state.productsData.filter(
                (item) => item.price <= rangeValue
            );
        },
        addSearchBar: (state, action) => {
            state.filterData = state.productsData.filter((items) => {
                return items.title.toLowerCase().includes(action.payload.toLowerCase());
            })
        },
        wishList: (state, action) => {
            const product = state.filterData.find((items) => items.id === action.payload);

        }
    }
})

export const { addData, addFilterData, filterByCategory, filterByRange, addSearchBar, wishList } = AppSlice.actions;
export default AppSlice.reducer