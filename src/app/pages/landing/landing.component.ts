import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  @Input() lang: 'en' | 'te' | 'hi' = 'en';

  content: any = {
    /* ======================================================
     ENGLISH
  ====================================================== */
    en: {
      title: 'Our Services',

      intro: [
        'Founded in 2020, RiseRoots Enterprises is a Visakhapatnam-based real estate consultancy rooted in integrity, transparency, and customer trust. Operating from Akkayyapalem, we focus on delivering compliant, clear, and value-driven property advisory services.',

        'We partner with individuals, families, and investors to enable informed and secure real estate decisions. Our growth has been shaped by ethical practices, strong regional expertise, and long-term client relationships rather than volume-driven transactions.',

        'Today, RiseRoots Enterprises is recognized as a reliable, customer-centric advisory firm, offering structured guidance that balances immediate needs with long-term investment potential—always aligned with our clients’ financial goals.',
      ],

      activeTitle: 'Our Active Services',
      activeServices: [
        'Open Plots – Carefully selected layouts with clear titles, statutory approvals, and strong future growth potential',
        'Residential Flats – Ready-to-move and under-construction options suitable for both end-users and investors',
        'Farm Lands – Agricultural and investment-grade lands with verified ownership and long-term value',
      ],

      evaluation:
        'Each property recommendation is evaluated based on legal compliance, location advantages, infrastructure development, and future appreciation prospects.',

      extendedTitle: 'Extended Advisory & Support Services',
      extendedServices: [
        'Land Leasing – Agricultural and commercial lease opportunities',
        'Resale Properties – Verified resale plots and residential units',
        'Commercial Sales & Leasing – Shops, office spaces, and commercial assets',
        'Property Management – End-to-end support for NRIs and long-term investors, including rent and maintenance coordination',
        'Joint Ventures & Development – Structured landowner–builder partnerships and revenue-sharing models',
        'Legal & Documentation Support – Assistance with title verification, registrations, and complete property documentation',
      ],

      phased:
        'All extended services are introduced in a phased and structured manner, maintaining consistent standards of transparency, compliance, and trust.',

      strengthsTitle: 'Our Core Strengths',
      strengths: [
        'Trusted consulting across Open Plots, Residential Flats, and Farm Lands',
        'Transparent, ethical, and customer-focused advisory approach',
        'Strong emphasis on VMRDA & RERA approved properties',
        'Investment solutions aligned with budgets and long-term financial objectives',
        'Assistance with bank loans and end-to-end documentation',
        'Clear guidance backed by strong local market insight and practical experience',
      ],

      visionTitle: 'Our Vision',
      vision:
        'To bring a disciplined, transparent, and long-term perspective to real estate investments—ensuring every property decision is informed, legally secure, and aligned with future aspirations.',
    },

    /* ======================================================
     TELUGU
  ====================================================== */
    te: {
      title: 'మా సేవలు',

      intro: [
        '2020లో స్థాపించబడిన రైజ్‌రూట్స్ ఎంటర్‌ప్రైజెస్, విశాఖపట్నం అక్కయ్యపాలెం కేంద్రంగా నిజాయితీ, పారదర్శకత మరియు కస్టమర్ నమ్మకంపై ఆధారపడి పనిచేసే రియల్ ఎస్టేట్ కన్సల్టెన్సీ.',

        'వ్యక్తులు, కుటుంబాలు మరియు పెట్టుబడిదారులు భద్రమైన మరియు అవగాహనతో కూడిన రియల్ ఎస్టేట్ నిర్ణయాలు తీసుకునేలా మేము విశ్వసనీయ మార్గనిర్దేశం అందిస్తున్నాము. నైతిక విలువలు మరియు స్థానిక మార్కెట్ అనుభవమే మా అభివృద్ధికి ఆధారం.',

        'ఈ రోజు, రైజ్‌రూట్స్ ఎంటర్‌ప్రైజెస్ ఒక విశ్వసనీయ, కస్టమర్ కేంద్రిత రియల్ ఎస్టేట్ సలహాదార సంస్థగా గుర్తింపు పొందింది.',
      ],

      activeTitle: 'ప్రస్తుతం అందిస్తున్న సేవలు',
      activeServices: [
        'ఓపెన్ ప్లాట్లు – స్పష్టమైన హక్కులు, చట్టబద్ధ అనుమతులు మరియు అభివృద్ధి అవకాశాలతో ఎంపిక చేసిన లేఅవుట్లు',
        'నివాస ఫ్లాట్లు – సిద్ధంగా ఉన్న మరియు నిర్మాణంలో ఉన్న నివాస ఆస్తులు',
        'వ్యవసాయ భూములు – ధృవీకరించిన యాజమాన్యంతో దీర్ఘకాలిక విలువ కలిగిన భూములు',
      ],

      evaluation:
        'ప్రతి ఆస్తిని చట్టబద్ధత, ప్రాంత ప్రాముఖ్యత, మౌలిక సదుపాయాలు మరియు భవిష్యత్ విలువ ఆధారంగా సమగ్రంగా పరిశీలిస్తాము.',

      extendedTitle: 'అదనపు సలహా మరియు మద్దతు సేవలు',
      extendedServices: [
        'భూమి లీజింగ్ – వ్యవసాయ మరియు వాణిజ్య లీజింగ్ అవకాశాలు',
        'రిసేల్ ఆస్తులు – ధృవీకరించిన రిసేల్ ప్లాట్లు మరియు ఫ్లాట్లు',
        'వాణిజ్య విక్రయాలు & లీజింగ్ – షాపులు మరియు కార్యాలయ స్థలాలు',
        'ప్రాపర్టీ మేనేజ్‌మెంట్ – ఎన్‌ఆర్‌ఐలు మరియు దీర్ఘకాలిక పెట్టుబడిదారులకు మద్దతు',
        'జాయింట్ వెంచర్స్ & అభివృద్ధి – భూమి యజమాని–బిల్డర్ భాగస్వామ్యాలు',
        'లీగల్ & డాక్యుమెంటేషన్ సహాయం – రిజిస్ట్రేషన్ మరియు పత్రాల పరిశీలన',
      ],

      phased: 'ఈ సేవలన్నీ దశలవారీగా మరియు పూర్తిస్థాయి పారదర్శకతతో అందించబడతాయి.',

      strengthsTitle: 'మా ప్రధాన బలాలు',
      strengths: [
        'ఓపెన్ ప్లాట్లు, ఫ్లాట్లు మరియు వ్యవసాయ భూములపై విశ్వసనీయ సలహా',
        'నైతిక విలువలతో కూడిన పారదర్శక విధానం',
        'VMRDA & RERA ఆమోదిత ఆస్తులపై ప్రత్యేక దృష్టి',
        'బడ్జెట్ మరియు భవిష్యత్ లక్ష్యాలకు అనుగుణమైన పెట్టుబడి పరిష్కారాలు',
        'బ్యాంక్ లోన్ మరియు పూర్తి డాక్యుమెంటేషన్ సహాయం',
        'స్థానిక మార్కెట్ అనుభవంతో స్పష్టమైన మార్గనిర్దేశం',
      ],

      visionTitle: 'మా దృష్టి',
      vision:
        'రియల్ ఎస్టేట్ పెట్టుబడులకు క్రమశిక్షణ, పారదర్శకత మరియు దీర్ఘకాలిక దృష్టిని అందించడమే మా లక్ష్యం.',
    },

    /* ======================================================
     HINDI
  ====================================================== */
    hi: {
      title: 'हमारी सेवाएँ',

      intro: [
        '2020 में स्थापित, विशाखापट्टनम के अक्कैय्यापालेम स्थित राइज़रूट्स एंटरप्राइज़ेज़ एक विश्वसनीय रियल एस्टेट कंसल्टेंसी है, जो ईमानदारी, पारदर्शिता और ग्राहक विश्वास पर आधारित है।',

        'हम व्यक्तियों, परिवारों और निवेशकों को सुरक्षित और सूचित रियल एस्टेट निर्णय लेने में मार्गदर्शन प्रदान करते हैं। हमारा विकास नैतिक मूल्यों और स्थानीय बाजार अनुभव से प्रेरित है।',

        'आज, राइज़रूट्स एंटरप्राइज़ेज़ को एक ग्राहक-केंद्रित और भरोसेमंद रियल एस्टेट सलाहकार के रूप में पहचाना जाता है।',
      ],

      activeTitle: 'हमारी सक्रिय सेवाएँ',
      activeServices: [
        'ओपन प्लॉट्स – स्पष्ट स्वामित्व, कानूनी अनुमोदन और विकास क्षमता वाले',
        'रेसिडेंशियल फ्लैट्स – रेडी-टू-मूव और निर्माणाधीन विकल्प',
        'फार्म लैंड – सत्यापित स्वामित्व वाली कृषि और निवेश योग्य भूमि',
      ],

      evaluation:
        'प्रत्येक संपत्ति का मूल्यांकन कानूनी स्थिति, स्थान, बुनियादी ढांचे और भविष्य की संभावनाओं के आधार पर किया जाता है।',

      extendedTitle: 'विस्तारित सलाह एवं सहयोग सेवाएँ',
      extendedServices: [
        'लैंड लीजिंग – कृषि एवं व्यावसायिक लीजिंग अवसर',
        'रीसेल प्रॉपर्टीज – सत्यापित रीसेल प्लॉट्स और फ्लैट्स',
        'कमर्शियल सेल्स एवं लीजिंग – दुकानें और कार्यालय स्थान',
        'प्रॉपर्टी मैनेजमेंट – एनआरआई और दीर्घकालिक निवेशकों के लिए सहयोग',
        'जॉइंट वेंचर्स एवं डेवलपमेंट – भूमि मालिक–डेवलपर साझेदारी',
        'कानूनी एवं दस्तावेज़ सहायता – रजिस्ट्रेशन और दस्तावेज़ सत्यापन',
      ],

      phased: 'इन सेवाओं को चरणबद्ध और पूर्ण पारदर्शिता के साथ प्रदान किया जाता है।',

      strengthsTitle: 'हमारी प्रमुख विशेषताएँ',
      strengths: [
        'ओपन प्लॉट्स, फ्लैट्स और फार्म लैंड में विश्वसनीय सलाह',
        'पारदर्शी और नैतिक कार्यप्रणाली',
        'VMRDA एवं RERA अनुमोदित संपत्तियों पर विशेष ध्यान',
        'बजट और दीर्घकालिक लक्ष्यों के अनुरूप निवेश समाधान',
        'बैंक लोन एवं पूर्ण दस्तावेज़ सहयोग',
        'स्थानीय बाजार अनुभव पर आधारित स्पष्ट मार्गदर्शन',
      ],

      visionTitle: 'हमारा दृष्टिकोण',
      vision: 'रियल एस्टेट निवेश में अनुशासन, पारदर्शिता और दीर्घकालिक सोच लाना हमारा उद्देश्य है।',
    },
  };
}