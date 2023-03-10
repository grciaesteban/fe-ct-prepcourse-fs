/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arr = [];
   let arr2 = [];
    for(var prop in objeto){
      arr2.push(prop,objeto[prop])
      if(arr2.length<3){
        arr.push(arr2);
        arr2=[]};
}
return arr;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let result = {};
   let palabra = string.split("");
   let arr = palabra.sort();
   let newStr = arr.join("");

   for(let i = 0; i < newStr.length; i++){
      if(result[newStr[i]]){
         result[newStr[i]]++;     
       }else{
         result[newStr[i]]=1;
       }
   }
   return result;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let arr = string.split("");
   let array = [];
   let array2 = [];
   for(let i = 0; i < arr.length; i++){
     if(arr[i]===arr[i].toUpperCase()){
       array.push(arr[i])
     }else if(arr[i]===arr[i].toLowerCase()){
       array2.push(arr[i])
     }
   }
   let arrFinal = array.concat(array2);
   let palabra = arrFinal.join("");
   return palabra;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let str = "";
   let num = numero.toString();
   for(let i = num.length - 1; i >= 0; i--){
      str += num[i]
   }
   if(num===str){
      return "Es capicua";
   }else{
      return "No es capicua";
   }
   
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let arr = string.split("");
   let newArr = arr.filter((elemento)=>elemento!=="a"&&elemento!=="b"&&elemento!=="c")
   let palabra = newArr.join("")
   return palabra;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort((a,b)=>(a.length-b.length));
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let newArr = [];
   for(let i = 0; i < array1.length; i++){
      for(let j = 0; j < array2.length; i++){
         if(array1[i]===array2[j]){
            newArr.push(array1[i]);
         }
      }
   }
   return newArr
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
