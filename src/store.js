import create from "zustand";
import produce from "immer";

export const useStore = create((set) => ({
  data: [],
  counter: 0,
  setdata: (data) =>
    set({
      data: data,
    }),
  addData: (payload) =>
    set(
      produce((setData) => {
        setData.data.push({
          id: setData.counter += 1,
          name: payload,
        });
      })
    ),
}));
