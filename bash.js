process.stdout.write('prompt> ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the new line
  if(cmd === "pwd"){
    process.stdout.write(process.cwd());
    process.stdout.write("\nprompt>");
  }
  else{
    process.stdout.write('you typed: ' + cmd);
    process.stdout.write('\nprompt> ');
  }

});
