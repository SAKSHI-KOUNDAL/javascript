// # JS Def
// js is scripting language that is used to build dynamic websites or for dynamic programming
// we can divide are code into diff files and we can combine them by importing them into parent file according to need called modularity 

// # VARIABLES
// * VAR has global and functional scope  can be redecleare and overwrite.
// * VAR has global and functional scope  can be redecleare and overwrite.  VAR KEYWORDS ARE defi e wit undefine value in memroy called hoisting

// * LET has functional scope can't be redecleare but overwrite.
// * LET has functional scope can't be redecleare but overwrite.  temporar dead zone means if access it before initiallization then we will get referance error 

// * CONST has functional scope can't be overwrite and redecleare. 

// @@ -17,7 +18,7 @@ non premitive obj array
// * Number,String,BigInt,Boolean,Symbol,Object,undefine,null
// * object has keys and values

// # OBJECT METHODS
// # string METHODS
// LET STR="SAHIL"
// * STR[2] WILL GIVE THE CHAR AT 2 INDEX

// * CharAt[2] 
//  1. will give the char at index 2
//  2. The index starts at 0 for the first character in the string. 
//     Negative indices are not supported
// 3.  Returns the character at the specified index as a new string. 
//     If the index is out of range (less than 0 or greater than or equal to the string's length), an empty string "" is returned.
// 4.  returns new string
// * str.Substring(2,5) 
// 1. substring returns new string.
// 2. Accepts two arguments, the start index and the end index. 
//    If the start index is greater than the end index, substring swaps the two arguments.
// 3. Treats negative arguments as if they were 0.
// 4. Returns the extracted substring
// * str.slice(2,6)  
// 1. slice: Also accepts two arguments, the start index and the end index. 
//    If the start index is greater than the end index, slice returns an empty string or array.
// 2. Allows negative arguments, which are treated as length + negativeIndex. 
//    Negative indices count from the end of the string or array.
// 3. Returns new array.
// 4. Neither substring nor slice modify the original string or array.
// * str.indexOF()
// 1. Used to find the index of the first occurrence of a specified value (substring or character) within a string.
// 2. string.indexOf(searchValue, startIndex), where string is the string to search within, searchValue is the value to search for,
//    and startIndex is an optional parameter specifying the index at which to start the search (default is 0).
// 3. Returns the index of the first occurrence of searchValue within string, or -1 if searchValue is not found.
// 4. Commonly used to check if a string contains a specific substring or to find the position of a character within a string.
                  
//                    let str = "Hello, World!";
//                    console.log(str.indexOf("o")); // 4 (index of the first 'o' in the string)
//                    console.log(str.indexOf("l", 3)); // 3 (index of the first 'l' starting from index 3)
//                    console.log(str.indexOf("x")); // -1 (search value not found)
// 5. There are other methods similar to indexOf, 
// such as lastIndexOf, which returns the index of the last occurrence of a specified value, 
// and includes, which returns true if the string contains a specified value.
// * difference
// indexOf:
// 1. The indexOf method returns the index of the first occurrence of a specified value (substring or character) within a string.
// 2. If the value is not found, it returns -1.
// 3. You can also specify a starting index from which the search should begin.
// lastIndexOf:
// 1. The lastIndexOf method returns the index of the last occurrence of a specified value (substring or character) within a string.
// 2. If the value is not found, it returns -1.
// 3. Like indexOf, you can specify a starting index, but the search for the last occurrence begins from the end of the string.
// * str.split(" ")
// 1. This method is used to split  a string into an array of substrings based on a specified separator ex:- space,symbol,char etc
// 2. returns array of strings and original string remains unchanged
// 3.     string.split(separator, limit);
// 4.     separator can be anything  and limit is defined if we want array of string till some substrings ex:- 
       
//        ex:-       let str = "apple,banana,orange,grape,mango";
//                   let fruits = str.split(",", 3);
//                   console.log(fruits); // ["apple", "banana", "orange"]
//        ex:-     let words = str.split(",", 1);
//                 console.log(words); // ["apple"]
//       ex:-      let allFruits = str.split(",");
//                 console.log(allFruits); // ["apple", "banana", "orange", "grape", "mango"]
// * str.join(" ") 
// 1. The join() method in JavaScript is used to join all elements of an array into a single string.
// 2. It takes an optional parameter, separator, which specifies how to separate the elements in the resulting string.
// 3. If no separator is provided, the elements are joined with a comma by default.

// * ToUpperCase()
// let st="  HeLlo guys guys";
// console.log(st.toUpperCase());

// * ToLowerCase()
// console.log(st.toLowerCase());

// * trim()
// console.log(st.trim()); // remvoes the space from start to end 
// console.log(st.trimStart()) // removes the space from start
// console.log(st.trimEnd()) // removes the space ffrom end 
// console.log(st.replace("guys","dosto")) // replaces the first word with last word and if we have multiple same substrings then it will replace with the first one

// react
// cors