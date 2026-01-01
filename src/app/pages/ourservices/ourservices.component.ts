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
  templateUrl: './ourservices.component.html',
  styleUrls: ['./ourservices.component.css'],
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
    en: {
      title: 'Our Services',

      /* =========================
       INTRO
    ========================= */
      intro: [
        {
          brand: 'RiseRoots Enterprises',
          text: 'Founded in 2020, RiseRoots Enterprises is a Visakhapatnam-based real estate consultancy specializing in low budget plots, affordable flats, and budget-friendly farm lands, delivering transparent, compliant, and value-driven advisory services supported by structured processes and disciplined execution.',
        },
        {
          text: 'We partner with individuals, families, first-time buyers, investors, and organizations to enable informed and secure decision-making. Our advisory approach emphasizes clarity, legal compliance, and affordability—helping clients identify value-driven property options aligned with their budget and long-term goals.',
        },
        {
          text: 'Today, RiseRoots Enterprises is recognized as a reliable, customer-centric advisory firm in Vizag, offering structured guidance that balances immediate requirements with long-term investment potential—while remaining positioned for responsible expansion into future consulting domains.',
        },
      ],

      /* =========================
       SERVICE LANDSCAPE
    ========================= */
      activeTitle: 'Our Service Landscape',

      activeServices: [
        'Open Plots – Carefully selected low budget plots in Visakhapatnam with clear titles, statutory approvals, and strong future growth potential',
        'Residential Flats – Affordable flats in Vizag, including ready-to-move and under-construction options aligned with lifestyle and investment needs',
        'Farm Lands – Budget-friendly agricultural and investment-grade farm lands near Visakhapatnam with verified ownership and long-term value',
      ],

      evaluation:
        'Each recommendation is evaluated through a defined framework covering legal compliance, location advantages, infrastructure development, and long-term appreciation potential. In addition to these core offerings, our advisory scope extends—on a need-driven basis—to land leasing, resale facilitation, commercial sales and leasing, property management support, joint development models, and documentation coordination, enabling a scalable and evolving consulting approach.',

      /* =========================
       DISCLAIMER (SAFE)
    ========================= */
      phased:
        'RiseRoots Enterprises operates as an independent consultancy and advisory organization. Final decisions, transactions, and statutory compliances remain the responsibility of the respective property owners, developers, and clients.',

      /* =========================
       CORE STRENGTHS
    ========================= */
      strengthsTitle: 'Our Core Strengths',

      strengths: [
        'Trusted advisory experience across low budget plots, affordable flats, and farm lands',
        'Transparent, ethical, and customer-focused consulting approach',
        'Strong emphasis on legally compliant properties, including VMRDA and RERA approvals',
        'Investment guidance aligned with client budgets and long-term financial objectives',
        'Support with bank loan facilitation and end-to-end documentation processes',
        'Clear, practical guidance backed by strong local market insight and on-ground experience in Visakhapatnam',
      ],

      /* =========================
       VISION
    ========================= */
      visionTitle: 'Our Vision',

      vision:
        'To bring a disciplined, transparent, and long-term perspective to property advisory and investment decisions—ensuring every engagement is informed, legally secure, budget-aligned, and positioned for sustainable future growth.',
    },
    te: {
      title: 'మా సేవలు',

      intro: [
        {
          brand: 'రైజ్‌రూట్స్ ఎంటర్‌ప్రైజెస్',
          text: '2020లో స్థాపించబడిన రైజ్‌రూట్స్ ఎంటర్‌ప్రైజెస్ విశాఖపట్నం కేంద్రంగా పనిచేస్తున్న ఒక విశ్వసనీయ రియల్ ఎస్టేట్ కన్సల్టెన్సీ సంస్థ. తక్కువ బడ్జెట్ ప్లాట్లు, అందుబాటు ధరల ఫ్లాట్లు మరియు బడ్జెట్‌కు అనుగుణమైన వ్యవసాయ భూములపై ప్రత్యేక దృష్టితో, అక్కయ్యపాలెం నుండి పారదర్శకత, చట్టబద్ధత మరియు దీర్ఘకాలిక విలువలను ఆధారంగా చేసుకుని సలహా సేవలను అందిస్తోంది.',
        },
        {
          text: 'వ్యక్తులు, కుటుంబాలు, మొదటిసారి కొనుగోలు చేసే వారు మరియు పెట్టుబడిదారులు సురక్షితమైన మరియు అవగాహనతో కూడిన నిర్ణయాలు తీసుకునేలా మేము మార్గనిర్దేశం అందిస్తున్నాము.',
        },
        {
          text: 'నైతిక విలువలు, స్థానిక మార్కెట్ అవగాహన మరియు ప్రాజెక్ట్ ఆధారిత విధానమే మా అభివృద్ధికి మూలాధారం.',
        },
      ],

      activeTitle: 'మా సేవల పరిధి',

      activeServices: [
        'ఓపెన్ ప్లాట్లు – విశాఖపట్నంలో తక్కువ బడ్జెట్‌లో లభించే చట్టబద్ధత కలిగిన ప్లాట్లు',
        'నివాస ఫ్లాట్లు – విశాఖలో అందుబాటు ధరలతో సిద్ధంగా ఉన్న మరియు నిర్మాణంలో ఉన్న ఫ్లాట్లు',
        'వ్యవసాయ భూములు – ధృవీకరించిన యాజమాన్యంతో పెట్టుబడి విలువ కలిగిన బడ్జెట్ అనుకూల భూములు',
      ],

      evaluation:
        'ప్రతి ఆస్తి చట్టబద్ధత, ప్రాంత ప్రాముఖ్యత, మౌలిక సదుపాయాలు మరియు దీర్ఘకాలిక విలువ ఆధారంగా పరిశీలించబడుతుంది. అవసరాల ఆధారంగా లీజింగ్, రీసేల్, కమర్షియల్ లావాదేవీలు మరియు డాక్యుమెంటేషన్ సహాయం వంటి సేవలు అందించబడతాయి.',

      phased:
        'రైజ్‌రూట్స్ ఎంటర్‌ప్రైజెస్ ఒక స్వతంత్ర సలహా సంస్థగా పనిచేస్తుంది. తుది నిర్ణయాలు మరియు చట్టబద్ధ బాధ్యతలు సంబంధిత పక్షాలవే.',

      strengthsTitle: 'మా ప్రధాన బలాలు',

      strengths: [
        'తక్కువ బడ్జెట్ ప్లాట్లు మరియు ఫ్లాట్లలో విశ్వసనీయ సలహా',
        'పారదర్శక మరియు నైతిక విధానం',
        'చట్టబద్ధ ఆస్తులపై ప్రత్యేక దృష్టి',
        'బడ్జెట్‌కు అనుగుణమైన పెట్టుబడి మార్గనిర్దేశం',
        'లోన్ మరియు డాక్యుమెంటేషన్ సహాయం',
        'స్థానిక మార్కెట్ అనుభవంపై ఆధారిత మార్గనిర్దేశం',
      ],

      visionTitle: 'మా దృష్టి',

      vision:
        'రియల్ ఎస్టేట్ సలహాలో పారదర్శకత, క్రమశిక్షణ మరియు దీర్ఘకాలిక దృష్టిని తీసుకురావడం మా లక్ష్యం.',
    },
    hi: {
      title: 'हमारी सेवाएँ',

      intro: [
        {
          brand: 'राइज़रूट्स एंटरप्राइज़ेज़',
          text: '2020 में स्थापित, राइज़रूट्स एंटरप्राइज़ेज़ विशाखापट्टनम स्थित एक विश्वसनीय रियल एस्टेट परामर्श संस्था है। अक्कैय्यापालेम से संचालित होकर, हम कम बजट प्लॉट्स, किफायती फ्लैट्स और बजट-अनुकूल फार्म लैंड्स पर विशेष ध्यान देते हुए पारदर्शी, अनुपालन-आधारित और मूल्य-केंद्रित परामर्श सेवाएँ प्रदान करते हैं।',
        },
        {
          text: 'हम व्यक्तियों, परिवारों और निवेशकों को सुरक्षित और समझदारीपूर्ण संपत्ति निर्णय लेने में मार्गदर्शन प्रदान करते हैं।',
        },
        {
          text: 'हमारा दृष्टिकोण नैतिक प्रक्रियाओं, कानूनी अनुपालन और स्थानीय बाजार अनुभव पर आधारित है।',
        },
      ],

      activeTitle: 'हमारा सेवा परिदृश्य',

      activeServices: [
        'ओपन प्लॉट्स – विशाखापट्टनम में कम बजट में उपलब्ध कानूनी स्वामित्व वाले प्लॉट्स',
        'रेसिडेंशियल फ्लैट्स – विज़ाग में किफायती कीमतों पर रेडी और निर्माणाधीन फ्लैट्स',
        'फार्म लैंड – सत्यापित स्वामित्व वाली बजट-अनुकूल कृषि एवं निवेश भूमि',
      ],

      evaluation:
        'प्रत्येक संपत्ति का मूल्यांकन कानूनी स्थिति, स्थान, बुनियादी ढांचे और दीर्घकालिक संभावनाओं के आधार पर किया जाता है। आवश्यकता अनुसार अतिरिक्त परामर्श सेवाएँ भी प्रदान की जाती हैं।',

      phased:
        'राइज़रूट्स एंटरप्राइज़ेज़ एक स्वतंत्र परामर्श संस्था के रूप में कार्य करता है। अंतिम निर्णय और कानूनी जिम्मेदारियाँ संबंधित पक्षों की होती हैं।',

      strengthsTitle: 'हमारी प्रमुख विशेषताएँ',

      strengths: [
        'कम बजट प्लॉट्स और किफायती फ्लैट्स में विश्वसनीय सलाह',
        'पारदर्शी और नैतिक कार्यप्रणाली',
        'कानूनी रूप से अनुपालन योग्य संपत्तियाँ',
        'दीर्घकालिक निवेश मार्गदर्शन',
        'ऋण और दस्तावेज़ सहायता',
        'स्थानीय बाजार आधारित व्यावहारिक अनुभव',
      ],

      visionTitle: 'हमारा दृष्टिकोण',

      vision:
        'रियल एस्टेट परामर्श में अनुशासन, पारदर्शिता और दीर्घकालिक सोच लाना हमारा उद्देश्य है।',
    },
  };
}
