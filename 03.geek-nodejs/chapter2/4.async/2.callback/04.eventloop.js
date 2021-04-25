const eventLoop = {
  queue: [],
  timeoutqueue: [],
  fsqueue: [],

  loop() {
    while (this.queue.length) {
      const callback = this.queue.shift();
      callback();
    }
    this.fsqueue.forEach(callback => {
      if (done) {
        callback();
      }
    });
    setTimeout(this.loop.bind(this), 50);
  },
  add(callback) {
    this.queue.push(callback);
  }
}

eventLoop.loop();

setTimeout(() => {
  eventLoop.add(function () {
    console.log(1);
  })
}, 500);
setTimeout(() => {
  eventLoop.add(function () {
    console.log(2);
  })
}, 800);