import { Bird, Fish } from "./birdAndFish";

export const flyOrswim = (o: Bird | Fish):void => {
  if(o instanceof Bird){
    o.fly()
  } else if(o instanceof Fish) {
    o.swim()
  }
}