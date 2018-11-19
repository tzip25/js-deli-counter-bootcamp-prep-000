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
 
 
function currentLine(line) {
for (var i = 0; i < line.length; i++) {
      line.push()
      return `The line is currently: ${i + 1}. ${line[i]}`;
}
}

