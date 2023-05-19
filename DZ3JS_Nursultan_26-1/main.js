function dataType(data) {
    const a = typeof data
    console.log(a)
}


dataType(42)
dataType("Nursultan")
dataType(true)
dataType([1,2,3])
dataType({name: 'Nurdin', age: 20 })



function getPositionArrayElement(element, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
        return i;
        }
    }
    
    return -1;
}
    
    const myArray = [2, 1, 4, 5, 7];
    const position = getPositionArrayElement(5, myArray);
    console.log(position);

let num1 = Number(prompt("Введите первое число"))
let oper = prompt("Выбериите операцию \n+\n-\n*\n/")
let num2 = Number(prompt("Введите второе число"))

const calculator = () => {
    let result 

    (isNaN(num1) || isNaN(num2)) ?
        alert("Введите только числа"):
        true
    
        switch (oper) {
            case '+' :
                result = num1 + num2
                break
            case '-' :
                result = num1 - num2 
                break
            case '*' :
                result = num1 * num2
                break
            case '/' :
                (num2 === 0) ? result = "Error" : result = num1 / num2
                break
            default:
                console.log("Введите правильно");
        } 
    
}