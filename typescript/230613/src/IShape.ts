export interface ISquare { tag: "square", size: number}
export interface IReactangle { tag: "reactangle", width: number, height: number}
export interface ICircle { tag: "circle", radius: number}

export type IShape = ISquare | IReactangle | ICircle