/*
// question one
let name="John";
console.log(name);

let country="Kenya";
console.log(country);

let isMasculine= true||false;
console.log(isMasculine);

// question two
let counter=10;
    ++counter;
    ++counter;
    ++counter;
    ++counter;
    ++counter;
let counter1=(counter*2);
console.log(counter1);

// question 3
let numString="42";
let numValue=(+numString);
let result1=(numValue + 10);
console.log(result1);

// question 4
let x ="5" +3;
console.log(x);
console.log(typeof x);

// question 5
let myString=["cars"];
console.log(myString.length);

// question 6
let lastName="Kelvin";
console.log(typeof lastName);

let pWeight=20;
console.log(typeof pWeight);

let b=true;
console.log(typeof b);

let personDetails={
    firstName: "Daniel",
    lastName: "Kibwana",
    age: 40,
}
console.log(typeof personDetails);

let c="";
console.log(typeof C);

let d=null;
console.log(d);

// question 7
let w=8,
    l=5;
let areaRectangle=w*l;    
console.log(areaRectangle); 

// question 8
let f=37;
let Celcious=(f-32)*5/9
console.log(Celcious);

// question 9
let integer=3;
let Test=2;
let rem=integer%Test;
if (rem==0) {prompt("even number")
} else if (rem==1) {prompt('old number')};

// question 10
let g=5
let h=6
let result2=(g>h);
console.log(result2);

// question 11
let age="+currentage";
let currentYear="+current year";
let yearOfBirth=(currentYear-age);
console.log(yearOfBirth);

// question 12
let t = '+u';
let p= ('+u') + 10;
let z=(String.valueOf(p));
console.log(z);
console.log(p);

// question 13
let text1=firstName="John";
let text2 =otherName="Mwau";
let message="Good Morning!";
let output= message.concat(text1, text2);
console.log(output);

// question 14
let y=5*(3+2)/2;
console.log(y);
*/


//TASK 2
//question 1
let score=prompt('Enter Student Score');
function studentScore(score){
    if(score >=90 && studentScore<=100){
        return score='A';
    }
    else if(score >=80 && studentScore<=89){
        return score='B';
    }
    else if(score >=70 && studentScore<=79){
       return score='C';
    }
    else if(score >=60 && studentScore<=69){
        return score ='D';
    }
    else {
        return score='Fail';
    }
}
alert(prompt();)

//question Two
let year=prompt('Enter Year');
let yearChecker=(year%4);
    if(yearChecker ==0){
        yearChecker='Leap Year';
    }
    else{
        yearChecker='Not a Leap Year';
    }

//question Three
let Temp=19;
let tempMessage;
    if(Temp >=30){
        tempMessage='Hot';
    }
    else if(Temp >=20 && Temp <=29){
        tempMessage='Moderate';
    }
    else{
        tempMessage='Cold';
    }
// Question Four
let message;
let userName= prompt('Enter userName'),
    userPassword=prompt('Enter your password');
        if(userName =='user123'&& userPassword =='password123'){
            message='Login successful'
        }
        else{
            message='Login failed'
        }


// Question Five

let x=prompt('Enter your first number'),
    y=prompt('Enter your second number'),
    outputMessage;

        if(y>x){
            outputMessage=(`${x} is greater than ${y}`)
        }else if(y==x){
            outputMessage=('These two numbers are equal');
        }else{
            outputMessage=('These two numbers are not equal');
        }

// Question Six
let age=prompt('What is your current age?'),
    ageConfirm=confirm('Are you a student?');
        if(age >=18 && ageConfirm ==!true){
            console.log('You are Eligible');
        }else{
            console.log('You are not Eligible');
        }

// Question seven
let voterAge=prompt('What is your age?'),
    citizenshipStatus=confirm('Are you are citizem');
        if(voterAge >=18 && citizenshipStatus ==true){
            console.log('You are eligible to vote');
        }else{
            console.log('You are not eligible to vote')
        }

//Question Eight
let password=prompt('Enter Password');
        if(password.length <8){
            console.log('Weak Password: Password must at least have 8 characters with Special Characters, Uppercase, & Lower case');
        }else if(password.search(/[a-z]/) < 0){
            console.log('Weak Password: Password must contain at least oneLowercase');
        }else if(password.search(/[A-Z]/) < 0){
            console.log('Weak Password: Pasword must contain at least one Uppercase');
        }else if(password.search(/[0-9]/) < 0){
            console.log('Weak Password: Password must contain at least one number');
        }else if(password.search(/[!@#$%^&*()\-+.]/)){
            console.log('Weak Password: Password must contain at least one Special Character');
        }
        else{
            console.log('Strong password')
        }

// Question Nine
let actualBalance=prompt('What is your Available Balance'),
    withdrawalAmount=prompt('How much do you want to withdwal');
        if(withdrawalAmount > actualBalance){
            console.log('You have Insufficient Funds')
        }else{
            console.log('Proceed to Withdraw')
        }
//Question Ten

function personName (firstName){
    console.log('')
}
personName('John'); 