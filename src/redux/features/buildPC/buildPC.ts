import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IBuildPC {
  title: string | null;
  image: string | null;
  price: number | null;
  route: string | null;
}

interface IInitialState {
  pcBuild: {
    cpu: IBuildPC;
    motherboard: IBuildPC;
    ram: IBuildPC;
    powerSupply: IBuildPC;
    storage: IBuildPC;
    monitor: IBuildPC;
    others: IBuildPC;
  };
}

const initialState: IInitialState = {
  pcBuild: {
    cpu: {
      title: null,
      image: null,
      price: null,
      route: null,
    },
    motherboard: {
      title: null,
      image: null,
      price: null,
      route: null,
    },
    ram: {
      title: null,
      image: null,
      price: null,
      route: null,
    },
    powerSupply: {
      title: null,
      image: null,
      price: null,
      route: null,
    },
    storage: {
      title: null,
      image: null,
      price: null,
      route: null,
    },
    monitor: {
      title: null,
      image: null,
      price: null,
      route: null,
    },
    others: {
      title: null,
      image: null,
      price: null,
      route: null,
    },
  },
};

const pcBuildSlice = createSlice({
  name: "pcBuild",
  initialState,
  reducers: {
    addToProductList: (state, action) => {
      if (action.payload.cpu) {
        state.pcBuild.cpu.title = action.payload.cpu.title;
        state.pcBuild.cpu.image = action.payload.cpu.image;
        state.pcBuild.cpu.price = action.payload.cpu.price;
        state.pcBuild.cpu.route = action.payload.cpu.route;
      }

      if (action.payload.motherboard) {
        state.pcBuild.motherboard.title = action.payload.motherboard.title;
        state.pcBuild.motherboard.image = action.payload.motherboard.image;
        state.pcBuild.motherboard.price = action.payload.motherboard.price;
        state.pcBuild.motherboard.route = action.payload.motherboard.route;
      }

      if (action.payload.ram) {
        state.pcBuild.ram.title = action.payload.ram.title;
        state.pcBuild.ram.image = action.payload.ram.image;
        state.pcBuild.ram.price = action.payload.ram.price;
        state.pcBuild.ram.route = action.payload.ram.route;
      }

      if (action.payload.powerSupply) {
        state.pcBuild.powerSupply.title = action.payload.powerSupply.title;
        state.pcBuild.powerSupply.image = action.payload.powerSupply.image;
        state.pcBuild.powerSupply.price = action.payload.powerSupply.price;
        state.pcBuild.powerSupply.route = action.payload.powerSupply.route;
      }

      if (action.payload.storage) {
        state.pcBuild.storage.title = action.payload.storage.title;
        state.pcBuild.storage.image = action.payload.storage.image;
        state.pcBuild.storage.price = action.payload.storage.price;
        state.pcBuild.storage.route = action.payload.storage.route;
      }

      if (action.payload.monitor) {
        state.pcBuild.monitor.title = action.payload.monitor.title;
        state.pcBuild.monitor.image = action.payload.monitor.image;
        state.pcBuild.monitor.price = action.payload.monitor.price;
        state.pcBuild.monitor.route = action.payload.monitor.route;
      }

      if (action.payload.others) {
        state.pcBuild.others.title = action.payload.others.title;
        state.pcBuild.others.image = action.payload.others.image;
        state.pcBuild.others.price = action.payload.others.price;
        state.pcBuild.others.route = action.payload.others.route;
      }
    },
  },
});

export const { addToProductList } = pcBuildSlice.actions;

export default pcBuildSlice.reducer;
