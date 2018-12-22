import pathToDrDixie from '../images/dr-dixie.png';
// import pathToFbIcon from '../images/facebook.png';
// import pathToLiIcon from '../images/linkedin.png';

const data = {
    title: 'Who I Am & What I Do',
    subtitle: '',
    paragraphs: [
        "Dr. Dixie is a native North Dakotan who has pursued an active lifestyle from a young age. She currently holds several black belts in various martial arts, runs in road races from 5K's to full marathons, and recently became nationally certified to teach yoga. Dr. Dixie’s interest in chiropractic and alternative approaches to health care stems from her passion for fitness and the eastern philosophy of healing. She is excited to be back home living on the ranch where she grew up with her husband Scott, and two completely entertaining boxers, Bruno and Zina."
    ],
    cards: [
        {
            imageUrl: pathToDrDixie,
            imageAlt: 'Portrait of Doctor Dixie',
            name: 'Dr. Dixie',
            title: 'Owner, Chiropractor',
            socialMediaIcons: [
                {
                    title: 'facebook',
                    'url': 'https://www.facebook.com/pages/Bachmeier-Chiropractic-Yoga/224048864307083'
                },
                {
                    title: 'linkedin',
                    url: 'https://www.linkedin.com/in/bachmeierchiro'
                }
            ]
        }
    ]
}

export function getAboutData() {
    return data;
}