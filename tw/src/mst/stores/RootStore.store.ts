import { applySnapshot, types } from "mobx-state-tree";
import { ContentModel } from "../models/Content.model";


const RootStore = types.model('RootStore', {
    contents: types.array(ContentModel),

    contents_notes: types.array(types.safeReference(ContentModel))

})
    .actions((self) => ({
        setDataToLocalStorage(value: any = {}) {
            localStorage.setItem('initialState', JSON.stringify(value))
        },

        getDataFromLocalStorage(key: string = 'initialState') {
            return localStorage.getItem(key)
        },

        removeLocalStorage(key: string = 'initialState') {
            localStorage.removeItem(key)
            console.log(`>>${ key } was removed`)
        }
    }))

    .actions((self) => ({
        setInitialStorageContents() {
            self.setDataToLocalStorage(self.contents)
        },

        addNote(id: string) {
            self.contents_notes.push(id)
        },

        removeNote(id: string) {
            const updatesNotes = self.contents_notes.filter((content) => {
                if (content?.id !== id) {
                    return true
                } else {
                    return false
                }
            })

            console.log('>>updatesNotes', updatesNotes)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            applySnapshot(self.contents_notes, updatesNotes)

        }

    }))

export default RootStore