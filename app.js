function generatePattern() {
      const num = parseInt(document.getElementById("numberInput").value);
      let result = "";

      for (let i = 1; i <= num; i++) {
        result += "*".repeat(i) + "\n";
      }

      document.getElementById("output").textContent = result;
    }