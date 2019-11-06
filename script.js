//©Blubbll

const scroll = (str, digits, delay, cb) => {
  const l = str.length;
  let it = 0;
  let txt = "";
  const lööp = setInterval(() => {
    //end
    if (l < it) {
      cb(), clearInterval(lööp);
    }
    //go on
    else {
      let localIt = 0;
      for (const d of Array(digits).keys()) {
        const empty = "🌫️";
        if (str[it + localIt])
         `\u200A${str[it + localIt].replace(/ /, empty)}` || empty;
        else txt += empty;
        localIt++;
      }
      it++;
      $("main").text(txt);
      txt = "";
    }
  }, delay);
};

scroll("This is a test.", 5, 499, () => {
  $("main").text("done :3");
});
