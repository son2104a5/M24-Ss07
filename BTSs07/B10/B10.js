"use strict";
let anything = {
    a: null,
    b: false,
    c: true,
    d: 0,
    e: 1,
    f: '',
    g: 'a',
};
function checkFalsy(obj) {
    for (let key in obj) {
        if (!obj[key]) {
            delete obj[key];
        }
    }
    return obj;
}
console.log(checkFalsy(anything));
