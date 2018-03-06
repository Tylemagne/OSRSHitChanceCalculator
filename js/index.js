function run() {
  var al = document.getElementById("al").value;
  var ab = document.getElementById("ab").value;
  var dl = document.getElementById("dl").value;
  var db = document.getElementById("db").value;

  var piety = document.getElementById("piety").checked;
  var helm = document.getElementById("helm").checked;

  var effectiveAttackLevel = parseInt(al);

  if (piety) effectiveAttackLevel *= 1.2;
  if (helm) effectiveAttackLevel *= 1.16666;

  var attackRoll = parseInt(ab) + 64;
  attackRoll = effectiveAttackLevel * attackRoll;

  var defenseRoll = parseInt(db) + 64;
  defenseRoll = dl * defenseRoll;

  var accuracy = 0;

  if (attackRoll > defenseRoll) {
    accuracy = 1 - 0.5 * defenseRoll / attackRoll;
  }

  if (defenseRoll > attackRoll) {
    accuracy = 0.5 * (attackRoll / defenseRoll);
  }

  accuracy = accuracy.toFixed(4);
  accuracy = accuracy * 100;
  accuracy = accuracy.toString();
  accuracy = accuracy.substring(0, 5);

  if (accuracy == 0) accuracy = 50;

  //alert(al);
  document.getElementById("accuracy").innerHTML =
    "hit chance: " + accuracy + "%";
}