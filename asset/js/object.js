const data = {
  speakerDetails: [
    {
      key: 0,
      image: './asset/image/jeff_bezos.png',
      title: 'Ceo of Apple',
      name: 'Jeff Bezos',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, aspernatur!',
    },
    {
      key: 1,
      image: './asset/image/mit_professor.png',
      title: 'MIT Professor of Economics',
      name: 'Daron Acemoglu',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, aspernatur!',
    },
    {
      key: 2,
      image: './asset/image/ceo_zipline.png',
      title: 'Ceo of Zipline',
      name: 'Keller Rinaudo',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, aspernatur!',
    },
    {
      key: 3,
      image: './asset/image/ceo_parrot.png',
      title: 'Ceo of Parrot',
      name: 'Henri Seydoux',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, aspernatur!',
    },
    {
      key: 4,
      image: './asset/image/ceo_ehang.png',
      title: 'Ceo of Ehang',
      name: 'Huazhi Hu',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, aspernatur!',
    },
    {
      key: 5,
      image: './asset/image/analyst.png',
      title: 'Finacial Analyst',
      name: 'Mereditt Whitney',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, aspernatur!',
    },
  ],
};
// const myProjects = data.speakerDetails;
// IMPLEMENT Speakers Details
function implementSpeakers() {
  const speakersWrap = document.querySelector('.feature_speakers ul');
  data.speakerDetails.forEach((speakerDetail) => {
    const speakerCards = `
  <li>
  <div class = 'feature-details${speakerDetail.key + 1} feature-speaker'>
  <div class = 'speaker-frame'>
  <img class = ' face-shot'  src = '${
  speakerDetail.image
}' alt = 'speaker-image'>
  </div>
  <div class = 'speaker-info'>
  <h2>${speakerDetail.name}</h2>
  <h3>${speakerDetail.title}</h3>
  <p>${speakerDetail.description}</p>
  </div>
  </div>
  </li> `;
    speakersWrap.innerHTML += speakerCards;
  });
}
if (document.querySelector('.feature-container')) {
  implementSpeakers();
}
