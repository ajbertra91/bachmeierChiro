import pathToChiro from '../images/chiropractic.png';
import pathToMassage from '../images/massage.png';
import pathToExercise from '../images/exercise.png';
import pathToEnhancement from '../images/enhancement.png';

const data = {
    title: 'Services',
    subtitle: 'We all have an inherent, innate ability to <em>heal ourselves</em>, this is the chiropractic philosophy.',
    paragraphs: [
        "Sometimes we just need a little help or guidance to get our of our own way and let that ability do its thing. Are you ready to get out of pain? Ready to improve your function and quality of life? Ready to take control or your own health?",
        "Dr. Dixie is ready meet you where you are and help you get where you want to be."
    ],
    cards: [
        {
            imageUrl: pathToChiro,
            imageAlt: '',
            name: "CHIROPRACTIC CARE",
            text: "Hands-on specific manual adjustments are Dr. Dixie's specialty, though other techniques such as Activator and Thompson Drop are available. Keeping the spine mobile and supple ensures optimal nerve function."
        },
        {
            imageUrl: pathToMassage,
            imageAlt: '',
            name: "SOFT TISSUE TREATMENT",
            text: "Graston technique is a method which utilizes stainless steel instruments to detect and treat soft tissue and myofascial adhesions that can be major factors in pain and dysfunction. Manual methods are also utilized when indicated."
        },
        {
            imageUrl: pathToExercise,
            imageAlt: '',
            name: 'CORRECTIVE EXERCISE',
            text: "If you've EVER had pain, you need rehab. Pain never \"just goes away.\" Your body is amazing, so it adapts...for awhile. Dr. Dixie gives specific corrective exercise homework which will help you heal faster and get you back to life sooner."
        },
        {
            imageUrl: pathToEnhancement,
            imageAlt: '',
            name: "ATHLETIC ENHANCEMENT",
            text: "Whatever your fitness level, chances are you will benefit from a bio mechanical assessment from Dr. Dixie. You may need treatment, you may just need to tweak your training plan or lifting technique to optimize your efforts."
        }
    ]
}

export function getServicesData() {
    return data;
}