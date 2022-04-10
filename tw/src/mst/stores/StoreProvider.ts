import RootStore from './RootStore.store'

const storeProvider = RootStore.create({
    contents: [
        {
            id: '1',
            title: 'Marca',
            description: 'Introduce-ti textul',
            seen: false,
            notes: 'First',
        },
        {
            id: '2',
            title: 'Model',
            description: 'Introduce-ti textul',
            seen: false,
            notes: '',

        },
        {
            id: '3',
            title: 'Culoare',
            description: 'Introduce-ti textul',
            seen: false,
            notes: '',

        },
        {
            id: '4',
            title: 'Tara producerii',
            description: 'Introduce-ti textul',
            seen: true,
            notes: '',

        },
        {
            id: '5',
            title: 'Numarul de usi',
            description: 'Introduce-ti textul',
            seen: false,
            notes: '',

        },
        {
            id: '6',
            title: 'Tipul cutiei de viteze',
            description: 'Introduce-ti textul',
            seen: false,
            notes: '',

        },
    ]
})

export default storeProvider