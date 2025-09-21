
//Grade Calculator

function calculateGrade(score)
{
if ( score < 60 ) return "F";
if ( score < 70 ) return "D";
if ( score < 80 ) return "C";
if ( score < 90 ) return "B";
return "A";
}

let base_number = 2;

let score = base_number * 10 + 5;

console.log("Score: ", score);
console.log("Grade: ",calculateGrade(score));

//Star Pattern

function showStars(rows)
{
    let base = rows + 2;
    for (let i = 1; i <= base; i++)
    {
    console.log("*".repeat(i));
    }
}
showStars(base_number);

//Prime Number Checker

function isPrime(n)
{
    let num = n + 10;
    
    if ( num < 2 )
    {
        console.log("Not Prime");
        return;
    }

    for (let i = 2; i < num; i++ )
    {
        if ( num % i === 0 )
        {
            console.log("Not Prime");
            return;
        }
    }

    console.log("Prime");
}
isPrime(base_number);


//Multiplication Table

function multiplicationTable(n)
{
    let table = n;
    for ( let i = 1; i <= 10; i++ )
    {
        console.log(`${n} * ${i} = ${n * i}`,);
    }

}
multiplicationTable(base_number);