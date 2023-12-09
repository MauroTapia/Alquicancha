export const getRandomElements = (array, numElements)=>{
  if(array.length > 1 ){
    const shuffledArray = array?.sort(() => Math.random() - 0.5);
    return shuffledArray?.slice(0, numElements);
  }
}