import { Instance, types } from "mobx-state-tree";


export const card = types
    .model({
        id:types.number,
        name: types.optional(types.string, ""),
        university:types.optional(types.string, ""),
        age: types.optional(types.string, ""),
        text: types.optional(types.string, ""),
    })


    .actions( (self)=>({
        
      
    }))


    export type Icard  = Instance <typeof card>