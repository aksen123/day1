//pivotDate >>현시점 날짜정보
//dateArray >>특정한 날짜 지정 배열

function filterThisMonth(pivotDate, dateArray) {
  const year = pivotDate.getFullYear();
  const month = pivotDate.getMonth();

  const startDay = new Date(year,month,1, 0, 0, 0); //이번달의 첫번째날 의 0시 0분 0초
  const endDay = new Date(year,month + 1, 0, 23, 59, 59);
  //이번달 마지막날의 23시 59분 59초
  const resArr = dateArray.filter((it) =>
    startDay.getTime() <= it.getTime() && it.getTime() <= endDay.getTime()
  )
  return resArr
}

const dataArray = [
  new Date("2023-6-1"),
  new Date("2023-6-30"),
  new Date("2023-7-1"),
  new Date("2023-5-31"),
  new Date("2023-6-22"),
  new Date("2023-6-13"),
]

const today = new Date("2023-6-22/00:00:00");
const filteredArray = filterThisMonth(today, dataArray)

console.log(filteredArray)