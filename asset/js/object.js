const data = {
  speakerDetails: [
    {
      key: 0,
      image: './asset/image/jeff_bezos.png',
      title: 'Ceo of Apple',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, aspernatur!',
    },
    {
      key: 1,
      image: './asset/image/mit_professor.png',
      title: 'MIT Professor of Economics',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, aspernatur!',
    },
    {
      key: 2,
      image: './asset/image/ceo_zipline.png',
      title: 'Ceo of Zipline',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, aspernatur!',
    },
    {
      key: 3,
      image: './asset/image/ceo_parrot.png',
      title: 'Ceo of Parrot',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, aspernatur!',
    },
    {
      key: 4,
      image: './asset/image/ceo_ehang.png',
      title: 'Ceo of Ehang',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, aspernatur!',
    },
    {
      key: 5,
      image: './asset/image/Ellen_Roche_8-1.jpg',
      title: 'Havard Professor',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, aspernatur!',
    },
  ],
};
// const myProjects = data.speakerDetails;
// IMPLEMENT PORTFOLIO PROJECTS
function implementSpeakers() {
  const speakersWrap = document.querySelector('.feature_speakers ul');
  data.speakerDetails.forEach((speakerDetail) => {
    const speakerCards = `
  <li>
  <div class = 'feature-details${speakerDetail.key + 1} feature-speaker'>
  <div class = 'speaker-frame'>
  <img class = ' face-shot'  src = '${
  speakerDetail.image
}' alt = ' speaker-image'>
  </div>
  <div class = 'speaker-info'>
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
