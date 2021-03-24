//1
// 1
setTimeout(() => {
    const div1 = document.querySelector(`#first`);
    const p1 = document.createElement(`p`);
    p1.innerText = `Hi`;
    div1.append(p1);
  }, 1000);
  
  // 2
  setTimeout(() => {
    const divTM = document.querySelector(`#timeout-nesting`);
    const p1 = document.createElement(`p`);
    p1.innerText = `One`;
    divTM.append(p1);
    setTimeout(() => {
      const p2 = document.createElement(`p`);
      p2.innerText = `Two`;
      divTM.append(p2);
    }, 1000);
  }, 2000);

  // 3a
  let time = 0
  const clock = setInterval(() => {
      console.log(time);
      time++;
  }, 1000)

  // 3b
  const stop - document.querySelector(`button`);
  stop.addEventListener(`click`, () => {
      clearInterval(clock)
  });

  