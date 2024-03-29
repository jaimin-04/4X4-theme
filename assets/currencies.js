(() => {
  // app/scripts/common/formats.js
  var formats = {
    USD: {
      money_format: "${{amount}}",
      money_with_currency_format: "${{amount}} USD"
    },
    GNF: {
      money_format: "&#70;&#71; {{amount}}",
      money_with_currency_format: "&#70;&#71; {{amount}} GNF"
    },
    EUR: {
      money_format: "&euro;{{amount}}",
      money_with_currency_format: "&euro;{{amount}} EUR"
    },
    GBP: {
      money_format: "&pound;{{amount}}",
      money_with_currency_format: "&pound;{{amount}} GBP"
    },
    CAD: {
      money_format: "${{amount}}",
      money_with_currency_format: "${{amount}} CAD"
    },
    ALL: {
      money_format: "Lek {{amount}}",
      money_with_currency_format: "Lek {{amount}} ALL"
    },
    DZD: {
      money_format: "DA {{amount}}",
      money_with_currency_format: "DA {{amount}} DZD"
    },
    AOA: {
      money_format: "Kz{{amount}}",
      money_with_currency_format: "Kz{{amount}} AOA"
    },
    ARS: {
      money_format: "${{amount_with_comma_separator}}",
      money_with_currency_format: "${{amount_with_comma_separator}} ARS"
    },
    AMD: {
      money_format: "{{amount}} AMD",
      money_with_currency_format: "{{amount}} AMD"
    },
    AWG: {
      money_format: "Afl{{amount}}",
      money_with_currency_format: "Afl{{amount}} AWG"
    },
    AUD: {
      money_format: "${{amount}}",
      money_with_currency_format: "${{amount}} AUD"
    },
    BBD: {
      money_format: "${{amount}}",
      money_with_currency_format: "${{amount}} Bds"
    },
    AZN: {
      money_format: "m.{{amount}}",
      money_with_currency_format: "m.{{amount}} AZN"
    },
    BDT: {
      money_format: "Tk {{amount}}",
      money_with_currency_format: "Tk {{amount}} BDT"
    },
    BSD: {
      money_format: "BS${{amount}}",
      money_with_currency_format: "BS${{amount}} BSD"
    },
    BHD: {
      money_format: "{{amount}}0 BD",
      money_with_currency_format: "{{amount}}0 BHD"
    },
    BYR: {
      money_format: "Br {{amount}}",
      money_with_currency_format: "Br {{amount}} BYR"
    },
    BZD: {
      money_format: "BZ${{amount}}",
      money_with_currency_format: "BZ${{amount}} BZD"
    },
    BTN: {
      money_format: "Nu {{amount}}",
      money_with_currency_format: "Nu {{amount}} BTN"
    },
    BAM: {
      money_format: "KM {{amount_with_comma_separator}}",
      money_with_currency_format: "KM {{amount_with_comma_separator}} BAM"
    },
    BRL: {
      money_format: "R$ {{amount_with_comma_separator}}",
      money_with_currency_format: "R$ {{amount_with_comma_separator}} BRL"
    },
    BOB: {
      money_format: "Bs{{amount_with_comma_separator}}",
      money_with_currency_format: "Bs{{amount_with_comma_separator}} BOB"
    },
    BWP: {
      money_format: "P{{amount}}",
      money_with_currency_format: "P{{amount}} BWP"
    },
    BND: {
      money_format: "${{amount}}",
      money_with_currency_format: "${{amount}} BND"
    },
    BGN: {
      money_format: "{{amount}} \u043B\u0432",
      money_with_currency_format: "{{amount}} \u043B\u0432 BGN"
    },
    MMK: {
      money_format: "K{{amount}}",
      money_with_currency_format: "K{{amount}} MMK"
    },
    KHR: {
      money_format: "KHR{{amount}}",
      money_with_currency_format: "KHR{{amount}}"
    },
    KYD: {
      money_format: "${{amount}}",
      money_with_currency_format: "${{amount}} KYD"
    },
    XAF: {
      money_format: "FCFA{{amount}}",
      money_with_currency_format: "FCFA{{amount}} XAF"
    },
    CLP: {
      money_format: "${{amount_no_decimals}}",
      money_with_currency_format: "${{amount_no_decimals}} CLP"
    },
    CNY: {
      money_format: "&#165;{{amount}}",
      money_with_currency_format: "&#165;{{amount}} CNY"
    },
    COP: {
      money_format: "${{amount_with_comma_separator}}",
      money_with_currency_format: "${{amount_with_comma_separator}} COP"
    },
    CRC: {
      money_format: "&#8353; {{amount_with_comma_separator}}",
      money_with_currency_format: "&#8353; {{amount_with_comma_separator}} CRC"
    },
    HRK: {
      money_format: "{{amount_with_comma_separator}} kn",
      money_with_currency_format: "{{amount_with_comma_separator}} kn HRK"
    },
    CZK: {
      money_format: "{{amount_with_comma_separator}} K&#269;",
      money_with_currency_format: "{{amount_with_comma_separator}} K&#269;"
    },
    DKK: {
      money_format: "{{amount_with_comma_separator}}",
      money_with_currency_format: "kr.{{amount_with_comma_separator}}"
    },
    DOP: {
      money_format: "RD$ {{amount}}",
      money_with_currency_format: "RD$ {{amount}}"
    },
    XCD: {
      money_format: "${{amount}}",
      money_with_currency_format: "EC${{amount}}"
    },
    EGP: {
      money_format: "LE {{amount}}",
      money_with_currency_format: "LE {{amount}} EGP"
    },
    ETB: {
      money_format: "Br{{amount}}",
      money_with_currency_format: "Br{{amount}} ETB"
    },
    XPF: {
      money_format: "{{amount_no_decimals_with_comma_separator}} XPF",
      money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} XPF"
    },
    FJD: {
      money_format: "${{amount}}",
      money_with_currency_format: "FJ${{amount}}"
    },
    GMD: {
      money_format: "D {{amount}}",
      money_with_currency_format: "D {{amount}} GMD"
    },
    GHS: {
      money_format: "GH&#8373;{{amount}}",
      money_with_currency_format: "GH&#8373;{{amount}}"
    },
    GTQ: {
      money_format: "Q{{amount}}",
      money_with_currency_format: "{{amount}} GTQ"
    },
    GYD: {
      money_format: "G${{amount}}",
      money_with_currency_format: "${{amount}} GYD"
    },
    GEL: {
      money_format: "{{amount}} GEL",
      money_with_currency_format: "{{amount}} GEL"
    },
    HNL: {
      money_format: "L {{amount}}",
      money_with_currency_format: "L {{amount}} HNL"
    },
    HKD: {
      money_format: "${{amount}}",
      money_with_currency_format: "HK${{amount}}"
    },
    HUF: {
      money_format: "{{amount_no_decimals_with_comma_separator}}",
      money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} Ft"
    },
    ISK: {
      money_format: "{{amount_no_decimals}} kr",
      money_with_currency_format: "{{amount_no_decimals}} kr ISK"
    },
    INR: {
      money_format: "Rs. {{amount}}",
      money_with_currency_format: "Rs. {{amount}}"
    },
    IDR: {
      money_format: "{{amount_with_comma_separator}}",
      money_with_currency_format: "Rp {{amount_with_comma_separator}}"
    },
    ILS: {
      money_format: "{{amount}} NIS",
      money_with_currency_format: "{{amount}} NIS"
    },
    JMD: {
      money_format: "${{amount}}",
      money_with_currency_format: "${{amount}} JMD"
    },
    JPY: {
      money_format: "&#165;{{amount_no_decimals}}",
      money_with_currency_format: "&#165;{{amount_no_decimals}} JPY"
    },
    JEP: {
      money_format: "&pound;{{amount}}",
      money_with_currency_format: "&pound;{{amount}} JEP"
    },
    JOD: {
      money_format: "{{amount}}0 JD",
      money_with_currency_format: "{{amount}}0 JOD"
    },
    KZT: {
      money_format: "{{amount}} KZT",
      money_with_currency_format: "{{amount}} KZT"
    },
    KES: {
      money_format: "KSh{{amount}}",
      money_with_currency_format: "KSh{{amount}}"
    },
    KWD: {
      money_format: "{{amount}}0 KD",
      money_with_currency_format: "{{amount}}0 KWD"
    },
    KGS: {
      money_format: "\u043B\u0432{{amount}}",
      money_with_currency_format: "\u043B\u0432{{amount}}"
    },
    LVL: {
      money_format: "Ls {{amount}}",
      money_with_currency_format: "Ls {{amount}} LVL"
    },
    LBP: {
      money_format: "L&pound;{{amount}}",
      money_with_currency_format: "L&pound;{{amount}} LBP"
    },
    LTL: {
      money_format: "{{amount}} Lt",
      money_with_currency_format: "{{amount}} Lt"
    },
    MGA: {
      money_format: "Ar {{amount}}",
      money_with_currency_format: "Ar {{amount}} MGA"
    },
    MKD: {
      money_format: "\u0434\u0435\u043D {{amount}}",
      money_with_currency_format: "\u0434\u0435\u043D {{amount}} MKD"
    },
    MOP: {
      money_format: "MOP${{amount}}",
      money_with_currency_format: "MOP${{amount}}"
    },
    MVR: {
      money_format: "Rf{{amount}}",
      money_with_currency_format: "Rf{{amount}} MRf"
    },
    MXN: {
      money_format: "$ {{amount}}",
      money_with_currency_format: "$ {{amount}} MXN"
    },
    MYR: {
      money_format: "RM{{amount}} MYR",
      money_with_currency_format: "RM{{amount}} MYR"
    },
    MUR: {
      money_format: "Rs {{amount}}",
      money_with_currency_format: "Rs {{amount}} MUR"
    },
    MDL: {
      money_format: "{{amount}} MDL",
      money_with_currency_format: "{{amount}} MDL"
    },
    MAD: {
      money_format: "{{amount}} dh",
      money_with_currency_format: "Dh {{amount}} MAD"
    },
    MNT: {
      money_format: "{{amount_no_decimals}} &#8366",
      money_with_currency_format: "{{amount_no_decimals}} MNT"
    },
    MZN: {
      money_format: "{{amount}} Mt",
      money_with_currency_format: "Mt {{amount}} MZN"
    },
    NAD: {
      money_format: "N${{amount}}",
      money_with_currency_format: "N${{amount}} NAD"
    },
    NPR: {
      money_format: "Rs{{amount}}",
      money_with_currency_format: "Rs{{amount}} NPR"
    },
    ANG: {
      money_format: "&fnof;{{amount}}",
      money_with_currency_format: "{{amount}} NA&fnof;"
    },
    NZD: {
      money_format: "${{amount}}",
      money_with_currency_format: "${{amount}} NZD"
    },
    NIO: {
      money_format: "C${{amount}}",
      money_with_currency_format: "C${{amount}} NIO"
    },
    NGN: {
      money_format: "&#8358;{{amount}}",
      money_with_currency_format: "&#8358;{{amount}} NGN"
    },
    NOK: {
      money_format: "kr {{amount_with_comma_separator}}",
      money_with_currency_format: "kr {{amount_with_comma_separator}} NOK"
    },
    OMR: {
      money_format: "{{amount_with_comma_separator}} OMR",
      money_with_currency_format: "{{amount_with_comma_separator}} OMR"
    },
    PKR: {
      money_format: "Rs.{{amount}}",
      money_with_currency_format: "Rs.{{amount}} PKR"
    },
    PGK: {
      money_format: "K {{amount}}",
      money_with_currency_format: "K {{amount}} PGK"
    },
    PYG: {
      money_format: "Gs. {{amount_no_decimals_with_comma_separator}}",
      money_with_currency_format: "Gs. {{amount_no_decimals_with_comma_separator}} PYG"
    },
    PEN: {
      money_format: "S/. {{amount}}",
      money_with_currency_format: "S/. {{amount}} PEN"
    },
    PHP: {
      money_format: "&#8369;{{amount}}",
      money_with_currency_format: "&#8369;{{amount}} PHP"
    },
    PLN: {
      money_format: "{{amount_with_comma_separator}} zl",
      money_with_currency_format: "{{amount_with_comma_separator}} zl PLN"
    },
    QAR: {
      money_format: "QAR {{amount_with_comma_separator}}",
      money_with_currency_format: "QAR {{amount_with_comma_separator}}"
    },
    RON: {
      money_format: "{{amount_with_comma_separator}} lei",
      money_with_currency_format: "{{amount_with_comma_separator}} lei RON"
    },
    RUB: {
      money_format: "&#1088;&#1091;&#1073;{{amount_with_comma_separator}}",
      money_with_currency_format: "&#1088;&#1091;&#1073;{{amount_with_comma_separator}} RUB"
    },
    RWF: {
      money_format: "{{amount_no_decimals}} RF",
      money_with_currency_format: "{{amount_no_decimals}} RWF"
    },
    WST: {
      money_format: "WS$ {{amount}}",
      money_with_currency_format: "WS$ {{amount}} WST"
    },
    SAR: {
      money_format: "{{amount}} SR",
      money_with_currency_format: "{{amount}} SAR"
    },
    STD: {
      money_format: "Db {{amount}}",
      money_with_currency_format: "Db {{amount}} STD"
    },
    RSD: {
      money_format: "{{amount}} RSD",
      money_with_currency_format: "{{amount}} RSD"
    },
    SCR: {
      money_format: "Rs {{amount}}",
      money_with_currency_format: "Rs {{amount}} SCR"
    },
    SGD: {
      money_format: "${{amount}}",
      money_with_currency_format: "${{amount}} SGD"
    },
    SYP: {
      money_format: "S&pound;{{amount}}",
      money_with_currency_format: "S&pound;{{amount}} SYP"
    },
    ZAR: {
      money_format: "R {{amount}}",
      money_with_currency_format: "R {{amount}} ZAR"
    },
    KRW: {
      money_format: "&#8361;{{amount_no_decimals}}",
      money_with_currency_format: "&#8361;{{amount_no_decimals}} KRW"
    },
    LKR: {
      money_format: "Rs {{amount}}",
      money_with_currency_format: "Rs {{amount}} LKR"
    },
    SEK: {
      money_format: "{{amount_no_decimals}} kr",
      money_with_currency_format: "{{amount_no_decimals}} kr SEK"
    },
    CHF: {
      money_format: "SFr. {{amount}}",
      money_with_currency_format: "SFr. {{amount}} CHF"
    },
    TWD: {
      money_format: "${{amount}}",
      money_with_currency_format: "${{amount}} TWD"
    },
    THB: {
      money_format: "{{amount}} &#xe3f;",
      money_with_currency_format: "{{amount}} &#xe3f; THB"
    },
    TZS: {
      money_format: "{{amount}} TZS",
      money_with_currency_format: "{{amount}} TZS"
    },
    TTD: {
      money_format: "${{amount}}",
      money_with_currency_format: "${{amount}} TTD"
    },
    TND: {
      money_format: "{{amount}}",
      money_with_currency_format: "{{amount}} DT"
    },
    TRY: {
      money_format: "{{amount}}TL",
      money_with_currency_format: "{{amount}}TL"
    },
    UGX: {
      money_format: "Ush {{amount_no_decimals}}",
      money_with_currency_format: "Ush {{amount_no_decimals}} UGX"
    },
    UAH: {
      money_format: "\u20B4{{amount}}",
      money_with_currency_format: "\u20B4{{amount}} UAH"
    },
    AED: {
      money_format: "Dhs. {{amount}}",
      money_with_currency_format: "Dhs. {{amount}} AED"
    },
    UYU: {
      money_format: "${{amount_with_comma_separator}}",
      money_with_currency_format: "${{amount_with_comma_separator}} UYU"
    },
    VUV: {
      money_format: "${{amount}}",
      money_with_currency_format: "${{amount}}VT"
    },
    VEF: {
      money_format: "Bs. {{amount_with_comma_separator}}",
      money_with_currency_format: "Bs. {{amount_with_comma_separator}} VEF"
    },
    VND: {
      money_format: "{{amount_no_decimals_with_comma_separator}}&#8363;",
      money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} VND"
    },
    XBT: {
      money_format: "{{amount_no_decimals}} BTC",
      money_with_currency_format: "{{amount_no_decimals}} BTC"
    },
    XOF: {
      money_format: "CFA{{amount}}",
      money_with_currency_format: "CFA{{amount}} XOF"
    },
    ZMW: {
      money_format: "K{{amount_no_decimals_with_comma_separator}}",
      money_with_currency_format: "ZMW{{amount_no_decimals_with_comma_separator}}"
    },
    EEK: {
      money_format: "{{amount}}",
      money_with_currency_format: "{{amount}} EEK"
    },
    SKK: {
      money_format: "{{amount}}",
      money_with_currency_format: "{{amount}} SKK"
    },
    XPT: {
      money_format: "{{amount}}",
      money_with_currency_format: "{{amount}} XPT"
    },
    LAK: {
      money_format: "&#8365; {{amount}}",
      money_with_currency_format: "&#8365; {{amount}} LAK"
    },
    CDF: {
      money_format: "&#70;&#67; {{amount}}",
      money_with_currency_format: "&#70;&#67; {{amount}} CDF"
    },
    KPW: {
      money_format: "&#8361; {{amount}}",
      money_with_currency_format: "&#8361; {{amount}} KPW"
    },
    SPL: {
      money_format: "{{amount}}",
      money_with_currency_format: "{{amount}} SPL"
    },
    ZWD: {
      money_format: "{{amount}}",
      money_with_currency_format: "{{amount}} ZWD"
    },
    LYD: {
      money_format: "&#1604;.&#1583; {{amount}}",
      money_with_currency_format: "&#1604;.&#1583; {{amount}} LYD"
    },
    BIF: {
      money_format: "&#70;&#66;&#117; {{amount}}",
      money_with_currency_format: "&#70;&#66;&#117; {{amount}} BIF"
    },
    GIP: {
      money_format: "&#163; {{amount}}",
      money_with_currency_format: "&#163; {{amount}} GIP"
    },
    ERN: {
      money_format: "{{amount}}",
      money_with_currency_format: "{{amount}} ERN"
    },
    MWK: {
      money_format: "&#77;&#75; {{amount}}",
      money_with_currency_format: "&#77;&#75; {{amount}} MWK"
    },
    CUP: {
      money_format: "{{amount}}",
      money_with_currency_format: "{{amount}} CUP"
    },
    CVE: {
      money_format: "&#36; {{amount}}",
      money_with_currency_format: "&#36; {{amount}} CVE"
    },
    LSL: {
      money_format: "&#76; {{amount}}",
      money_with_currency_format: "&#76; {{amount}} LSL"
    },
    XAG: {
      money_format: "{{amount}}",
      money_with_currency_format: "{{amount}} XAG"
    },
    TOP: {
      money_format: "&#84;&#36; {{amount}}",
      money_with_currency_format: "&#84;&#36; {{amount}} TOP"
    },
    SHP: {
      money_format: "&#163; {{amount}}",
      money_with_currency_format: "&#163; {{amount}} SHP"
    },
    HTG: {
      money_format: "&#71; {{amount}}",
      money_with_currency_format: "&#71; {{amount}} HTG"
    },
    FKP: {
      money_format: "&#163; {{amount}}",
      money_with_currency_format: "&#163; {{amount}} FKP"
    },
    TVD: {
      money_format: "{{amount}}",
      money_with_currency_format: "{{amount}} TVD"
    },
    GGP: {
      money_format: "{{amount}}",
      money_with_currency_format: "{{amount}} GGP"
    },
    KMF: {
      money_format: "&#67;&#70; {{amount}}",
      money_with_currency_format: "&#67;&#70; {{amount}} KMF"
    },
    IRR: {
      money_format: "&#65020; {{amount}}",
      money_with_currency_format: "&#65020; {{amount}} IRR"
    },
    XPD: {
      money_format: "{{amount}}",
      money_with_currency_format: "{{amount}} XPD"
    },
    SRD: {
      money_format: "&#36; {{amount}}",
      money_with_currency_format: "&#36; {{amount}} SRD"
    },
    SZL: {
      money_format: "&#76; {{amount}}",
      money_with_currency_format: "&#76; {{amount}} SZL"
    },
    BMD: {
      money_format: "&#36; {{amount}}",
      money_with_currency_format: "&#36; {{amount}} BMD"
    },
    MRO: {
      money_format: "&#85;&#77; {{amount}}",
      money_with_currency_format: "&#85;&#77; {{amount}} MRO"
    },
    YER: {
      money_format: "&#65020; {{amount}}",
      money_with_currency_format: "&#65020; {{amount}} YER"
    },
    SLL: {
      money_format: "&#76;&#101; {{amount}}",
      money_with_currency_format: "&#76;&#101; {{amount}} SLL"
    },
    TJS: {
      money_format: "&#84;&#74;&#83; {{amount}}",
      money_with_currency_format: "&#84;&#74;&#83; {{amount}} TJS"
    },
    DJF: {
      money_format: "&#70;&#100;&#106; {{amount}}",
      money_with_currency_format: "&#70;&#100;&#106; {{amount}} DJF"
    },
    SDG: {
      money_format: "&#163; {{amount}}",
      money_with_currency_format: "&#163; {{amount}} SDG"
    },
    IMP: {
      money_format: "{{amount}}",
      money_with_currency_format: "{{amount}} IMP"
    },
    XDR: {
      money_format: "{{amount}}",
      money_with_currency_format: "{{amount}} XDR"
    },
    LRD: {
      money_format: "&#36; {{amount}}",
      money_with_currency_format: "&#36; {{amount}} LRD"
    },
    XAU: {
      money_format: "{{amount}}",
      money_with_currency_format: "{{amount}} XAU"
    },
    TMT: {
      money_format: "&#109; {{amount}}",
      money_with_currency_format: "&#109; {{amount}} TMT"
    },
    IQD: {
      money_format: "&#1593;.&#1583; {{amount}}",
      money_with_currency_format: "&#1593;.&#1583; {{amount}} IQD"
    },
    UZS: {
      money_format: "&#1083;&#1074; {{amount}}",
      money_with_currency_format: "&#1083;&#1074; {{amount}} UZS"
    },
    AFN: {
      money_format: "&#65;&#102; {{amount}}",
      money_with_currency_format: "&#65;&#102; {{amount}} AFN"
    },
    SOS: {
      money_format: "&#83; {{amount}}",
      money_with_currency_format: "&#83; {{amount}} SOS"
    },
    PAB: {
      money_format: "&#66;&#47;&#46; {{amount}}",
      money_with_currency_format: "&#66;&#47;&#46; {{amount}} PAB"
    },
    CUC: {
      money_format: "{{amount}}",
      money_with_currency_format: "{{amount}} CUC"
    },
    SVC: {
      money_format: "&#36; {{amount}}",
      money_with_currency_format: "&#36; {{amount}} SVC"
    },
    SBD: {
      money_format: "&#36; {{amount}}",
      money_with_currency_format: "&#36; {{amount}} SBD"
    },
    BYN: {
      money_format: "Br {{amount}}",
      money_with_currency_format: "Br {{amount}} BYN"
    }
  };
  var formats_default = formats;

  // app/scripts/currencies.js
  var Currencies = class {
    constructor(value) {
      Object.assign(this, {
        ...value,
        formats: formats_default,
        observeRegistered: [],
        originCurrency: theme.currency.current,
        currentCurrency: theme.currency.current,
        pattern: theme.currency.pattern
      });
      document.getElementsByClassName("js-money").forEach(this.registerObserve.bind(this));
    }
    registerObserve(element) {
      let cents = 0;
      if (this.formats[this.originCurrency][this.pattern].includes("amount_no_decimals")) {
        cents = parseInt(element.innerHTML.replace(/[^0-9]/g, ""), 10) * 100;
      } else if (this.originCurrency === "JOD" || this.originCurrency == "KWD" || this.originCurrency == "BHD") {
        cents = parseInt(element.innerHTML.replace(/[^0-9]/g, ""), 10) / 10;
      } else {
        cents = parseInt(element.innerHTML.replace(/[^0-9]/g, ""), 10);
      }
      element.setAttribute("data-money", cents);
      element.setAttribute("data-currency", this.currentCurrency);
      let observe = new MutationObserver((records) => {
        records.forEach((record) => {
          let { attributeName, target } = record;
          let { money, currency } = target.dataset;
          let format = this.formats[currency][this.pattern] || "{{amount}}";
          switch (attributeName) {
            case "data-money": {
              target.innerHTML = this.convert(money, this.originCurrency, currency).toCurrency(format);
              [...target.attributes].forEach(({ name }) => {
                if (name.includes("data-currency-")) {
                  let isoCode = name.replace("data-currency-", "").toUpperCase();
                  let formatOfAttribute = this.formats[isoCode][this.pattern] || "{{amount}}";
                  target.setAttribute(name, this.convert(money, this.originCurrency, isoCode).toCurrency(formatOfAttribute));
                }
              });
              break;
            }
            case "data-currency": {
              let currencyAvailable = target.getAttribute(`data-currency-${currency}`);
              let moneyConverted = this.convert(money, this.originCurrency, currency).toCurrency(format);
              if (currencyAvailable) {
                target.innerHTML = currencyAvailable === moneyConverted ? currencyAvailable : (target.setAttribute(`data-currency-${currency}`, moneyConverted), moneyConverted);
              } else {
                target.setAttribute(`data-currency-${currency}`, moneyConverted);
                target.innerHTML = moneyConverted;
              }
              break;
            }
          }
        });
      });
      observe.observe(element, { attributeFilter: ["data-currency", "data-money"], attributeOldValue: true });
      element.setAttribute(`data-currency-${this.originCurrency}`, cents.toCurrency());
      if (this.originCurrency != this.currentCurrency) {
        element.setAttribute("data-currency", this.currentCurrency);
      }
      this.observeRegistered.push(element);
    }
    switchCurrency(currencyCode) {
      this.currentCurrency = currencyCode;
      this.observeRegistered.forEach((item) => {
        !!item && item.setAttribute("data-currency", currencyCode);
      });
      this.observeRegistered = this.observeRegistered.filter(Boolean);
      if (this.originCurrency === currencyCode) {
        AT.cookie.delete("arn-currency");
      } else {
        AT.cookie.set("arn-currency", currencyCode, 7);
      }
    }
    convertToCurrentCurrency(cents) {
      let format = this.formats[this.currentCurrency][this.pattern] || "{{amount}}";
      return this.convert(cents, this.originCurrency, this.currentCurrency).toCurrency(format);
    }
  };
  window.Currencies = new Currencies(Currency);
})();
