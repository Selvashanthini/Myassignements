
var a="Hello world";
var b=a.substring(6,11);
console.log(b.length);
console.log(b);
 
let s1="Listen";
let s2="Silent";
 
if(s1.length !==s2.length){
 console.log("Not anagrams");
return false;
}
 
let str1=s1.toLowerCase().split("").sort().join("");
console.log(str1);
let str2=s2.toLowerCase().split("").sort().join("");
console.log(str2);
 
  if(str1==str2){
    console.log("it is anagram");
  }
  else {
  console.log("not an anagram");
   }
 
   
 
let s = "   fly me   to   the moon  ";
let strsize = s.split(" ");
 
for (let size = strsize.length - 1; size >= 0; size--) {
 
    if ((strsize[size].length) > 0) {
        console.log(strsize[size] + " => " + strsize[size].length);
        break;
    }
 
}