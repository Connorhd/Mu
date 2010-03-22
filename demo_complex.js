var sys = require('sys');
var Mu = require('./lib/mu');

Mu.templateRoot = './examples';

var numbers = 20;

var ctx = {
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
};

sys.puts("Outputting examples/demo_complex.html.mu with a chunkSize of 10\n");

Mu.compile('demo_complex.html', function (e, c) { sys.puts(c.toString()) });

Mu.render('demo_complex.html', ctx, {chunkSize: 10}, function (err, output) {
  if (err) {
    throw err;
  }
  
  var buffer = '';
  
  output
    .addListener('data', function (c) {
      sys.print(c); // output chunk
    })
    .addListener('end', function () { sys.puts("\n\nDONE"); });
});
