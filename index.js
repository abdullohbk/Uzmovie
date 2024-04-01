let cardWrapper1 = document.querySelector(".card__wrapper1");

function renderData(data) {
  data.slice(0, 30).forEach((el) => {
    let card = document.createElement("div");
    card.classList.add("card", "p-2", "bg-slate-700", "min-w-[260px]");
    card.innerHTML = `
          <div class="card p-2  min-w-[260px]">
                  <img class="w-[230px] h-[250px]" src=${
                    el.smallThumbnail
                  } alt="smthimg" />
                  <h3
                    class="text-white text-[20px] flex justify-left mt-[20px]"
                  >
                    ${
                      el.title.length > 18
                        ? el.title.substring(0, 15) + "..."
                        : el.title
                    }
                  </h3>
                  <p class="text-gray-300">${
                    el.summary.length > 55
                      ? el.summary.substring(0, 52) + "..."
                      : el.summary
                  }</p>

                  <div>
                  <p class="text-[19px] mb-[10px] text-gray-300">Categgory: ${
                    el.categories[0]
                  }</p>

                  </div>

                  <a class="text-white text-[18px] px-4 py-1 border rounded-lg" href=${
                    el.youtubeId
                  }>Show movie</a>
             </div>   
        `;
    cardWrapper1.appendChild(card);
  });
}

renderData(movies);

let cardWrapper2 = document.querySelector(".card__wrapper2");

function renderData2(data) {
  data.slice(500, 550).forEach((el) => {
    let card = document.createElement("div");
    card.classList.add("card", "p-2", "bg-slate-700", "min-w-[260px]");
    card.innerHTML = `
          <div class="card p-2  min-w-[260px]">
                  <img class="w-[230px] h-[250px]" src=${
                    el.smallThumbnail
                  } alt="smthimg" />
                  <h3
                    class="text-white text-[20px] flex justify-left mt-[20px]"
                  >
                    ${
                      el.title.length > 18
                        ? el.title.substring(0, 15) + "..."
                        : el.title
                    }
                  </h3>
                  <p class="text-gray-300">${
                    el.summary.length > 55
                      ? el.summary.substring(0, 52) + "..."
                      : el.summary
                  }</p>

                  <div>
                  <p class="text-[19px] mb-[10px] text-gray-300">Categgory: ${
                    el.categories[0]
                  }</p>

                  </div>

                  <a class="text-white text-[18px] px-4 py-1 border rounded-lg" href=${
                    el.youtubeId
                  }>Show movie</a>
             </div>   
        `;
    cardWrapper2.appendChild(card);
  });
}

renderData2(movies);


let cardWrapper3 = document.querySelector(".card__wrapper3");

function renderData3(data) {
  data.slice(600, 650).forEach((el) => {
    let card = document.createElement("div");
    card.classList.add("card", "p-2", "bg-slate-700", "min-w-[260px]");
    card.innerHTML = `
          <div class="card p-2  min-w-[260px]">
                  <img class="w-[230px] h-[250px]" src=${
                    el.smallThumbnail
                  } alt="smthimg" />
                  <h3
                    class="text-white text-[20px] flex justify-left mt-[20px]"
                  >
                    ${
                      el.title.length > 18
                        ? el.title.substring(0, 15) + "..."
                        : el.title
                    }
                  </h3>
                  <p class="text-gray-300">${
                    el.summary.length > 55
                      ? el.summary.substring(0, 52) + "..."
                      : el.summary
                  }</p>

                  <div>
                  <p class="text-[19px] mb-[10px] text-gray-300">Categgory: ${
                    el.categories[0]
                  }</p>

                  </div>

                  <a class="text-white text-[18px] px-4 py-1 border rounded-lg" href=${
                    el.youtubeId
                  }>Show movie</a>
             </div>   
        `;
    cardWrapper3.appendChild(card);
  });
}

renderData3(movies)