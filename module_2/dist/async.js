"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    // in dept understanding of Promise
    // basic promise 
    const createPromise = () => {
        return new Promise((resolve, reject) => {
            const data = "hello world";
            if (data) {
                resolve(data);
            }
            else {
                reject('failed to load Data');
            }
        });
    };
    const getTodo = () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = yield res.json();
        console.log(data);
    });
    // call create promise function
    // const loadData = async ():Promise<string> =>{
    //     const data = await createPromise()
    //     console.log(data);
    // }
    // end of the code
}
