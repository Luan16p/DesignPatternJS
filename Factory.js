'use-strict';

function factoryObject() {
    const interfacePrivate = {
        dBackEndUser: {
            name: 'Luan',
            password: '00000',
        },
        type: 'interface',
        ID: {
            PK: '01-01',
            TK: '01.00.00.01-01'
        }
    }

    const interfacePublic = {
        'pb_item_name': interfacePrivate.dBackEndUser.name,
        'pb_item_interface': interfacePrivate.type,
        'pb_item_idd': interfacePrivate.ID.PK,
    } 

    return interfacePublic
}

const interfaceFinal = factoryObject()

function outputFactory(ev) {
    if(!ev) {
        return;
    }

    console.log(ev);
}

outputFactory((interfaceFinal['pb_item_name']).slice(1))