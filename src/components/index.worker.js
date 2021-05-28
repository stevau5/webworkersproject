onmessage = (e) => {
    let sum = 0
    console.log('starting calculation');
    for (let i = 0; i < 10000000000; i++) {
        sum += i        
      }
      console.log('sending response back');
      self.postMessage(sum);
}