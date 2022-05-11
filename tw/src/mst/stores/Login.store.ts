import { types } from "mobx-state-tree";
import { LoginModel } from "../models/Login.model";

export const LoginStore = types.model('LoginStore',{
    contents: types.array(LoginModel)
})

.actions((self) => ({
    setDataToLocal(value: any = {}){
        localStorage.setItem('login', JSON.stringify(value));
    },
}))

.actions((self) => ({
    setInitialStorageContents() {
        self.setDataToLocal(self.contents)
    }

}))