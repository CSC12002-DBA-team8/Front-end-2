const statePrice = {
    maTour: "NT3",
    ticketAdult: 1000000,
    ticketChild: 700000,
};

export const PriceReducer = (state = statePrice, action) => {
    return { ...state };
  };
  