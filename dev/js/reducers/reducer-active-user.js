// need to put them together
// to allReducers
export default function (state=null, action) {
  if(action.type === "FISH_SELECTED") {
    return action.payload;
  }
  return state;
} 