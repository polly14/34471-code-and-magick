'use strict';

window.renderStatistics = function (ctx, names, times) {
  
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  
  ctx.beginPath();
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.moveTo(100, 10);
  ctx.lineTo(520, 10);
  ctx.lineTo(520, 280);
  ctx.lineTo(100, 280);
  ctx.lineTo(100, 10);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.7)';
  
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';

  ctx.fillText('Ура вы победили!', 120, 30);
  ctx.fillText('Список результатов:', 120, 50);
   
  var max = times[0];       
  var histoY = 250;
  var histoX = 140;
  var columnWidth = 90;
  var widthRect = 40;
  var beginRect;
  var colorRect;
  var heightInPx = 150;
  
  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];
        
    if(times[i] > max) {
      max = times[i];
    }
    
    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    else {
      ctx.fillStyle = ['rgba(0, 0,', ((Math.random() * 5) * 50).toFixed(0), ',' , (Math.random()).toFixed(1), ')' ].join('');
    }
    
    if(times[i] === max) {
        heightInPx = 150;
    }
    else {
        heightInPx = times[i] * 150 / max;
    }
    
    ctx.fillRect(histoX + i * columnWidth, histoY, 40, -heightInPx );
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText(name, histoX + i * columnWidth, histoY + 10 );
    
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText(Math.round(time), histoX + i * columnWidth, histoY - heightInPx - 20);
   
  }
  
};

var canvas = document.querySelector('canvas');
