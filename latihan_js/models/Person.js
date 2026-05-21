export default class Person {
    constructor (name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`halo, nama saya ${this.name}, umur ${this.age} tahun`);
    }
}