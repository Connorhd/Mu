{
  seq: "Fibonacci",
  num: numbers,
  seqNos: {
    forEach: function (callback) {
      var a = 1;
      var b = 1;
      var count = 0;
      while (count < numbers) {
        callback({index: (count+1), value: a});
        var c = b;
        b = a + b;
        a = c;
        count++;
      }
    }
  }
}

