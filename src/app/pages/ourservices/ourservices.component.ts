import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { FestivalBlastComponent } from '../../festival/festival-blast/festival-blast.component';

import { FestivalService } from '../../festival/festival.service';
import { REAL_ESTATE_CONFIG } from '../../config/real-estate.config';
import { SeoPopupComponent } from '../seo-popup/seo-popup.component';
import { LanguageService, AppLang } from '../../services/language.service';
import { Router } from '@angular/router';

type SeoKey = 'lowBudgetPlots' | 'affordableFlats' | 'budgetLands';

const SEO_CATEGORY_MAP: Record<SeoKey, keyof typeof REAL_ESTATE_CONFIG> = {
  lowBudgetPlots: 'plots',
  affordableFlats: 'flats',
  budgetLands: 'farmLands',
};

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
  imports: [CommonModule, FestivalBlastComponent, SeoPopupComponent],
  templateUrl: './ourservices.component.html',
  styleUrls: ['./ourservices.component.css'],
})
export class LandingComponent implements OnInit {
  @Input() lang: AppLang = 'en';

  activeSeoKey: SeoKey | null = null;

  openSeoPopup(key: SeoKey) {
    this.activeSeoKey = key;
  }

  closeSeoPopup() {
    this.activeSeoKey = null;
  }

  navigateToRealEstate(): void {
    this.router.navigate(['/real-estate']);
  }

  festivalEffect: 'confetti' | 'fireworks' | 'flowers' | null = null;
  showHeaderEffect = false;
  festivalMessage?: string;
  festivalName?: string;

  seoKey: 'lowBudgetPlots' | 'affordableFlats' | 'budgetLands' = 'lowBudgetPlots';
  highlightCTA = true;
  get activeAreas(): string[] {
    if (!this.activeSeoKey) return [];

    const categoryKey = SEO_CATEGORY_MAP[this.activeSeoKey];
    return (REAL_ESTATE_CONFIG[categoryKey] || []).filter((a) => a.enabled).map((a) => a.name);
  }

  seoContent: Record<
    'lowBudgetPlots' | 'affordableFlats' | 'budgetLands',
    { h1: string; paragraphs: string[] }
  > = {
    lowBudgetPlots: {
      h1: 'Low Budget Plots in Visakhapatnam – Verified & Affordable Options',
      paragraphs: [
        'Low budget plots in Visakhapatnam are increasingly preferred by first-time buyers and long-term investors looking for secure and value-driven land ownership.',
        'These plot developments are typically located across emerging and well-connected regions around Vizag, offering long-term growth potential supported by infrastructure expansion.',
        'RiseRoots Enterprises assists buyers in identifying legally compliant, VMRDA-approved plots with clear titles, proper access roads, and future-ready layouts.',
      ],
    },

    affordableFlats: {
      h1: 'Affordable Flats in Visakhapatnam for Families & Investors',
      paragraphs: [
        'Affordable flats in Visakhapatnam provide a practical housing solution for families, working professionals, and investors seeking urban convenience within a planned budget.',
        'Residential projects across Vizag are witnessing steady demand due to connectivity, lifestyle infrastructure, and proximity to employment corridors.',
        'Our advisory supports buyers in shortlisting RERA-compliant projects, evaluating builder credibility, and understanding bank loan eligibility and documentation requirements.',
      ],
    },

    budgetLands: {
      h1: 'Budget Lands Near Vizag with Long-Term Investment Potential',
      paragraphs: [
        'Budget lands near Vizag are gaining popularity among investors looking for long-term appreciation and flexible investment entry points.',
        'Such land parcels are typically located along growth corridors, highway belts, and developing zones surrounding Visakhapatnam.',
        'RiseRoots Enterprises ensures due diligence covering ownership verification, road connectivity, zoning clarity, and long-term development prospects.',
      ],
    },
  };

