import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },

    addCar(state, action) {
      // assuming that action.payload has the object {name: "ford focus", cost:"120000"}
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },

    removeCar(state, action) {
      // assuming that action.payload has the id of the car we want to remove
      const updated = state.data.filter((car) => {
        // traversing through each element and if this condition is true, that particular element will gt saved in updated.
        return car.id !== action.payload;
      });

      state.data = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
