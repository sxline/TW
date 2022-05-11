import { Instance } from "mobx-state-tree";
import { LoginModel } from "../mst/models/Login.model";
import { LoginStore } from "../mst/stores/Login.store";

interface Persoana {
    firstName:string
    secondName:string
    gender:string
    age:number
}
export default Persoana;


export interface ILoginStore extends Instance<typeof LoginStore>{
    
}
export interface ILoginModel extends Instance<typeof LoginModel>{

}