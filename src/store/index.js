import { proxy } from "valtio";

const state = proxy({
  currentUser: null,
  activeIndex: 1,
  trainsModalVisible: false,
  selectedTrain: null,
  ticketUserData: null,
  ticketData: null,
});

export default state;
