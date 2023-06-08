function compare(left, right) {
  return right - left;
}

function bubbleSort(compare, elements) {
  if(Array.isArray(elements)){
    let inOrder
    
    do{
      inOrder = true;
      for(let i = 0; i < elements.length - 1; i++){
        const leftElem = elements[i];
        const rightElem = elements[i + 1];
        
        if(compare(leftElem, rightElem) > 0){
          elements[i] = rightElem;
          elements[i + 1] = leftElem;
          inOrder = false;
        }
      }
      
    }while(inOrder === false)
  }
  
  return elements;
}

module.exports = bubbleSort;
