const symbols = ["🍒", "🍋", "🔔", "⭐", "7️⃣"];

function spin() {
  const reel1 = document.getElementById("reel1");
  const reel2 = document.getElementById("reel2");
  const reel3 = document.getElementById("reel3");

  const rand1 = symbols[Math.floor(Math.random() * symbols.length)];
  const rand2 = symbols[Math.floor(Math.random() * symbols.length)];
  const rand3 = symbols[Math.floor(Math.random() * symbols.length)];

  reel1.textContent = rand1;
  reel2.textContent = rand2;
  reel3.textContent = rand3;

  const result = document.getElementById("result");
  if (rand1 === rand2 && rand2 === rand3) {
    result.textContent = "🎉 You Win!";
  } else {
    result.textContent = "Try Again!";
  }
}
