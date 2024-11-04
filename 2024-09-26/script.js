const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

ctx.translate(canvas.width / 2, canvas.height / 2);

ctx.rotate(0.1745);

ctx.translate(-canvas.width / 2, -canvas.height / 2);

ctx.font = '30px Arial';
ctx.fillStyle = '#000000';
ctx.textAlign = 'center';
ctx.fillText('쌈뽕한 카메라 아이콘', canvas.width / 2, 50);

ctx.fillStyle = '#5650FF';
const gradient = ctx.createLinearGradient(0, 0, 400, 400);
gradient.addColorStop(0, '#5650FF');
gradient.addColorStop(0.5, '#fff');
gradient.addColorStop(1, '#5650FF');
ctx.fillStyle = gradient;
ctx.beginPath();
ctx.moveTo(50, 100);
ctx.lineTo(350, 100);
ctx.quadraticCurveTo(380, 100, 380, 130);
ctx.lineTo(380, 270);
ctx.quadraticCurveTo(380, 300, 350, 300);
ctx.lineTo(50, 300);
ctx.quadraticCurveTo(20, 300, 20, 270);
ctx.lineTo(20, 130);
ctx.quadraticCurveTo(20, 100, 50, 100);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.arc(200, 200, 70, 0, 2 * Math.PI);
ctx.fillStyle = '#ffffff';
ctx.fill();

ctx.beginPath();
ctx.arc(200, 200, 50, 0, 2 * Math.PI);
ctx.fillStyle = '#879BE4'; 
ctx.fill();

ctx.beginPath();
ctx.arc(300, 130, 15, 0, 2 * Math.PI);
ctx.fillStyle = '#ffffff';
ctx.fill();
