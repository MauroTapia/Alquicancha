export const getRandomElements = (array, numElements)=>{
  const shuffledArray = array.sort(() => Math.random() - 0.5);
  return shuffledArray.slice(0, numElements);
}