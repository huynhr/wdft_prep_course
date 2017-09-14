/*
Exercise #1
Create a for loop that prints out the numbers 1 to 100 in the console.
*/

for(var i = 1; i <=100; i++) {
    console.log(i);
}

/*
Exercise #2
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/
var hash = '#';

for(var i = 1; i <=7; i++) {
    console.log(hash);
    hash+= '#'
}


function fizzBuzz() {
    for(var i = 1; i <=100; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if(i % 3 === 0) {
            console.log('fizz');
        } else if(i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();

// input: 
// output: an 8 * 8 grid line where it starts with #space# so # # # # 

function checkersBoard() {
    // printing the row
    // printing the column
    // printing '#' 
    // printing ' '
    // each time there's a new line, the first char is either a ' ' or a '#'
    // pritning the rows
    var pyramid = '\n';
    for(var i = 1; i <=8; i++) {
        // we need to print the column now 
        if(i % 2 !== 0) {
            for(var j = 1; j <=4; j++) {
                pyramid += '# ';
            }
        } else {
            for(var k = 1; k <=4; k++) {
                pyramid += ' #';
            }
        }
        
        pyramid += '\n'
    }
   return pyramid;
}

checkersBoard();