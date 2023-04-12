const bookInfo = {
  title : "자바스크립트",
  pubDate : "2023-04-11",
  page : 272,
  finished : true
}

for(key in bookInfo) {
  document.write(`${key} : ${bookInfo[key]}<br /> `)
}