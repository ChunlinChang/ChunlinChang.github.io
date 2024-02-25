var page = "page1";

function change1(){
  page = "page1";
  clearWeightPlates()
  document.body.style.backgroundColor  = "rgb(193, 215, 165)";
  document.getElementById("textarea").style.backgroundColor= "rgb(193, 215, 165)";
  document.getElementById("timerarea").style.backgroundColor= "rgb(193, 215, 165)";
  document.getElementById("POWERLIFTING").style.backgroundColor= "rgba(15, 255, 43, 0.217)";
  document.getElementById("PARA").style.backgroundColor= "rgb(81, 101, 49)";
  document.getElementById("kg").value = "25";
}

function change2(){
  page = "page2";
  clearWeightPlates()
  document.body.style.backgroundColor  = "rgb(215, 215, 165)";
  document.getElementById("textarea").style.backgroundColor= "rgb(215, 215, 165)";
  document.getElementById("timerarea").style.backgroundColor= "rgb(215, 215, 165)";
  document.getElementById("POWERLIFTING").style.backgroundColor= "rgb(81, 101, 49)";
  document.getElementById("PARA").style.backgroundColor= "rgba(15, 255, 43, 0.217)";
  document.getElementById("kg").value = "25";
}

function update() {
  if (page == "page1"){
    updateWeightPlates1()
  }else if(page == "page2"){
    updateWeightPlates2()
  }
}

function updateWeightPlates1() {
    // 獲取輸入框的值
    var totalWeight = document.getElementsByName("totalWeight")[0].value;

    // 清除先前的槓片
    clearWeightPlates();

    // 根據總重量加入相應的槓片
    totalWeight-=25;
    while (totalWeight >= 50) {
      addWeightPlate("a_red_50");
      totalWeight -= 50;
    }

    while (totalWeight >= 40) {
      addWeightPlate("a_blue_40");
      totalWeight -= 40;
    }

    while (totalWeight >= 30) {
      addWeightPlate("a_yell_30");
      totalWeight -= 30;
    }

    while (totalWeight >= 20) {
      addWeightPlate("a_gree_20");
      totalWeight -= 20;
    }

    while (totalWeight >= 10) {
      addWeightPlate("a_white_10");
      totalWeight -= 10;
    }

    while (totalWeight >= 5) {
      addWeightPlate("a_black_5");
      totalWeight -= 5;
    }

    while (totalWeight >= 2.5) {
      addWeightPlate("a_sli_205");
      totalWeight -= 2.5;
    }

    while (totalWeight >= 1) {
      addWeightPlate("a_sli_010");
      totalWeight -= 1;
    }

    while (totalWeight >= 0.5) {
      addWeightPlate("a_sli_050");
      totalWeight -= 0.5;
    }
  }

  function updateWeightPlates2() {
    // 獲取輸入框的值
    var totalWeight = document.getElementsByName("totalWeight")[0].value;

    // 清除先前的槓片
    clearWeightPlates();

    // 根據總重量加入相應的槓片
    totalWeight-=25;
    while (totalWeight >= 50) {
      addWeightPlate("a_red_50");
      totalWeight -= 50;
    }

    while (totalWeight >= 40) {
      addWeightPlate("a_blue_40");
      totalWeight -= 40;
    }

    while (totalWeight >= 30) {
      addWeightPlate("a_yell_30");
      totalWeight -= 30;
    }

    while (totalWeight >= 20) {
      addWeightPlate("a_gree_20");
      totalWeight -= 20;
    }

    while (totalWeight >= 10) {
      addWeightPlate("a_white_10");
      totalWeight -= 10;
    }

    while (totalWeight >= 5) {
      addWeightPlate("a_red_5");
      totalWeight -= 5;
    }

    while (totalWeight >= 4) {
      addWeightPlate("a_blue_4");
      totalWeight -= 4;
    }

    while (totalWeight >= 3) {
      addWeightPlate("a_yell_3");
      totalWeight -= 3;
    }

    while (totalWeight >= 2) {
      addWeightPlate("a_gree_2");
      totalWeight -= 2;
    }

    while (totalWeight >= 1) {
      addWeightPlate("a_white_1");
      totalWeight -= 1;
    }

    while (totalWeight >= 0.5) {
      addWeightPlate("a_sli_05");
      totalWeight -= 0.5;
    }
  }

function clearWeightPlates() {
  // 清除槓片
  var weightPlates = document.querySelectorAll("#a > div:not(.pipe):not(.lock)");
  weightPlates.forEach(function (plate) {
    plate.remove();
  });
}

function addWeightPlate(className) {
  // 創建槓片元素
  var weightPlate = document.createElement("div");
  weightPlate.className = className;

  // 插入槓片元素到相應位置
  var pipe = document.querySelector(".pipe");
  var lock = document.querySelector(".lock");
  pipe.parentNode.insertBefore(weightPlate, lock);
}


// 倒數計時
let targetTime = 0;
let remainingTime = 0;
let intervalId;
let paused = false;
let lastUpdateTime = 0; // 新增一個變數來保存上一次的更新時間

