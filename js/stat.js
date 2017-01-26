'use strict';

function maxTime(timeArray) {
  var max = timeArray[0];
  for (var i = 0; i < timeArray.length; i++) {
    if (timeArray[i] > max) {
      max = timeArray[i];
    }
  }
  return max;
}

function drawRect(ctx, timeArray, nameArray, histoY, histoX, columnWidth, widthRect, histoHeight) {
  var maxValue = maxTime(timeArray);
  for (var i = 0; i < timeArray.length; i++) {
    var heightInPx = timeArray[i] * histoHeight / maxValue;
    var beginRect = histoX + i * columnWidth;

    var name = nameArray[i];
    var time = timeArray[i];

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = ['rgba(0, 0,', ((Math.random() * 5) * 50).toFixed(0), ',', (Math.random()).toFixed(1), ')'].join('');
    }
    ctx.fillRect(beginRect, histoY, widthRect, -heightInPx);

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText(name, beginRect, histoY + 10);
    ctx.fillText(Math.round(time), beginRect, histoY - heightInPx - 20);

  }
}

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

  drawRect(ctx, times, names, 250, 140, 90, 40, 150);

};
