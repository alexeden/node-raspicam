import { Raspicam } from '../dist/raspicam';

const now = new Date();

const camera = Raspicam.create({
  mode: 'video',
  filepath: './video',
  filename: `video-${now.toLocaleDateString()}-${now.toLocaleTimeString().replace(/:/g, '-')}.h264`,
  // encoding: 'jpg',
  rotation: 180,
  // width: 3000,
  timeout: 10000 // take the picture immediately
});

let startTime = 0;

camera.on('start', function( err, timestamp ){
  startTime = timestamp;
  console.log('photo started at ' + timestamp );
});

camera.on('read', function( err, timestamp, filename ){
  console.log('photo image captured with filename: ' + filename );
});

camera.on('exit', function( timestamp, ...args: any[] ){
  console.log('stopping camera');
  console.log('photo child process has exited at ' + timestamp );
  console.log('total time: ', (timestamp - startTime)/1000);
  camera.stop();
});

camera.start();
