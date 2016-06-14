function  Pulse_Sample(){
  // Serial Port
  var SerialPort = require("serialport").SerialPort;
  var serialPort = new SerialPort("COM3", {
    baudrate: 9600
  }, false); // this is the openImmediately flag [default is true]

  // serial port Emitter
  var SPEventEmitter = require('events').EventEmitter;
  var SPEvent = new SPEventEmitter();

  var serialNum = new Buffer([0x20,0x31]);
  var startSample = new Buffer([0x20,0x32]);
  var stopSample = new Buffer([0x20,0x33]);
  var magnification = new Buffer([0x20,0x34]);
  var baseline = new Buffer([0x20,0x35]);
  var frequence = new Buffer([0x20,0x37]);

  // open serial port
  SPEvent.on('open', function(){
    serialPort.open(function (error) {
      if ( error ) {
        console.warn('Failed to open: '+ error);
      } else {
        console.log('Succeed opening the serial Port!');
      }
    });
  });

  SPEvent.on('start',function(){
    // tx data event
    serialPort.write(startSample, function(error) {
      if(error){
        console.warn('error: ' + error);
      }
      else{
        console.log('Succeed starting the serial Port!');
      }
    });
  });

  SPEvent.on('stop',function(){
    serialPort.write(stopSample, function(error) {
      if(error){
        console.warn('error: ' + error);
      }
      else{
        console.log('Succeed stoping the serial Port!');
      }
    });
  });

  SPEvent.on('close',function(){
    serialPort.close(function(error) {
      if(error){
        console.warn('error: ' + error);
      }
      else{
        console.log('Succeed closing the serial Port!');
      }
    });
  });

  //this.data = new Buffer([0x00]);
  // receive
  var pulseData = new Buffer(1);
  serialPort.on('data', function(data) {
    pulseData = data[data.length-1];
  });

  serialPort.on('disconnect', function(){
    console.log('The serial Port is disconnected!');
  });

  this.getData = function(){
    return pulseData;
  };
  this.cmd = function(command) {
    switch(command)
    {
      case "open":
        SPEvent.emit('open');   break;
      case "start":
        SPEvent.emit('start');   break;
      case "stop":
        SPEvent.emit('stop');   break;
      case "close":
        SPEvent.emit('close');   break;
      default:
        console.log("Please input a command:");
    }
  }
}

module.exports = Pulse_Sample;
