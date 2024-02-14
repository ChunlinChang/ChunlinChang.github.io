var page = "page1";

function change1(){
  page = "page1";
  clearWeightPlates()
  document.body.style.backgroundColor  = "rgb(193, 215, 165)";
  document.getElementById("textarea").style.backgroundColor= "rgb(193, 215, 165)";
  document.getElementById("timerarea").style.backgroundColor= "rgb(193, 215, 165)";
  document.getElementById("POWERLIFTING").style.backgroundColor= "rgba(15, 255, 43, 0.217)";
  document.getElementById("PARA").style.backgroundColor= "rgb(81, 101, 49)";
  document.getElementById("kg").value = "";
}

function change2(){
  page = "page2";
  clearWeightPlates()
  document.body.style.backgroundColor  = "rgb(215, 215, 165)";
  document.getElementById("textarea").style.backgroundColor= "rgb(215, 215, 165)";
  document.getElementById("timerarea").style.backgroundColor= "rgb(215, 215, 165)";
  document.getElementById("POWERLIFTING").style.backgroundColor= "rgb(81, 101, 49)";
  document.getElementById("PARA").style.backgroundColor= "rgba(15, 255, 43, 0.217)";
  document.getElementById("kg").value = "";
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
let targetDate;
let intervalId; // 增加 intervalId 以儲存 setInterval 的 ID

// 更新顯示
function updateDisplay() {
  if (intervalId) {
    clearInterval(intervalId);
  }
  const userInput = document.getElementById('countdownInput').value;
  document.getElementById('countdown').style.color = "rgb(0, 4, 130)";

  // 檢查使用者輸入是否有效
  if (userInput && !isNaN(userInput) && userInput >= 0) {
    // 直接顯示使用者輸入的數字，轉換為 MM:SS 格式
    const minutes = Math.floor(userInput / 60);
    const seconds = userInput % 60;
    document.getElementById('countdown').innerHTML = `${formatDigits(minutes)}:${formatDigits(seconds)}`;
  } else {
    alert('請輸入有效的秒數！');
  }
}

// 開始倒數計時
function startCountdown() {
  const userInput = document.getElementById('countdownInput').value;
  document.getElementById('countdown').style.color = "rgb(0, 4, 130)";
  // 檢查使用者輸入是否有效
  if (userInput && !isNaN(userInput) && userInput >= 0) {
    // 設定倒數計時的目標時間（以毫秒為單位）
    targetDate = new Date().getTime() + userInput * 1000;

    // 如果之前有啟動過計時器，先清除掉
    if (intervalId) {
      clearInterval(intervalId);
    }

    // 啟動倒數計時器
    intervalId = setInterval(updateCountdown, 1); // 調整為每 1 毫秒更新一次
  } else {
    alert('請輸入有效的秒數！');
  }
}

// 更新倒數計時器的顯示
function updateCountdown() {
  const currentDate = new Date().getTime();
  const timeDifference = targetDate - currentDate;

  const totalSeconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  // 顯示 MM:SS 格式的時間
  const formattedTime = `${formatDigits(minutes)}:${formatDigits(seconds)}`;
  document.getElementById('countdown').innerHTML = formattedTime;

  // 如果倒數計時結束，可以在這裡執行相應的動作
  if (timeDifference < 0) {
    document.getElementById('countdown').innerHTML = "時間到!";
    document.getElementById('countdown').style.color = "rgb(158, 20, 20)";
    // 在這裡執行其他相應的動作
    clearInterval(intervalId); // 倒數結束後停止更新
  }
}

// 輔助函式：將數字轉換為兩位數，不足的部分補零
function formatDigits(value, digits = 2) {
  return value.toString().padStart(digits, '0');
}





  