function updateDisplay() {
  if (intervalId) {
    clearInterval(intervalId);
  }

  const userInput = document.getElementById('countdownInput').value;
  document.getElementById('countdown').style.color = "rgb(157, 191, 245)";
  document.getElementById('b2').innerText = '開始';
  clearInterval(intervalId);
  intervalId = null;
  paused = false;
  
  if (userInput && !isNaN(userInput) && userInput >= 0) {
    const minutes = Math.floor(userInput / 60);
    const seconds = userInput % 60;
    document.getElementById('countdown').innerHTML = formatDigits(minutes) + ":" + formatDigits(seconds);
    remainingTime = userInput;
  } else {
    alert('請輸入有效的秒數！');
  }
}

function startPauseCountdown() {
  const userInput = document.getElementById('countdownInput').value;

  if (userInput && !isNaN(userInput) && userInput > 0) {
    if (!intervalId) {
      targetTime = new Date().getTime() + remainingTime * 1000;
      lastUpdateTime = new Date().getTime(); // 記錄開始時間
      intervalId = setInterval(updateCountdown, 10);
      document.getElementById('b2').innerText = '暫停';
    } else {
      clearInterval(intervalId);
      intervalId = null;
      paused = true;
      document.getElementById('b2').innerText = '繼續';
    }
  } else {
    alert('請輸入有效的秒數！');
  }
}

function updateCountdown() {
  const currentDate = new Date().getTime();
  const elapsedMilliseconds = currentDate - lastUpdateTime; // 計算與上次更新的時間差

  remainingTime = Math.max(0, remainingTime - elapsedMilliseconds / 1000); // 補足暫停期間的時間

  if (remainingTime > 0) {
    document.getElementById('countdown').innerHTML = formatTime(remainingTime);
  } else {
    document.getElementById('countdown').innerHTML = "時間到!";
    document.getElementById('countdown').style.color = "rgb(241, 59, 62)";
    clearInterval(intervalId);
    intervalId = null;
  }

  lastUpdateTime = currentDate; // 更新上次更新的時間
}

function resetCountdown() {
  clearInterval(intervalId);
  intervalId = null;
  paused = false;
  document.getElementById('countdown').innerHTML = "00:00";
  document.getElementById('countdown').style.color = "rgb(157, 191, 245)";
  document.getElementById('b2').innerText = '開始';
  document.getElementById('countdownInput').value = 0;
  document.getElementById('kg').value = 25;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60); // 使用 Math.floor 取得整數部分
  return formatDigits(minutes) + ":" + formatDigits(remainingSeconds);
}

function formatDigits(number) {
  return (number < 10) ? "0" + number : number;
}

var p = 0;

function startCompetition() {
  const userInput = document.getElementById('countdownInput').value;

  if (userInput && !isNaN(userInput) && userInput > 0) {
    if(p==0){
      document.getElementById('countdown').style.color = "rgb(157, 191, 245)";
      document.getElementById('b2').innerText = '開始';
      clearInterval(intervalId);
      intervalId = null;
      paused = false;
      p = 1;
      document.getElementById('myheader').style.display = "none";
      document.getElementById('space').style.display = "none";
      document.getElementById('t1').style.display = "none";
      document.getElementById('t2').style.display = "none";
      document.getElementById('kg').style.display = "none";
      document.getElementById('s1').style.display='block';
      document.getElementById('s1').innerHTML="重量"+document.getElementById('kg').value+"KG";
      document.getElementById('buttonbox1').style.display='block';
      document.getElementById('buttonbox2').style.display='none';
      document.getElementById('box').style.display='flex';
      document.getElementById('count').style.display = "none";
      document.getElementById('countdownInput').style.display = "none";
      document.body.style.backgroundColor='rgb(36, 36, 36)';
      document.getElementById('textarea').style.backgroundColor = "rgb(36, 36, 36)";
      document.getElementById('timerarea').style.backgroundColor = "rgb(36, 36, 36)";
      document.getElementById('row1').style.marginLeft = "50px";
      document.getElementById('inputForm').style.marginLeft = "50px";
    }else if(p==1){
      p = 0;
      document.getElementById('myheader').style.display = "block";
      document.getElementById('space').style.display = "block";
      document.getElementById('t1').style.display = "block";
      document.getElementById('t2').style.display = "block";
      document.getElementById('kg').style.display = "block";
      document.getElementById('s1').style.display="none";
      document.getElementById('buttonbox1').style.display='none';
      document.getElementById('buttonbox2').style.display='flex';
      document.getElementById('box').style.display='none';
      document.getElementById('count').style.display = "block";
      document.getElementById('countdownInput').style.display = "block";
      document.getElementById('row1').style.marginLeft = "0px";
      document.getElementById('inputForm').style.marginLeft = "0px";
      if(page == 'page1'){
        document.body.style.backgroundColor  = "rgb(193, 215, 165)";
        document.getElementById("textarea").style.backgroundColor= "rgb(193, 215, 165)";
        document.getElementById("timerarea").style.backgroundColor= "rgb(193, 215, 165)";
      }else if(page == 'page2'){
        document.body.style.backgroundColor  = "rgb(215, 215, 165)";
        document.getElementById("textarea").style.backgroundColor= "rgb(215, 215, 165)";
        document.getElementById("timerarea").style.backgroundColor= "rgb(215, 215, 165)";
      }
    }
  } else {
    alert('請輸入有效的秒數！');
  }
  
}


  