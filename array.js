// const nisha=[1,2,3,'hii',"nisah"];
// console.log(nisha[0]);
// console.log(nisha[2]);
//shallow copies example

// const nisha=["hello",{ list:["hii","bye","k xa"]}]
// console.log(nisha);

//shallow copy garni bhaneko array ma bhako obj ko ho, here list bhaneko nested properties
// ani two object are shallow copies if they are not the same obj,   dui ota objects have the same name in the same order, values od the properties are equal
// const lmc =Array.from(nisha);
// console.log(lmc);
// console.log(lmc);
//yeti garesi nisha bhanni array obj bata lmc bhanni object banauxa by copying

//aba nested properties lai hamlay reassign garxam ani that will be visible in both object

// lmc[1].list=["sanvi","dhakal"];
// console.log(lmc)
// console.log(nisha)
//20,21 dubai ko output same hunxa because nested properities ma change garda original ra copied ma change aauxa -----[ 'hello', { list: [ 'sanvi', 'dhakal' ] } ]

//aba we will be doing or changing the top properties i.e index 0 ani that

// lmc[0]="ma nisha ho la ";
// console.log(lmc);//[ 'ma niha ho la ', { list: [ 'sanvi', 'dhakal' ] } ] --copied

// console.log(nisha );//[ 'hello', { list: [ 'sanvi', 'dhakal' ] } ]  --original

// const bhai=[1,2,3,4,5,6]
// const dai= new Array(10,22,34,56);// yo ma we dont have to give [] this bracket
// console.log(dai);
// console.log(bhai);
// bhai.push(1000);
// console.log(bhai)//[ 1, 2,    3, 4,  5, 6, 1000] ]---output
// bhai.pop();
// console.log(bhai);//last ko element remove hunca
// bhai.unshift(50000);//yo methos le jahilay pani array ko first index ma value add garxa ani yo le computer ma dheati workload aauna sakxa so its is not wise to use it .
// bhai.shift();// yo le first ko array element lai pop garni kaam garxa
// console.log(bhai);

//ani array ma we can check if tyo wwla element ttya parxa ki pardaina bhanera ani eg, includes(), indexOf()

// console.log(bhai.includes(1000));//gives value in boolean
// console.log(bhai.includes(1));//gives value in boolean
// console.log(bhai.indexOf(1000));// that means 1000 bhanni value bhai bhanni array ma bhaya kati index ma xa bhnxa if array ma pardaina bhaya ans -1 dinxA
// console.log(bhai.indexOf(1));

// join method pani xa
// const nayaArray=bhai.join();
// console.log(nayaArray);//output 1,2,3,4,5,6  here output aayo string mo form ma
// console.log(typeof nayaArray)// output string
// console.log(bhai);//output [ 1, 2, 3, 4, 5, 6 ]--yo ta array nai halyo

//aba slice and splice

// const hello=[1,2,3,'a',"nisha "]
// // console.log(hello)
// const naya=hello.slice(0,3)
// console.log("modify bhako wala array is ",naya)
// console.log(hello);
// // console.log(naya);//[ 1, 2, 3 ]---output, yo ma staritng index i.e 0 lai consider garyo tara index 3 ko lai logdaina
// const naya1=hello.splice(0,3)
// // console.log("main array",hello)
// console.log(naya1);
// console.log(hello);

//yo dui ota bich ma major difference is array manipulation ho
//slice : It creates a new array containing selected elements from the original.without disturbing the original

//splice :It modifies the original array by adding, removing, or replacing elements.

// -----------------------------------------------
//video 2 of array, array bhitra arko array rakhera concat, push ,pop menthos you can try

//sprad operator
const bhaat = [1, 2, 3, ["a", "b", "c"]];
const daal = [100, 101, 102, 103];
// bhaat.push(daal);
// console.log(bhaat);//[ 1, 2, 3, [ 'a', 'b', 'c' ], [ 100, 101, 102, 103 ] ]

// console.log(bhaat.concat(daal))
// console.log(bhaat)
// console.log(bhaat.push(daal))
// // console.log(bhaat);//[ 1, 2, 3, [ 'a', 'b', 'c' ], [ 100, 101, 102, 103 ] ]
// console.log(bhaat)//[ 1, 2, 3, [ 'a', 'b', 'c' ], [ 100, 101, 102, 103 ] ]   push garesi array modify hunxa tara concat garesi hunna 
// console.log(bhaat[4][3])//yo bhaneko bhat forth index  ma bhako element ko pani third index ko vlaue 

//ani array spread garna ko lahi we can do the following 
const naya3=[...bhaat,...daal]
console.log(naya3)
//this mehtodd id  more likely used by others like we have the previlage of adding three or more matrixes in the main array but in case of concat and push ko bela normally main array nai modify hunxa 
//hello
//adding tara bhako xaina 
// i am tired
