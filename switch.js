const day = 'thurssday';

switch (day) {
    case 'monday' : 
        console.log('Plan my course structure!');
        console.log('Go to coding meetup!');
        break;
    case 'tuesday' :
        console.log('Prepare theory videos!');
        break;
    case 'wednesday' :
    case 'thursday' :
        console.log('Write code examples');
        break;
    case 'friday' :
        console.log('Recording videos!');
        break;
    case 'saturday' :
    case 'sunday' :
        console.log('Enjoy the weekend!');
        break;
    default :
        console.log('Not a valid day!');
}


const language = 'Portuguese';

switch (language) {
    case 'Mandarin' :
    case 'Chinese' :
        console.log("Most number of native speakers in the world!");
        break;
    case 'Spanish' :
        console.log("2nd place in number of native speakers in the world!");
        break;
    case 'English' :
        console.log("3rd place in number of native speakers in the world!");
        break;
    case 'Hindi' :
        console.log("4rth place in number of native speakers in the world!");
        break;
    case 'Arabic' :
        console.log("5th place in number of native speakers in the world!");
        break;
    default: 
        console.log("Great language too :D!!");
}