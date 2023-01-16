export class Recipe {
public name: string;
public descriotion: string;
public imagePath:string;

constructor(name:string, desc:string, imagePath:string){
  this.name=name ;
  this.descriotion=desc;
  this.imagePath=imagePath;
  
}
}