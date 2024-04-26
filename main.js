let nameString = "Julio";    //string

let rank = "No Rank";    //string

let age = 88;    //Number

if (age < 18) {
    console.log("You are too young for the military!");
} else if(nameString === "Rugen" && rank === "Count") {     //Name: "Rugen", Rank: "Count"
    console.log("My name is Inigo Montoya, you killed my father, prepare to die.");
} else if (rank === "Captian") {    //has to be equal to Captian
    console.log(`Aye Aye ${rank}`);
} else if (rank === "Private" && age > 40) {    //has to be equal to "Private" and be older than 40.
    console.log(`What have you been doing with your life ${nameString}?`);
}else {
    console.log(`Hello ${rank} ${nameString}, I cannot wait to celebrate your ${age + 1}th birthday next year!`);
}