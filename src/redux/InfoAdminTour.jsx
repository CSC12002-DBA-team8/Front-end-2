const stateInfoAdmin = {
    maTour: "NT3",
    ticketAdult: 1000000,
    ticketChild: 700000,
    status: "on"
};

export const InfoAdminReducer = (state = stateInfoAdmin, action) => {
    return { ...state };
  };