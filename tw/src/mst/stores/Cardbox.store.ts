import {  Instance, types } from "mobx-state-tree";
import { card, Icard } from "../models/Cardbox.model";



export const Root$ = types

    .model({
        cards: types.optional(types.array(card),[])
        
    })

    .actions((self) => ({

        addCard (id:number, name:string, university:string, age:string, text:string){
            self.cards.push(card.create({id,name,university,age,text }))

        },

        delCard(item:any){
            self.cards.splice(self.cards.indexOf(item), 1)
        },
    

       addLocal( arr :Array<Icard>  ){
       let id;
       let name;
       let university;
       let age;
       let text;

        arr.map((value) =>(
            id = value.id,
            name = value.name,
            university = value.university,
            age = value.age,
            text = value.text,

            self.cards.push(card.create({id,name, university, age, text }))
        ) )

       },

       


    }) )


export const card$ = Root$.create({
    cards: [] // users is required here because it's not marked as optional
      });
    