function takeANumber(line, name) {
        line.push(name);
 return `Welcome, ${name}. You are number ${line.length} in line.`;
}
  
 

function nowServing(line) {
var str = line[0];
 if (line.length === 0) {
    return `There is nobody waiting to be served!`;
} else {
   line.shift();
   return `Currently serving ${str}.`;
}
}
 
 
function currentLine(katzDeliLine) {
for (var i = 0; i > 0; i++) {
      console.log("The line is currently:" + i + 1 + "." + katzDeliLine[i]);
}
}

