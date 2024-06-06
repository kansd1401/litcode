/**
 * @param {number[]} arrival
 * @param {number[]} state
 * @return {number[]}
 */
var timeTaken = function (arrival, state) {
  const arrivalGrouped = {};
  for (let i = 0; i < arrival.length; i++) {
    if (!arrivalGrouped[arrival[i]]) {
      arrivalGrouped[arrival[i]] = [i];
    } else {
      arrivalGrouped[arrival[i]].push(i);
    }
  }

  const answer = new Array(arrival.length);
  const enterQ = [];
  const exitQ = [];
  let last = "NONE";
  let count = 0;
  let timer = arrival[0];
  while (count < arrival.length) {
    if (arrivalGrouped[timer]) {
      arrivalGrouped[timer].forEach((index) => {
        if (state[index] === 0) {
          enterQ.push(index);
        } else {
          exitQ.push(index);
        }
      });
    }

    if (enterQ[0] >= 0 && exitQ[0] >= 0) {
      if (last === "NONE") {
        answer[exitQ[0]] = timer;
        exitQ.shift();
        last = "EXIT";
      } else if (last === "EXIT") {
        answer[exitQ[0]] = timer;
        exitQ.shift();
        last = "EXIT";
      } else {
        answer[enterQ[0]] = timer;
        enterQ.shift();
        last = "ENTER";
      }
      count++;
    } else if (enterQ[0] >= 0) {
      answer[enterQ[0]] = timer;
      enterQ.shift();
      last = "ENTER";
      count++;
    } else if (exitQ[0] >= 0) {
      answer[exitQ[0]] = timer;
      exitQ.shift();
      last = "EXIT";
      count++;
    } else {
      last = "NONE";
    }
    timer++;
  }
  return answer;
};

console.log(timeTaken([0, 1, 1, 2, 4], [0, 1, 0, 0, 1])); //expected [0,3,1,2,4]

console.log(timeTaken([0, 0, 0], [1, 0, 1])); //expected [0,2,1]
