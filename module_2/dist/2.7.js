"use strict";
{
    const getPropsValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: 'Bob',
        age: 20,
        adress: 'ctg'
    };
    const res1 = getPropsValue(user, 'name');
    //     const user = {
    //         name:'Bob',
    //         age:20,
    //         adress:'ctg'
    //     }
    //     user['age']
    // }
}