  constructor(
    private langService: LanguageService,
    private festivalService: FestivalService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    setTimeout(() => (this.highlightCTA = false), 2500);
    /* 🔹 Language subscription */
    this.langService.lang$.subscribe((lang) => {
      this.lang = lang;
    });

    const routeKey = this.route.snapshot.data['seoKey'];
    if (routeKey) {
      this.seoKey = routeKey;
    }

    const festival = this.festivalService.getTodayFestival();
    if (!festival) return;

    this.festivalEffect = festival.blast
      ? (festival.effect as 'confetti' | 'fireworks' | 'flowers')
      : null;

    this.showHeaderEffect = !!festival.headerEffect;
    this.festivalMessage = festival.messageEnabled ? festival.message : undefined;
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

      /* =========================
     INTRO
  ========================= */
      intro: [
        {
          brand: 'రైజ్‌రూట్స్ ఎంటర్‌ప్రైజెస్',
          text: '2020లో స్థాపించబడిన రైజ్‌రూట్స్ ఎంటర్‌ప్రైజెస్, విశాఖపట్నం కేంద్రంగా పనిచేస్తున్న ఒక రియల్ ఎస్టేట్ కన్సల్టెన్సీ సంస్థ. తక్కువ బడ్జెట్ ప్లాట్లు, అందుబాటు ధరల ఫ్లాట్లు, మరియు బడ్జెట్‌కు అనుగుణమైన ఫామ్ ల్యాండ్స్‌లో ప్రత్యేక నైపుణ్యంతో, పారదర్శకమైన, చట్టబద్ధమైన మరియు విలువ ఆధారిత సలహా సేవలను క్రమబద్ధమైన ప్రక్రియల ద్వారా అందిస్తోంది.',
        },
        {
          text: 'వ్యక్తులు, కుటుంబాలు, మొదటిసారి కొనుగోలు చేసే వారు, పెట్టుబడిదారులు మరియు సంస్థలు సురక్షితమైన మరియు అవగాహనతో కూడిన నిర్ణయాలు తీసుకునేలా మేము సహకరిస్తాము. మా సలహా విధానం స్పష్టత, చట్టపరమైన అనుసరణ మరియు ఖర్చుకు తగిన విలువపై దృష్టి సారిస్తుంది.',
        },
        {
          text: 'ఈ రోజు, రైజ్‌రూట్స్ ఎంటర్‌ప్రైజెస్ విశాఖపట్నంలో ఒక విశ్వసనీయమైన, కస్టమర్-కేంద్రిత సలహా సంస్థగా గుర్తింపు పొందింది. తక్షణ అవసరాలు మరియు దీర్ఘకాలిక పెట్టుబడి అవకాశాల మధ్య సమతుల్యతను పాటిస్తూ, భవిష్యత్ విస్తరణకు బాధ్యతాయుతంగా సిద్ధంగా ఉంది.',
        },
      ],

      /* =========================
     SERVICE LANDSCAPE
  ========================= */
      activeTitle: 'మా సేవల పరిధి',

      activeServices: [
        'ఓపెన్ ప్లాట్లు – విశాఖపట్నంలో స్పష్టమైన టైటిల్స్, చట్టపరమైన అనుమతులు మరియు భవిష్యత్ వృద్ధి సామర్థ్యం కలిగిన తక్కువ బడ్జెట్ ప్లాట్లు',
        'నివాస ఫ్లాట్లు – విశాఖలో జీవనశైలి మరియు పెట్టుబడి అవసరాలకు అనుగుణంగా సిద్ధంగా ఉన్న మరియు నిర్మాణంలో ఉన్న అందుబాటు ధరల ఫ్లాట్లు',
        'ఫామ్ ల్యాండ్స్ – విశాఖపట్నం సమీపంలో ధృవీకరించిన యాజమాన్యం మరియు దీర్ఘకాలిక విలువ కలిగిన బడ్జెట్‌కు అనుకూలమైన వ్యవసాయ మరియు పెట్టుబడి భూములు',
      ],

      evaluation:
        'ప్రతి సిఫారసు చట్టపరమైన అనుసరణ, ప్రాంత ప్రాధాన్యత, మౌలిక సదుపాయాల అభివృద్ధి మరియు దీర్ఘకాలిక విలువ ఆధారంగా సమగ్రంగా పరిశీలించబడుతుంది. ఈ ప్రధాన సేవలతో పాటు, అవసరాన్ని బట్టి భూ లీజింగ్, రీసేల్ సపోర్ట్, కమర్షియల్ అమ్మకాలు మరియు లీజింగ్, ప్రాపర్టీ మేనేజ్‌మెంట్, జాయింట్ డెవలప్‌మెంట్ మోడల్స్ మరియు డాక్యుమెంటేషన్ సమన్వయం వంటి సేవలు కూడా అందించబడతాయి.',

      phased:
        'రైజ్‌రూట్స్ ఎంటర్‌ప్రైజెస్ ఒక స్వతంత్ర కన్సల్టెన్సీ మరియు సలహా సంస్థగా పనిచేస్తుంది. తుది నిర్ణయాలు, లావాదేవీలు మరియు చట్టపరమైన బాధ్యతలు సంబంధిత ప్రాపర్టీ యజమానులు, డెవలపర్లు మరియు కస్టమర్లవే.',

      /* =========================
     CORE STRENGTHS
  ========================= */
      strengthsTitle: 'మా ప్రధాన బలాలు',

      strengths: [
        'తక్కువ బడ్జెట్ ప్లాట్లు, అందుబాటు ధరల ఫ్లాట్లు మరియు ఫామ్ ల్యాండ్స్‌లో విశ్వసనీయ సలహా అనుభవం',
        'పారదర్శక, నైతిక మరియు కస్టమర్-కేంద్రిత కన్సల్టింగ్ విధానం',
        'VMRDA మరియు RERA అనుమతులతో కూడిన చట్టబద్ధ ఆస్తులపై బలమైన దృష్టి',
        'కస్టమర్ బడ్జెట్ మరియు దీర్ఘకాలిక ఆర్థిక లక్ష్యాలకు అనుగుణమైన పెట్టుబడి మార్గనిర్దేశం',
        'బ్యాంక్ లోన్ సదుపాయం మరియు పూర్తి స్థాయి డాక్యుమెంటేషన్ సపోర్ట్',
        'విశాఖపట్నంలోని స్థానిక మార్కెట్ అవగాహన మరియు ప్రత్యక్ష అనుభవంతో కూడిన స్పష్టమైన మార్గనిర్దేశం',
      ],

      /* =========================
     VISION
  ========================= */
      visionTitle: 'మా దృష్టి',

      vision:
        'ప్రాపర్టీ సలహా మరియు పెట్టుబడి నిర్ణయాల్లో క్రమశిక్షణ, పారదర్శకత మరియు దీర్ఘకాలిక దృష్టిని తీసుకురావడం — ప్రతి వ్యవహారం సమాచారం ఆధారంగా, చట్టబద్ధంగా, బడ్జెట్‌కు అనుగుణంగా మరియు స్థిరమైన భవిష్యత్ వృద్ధికి సిద్ధంగా ఉండేలా చేయడం.',
    },

