const canvasWrapper = document.createElement('div');
canvasWrapper.className = 'canvas-wrapper';

const canvasElement = document.createElement('canvas');
canvasElement.id = 'canvas';

const img = new Image();
img.src = './assets/algae_diagram.png';
img.id = 'img-algae';

var screenSize = document.body.clientWidth;

document.body.append(img);
document.body.appendChild(canvasWrapper);
canvasWrapper.appendChild(canvasElement);

// Fabric implementation
const imgFabric = new fabric.Image(img);
const canvas = new fabric.Canvas('canvas');

canvas.setDimensions({
  backgroundImage: imgFabric,
  width: imgFabric.width,
  height: imgFabric.height
});
