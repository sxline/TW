import { LoginStore } from "./Login.store";

export const loginStore = LoginStore.create({
    contents:[
        {
            id: '1',
            user: 'test',
            passwd: 'test'
        },
        {
            id: '2',
            user: 'maxim',
            passwd: 'maxim'
        },
        {
            id: '3',
            user: 'admin',
            passwd: 'admin'
        },
        {
            id: '4',
            user: 'profesor',
            passwd: 'profesor'
        }
    ]
})