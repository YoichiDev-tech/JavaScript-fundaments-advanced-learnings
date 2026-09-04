/*
par1 = * (stars)
par2 = number of rows
par3 = boolean (pyramid direction :upwards/downwards)
*/
function pyramid(par1, par2, par3) {
    
    let result = "\n";

    if(par3) {
        // normal pyramid
        for (let i = 0; i < par2; i++) {
            
            // par2.length not needed
            let spaces = "".repeat(par2 - i -1);

            let characters = par1.repeat(2 * i + 1);

            result += spaces + characters + "\n";
        }
    } else {
        // inverted pyramid
        for (let i = par2 - 1; i >= 0; i--) {

            let spaces = "".repeat(par2 - i - 1);

            let characters = par1.repeat(2 * i + 1);

            result += spaces + characters + "\n";
        }
    }
    return result;
}

console.log(pyramid("*", 7, false));