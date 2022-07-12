const img = new Image(); 
img.src = './assets/algae_diagram.png';
img.style.maxWidth = '100%';
img.style.height = 'auto';

const imgWrapper = document.createElement('div');
imgWrapper.className = 'img-wrapper';

document.body.append(imgWrapper);

imgWrapper.appendChild(img);