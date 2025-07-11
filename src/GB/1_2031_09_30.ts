import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "VF-3",
    ownerLongName: "Vodafone/Three UK",
    startFreq: 2110.3,
    endFreq: 2114.9,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1920.3,
      endFreq: 1924.9,
    },
    uarfcns: [10564],
    earfcns: [76],
    nrarfcns: [423610],
    details: [
      "EARFCN 76 and NRARFCN 423610 for 15 MHz carrier in conjunction with upper block",
    ],
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/__data/assets/pdf_file/0023/249134/SA-2100-LICENCE-H3G-1268475-18-11-22.pdf",
    },
  },
  {
    owner: "VF-3",
    ownerLongName: "Vodafone/Three UK",
    startFreq: 2114.9,
    endFreq: 2124.9,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1924.9,
      endFreq: 1934.9,
    },
    earfcns: [99, 98, 97, 76],
    uarfcns: [10588],
    nrarfcns: [424130, 423610],
    details: [
      "UARFCN 10588 is being refarmed for B1 LTE.",
      "EARFCN 98 is used in areas where low-band priorities have been adjusted",
      "EARFCN 76 and NRARFCN 423610 for 15 MHz carrier in conjunction with lower block",
      "NRARFCN 424130 starting to be used for n1 DSS deployments as of early 2023.",
    ],
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/__data/assets/pdf_file/0023/249134/SA-2100-LICENCE-H3G-1268475-18-11-22.pdf",
    },
  },
  {
    owner: "VF-3",
    ownerLongName: "Vodafone/Three UK",
    startFreq: 2124.9,
    endFreq: 2130.3,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1934.9,
      endFreq: 1940.3,
    },
    earfcns: [],
    uarfcns: [],
    nrarfcns: [],
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/spectrum/frequencies/trades",
    },
  },
  {
    owner: "O2",
    ownerLongName: "O2 UK",
    startFreq: 2130.3,
    endFreq: 2139.7,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1940.3,
      endFreq: 1949.7,
    },
    earfcns: [],
    uarfcns: [],
    nrarfcns: [],
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/spectrum/frequencies/trades",
    },
  },
  {
    owner: "O2",
    ownerLongName: "O2 UK",
    startFreq: 2139.7,
    endFreq: 2149.7,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1949.7,
      endFreq: 1959.7,
    },
    uarfcns: [],
    earfcns: [],
    nrarfcns: [],
    details: [],
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/spectrum/frequencies/trades",
    },
  },
  {
    owner: "EE",
    startFreq: 2149.7,
    endFreq: 2154.7,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1959.7,
      endFreq: 1964.7,
    },
    earfcns: [497],
    uarfcns: [10761],
    details: ["Some LTE/NR deployments utilise a 20 MHz carrier"],
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/__data/assets/pdf_file/0022/249133/SA-2100-LICENCE-EE-1268473-09-11-22.pdf",
    },
  },
  {
    owner: "EE",
    startFreq: 2154.7,
    endFreq: 2169.7,
    type: "fddDown",
    pairedWith: {
      type: "fddUp",
      startFreq: 1964.7,
      endFreq: 1979.7,
    },
    earfcns: [497, 522],
    nrarfcns: [431810, 433250, 432530],
    details: [
      "Some LTE/NR deployments utilise a 20 MHz carrier",
      "5G NR operating primarily as DSS n1, with some deployments as pure NR.",
      "Was used for B1 3G UMTS, but this has been refarmed to B1 LTE.",
    ],
    sourceInfo: {
      type: "url",
      url: "https://www.ofcom.org.uk/__data/assets/pdf_file/0022/249133/SA-2100-LICENCE-EE-1268473-09-11-22.pdf",
    },
  },
];

export default data;
