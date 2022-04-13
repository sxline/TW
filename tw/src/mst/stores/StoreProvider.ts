import RootStore from "./RootStore.store";

const storeProvider = RootStore.create({
    contents:[
        {
            id: '1',
            title: 'Student name',
            description: 'Your name: ',
            seen: false,
            notes: '',
        },
        {
            id: '2',
            title: 'Student surname',
            description: 'Your surname: ',
            seen: false,
            notes: '',

        },
        {
            id: '3',
            title: 'Faculty',
            description: 'Your faculty: ',
            seen: false,
            notes: 'ex:    CIM',

        },
        {
            id: '4',
            title: 'Group',
            description: 'Your group: ',
            seen: true,
            notes: 'ex:    CR-191',

        },
        {
            id: '5',
            title: 'AverageGrade',
            description: 'Your grade: ',
            seen: false,
            notes: 'ex:    9 ',

        }
    ]
})

export default storeProvider;