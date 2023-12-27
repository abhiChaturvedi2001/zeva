import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const AppSlice = createSlice({
    name: "AppSlice",
    initialState: {
        productsData: [], // this is products array 
        filterData: [],  // this is also products array
        wishListData: [], // this is wishlst array
        cartData: [], // this is card data array
    },
    reducers: {
        // adding data into the productsData
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
            const itemId = action.payload;
            const product = state.productsData.find((prod) => prod.id === itemId);

            if (product) {
                if (!product.inWishlist) {
                    state.wishListData.push(itemId);
                    toast.success("Items added in the wish list", {
                        position: "top-center",
                        autoClose: 500,
                    })
                } else {
                    const index = state.wishListData.indexOf(itemId);
                    if (index !== -1) {
                        state.wishListData.splice(index, 1);
                    }
                    toast.error("Item removed From the wishlist", {
                        position: "top-center",
                        autoClose: 500,
                    })
                }

                product.inWishlist = !product.inWishlist;
            }
        },
        addCartData: (state, action) => {
            state.cartData.push(action.payload)
        }
    }
})

// exporting all the actions by using named export
export const { addCartData, addData, addFilterData, filterByCategory, filterByRange, addSearchBar, wishList } = AppSlice.actions;
export default AppSlice.reducer