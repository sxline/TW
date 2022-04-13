import { Instance } from 'mobx-state-tree'
import { ContentModel } from '../mst/models/Content.model'
import RootStore from '../mst/stores/RootStore.store'

interface Person{
    nickname: string
    name: string
    surname:string
    gender:string
    age:number
    iq:number
    address:string
    phone:string
}
export default Person;

export interface IRootStore extends Instance<typeof RootStore>{

}

export interface IContentModel extends Instance<typeof ContentModel>{

}

