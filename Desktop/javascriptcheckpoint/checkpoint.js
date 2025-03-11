//1
function strReverse(str) {
    return str.split("").reverse().join("");
  }
  console.log( strReverse("amalmansour"))

//2 1ere solution 
  var str = "bonjour mes amis je m'apelle amal ";

var count = 0;

for (var i = 0; i < str.length; i++) {

    count++;

}

console.log(count); 
//2 2eme solution 
var str = "bonjour mes amis je m'apelle amal ";

console.log(str.length); 

//3 
function capitalizeWords(sentence) {
    return sentence.split(" ") // Diviser la phrase en mots
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Mettre en majuscule la première lettre de chaque mot
      .join(" "); // Rejoindre les mots pour reformer une phrase
  }
  
  console.log(capitalizeWords("hello mes amis je suis la "));
 
  

  //2eme exercice 
  function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
  }
  
  // Test cases
  console.log(minMax([1, 2, 3, 4, 5]));
  console.log(minMax([0, 9, 16, 3, 1]));//


  //2
  function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  
  // Exemples de tests
  console.log(sumArray([7, 3, 3, 4, 5])); 

  //3
  function filterArray(arr, condition) {
    return arr.filter(condition);
  }
  
  // Test cases
  console.log(filterArray([1, 2, 3, 4, 5], num => num <2)); 


  //factoriel solution 1 
  function factorial(n) {
    if (n === 0 || n === 1) return 1; // Base case: 0! and 1! are both 1
    return n * factorial(n - 1); // Recursive call
  }
  
  // Test cases
  console.log(factorial(8));
  // factoriel solution 2 
  function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  // Test cases
  console.log(factorial(8));
  
  //nombre premier 
  function premier(num) {
    if (num <= 1) return false; // Les nombres inférieurs ou égaux à 1 ne sont pas premiers
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false; // Si un diviseur est trouvé, le nombre n'est pas premier
      }
    }
    return true; // Si aucun diviseur n'est trouvé, le nombre est premier
  }
  console.log(premier(3));

  //fibonacci 
  function generateFibonacci(numTerms) {
    let fibonacci = [0, 1]; // Les deux premiers termes de la séquence
  
    // Génère les termes suivants jusqu'à `numTerms`
    for (let i = 2; i < numTerms; i++) {
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]); // Ajouter la somme des deux derniers termes
    }
  
    return fibonacci;
  }
  
  // Exemples de tests
  console.log(generateFibonacci(10));