const projects = [
  {
    title: "모바일 프로젝트",
    description: "설명1",
    date: "2023-04-18 ~ 2023-05-18",
    images: [
      "/images/projects/1/1.png", //
    ],
  },
  {
    title: "포트폴리오 프로젝트",
    description: "설명2",
    date: "2023-04-18 ~ 2023-05-18",
    images: [
      "/images/projects/2/1.png", //
      "/images/projects/2/2.png",
    ],
  },
  {
    title: "반응형 프로젝트",
    description: "설명3",
    date: "2023-04-18 ~ 2023-05-18",
    images: [
      "/images/projects/3/1.png", //
    ],
  },
];

const covers = document.getElementsByClassName("cover");
[...covers].map((element) =>
  element.addEventListener("click", (event) => {
    const project = projects[event.target.dataset.index];
    document.getElementById("title").innerText = project.title;
    document.getElementById("date").innerText = project.date;
    document.getElementById("description").innerText = project.description;

    const imagesElement = document.getElementById("images");
    imagesElement.innerHTML = "";

    project.images.map((image) => {
      console.log(image);
      const element = document.createElement("img");
      element.src = image;
      element.width = 500;
      imagesElement.append(element);
    });

    // console.log(project.images);
  })
);
