{
  /* <link
id="icon"
rel="icon"
type="image/png"
href="https://github.githubassets.com/images/icons/emoji/unicode/1f55f.png?v8"
/> */
}

(async (win,doc) => {
  const elLink = doc.querySelector('link[rel="icon"]')
  if( !elLink )return

  let pngList =  [
    "https://github.githubassets.com/images/icons/emoji/unicode/1f55b.png?v8",
    "https://github.githubassets.com/images/icons/emoji/unicode/1f567.png?v8",
    "https://github.githubassets.com/images/icons/emoji/unicode/1f550.png?v8",
    "https://github.githubassets.com/images/icons/emoji/unicode/1f55c.png?v8",
    "https://github.githubassets.com/images/icons/emoji/unicode/1f551.png?v8",
    "https://github.githubassets.com/images/icons/emoji/unicode/1f55d.png?v8",
    "https://github.githubassets.com/images/icons/emoji/unicode/1f552.png?v8",
    "https://github.githubassets.com/images/icons/emoji/unicode/1f55e.png?v8",
    "https://github.githubassets.com/images/icons/emoji/unicode/1f553.png?v8",
    "https://github.githubassets.com/images/icons/emoji/unicode/1f55f.png?v8",
    "https://github.githubassets.com/images/icons/emoji/unicode/1f554.png?v8",
    "https://github.githubassets.com/images/icons/emoji/unicode/1f560.png?v8",
    "https://github.githubassets.com/images/icons/emoji/unicode/1f555.png?v8",
    "https://github.githubassets.com/images/icons/emoji/unicode/1f561.png?v8",
    "https://github.githubassets.com/images/icons/emoji/unicode/1f556.png?v8",
    "https://github.githubassets.com/images/icons/emoji/unicode/1f562.png?v8",
    "https://github.githubassets.com/images/icons/emoji/unicode/1f557.png?v8",
    "https://github.githubassets.com/images/icons/emoji/unicode/1f563.png?v8",
    "https://github.githubassets.com/images/icons/emoji/unicode/1f558.png?v8",
    "https://github.githubassets.com/images/icons/emoji/unicode/1f564.png?v8",
    "https://github.githubassets.com/images/icons/emoji/unicode/1f559.png?v8",
    "https://github.githubassets.com/images/icons/emoji/unicode/1f565.png?v8",
    "https://github.githubassets.com/images/icons/emoji/unicode/1f55a.png?v8",
    "https://github.githubassets.com/images/icons/emoji/unicode/1f566.png?v8",
  ];
  pngList.forEach(async(src,index)=>{
    pngList[index] = await fetch(src).then(res=>res.blob()).then(b=>URL.createObjectURL(b))
  })


  let getIndex = () => {
    let now = new Date();
    let index = (now.getHours() % 12) * 2;
    return (index = index + ((now.getMinutes() +5)%60 < 30 ? 0 : 1));
  };
  let sleep = (s) => new Promise((ok) => setTimeout(ok, s));
  
  elLink.href = pngList[getIndex()] || pngList[0];

  win.rockIcon = async () => {
    let index = getIndex();
    for (let i = 0; i < pngList.length; i += 2) {
      elLink.href = pngList[(index + i) % pngList.length];
      await sleep(100);
    }
    elLink.href = pngList[index] || pngList[0];
  };
  win.setInterval(win.rockIcon,30_000)
})(window,document);
