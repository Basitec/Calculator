let btn = document.querySelectorAll("button");
let display = document.querySelector(".display");
let btn2 = document.querySelector(".equal");



// function handleequal() {
//   currentInput=eval(currentInput);
//   updateDisplay()
// }
// function handlenew() {
//   currentInput=number;
//   updateDisplay()
// }
// for (let i = 0; i < btn.length; i++) {
//   // const element = array[i];
//   let currentInput ="";
//  display.textContent=currentInput;
//   console.log(typeof(currentInput))
//   btn[i].addEventListener("click", function () {
//         if (btn[i].value == "CE") {
//           currentInput = "0";
//         } else if (btn[i].value == "C") {
//           currentInput = "0";
//         } else if (btn[i].value == "DEL") {
//           currentInput = display.innerHTML.toString().slice(0, -1);
//         } else if (btn[i].value == "=") {
//           //     // input=" ";
    
//           let done2 = String(display.innerHTML);
//           let done = " " + done2;
//         //   console.log(done);
//           let result = eval(done);
//           currentInput = result;
//           // updateDisplay()
//         //   console.log(result);
//         } else if (btn[i].value == "(1/x)") {
//           currentInput = "(1/" + display.innerHTML + ")";
//         } else if (btn[i].value == "sqrt") {
//           let dd = currentInput + "**(1/2)";
//           currentInput = dd;
//         } else if (btn[i].value == "+/-") {
//           let dd = "-" + currentInput;
//           currentInput = dd;
//         } else if (currentInput=="0") {
//           currentInput=btn[i].value
//         }else {
//           currentInput += btn[i].value;
//         }
//         })
// }

  // function Handlenum(number) {
  //   currentInput+=number;
  //   updateDisplay()
  // }
  // updateDisplay(display)


for (let i = 0; i < btn.length; i++) {
  // function updateDisplay() {
  //   display.innerHTML="";
  // }
  btn[i].addEventListener("click", function () {
    if (btn[i].value == "CE") {
      display.innerHTML = "0";
    } else if (btn[i].value == "C") {
      display.innerHTML = "0";
    } else if (btn[i].value == "DEL") {
      display.innerHTML = display.innerHTML.toString().slice(0, -1);
    } else if (btn[i].value == "=") {
      //     // input=" ";

      let done2 = String(display.innerHTML);
      let done = " " + done2;
    //   console.log(done);
      let result = eval(done);
      display.innerHTML = result;
      // display.innerHTML="";
      // updateDisplay()
    //   console.log(result);
    } else if (btn[i].value == "(1/x)") {
      display.innerHTML = "(1/" + display.innerHTML + ")";
    } else if (btn[i].value == "sqrt") {
      let dd = display.innerHTML + "**(1/2)";
      display.innerHTML = dd;
    } else if (btn[i].value == "+/-") {
      let dd = "-" + display.innerHTML;
      display.innerHTML = dd;
    } else if (display.innerHTML=="0") {
        display.innerHTML=btn[i].value
    }else {
      display.innerHTML += btn[i].value;
    }
  });
// console.log(btn[i].addEventListener)

}