    hi: {
      title: 'हमारी सेवाएँ',

      /* =========================
     INTRO
  ========================= */
      intro: [
        {
          brand: 'राइज़रूट्स एंटरप्राइज़ेज़',
          text: '2020 में स्थापित, राइज़रूट्स एंटरप्राइज़ेज़ विशाखापट्टनम स्थित एक रियल एस्टेट कंसल्टेंसी है, जो कम बजट प्लॉट्स, किफायती फ्लैट्स और बजट-अनुकूल फार्म लैंड्स में विशेषज्ञता रखती है। हम संरचित प्रक्रियाओं और अनुशासित निष्पादन के माध्यम से पारदर्शी, अनुपालन-आधारित और मूल्य-केंद्रित परामर्श सेवाएँ प्रदान करते हैं।',
        },
        {
          text: 'हम व्यक्तियों, परिवारों, पहली बार संपत्ति खरीदने वालों, निवेशकों और संगठनों के साथ मिलकर सुरक्षित और सूचित निर्णय लेने में सहायता करते हैं। हमारा परामर्श दृष्टिकोण स्पष्टता, कानूनी अनुपालन और किफायत पर केंद्रित है।',
        },
        {
          text: 'आज, राइज़रूट्स एंटरप्राइज़ेज़ विशाखापट्टनम में एक विश्वसनीय और ग्राहक-केंद्रित सलाहकार संस्था के रूप में पहचानी जाती है, जो तात्कालिक आवश्यकताओं और दीर्घकालिक निवेश संभावनाओं के बीच संतुलित मार्गदर्शन प्रदान करती है।',
        },
      ],

      /* =========================
     SERVICE LANDSCAPE
  ========================= */
      activeTitle: 'हमारा सेवा परिदृश्य',

      activeServices: [
        'ओपन प्लॉट्स – विशाखापट्टनम में स्पष्ट टाइटल्स, वैधानिक अनुमोदन और मजबूत भविष्य विकास क्षमता वाले कम बजट प्लॉट्स',
        'रेसिडेंशियल फ्लैट्स – विशाखापट्टनम में जीवनशैली और निवेश आवश्यकताओं के अनुरूप रेडी-टू-मूव और निर्माणाधीन किफायती फ्लैट्स',
        'फार्म लैंड्स – विशाखापट्टनम के आसपास सत्यापित स्वामित्व और दीर्घकालिक मूल्य वाले बजट-अनुकूल कृषि एवं निवेश भूमि',
      ],

      evaluation:
        'प्रत्येक सिफारिश का मूल्यांकन कानूनी अनुपालन, स्थान की गुणवत्ता, बुनियादी ढांचे के विकास और दीर्घकालिक मूल्य वृद्धि की संभावनाओं के आधार पर किया जाता है। इन मुख्य सेवाओं के अतिरिक्त, आवश्यकता के अनुसार भूमि लीज़िंग, पुनर्विक्रय सहायता, वाणिज्यिक बिक्री और लीज़िंग, प्रॉपर्टी प्रबंधन, संयुक्त विकास मॉडल और दस्तावेज़ समन्वय जैसी सेवाएँ भी प्रदान की जाती हैं।',

      phased:
        'राइज़रूट्स एंटरप्राइज़ेज़ एक स्वतंत्र कंसल्टेंसी और सलाहकार संगठन के रूप में कार्य करता है। अंतिम निर्णय, लेन-देन और वैधानिक अनुपालन संबंधित संपत्ति मालिकों, डेवलपर्स और ग्राहकों की जिम्मेदारी होती है।',

      /* =========================
     CORE STRENGTHS
  ========================= */
      strengthsTitle: 'हमारी प्रमुख विशेषताएँ',

      strengths: [
        'कम बजट प्लॉट्स, किफायती फ्लैट्स और फार्म लैंड्स में विश्वसनीय परामर्श अनुभव',
        'पारदर्शी, नैतिक और ग्राहक-केंद्रित कंसल्टिंग दृष्टिकोण',
        'VMRDA और RERA अनुमोदनों सहित कानूनी रूप से अनुपालन योग्य संपत्तियों पर मजबूत फोकस',
        'ग्राहक बजट और दीर्घकालिक वित्तीय लक्ष्यों के अनुरूप निवेश मार्गदर्शन',
        'बैंक लोन सुविधा और एंड-टू-एंड दस्तावेज़ सहायता',
        'विशाखापट्टनम में मजबूत स्थानीय बाजार समझ और ऑन-ग्राउंड अनुभव पर आधारित स्पष्ट मार्गदर्शन',
      ],

      /* =========================
     VISION
  ========================= */
      visionTitle: 'हमारा दृष्टिकोण',

      vision:
        'संपत्ति परामर्श और निवेश निर्णयों में अनुशासन, पारदर्शिता और दीर्घकालिक सोच लाना — ताकि प्रत्येक सहभागिता सूचित, कानूनी रूप से सुरक्षित, बजट-अनुकूल और सतत भविष्य विकास के लिए तैयार हो।',
    },
  };
}
