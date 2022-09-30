(function () {
    const people = [
      {
        photo: "img/reviews/ammy-white.jpeg",
        name: "Ammy White",
        shortDescription: "5-Day Paris Charming Package",
        quote:
          "Just to let you know that we arrived back from a great trip to Paris. Tom was the best guide we have had on our several trips to Paris with you. He is a credit to your organisation.",
        dateOfPublication: "07.25.2017",
      },
      {
        photo: "img/reviews/federico-stalone.jfif",
        name: "Federico Stalone",
        shortDescription: "2-day Burgundy Culture and Wine",
        quote:
          "We had a great time, first time we used Notre Travel and will use them again. 10 out of 10 Guys, Paul, our tour guide, was brilliant.",
        dateOfPublication: "06.21.2017",
      },
      {
        photo: "img/reviews/margie-philips.jpeg",
        name: "Margie Philips",
        shortDescription: "2-day Burgundy Culture and Wine",
        quote:
          "My family would like to thank you and Cilantro for making our visit to Paris very memorable... although it is not our first time here, we still discovered a lot of hidden gems.",
        dateOfPublication: "06.18.2017",
      },
      {
        photo: "img/reviews/john-johnson.jfif",
        name: "John Johnson",
        shortDescription: "3-day Paris Vacation Budget Package",
        quote:
          "Thanks for the great few days in Paris and its environs. Your guidance made our brief stay very unique and well worthwhile.",
        dateOfPublication: "06.01.2017",
      },
      {
        photo: "img/reviews/mary-ivanova.jfif",
        name: "Mary Ivanova",
        shortDescription: "Normandy Tour",
        quote:
          "Our Normandy tour guide was very prompt. The ride from Paris to Normandy Beaches went very quickly due to the information he provided on the way. His guidance made our brief stay very unique and well worthwhile.",
        dateOfPublication: "04.05.2017",
      },
      {
        photo: "img/reviews/robert-sheldon.jfif",
        name: "Robert Sheldon",
        shortDescription: "2-day Burgundy Culture and Wine",
        quote:
          "Just wanted to let you know we had a great trip. Your company was excellent! No problems, everything on time as planned. Will recommend to everyone – thanks again!",
        dateOfPublication: "03.16.2017",
      },
      {
        photo: "img/reviews/nora-hovard.jfif",
        name: "Nora Hovard",
        shortDescription: "Private tour",
        quote:
          "You went above and beyond our expectations. Your willingness to help us find a private Versailles tour guide to begin with was very impressive even after all your tours were booked.",
        dateOfPublication: "05.11.2017",
      },
      {
        photo: "img/reviews/mark-power.jfif",
        name: "Mark Power",
        shortDescription: "Normandy Tour",
        quote:
          "We had a most enjoyable trip to Paris, and our Normandy Tour was excellent. Our driver was extremely knowledgable of the area and its history. Thank you for providing such a good service.",
        dateOfPublication: "05.01.2017",
      },
    ];
  
    function renderCards(people) {
      const cardsContainer = document.querySelector(".words-of-gratitude__cards");
      for (const person of people) {
        cardsContainer.innerHTML += `
                  <article class="reviews__card">
                      <div class="reviews__card-image">
                          <img src="${person.photo}" alt="Photo of ${person.name}">
                      </div>
                      <div class="card__text">
                          <h3 class="card__title">${person.name}</h3>
                          <p class="card__short-description">${person.shortDescription}</p>
                          <q class="card__quote">${person.quote}</q>
                          <p class="card__date">${person.dateOfPublication}</p>
                      </div>
                  </article>
              `;
      }
    }
  
    renderCards(people);
  })();
  