import { Instance } from 'mobx-state-tree'
import { ContentModel } from '../mst/models/Content.model'
import RootStore from '../mst/stores/RootStore.store'


export interface IRootStore extends Instance<typeof RootStore> {
}

export interface IContentModel extends Instance<typeof ContentModel> {
}