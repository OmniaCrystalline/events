/** @format */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [],
  lang: "UK",
  currentCategory: "All",
  sort: "date",
  sortDirection: "min",
  currentEvent: "",
  currentPage: 1,
  search: "",
  currentDay: "",
  currentMonth: "",
  currentYear: "",
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setcurrentyear(state, action) {
      state.currentYear = action.payload;
    },
    setcurrentmonth(state, action) {
      state.currentMonth = action.payload;
    },
    setcurrentday(state, action) {
      console.log('action.payload', action.payload)
      state.currentDay = action.payload;
    },
    changeLang(state, action) {
      state.lang = action.payload;
    },
    addEvent(state, action) {
      state.events.push(action.payload);
    },
    clearEventList(state, action) {
      state.events = [];
    },
    setCategory(state, action) {
      state.currentCategory = action.payload;
    },
    setSorting(state, action) {
      state.sort = action.payload[0];
      state.sortDirection = action.payload[1];
    },
    deleteEvent(state, action) {
      state.events = state.events.filter((e) => e.id !== action.payload);
    },
    setCurrentEvent(state, action) {
      state.currentEvent = action.payload;
    },
    updateEvent(state, action) {
      const index = state.events.findIndex((e) => e.id === action.payload.id);
      state.events[index] = action.payload;
    },
    setCurrantPage(state, action) {
      state.currentPage = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const {
  setcurrentyear,
  setcurrentday,
  setcurrentmonth,
  setSearch,
  changeLang,
  updateEvent,
  setCurrentEvent,
  setCurrantPage,
  deleteEvent,
  addEvent,
  clearEventList,
  setCategory,
  setSorting,
} = taskSlice.actions;

export const eventsReducer = taskSlice.reducer;
