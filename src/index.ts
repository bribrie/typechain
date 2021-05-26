class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
//constructor 는 클래스가 시작할 때마다 호출된다. 클래스로부터 객체를 만들 때마다!

const lynn = new Human("Lynn", 18, "female");

interface Human {
  name: string;
  age: number;
  gender: string;
}
//interface: js로 변환되지 않음
const person = {
  name: "Brie",
  age: 27,
  gender: "female",
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are ${person.gender}`;
};

console.log(lynn);
console.log(sayHi(person));
// console.log(sayHi("Brie", 25, "female"));

export {};

//예측하기 쉬워졌다.
