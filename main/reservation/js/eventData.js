




const events = [
  [ // day
    {
      value : "",
      title : "행사를 선택해 주세요"
    },
    {
      value : "",
      title : "가정의 달, 푸르른 5월의 궁1"
    },
    {
      value : "",
      title : "가정의 달, 푸르른 5월의 궁2"
    },
    {
      value : "",
      title : "가정의 달, 푸르른 5월의 궁3"
    },
    {
      value : "",
      title : "가정의 달, 푸르른 5월의 궁4"
    },
  ],
  [ // night
    {
      value : "",
      title : "행사를 선택해 주세요"
    },
    {
      value : "",
      title : "별 가득한 5월의 밤, 경복궁 별빛야행1"
    },
    {
      value : "",
      title : "별 가득한 5월의 밤, 경복궁 별빛야행2"
    },
    {
      value : "",
      title : "별 가득한 5월의 밤, 경복궁 별빛야행3"
    },
    {
      value : "",
      title : "별 가득한 5월의 밤, 경복궁 별빛야행4"
    }
  ]
]




const event_time = [
[ //day
  {
    value : "",
    title : "회차를 선택해 주세요"
  },
  {
    value : "10000",
    title : "1회차(10:00 ~ 12:00) [잔여:2]"
  },
  {
    value : "20000",
    title : "2회차(12:00 ~ 14:00) [잔여:1]"
  },
  {
    value : "30000",
    title : "3회차(14:00 ~ 16:00) [잔여:6]"
  },
],
[ //night
  {
    value : "",
    title : "회차를 선택해 주세요"
  },
  {
    value : "10000",
    title : "1회차(16:00 ~ 18:00) [잔여:2]"
  },
  {
    value : "20000",
    title : "2회차(18:00 ~ 20:00) [잔여:1]"
  },
  {
    value : "30000",
    title : "3회차(20:00 ~ 22:00) [잔여:6]"
  },
]
]


// export {events}

  // if(select_event.selectedIndex == 1) {
  //   day.forEach(event => {
  //     let option = document.createElement("option");
  //     option.innerText = event.title;
  //     option.value = event.value;
  //     select.appendChild(option);
  //   });
  //   select.options[0].disabled = true
  //   console.log(select.options[0])
  // } else {
  //   night.forEach(event => {
  //     let option = document.createElement("option");
  //     option.innerText = event.title;
  //     option.value = event.value;
  //     select.appendChild(option);
  //   });
  //   select.options[0].disabled = true
  //   console.log(select.options[0])
  // }


  // if(select_event.selectedIndex == 2) {
  //   document.querySelector("#select-event-day").style.display = "none";
  //   document.querySelector("#select-event-night").style.display = "block";
  //   document.querySelector("#select-event-night").selectedIndex = 0;
  // }else if((select_event.selectedIndex == 1)) {
  //   document.querySelector("#select-event-day").style.display = "block";
  //   document.querySelector("#select-event-day").selectedIndex = 0;
  //   document.querySelector("#select-event-night").style.display = "none";
  // }