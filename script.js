window.onload = function () {
    const scheduledHours = document.getElementById("scheduledHours");
    const ftePercentage = document.getElementById("ftePercentage");
    const calculateBtn = document.getElementById("calculateBtn");
    const clearBtn = document.querySelector("#clearBtn");
    const output = document.getElementById("output");
  
    calculateBtn.addEventListener("click", function () {
      const scheduledHrs = parseFloat(scheduledHours.value);
      const ftePct = parseFloat(ftePercentage.value) / 100;

      if (!scheduledHrs || !ftePct) {
        output.innerHTML = "Please input the values!";
        return;
      }
      const hours = scheduledHrs * ftePct;
      output.innerHTML = `Default Weekly Hours: ${hours.toFixed(2)}`;
    });

    clearBtn.addEventListener("click", function () {
        scheduledHours.value = "";
        ftePercentage.value = "";
        output.innerHTML = "";
    });
  };