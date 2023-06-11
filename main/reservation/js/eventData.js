

const day = [
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
]



const night = [
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