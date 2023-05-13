const alarm = (time) =>{
  if(time === Number(time) && time >= 0){
    setTimeout(() => {
      process.stdout.write('\x07');
    },time * 1000);
  }else{
    process.stdout.write('NaN')
  }
};
alarm(10);
alarm(3);
alarm(5);
