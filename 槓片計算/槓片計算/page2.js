function updateWeightPlates() {
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