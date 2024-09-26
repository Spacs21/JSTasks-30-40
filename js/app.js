
// 30 mashq
{
    function reverNum(n){
        return parseInt(n.toString().split(' ').reverse().join()) 
    }
    console.log(reverNum(21));
}

// 31 mashq
{
    function obj(arr) {
        let result = {};
        arr.forEach(function(item) {
            result[item] = item.length;
        });
        return result;
    }
    
    const input = ["text", "world", "laptop"];
    console.log(obj(input));
}

// 32 mashq
{
    function maxMinWord(str){
        let arr = str.split(' ')
        let minWord = arr[0]
        let maxWord = arr[1]
        for(let i = 0; i < arr.length; i++){
            if(minWord.length > maxWord.length){
                minWord = maxWord
            }
            if(minWord.length > maxWord.length){
                maxWord = minWord
            }
        }
        return `MinWord: "${minWord}", MaxWord: ${maxWord}`
    }
    console.log(maxMinWord("Men dasturlash kursida o’qiyman")); 
}

// 33 mashq
{
    function getLevels(n){
        let arr = []
        for(let i = 1; i <= n; i++){
            arr.push(2 ** i)
        }
        return arr
    }
    console.log(getLevels(5));
}

// 34 mashq
{
    function shortestWord(str){
        let arr = str.split(' ')
        let shortest = arr[0]
        for(let i = 0; i < arr.length; i++){
            if(shortest.length > arr[i].length){
                shortest = arr[i]
            }
        }
        return `eng kichik so'z bu: "${shortest}"`
    }
    console.log(shortestWord("funskiya kichik so'zni topib beradi!"));
}

// 35 mashq
{
    function obj(n){
        const obj = {a: 2, b: 3, c: 4}
        for(let key in obj){
            obj[key] *= n
        }
        return obj
    }
    console.log(obj(5));
}

// 36 mashq
{
    function findNum(str){
        let target = "1234567890"
        let count = 0
        for(let i = 0; i < str.length; i++){
            if(target.includes(str[i])){
                count++
            }
        }
        return `stringda "${count}" ta son bor!`
    }
    console.log(findNum("salom1bu2test1lorem2"));
}

// 37 mashq
{
    const sumToArray = (a, b, c) => {
        const sum = a + b + c;
        return String(sum).split('');
      };
      
      console.log(sumToArray(1, 22, 3));
}

// 38 mashq
{
    function findLetter(str){
        let arr = str.split(' ')
        let total = 0
        for(let i = 0; i < arr.length; i++){
            if (arr[i].toLowerCase().includes("a")) {
                total++;
            }
        }
        return total
    }
    console.log(findLetter("Algebra juda ham yaxshi dars!"));
}

// 39 mashq
{
    function findPowerOfTwo(n) {
        let k = 0;
        let current = 1;
    
        while (current < n) {
            current *= 2;
            k++;
        }
    
        return current === n ? k : -1;
    }
    
    console.log(findPowerOfTwo(8));
}

// 40 mashq
{
    function findMiddleNumber(arr) {
        const length = arr.length;
        const midIndex = Math.floor(length / 2);
    
        if (length % 2 === 0) {
            return (arr[midIndex - 1] + arr[midIndex]) / 2;
        } else {
            return arr[midIndex];
        }
    }
    
    console.log(findMiddleNumber([1, 2, 3, 4, 5]));
}

// 42 mashq
{
    function createLengthObject(arr) {
        const result = {};
        arr.forEach(item => {
            result[item] = item.length;
        });
        return result;
    }
    
    const inputArray = ["text", "world", "laptop"];
    const outputObject = createLengthObject(inputArray);
    console.log(outputObject);
    
}

// 51 mashq
{
    function findMiddleNumber(arr) {
        const length = arr.length;
        const midIndex = Math.floor(length / 2);
    
        if (length % 2 === 0) {
            return (arr[midIndex - 1] + arr[midIndex]) / 2;
        } else {
            return arr[midIndex];
        }
    }
    
    const inputArray1 = [1, 2, 3, 4, 5];
    const middleNumber1 = findMiddleNumber(inputArray1);
    console.log(middleNumber1);
}

// misc
const output = document.getElementById('output')
function showImg(){
    output.style.width = "450px"
}
function closeImg(){
    output.style.width = "0"
}
