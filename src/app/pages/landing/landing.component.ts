import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FestivalBlastComponent } from '../../festival/festival-blast/festival-blast.component';

import { FestivalService } from '../../festival/festival.service';

interface IntroItem {
  brand?: string;
  tagline?: string;
  text: string;
}

interface PageContent {
  title: string;
  intro: IntroItem[];
  activeTitle?: string;
  activeServices?: string[];
  evaluation?: string;
  extendedTitle?: string;
  extendedServices?: string[];
  phased?: string;
  strengthsTitle?: string;
  strengths?: string[];
  visionTitle?: string;
  vision?: string;
}

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, FestivalBlastComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  @Input() lang: 'en' | 'te' | 'hi' = 'en';

  festivalEffect: 'confetti' | 'fireworks' | 'flowers' | null = null;
  showHeaderEffect = false;
  festivalMessage?: string;
  festivalName?: string;

  constructor(private festivalService: FestivalService) {}

  ngOnInit(): void {
    const festival = this.festivalService.getTodayFestival();
    if (!festival) return;

    // 🎆 Full screen blast (one-time)
    this.festivalEffect = festival.blast
      ? (festival.effect as 'confetti' | 'fireworks' | 'flowers')
      : null;

    // 🌸 Header subtle effect (all day)
    this.showHeaderEffect = !!festival.headerEffect;

    // 📝 Optional message
    this.festivalMessage = festival.messageEnabled ? festival.message : undefined;

    // 🏷 Banner name
    this.festivalName = festival.name;
  }

  content: any = {
    /* ======================================================
     ENGLISH
  ====================================================== */
    en: {
      title: 'Our Services',

      intro: [
        {
          brand: 'RiseRoots Enterprises',
          tagline: 'grounded in excellence and rising with innovation',
          text: 'Founded in 2020, RiseRoots Enterprises is a Visakhapatnam-based real estate consultancy rooted in integrity, transparency, and customer trust. Operating from Akkayyapalem, we deliver compliant, clear, and value-driven property advisory services, positioning ourselves as a single point solution for all real estate needs.',
        },
        {
          text: 'We partner with individuals, families, and investors to enable informed and secure real estate decisions. Our growth has been shaped by ethical practices, strong regional expertise, and long-term client relationships rather than volume-driven transactions.',
        },
        {
          text: 'Today, RiseRoots Enterprises is recognized as a reliable, customer-centric advisory firm, offering structured guidance that balances immediate needs with long-term investment potential—always aligned with our clients’ financial goals.',
        },
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
        {
          brand: 'RiseRoots Enterprises',
          tagline: 'grounded in excellence and rising with innovation',
          text: '2020లో స్థాపించబడిన విశాఖపట్నం కేంద్రంగా పనిచేస్తున్న విశ్వసనీయ రియల్ ఎస్టేట్ కన్సల్టెన్సీ. అక్కయ్యపాలెం నుండి కార్యకలాపాలు నిర్వహిస్తూ, చట్టబద్ధత, పారదర్శకత మరియు కస్టమర్ నమ్మకంపై ఆధారపడి స్పష్టమైన మరియు విలువ ఆధారిత రియల్ ఎస్టేట్ సలహా సేవలను అందిస్తున్నాము.',
        },
        {
          text: 'వ్యక్తులు, కుటుంబాలు మరియు పెట్టుబడిదారులు భద్రమైన మరియు అవగాహనతో కూడిన రియల్ ఎస్టేట్ నిర్ణయాలు తీసుకునేలా మేము విశ్వసనీయ మార్గనిర్దేశం అందిస్తున్నాము. నైతిక విలువలు, బలమైన స్థానిక మార్కెట్ అనుభవం మరియు దీర్ఘకాలిక సంబంధాలే మా అభివృద్ధికి ఆధారం.',
        },
        {
          text: 'ఈ రోజు, RiseRoots Enterprises ఒక విశ్వసనీయ మరియు కస్టమర్ కేంద్రిత రియల్ ఎస్టేట్ సలహాదార సంస్థగా గుర్తింపు పొందింది. తక్షణ అవసరాలు మరియు దీర్ఘకాలిక పెట్టుబడి లక్ష్యాల మధ్య సమతుల్యతతో స్పష్టమైన మార్గనిర్దేశం అందిస్తోంది.',
        },
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
        {
          brand: 'RiseRoots Enterprises',
          tagline: 'grounded in excellence and rising with innovation',
          text: '2020 में स्थापित, विशाखापट्टनम स्थित एक विश्वसनीय रियल एस्टेट कंसल्टेंसी, जो ईमानदारी, पारदर्शिता और ग्राहक विश्वास पर आधारित है। अक्कैय्यापालेम से संचालित होकर, हम स्पष्ट, अनुपालन-आधारित और मूल्य-संचालित रियल एस्टेट सलाह सेवाएँ प्रदान करते हैं।',
        },
        {
          text: 'हम व्यक्तियों, परिवारों और निवेशकों को सुरक्षित एवं सूचित रियल एस्टेट निर्णय लेने में मार्गदर्शन प्रदान करते हैं। हमारा विकास नैतिक कार्यप्रणाली, मजबूत स्थानीय बाजार अनुभव और दीर्घकालिक संबंधों से प्रेरित है।',
        },
        {
          text: 'आज, RiseRoots Enterprises को एक विश्वसनीय और ग्राहक-केंद्रित रियल एस्टेट सलाहकार के रूप में पहचाना जाता है, जो तात्कालिक आवश्यकताओं और दीर्घकालिक निवेश लक्ष्यों के बीच संतुलित मार्गदर्शन प्रदान करता है।',
        },
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
