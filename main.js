
//Javascript: Loop and interators

let people= [
    {
        "id": 1,
        "name": "Perl Felderer",
        "birthdate": new Date("2/1/1967"),
        "children": 3,
        "country": "China",
        "can_program": true
      },
      {
        "id": 2,
        "name": "Kimberley McGaw",
        "birthdate": new Date("8/14/1982"),
        "children": 1,
        "country": "Sweden",
        "can_program": true
      },
      {
        "id": 3,
        "name": "Caria Castiblanco",
        "birthdate": new Date("11/30/1961"),
        "children": 1,
        "country": "Myanmar",
        "can_program": true
      },
      {
        "id": 4,
        "name": "Joete Mullen",
        "birthdate": new Date("10/6/1987"),
        "children": 4,
        "country": "Argentina",
        "can_program": false
      },
      {
        "id": 5,
        "name": "Isidore Oxley",
        "birthdate": new Date("12/10/1985"),
        "children": 1,
        "country": "Russia",
        "can_program": false
      },
      {
        "id": 6,
        "name": "Isabeau Gillani",
        "birthdate": new Date("2/21/2004"),
        "children": 5,
        "country": "Russia",
        "can_program": false
      },
      {
        "id": 7,
        "name": "Isacco Willis",
        "birthdate": new Date("5/26/1966"),
        "children": 2,
        "country": "China",
        "can_program": true
      },
      {
        "id": 8,
        "name": "Marabel Errey",
        "birthdate": new Date("3/11/1958"),
        "children": 3,
        "country": "Czech Republic",
        "can_program": true
      },
      {
        "id": 9,
        "name": "Jacquie McKeggie",
        "birthdate": new Date("2/13/1998"),
        "children": 1,
        "country": "China",
        "can_program": false
      },
      {
        "id": 10,
        "name": "Bealle Edgeon",
        "birthdate": new Date("2/15/1968"),
        "children": 5,
        "country": "Canada",
        "can_program": true
      }
]

//Finding out how many children all ofthe people in the list have combined 
let sum = 0;
for (let i =0;i<people.length;i++) {
  sum += people[i].children;
}
console.log("Total number of all children on the list: " +sum);




//Here I found name and age
//I used this to transform the birthdate into age = https://www.w3schools.com/jsref/jsref_getfullyear.asp
for(let i =0;i<people.length;i++){
const d = people[i].birthdate
let year = d.getFullYear(); //When I put this I got the year that they were born in 
console.log("Name: " +people[i].name + " Age: " +(2022 - year)) //To get the age I said the year now subtracted from the year they were born in 
} 




//Here's I made a list of all the people/objects in the array
for(let i =0;i<people.length;i++){
  console.log("Name: " +people[i].name);
  console.log("Birthdate: " +people[i].birthdate.toDateString()); //toDateString removed some extra information that appeared when I did the age in the example above
  console.log("Children: " +people[i].children);
  console.log("Country: " +people[i].country);
  console.log("Can program: " +people[i].can_program);
}

