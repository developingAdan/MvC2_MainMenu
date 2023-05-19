window.onload = function() {
    var menuItems = document.querySelectorAll('.top_options_circle');
  
    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener('click', function() {
        var menuItemText = this.textContent;
        alert('You clicked ' + menuItemText);
      });
    }
  };
  

  const arcadeTab = document.getElementById("arcadeTab");
  const trainingTab = document.getElementById("trainingTab");
  const vsModeTab = document.getElementById("vsModeTab");
  const optionTab = document.getElementById("optionTab");
  const memoryCardTab = document.getElementById("memoryCardTab");

  const scoreRankingTab = document.getElementById("scoreRankingTab");
  const scoreAttackTab = document.getElementById("scoreAttackTab");
  const secretFactorTab = document.getElementById("secretFactorTab");

  const contentContainer = document.getElementById("menu_tab_content");
  
  arcadeTab.addEventListener("mouseover", function() {
    contentContainer.textContent = "This is the Arcade Mode content.";
  });
  
  trainingTab.addEventListener("mouseover", function() {
    contentContainer.textContent = "This is the Training Mode content.";
  });
  
  vsModeTab.addEventListener("mouseover", function() {
    contentContainer.textContent = "This is the vs Mode content.";
  });

  optionTab.addEventListener("mouseover", function() {
    contentContainer.textContent = "This is the Option Mode content.";
  });

  memoryCardTab.addEventListener("mouseover", function() {
    contentContainer.textContent = "This is the Memory Card Mode content.";
  });

  scoreRankingTab.addEventListener("mouseover", function() {
    contentContainer.textContent = "This is the Score Ranking Mode content.";
  });
  
  scoreAttackTab.addEventListener("mouseover", function() {
    contentContainer.textContent = "This is the Score Attack Mode content.";
  });
  
  secretFactorTab.addEventListener("mouseover", function() {
    contentContainer.textContent = "This is the Secret Factor Content.";
  });