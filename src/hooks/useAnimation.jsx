export const animationFromRight = () =>{
    const slideFromRight = {
        initial: { x: '5%' },
        animate: { x: 0, transition: { duration: 0.5 } },
      };
     
    return slideFromRight;
}

export const animationFromLeft = () =>{
    const slideFromLeft = {
        initial: { x: '-5%' },
        animate: { x: 0, transition: { duration: 0.5 } },
      };
    
    return slideFromLeft;
}

