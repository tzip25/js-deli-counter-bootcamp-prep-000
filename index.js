function takeANumber(line, name) {
        line.push(name);
 return `Welcome, ${name}. You are number ${line.length} in line.`;
}
  
 
 function nowServing(line) {
 
var str = line[0];
 if (line.length === 0) {
    return `There is nobody waiting to be served!`;
} else {
   line.shift(0);
   return `Currently serving ${str}.`;
}
}
 
var newLine = []; 
function currentLine(line) {
for (var i = 0; i < line.length; i++) {
      newLine.push()
}
if (line.length === 0) {
      return `The line is empty.`;
} else {
  return `The line is currently: ${newLine}`;
}
}

