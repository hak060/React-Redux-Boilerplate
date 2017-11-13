// action creator
export const selectFish = (fish) => {
  console.log('You clicked on fish: ', fish.first);
  return {
    type: 'FISH_SELECTED',
    payload: fish
  }
};