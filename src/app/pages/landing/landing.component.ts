import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  @Input() lang: 'en' | 'te' | 'hi' = 'en';

  content: any = {
  en: {
    title: 'Our Services',
    intro: [
      'Founded in 2020, RiseRoots Enterprises, based in Akkayyapalem, Visakhapatnam, began as a small real estate consulting firm with a strong commitment to integrity and customer satisfaction. Over the years, we have steadily grown through customer trust, market knowledge, and consistent delivery, gaining valuable experience across multiple segments of the real estate industry.',

      'Today, RiseRoots Enterprises is recognized as a reliable and customer-centric real estate consultancy, helping individuals and families make informed property investment decisions. Our vision is to bring a transparent, structured, and long-term perspective to real estate investments, ensuring every client receives guidance aligned with their financial goals.',

      'We specialize in identifying and recommending verified investment opportunities across farm lands, open plots, and residential flats, with a focus on legality, location potential, and future value.'
    ],
    strengthsTitle: 'Our Core Strengths',
    points: [
      'Trusted consulting for Farm Lands, Open Plots, and Residential Flats',
      'Transparent, ethical, and customer-focused advisory approach',
      'VMRDA & RERA approved property options',
      'Investment solutions for low-budget and budget-aligned requirements',
      'Assistance with bank loans and end-to-end documentation support',
      'Clear guidance for long-term investments backed by market insight'
    ]
  },

  te: {
    title: 'మా సేవలు',
    intro: [
      '2020లో స్థాపించబడిన రైజ్‌రూట్స్ ఎంటర్‌ప్రైజెస్, విశాఖపట్నం అక్కయ్యపాలెం కేంద్రంగా ఒక చిన్న రియల్ ఎస్టేట్ కన్సల్టింగ్ సంస్థగా ప్రారంభమైంది. నిజాయితీ మరియు కస్టమర్ సంతృప్తిపై ఉన్న బలమైన నిబద్ధతతో, సంవత్సరాల పాటు విశ్వాసం మరియు అనుభవంతో స్థిరంగా అభివృద్ధి చెందింది.',

      'ఈ రోజు, రైజ్‌రూట్స్ ఎంటర్‌ప్రైజెస్ ఒక విశ్వసనీయ మరియు కస్టమర్ కేంద్రిత రియల్ ఎస్టేట్ కన్సల్టెన్సీగా గుర్తించబడింది. మా లక్ష్యం పెట్టుబడులకు పారదర్శకత, స్పష్టత మరియు దీర్ఘకాలిక దృష్టికోణాన్ని అందించడం.',

      'వ్యవసాయ భూములు, ఓపెన్ ప్లాట్లు మరియు నివాస ఫ్లాట్లలో చట్టబద్ధత, ప్రాంత ప్రాముఖ్యత మరియు భవిష్యత్ విలువ ఆధారంగా ధృవీకరించబడిన పెట్టుబడి అవకాశాలను మేము సూచిస్తాము.'
    ],
    strengthsTitle: 'మా ప్రధాన బలాలు',
    points: [
      'వ్యవసాయ భూములు, ఓపెన్ ప్లాట్లు మరియు నివాస ఫ్లాట్లలో విశ్వసనీయ కన్సల్టింగ్',
      'పారదర్శకతతో కూడిన నైతిక సేవా విధానం',
      'VMRDA & RERA ఆమోదిత ఆస్తి ఎంపికలు',
      'తక్కువ బడ్జెట్ మరియు బడ్జెట్‌కు అనుగుణమైన పెట్టుబడి పరిష్కారాలు',
      'బ్యాంక్ లోన్ సహాయం మరియు పూర్తి డాక్యుమెంటేషన్ మద్దతు',
      'దీర్ఘకాలిక పెట్టుబడులకు స్పష్టమైన మార్గనిర్దేశం'
    ]
  },

  hi: {
    title: 'हमारी सेवाएँ',
    intro: [
      'वर्ष 2020 में स्थापित, अक्कैय्यापालेम, विशाखापट्टनम स्थित राइज़रूट्स एंटरप्राइज़ेज़ ने एक छोटे रियल एस्टेट कंसल्टिंग फर्म के रूप में शुरुआत की। ईमानदारी और ग्राहक संतुष्टि के प्रति प्रतिबद्धता के साथ, हमने वर्षों में विश्वास और अनुभव के आधार पर निरंतर प्रगति की है।',

      'आज राइज़रूट्स एंटरप्राइज़ेज़ एक विश्वसनीय और ग्राहक-केंद्रित रियल एस्टेट कंसल्टेंसी के रूप में पहचानी जाती है, जो परिवारों और निवेशकों को सही निर्णय लेने में सहायता करती है। हमारा उद्देश्य रियल एस्टेट निवेश में पारदर्शिता और दीर्घकालिक दृष्टिकोण प्रदान करना है।',

      'हम फार्म लैंड, ओपन प्लॉट्स और रेसिडेंशियल फ्लैट्स में कानूनी रूप से सत्यापित और भविष्य मूल्य वाले निवेश अवसरों की सिफारिश करते हैं।'
    ],
    strengthsTitle: 'हमारी प्रमुख विशेषताएँ',
    points: [
      'फार्म लैंड, ओपन प्लॉट्स और रेसिडेंशियल फ्लैट्स में विश्वसनीय कंसल्टिंग',
      'पारदर्शी और नैतिक सलाह प्रक्रिया',
      'VMRDA और RERA अनुमोदित प्रॉपर्टी विकल्प',
      'कम बजट और बजट-अनुकूल निवेश समाधान',
      'बैंक लोन सहायता और संपूर्ण दस्तावेज़ी सहयोग',
      'दीर्घकालिक निवेश के लिए स्पष्ट मार्गदर्शन'
    ]
  }
};


}
