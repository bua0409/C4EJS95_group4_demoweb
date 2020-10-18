//Coding challenge 2
function johnCal() {
  const resBills = [124, 48, 268];
  let tipsMoney = [];
  let finalPaid = [];

  for (let i = 0; i < 3; i++) {
    if (resBills[i] < 50) {
      tipsMoney[i] = (resBills[i] * 2) / 10;
    } else if (resBills >= 50 && resBills <= 200) {
      tipsMoney[i] = (resBills[i] * 15) / 100;
    } else {
      tipsMoney[i] = (resBills[i] * 1) / 10;
    }
    finalPaid[i] = resBills[i] + tipsMoney[i];
  }

  console.log(`Tips money: ${tipsMoney}`);
  console.log(`Final paid: ${finalPaid}`);
}
johnCal();

//Coding challenge 4
let BMI_DATA = [
  {
    fullname: "John",
    mass: 60,
    height: 170,
    calBMI: function () {
      return (this.mass / (this.height / 100) ** 2).toFixed(2);
    },
  },
  {
    fullname: "Mark",
    mass: 65,
    height: 180,
    calBMI: function () {
      return (this.mass / (this.height / 100) ** 2).toFixed(2);
    },
  },
];
function calculation() {
  if (BMI_DATA[0].calBMI() > BMI_DATA[1].calBMI()) {
    alert(
      `${BMI_DATA[0].fullname} has the highest BMI: ${BMI_DATA[0].calBMI()}`
    );
  } else if (BMI_DATA[0].calBMI() < BMI_DATA[1].calBMI()) {
    alert(
      `${BMI_DATA[1].fullname} has the highest BMI: ${BMI_DATA[1].calBMI()}`
    );
  } else {
    alert(`Both have the same BMI: ${BMI_DATA[0].calBMI()}`);
  }
}
calculation();
