/** Functions for generating specific data **/

function getTotalPeople() {
  return 1854 + 2381 + 5 + 28;
}

function createGenderData() {
  return [
    {"key": "male", "value": 1854},
    {"key": "female", "value": 2381},
    {"key": "non-binary", "value": 28},
    {"key": "other", "value": 5}
  ];
}

function createGenderListData() {
  return [2182, 3413, 32];
}
function createYearData() {
  return [
    {"key": "freshman", "value": 659}, 
    {"key": "sophomore", "value": 1156},
    {"key": "junior", "value": 1208},
    {"key": "senior", "value": 1020},
    {"key": "masters", "value": 128},
    {"key": "phd", "value": 91},
    {"key": "faculty", "value": 6}
  ];
}

function createEthnicityData() {
  return [
    {"key": "white", "value": 2172}, 
    {"key": "black", "value": 322},
    {"key": "east asian", "value": 1252},
    {"key": "south asian", "value": 517},
    {"key": "hispanic or latino", "value": 480},
    {"key": "native american", "value": 18},
    {"key": "pacific islander", "value": 32},
    {"key": "middle eastern", "value": 83},
    {"key": "other", "value": 105}
  ];
}

function createActivitiesData() {
  return [
    {"key": "professional club", "value": 1089}, 
    {"key": "social club", "value": 1229},
    {"key": "cultural club", "value": 860},
    {"key": "greek life", "value": 1019},
    {"key": "professional fraternity", "value": 456},
    {"key": "athlete", "value": 314},
    {"key": "club sports", "value": 669},
    {"key": "project team", "value": 820},
    {"key": "ta", "value": 929},
    {"key": "ra", "value": 72},
    {"key": "other clubs", "value": 1531},
    {"key": "none", "value": 337},
  ];
}

function createCollegeData() {
  return [
    {"key": "aap", "value": 97}, 
    {"key": "arts", "value": 1276},
    {"key": "cals", "value": 916},
    {"key": "engineering", "value": 1022},
    {"key": "hotel", "value": 233},
    {"key": "humec", "value": 332},
    {"key": "ilr", "value": 237}	
  ];
}

function createInIthacaData() {
  return [
    {"key": "in Ithaca", "value": 3834}, 
    {"key": "not in Ithaca", "value": 279},	
  ];
}

function createFemaleHeightData() {
  return [0, 0, 2, 5, 19, 91, 119, 215, 299, 383, 302, 332, 246, 167, 96, 55, 30, 12, 4, 4, 0, 0, 0, 0, 0, 0];
}

function createMaleHeightData() {
  return [0, 2, 0, 0, 0, 1, 1, 3, 12, 18, 32, 60, 146, 205, 237, 254, 242, 265, 145, 111, 65, 28, 17, 0, 0, 0];
}

function createSleepData() {
  return [
    {"0": 1262},
    {"1": 1176},
    {"2": 747},
    {"3": 194},
    {"4": 41},
    {"5": 11},
    {"6": 0},
    {"7": 0},
    {"8": 0},
    {"9": 0},
    {"10": 0},
    {"11": 0},
    {"12": 0},
    {"13": 0},
    {"14": 0},
    {"15": 0},
    {"16": 0},
    {"17": 0},
    {"18": 6},
    {"19": 18},
    {"20": 11},
    {"21": 12},
    {"22": 98},
    {"23": 416}
  ];
}

function createWakeData() {
  return [
    {"0": 0},
    {"1": 0},
    {"2": 0},
    {"3": 0},
    {"4": 2},
    {"5": 24},
    {"6": 83},
    {"7": 421},
    {"8": 1051},
    {"9": 1367},
    {"10": 724},
    {"11": 213},
    {"12": 58},
    {"13": 8},
    {"14": 5},
    {"15": 2},
    {"16": 0},
    {"17": 0},
    {"18": 0},
    {"19": 0},
    {"20": 0},
    {"21": 0},
    {"22": 0},
    {"23": 0}
  ];
}

function createMealData() {
  return [
    {"key": "artist", "value": 1791},
    {"key": "entrepreneur", "value": 522},
    {"key": "actor", "value": 553},
    {"key": "athlete", "value": 435},
    {"key": "politician", "value": 391},
    {"key": "scientist", "value": 421}
  ];
}

function createBestQualityData() {
  return [
    {"key": "reliability", "value": 1106},
    {"key": "humor", "value": 818},
    {"key": "independence", "value": 279},
    {"key": "thoughtfulness", "value": 1910}
  ];
}

function createTimeMoneyData() {
  return [
    {"key": "time", "value": 2691},
    {"key": "money", "value": 890},
    {"key": "influence", "value": 532}
  ];
}

function createStartOverData() {
  return [
    {"key": "yes", "value": 1641},
    {"key": "no", "value": 2472}
  ];
}

function createPersonalityByCollegeData() {
  return {
    "aap": {"INTJ": 4, "INTP": 4, "ENTJ": 3, "ENTP": 17, "INFJ": 1, "INFP": 3, "ENFJ": 1, "ENFP": 3, "ISTP": 24, "ISFP": 8, "ESTP": 26, "ESFP": 10, "ISTJ": 9, "ISFJ": 3, "ESTJ": 6, "ESFJ": 2},
    "arts": {"INTJ": 41, "INTP": 96, "ENTJ": 62, "ENTP": 161, "INFJ": 11, "INFP": 26, "ENFJ": 12, "ENFP": 31, "ISTJ": 189, "ISFJ": 48, "ESTJ": 135, "ESFJ": 28, "ISTP": 237, "ISFP": 73, "ESTP": 414, "ESFP": 85},
    "cals": {"INTJ": 32, "INTP": 66, "ENTJ": 38, "ENTP": 159, "INFJ": 7, "INFP": 22, "ENFJ": 5, "ENFP": 29, "ISTJ": 106, "ISFJ": 32, "ESTJ": 125, "ESFJ": 17, "ISTP": 200, "ISFP": 48, "ESTP": 422, "ESFP": 61},
    "engineering": {"INTJ": 32, "INTP": 84, "ENTJ": 30, "ENTP":115, "INFJ": 15, "INFP": 28, "ENFJ": 6, "ENFP": 17, "ISTJ": 137, "ISFJ": 43, "ESTJ": 90, "ESFJ": 20, "ISTP": 255, "ISFP": 71, "ESTP": 331, "ESFP": 57},
    "hotel": {"INTJ": 1, "INTP": 5, "ENTJ": 8, "ENTP": 42, "INFJ": 2, "INFP": 2, "ENFJ": 1, "ENFP": 8, "ISTJ": 19, "ISFJ": 4, "ESTJ": 38, "ESFJ": 5, "ISTP": 33, "ISFP": 9, "ESTP": 117, "ESFP": 17},
    "humec": {"INTJ": 6, "INTP": 19, "ENTJ": 14, "ENTP": 48, "INFJ": 6, "INFP": 5, "ENFJ": 6, "ENFP": 8, "ISTJ": 39, "ISFJ": 11, "ESTJ": 56, "ESFJ": 8, "ISTP": 60, "ISFP": 21, "ESTP": 137, "ESFP": 36},
    "ilr": {"INTJ": 5, "INTP": 17, "ENTJ": 14, "ENTP": 52, "INFJ": 1, "INFP": 3, "ENFJ": 3, "ENFP": 9, "ISTJ": 17, "ISFJ": 5, "ESTJ": 30, "ESFJ": 0, "ISTP": 36, "ISFP": 11, "ESTP": 126, "ESFP": 25}
  };
}

function getPersonalityTotalData() {
  return [
    {"key": "INTJ", "value": 121},
    {"key": "INTP", "value": 291},
    {"key": "ENTJ", "value": 169},
    {"key": "ENTP", "value": 594}, 
    {"key": "INFJ", "value": 43},
    {"key": "INFP", "value": 89},
    {"key": "ENFJ", "value": 34},
    {"key": "ENFP", "value": 105},
    {"key": "ISTJ", "value": 516},
    {"key": "ISFJ", "value": 146},
    {"key": "ESTJ", "value": 480},
    {"key": "ESFJ", "value": 80},
    {"key": "ISTP", "value": 845},
    {"key": "ISFP", "value": 241},
    {"key": "ESTP", "value": 1573},
    {"key": "ESFP", "value": 291},
  ];
}

function createFridayData() {
  return [
    {"key": "pjs & netflix", "total": 2119},
    {"key": "mixer", "total": 1245},
    {"key": "netflix & chill", "total": 773},
    {"key": "bars", "total": 699},
    {"key": "annex", "total": 416},
  ];
}

function createDateData() {
  return [
    {"key": "the commons", "total": 1335},
    {"key": "boba tea", "total": 1050},
    {"key": "collegetown bagels", "total": 999},
    {"key": "dinner in collegetown", "total": 801},
    {"key": "starbucks", "total": 316},
  ];
}

function createPerfectData() {
  return [
    {"key": "hanging out with friends", "total": 2200},
    {"key": "exploring a city", "total": 1374},
    {"key": "going on an outdoor adventure", "total": 1043},
    {"key": "trying new cuisines", "total": 344},
    {"key": "visiting a museum", "total": 186},
  ];
}

function createOldCommitmentData() {
  return [
    {"key": "I plan to meet my matches", "value": 854}, 
    {"key": "I will potentially meet with my matches", "value": 3006},
    {"key": "I just want to meet new people", "value": 1052},
    {"key": "I am taking this for fun and will probably not make an effort to meet", "value": 706}
  ];
}

function createNewCommitmentData() {
  return [
    {"key":"I plan to meet my matches", "value":415},
    {"key":"I will potentially meet with my matches", "value":922},
    {"key":"I just want to meet new people", "value":313},
    {"key":"I am taking this for fun and will probably not make an effort to meet", "value":77},
  ]
}

function createFemaleAgePref(){ //need a space after each number because we are doing some sketchy sorting lmao 

  return [
  {  
  "18 and under":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,117,118,102,65,36,9,6,4,2,2,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "19 ":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,129,260,265,243,172,80,33,15,6,4,4,4,4,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "20 ":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,35,176,284,289,260,176,100,65,27,12,8,7,6,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "21 ":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,56,176,218,217,192,130,68,26,14,12,10,7,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "22 ":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,8,32,57,59,59,55,40,25,16,11,6,5,2,2,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "23 ":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,8,9,10,10,9,6,5,4,3,3,2,2,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "24 ":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,3,3,2,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "25 and over":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }
  ]
}

function createMaleAgePref(){
  return [
    {    
      "18 and under":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,21,107,107,71,37,22,8,6,5,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "19 ":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,157,168,162,114,66,26,13,11,9,8,6,6,4,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "20 ":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,147,209,219,207,157,81,42,28,14,11,8,8,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "21 ":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,64,112,129,130,126,79,45,28,11,6,4,3,3,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "22 ":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,20,42,62,66,65,53,33,21,9,6,6,4,4,3,3,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "23 ":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,13,16,18,19,19,17,14,8,3,2,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "24 ":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,3,3,4,4,3,2,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "25 and over":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,9,11,13,13,13,14,14,12,11,11,9,6,5,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
    ]
  }


function createFemaleParticipantAgeMap(){ //these ones need spaces too trust the process
  return [
    {"18 and under":119,"19 ":267,"20 ":297,"21 ":222,"22 ":60,"23 ":10,"24 ":3,"25 and over":2}
  ]
}

function createMaleParticipantAgeMap(){
  return [
    {"18 and under":107,"19 ":171,"20 ":223,"21 ":131,"22 ":67,"23 ":19,"24 ":4,"25 and over":15}
  ]
}

function createGenderPreferenceData() {
  return [320, 1924, 17, 3226, 500, 66, 16, 19, 20];
}


function createFemaleTopWordsToDescribeSelf(){
  return [
    {"Career":[{"adjective":"smart","count":88,"position":5},{"adjective":"creative","count":66,"position":8},{"adjective":"passionate","count":58,"position":11},{"adjective":"ambitious","count":40,"position":3},{"adjective":"independent","count":38,"position":4},{"adjective":"curious","count":28,"position":5},{"adjective":"hardworking","count":26,"position":6},{"adjective":"driven","count":24,"position":7},{"adjective":"intelligent","count":17,"position":8}],
    "Physical":[],
    "Agreablness":[{"adjective":"kind","count":117,"position":2},
    {"adjective":"caring","count":115,"position":3},{"adjective":"thoughtful","count":99,"position":4},{"adjective":"loyal","count":65,"position":9},{"adjective":"empathetic","count":46,"position":14},{"adjective":"compassionate","count":36,"position":5},{"adjective":"honest","count":35,"position":6},{"adjective":"sweet","count":30,"position":7},{"adjective":"reliable","count":28,"position":8},{"adjective":"genuine","count":21,"position":9},{"adjective":"nice","count":19,"position":10},{"adjective":"considerate","count":15,"position":11}],
    "Extraversion":[{"adjective":"funny","count":277,"position":1},{"adjective":"outgoing","count":85,"position":6},{"adjective":"adventurous","count":81,"position":7},{"adjective":"chill","count":65,"position":10},{"adjective":"fun","count":59,"position":12},{"adjective":"friendly","count":55,"position":13},{"adjective":"witty","count":46,"position":15},{"adjective":"bubbly","count":40,"position":17},{"adjective":"spontaneous","count":42,"position":16},{"adjective":"easygoing","count":39,"position":9},{"adjective":"sarcastic","count":38,"position":10},{"adjective":"energetic","count":32,"position":11},{"adjective":"charming","count":27,"position":12},{"adjective":"easy-going","count":24,"position":13},{"adjective":"goofy","count":22,"position":14}]}
  ]
  }

function createFemaleWordsForSelf() {
  return {
    "Career": [
      {"adjective":"smart","count":222,"position":5},
      {"adjective":"creative","count":152,"position":10},
      {"adjective":"passionate","count":115,"position":14},
      {"adjective":"ambitious","count":102,"position":16},
      // {"adjective":"independent","count":38,"position":}
      // {"adjective":"curious","count":28,"position":27},
      // {"adjective":"hardworking","count":26,"position":29},
      // {"adjective":"driven","count":23,"position":30}
    ],
    "Physical": [],
    "Agreeableness": [
      {"adjective":"kind","count":265,"position":3},
      {"adjective":"caring","count":284,"position":2},
      {"adjective":"thoughtful","count":236,"position":4},
      {"adjective":"loyal","count":166,"position":8},
      {"adjective":"empathetic","count":110,"position":15},
      // {"adjective":"compassionate","count":36,"position":22},
      {"adjective":"honest","count":89,"position":19},
      // {"adjective":"reliable","count":28,"position":25},
      // {"adjective":"sweet","count":28,"position":26},
      // {"adjective":"charming","count":26,"position":28}
    ],
    "Extraversion": [
      {"adjective":"funny","count":668,"position":1}, 
      {"adjective":"outgoing","count":188,"position":7},
      {"adjective":"adventurous","count":202,"position":6},
      {"adjective":"chill","count":162,"position":9},
      {"adjective":"easygoing","count":141,"position":11},
      {"adjective":"fun","count":126,"position":12},
      {"adjective":"friendly","count":119,"position":13},
      {"adjective":"witty","count":99,"position":17},
      // {"adjective":"spontaneous","count":87,"position":20},
      {"adjective":"bubbly","count":87,"position":20},
      {"adjective":"sarcastic","count":97,"position":18},
      // {"adjective":"energetic","count":31,"position":24}
    ]
  }
}

function createMaleWordsForSelf() {
  return {
    "Career": [
      {"adjective":"smart","count":302,"position":2},
      {"adjective":"ambitious","count":76,"position":14},
      {"adjective":"passionate","count":76,"position":13},
      {"adjective":"curious","count":82,"position":11},
      {"adjective":"creative","count":57,"position":16},
      {"adjective":"confident","count":48,"position":20}
      // {"adjective":"independent","count":18,"position":24},
      // {"adjective":"driven","count":17,"position":25},
      // {"adjective":"charismatic","count":16,"position":26},
      // {"adjective":"intelligent","count":15,"position":28}
    ],
    "Physical": [],
    "Agreeableness": [
      {"adjective":"caring","count":206,"position":3},
      {"adjective":"kind","count":161,"position":5},
      {"adjective":"thoughtful","count":182,"position":4},
      {"adjective":"charming","count":116,"position":8},
      {"adjective":"honest","count":71,"position":13},
      {"adjective":"loyal","count":70,"position":15},
      // {"adjective":"empathetic","count":47,"position":21},
      {"adjective":"reliable","count":49,"position":19}
      // {"adjective":"compassionate","count":18,"position":23},
      // {"adjective":"calm","count":14,"position":29}
    ],
    "Extraversion": [
      {"adjective":"funny","count":645,"position":1}, 
      {"adjective":"chill","count":121,"position":6},
      {"adjective":"witty","count":104,"position":10},
      {"adjective":"adventurous","count":115,"position":9},
      {"adjective":"easygoing","count":118,"position":7},
      {"adjective":"outgoing","count":81,"position":12},
      {"adjective":"friendly","count":52,"position":17},
      {"adjective":"fun","count":51,"position":18},
      // {"adjective":"spontaneous","count":21,"position":21},
      // {"adjective":"sarcastic","count":20,"position":22},
      // {"adjective":"goofy","count":15,"position":27},
      // {"adjective":"energetic","count":14,"position":30}
    ]
  }
}

function createMaleWordsForPartner() {
  return {
    "Career": [
      {"adjective":"smart","count":415,"position":2},
      {"adjective":"passionate","count":105,"position":9},
      {"adjective":"intelligent","count":83,"position":12},
      {"adjective":"ambitious","count":63,"position":16},
      {"adjective":"independent","count":47,"position":19},
      {"adjective":"confident","count":70,"position":14}
    ],
    "Physical": [
      {"adjective":"cute","count":53,"position":16}
    ],
    "Agreeableness": [
      {"adjective":"caring","count":253,"position":4},
      {"adjective":"kind","count":285,"position":3},
      {"adjective":"thoughtful","count":148,"position":6},
      {"adjective":"honest","count":86,"position":11},
      {"adjective":"loyal","count":73,"position":13},
      {"adjective":"charming","count":66,"position":15},
      {"adjective":"reliable","count":53,"position":17},
      {"adjective":"sweet","count":49,"position":18},
    ],
    "Extraversion": [
      {"adjective":"funny","count":711,"position":1}, 
      {"adjective":"adventurous","count":149,"position":5},
      {"adjective":"fun","count":124,"position":7},
      {"adjective":"outgoing","count":116,"position":8},
      {"adjective":"chill","count":86,"position":10},
      {"adjective":"spontaneous","count":45,"position":20}
    ]
  }
}

function createFemaleWordsForPartner() {
  return {
    "Career": [
      {"adjective":"smart","count":413,"position":3},
      {"adjective":"intelligent","count":120,"position":11},
      {"adjective":"ambitious","count":108,"position":12},
      {"adjective":"confident","count":95,"position":13},
      {"adjective":"passionate","count":87,"position":17}
    ],
    "Physical": [
        {"adjective":"athletic","count":76,"position":20}
    ],
    "Agreeableness": [
      {"adjective":"kind","count":468,"position":2},
      {"adjective":"caring","count":291,"position":4},
      {"adjective":"thoughtful","count":251,"position":5},
      {"adjective":"loyal","count":187,"position":6},
      {"adjective":"honest","count":145,"position":9},
      {"adjective":"charming","count":124,"position":10},
      {"adjective":"reliable","count":90,"position":15},
      {"adjective":"considerate","count":68,"position":18},
      {"adjective":"empathetic","count":59,"position":20},
      // {"adjective":"nice","count":33,"position":16}
    ],
    "Extraversion": [
      {"adjective":"funny","count":1306,"position":1}, 
      {"adjective":"outgoing","count":174,"position":8},
      {"adjective":"adventurous","count":185,"position":7},
      {"adjective":"chill","count":93,"position":14},
      {"adjective":"fun","count":88,"position":16},
      {"adjective":"spontaneous","count":63,"position":19}
    ]
  }
}



// function createFemaleTopWordsToDescribePartner() {
//   return [
//     {"Career":[{"adjective":"smart","count":659},{"adjective":"intelligent","count":221},{"adjective":"confident","count":138},{"adjective":"ambitious","count":129},{"adjective":"passionate","count":106},{"adjective":"driven","count":101},{"adjective":"charismatic","count":77},{"adjective":"independent","count":53},{"adjective":"creative","count":53},{"adjective":"motivated","count":52}],
//     "Physical":[{"adjective":"athletic","count":102},{"adjective":"tall","count":94}],
//     "Agreeablness":[{"adjective":"kind","count":622},{"adjective":"caring","count":400},{"adjective":"loyal","count":332},{"adjective":"thoughtful","count":329},{"adjective":"honest","count":268},{"adjective":"reliable","count":119},{"adjective":"compassionate","count":94},{"adjective":"sweet","count":92},{"adjective":"nice","count":91},{"adjective":"genuine","count":78},{"adjective":"considerate","count":77},{"adjective":"understanding","count":76},{"adjective":"empathetic","count":68},{"adjective":"trustworthy","count":67},{"adjective":"supportive","count":49},{"adjective":"patient","count":48},{"adjective":"loving","count":48},{"adjective":"dependable","count":46}],
//     "Extraversion":[{"adjective":"funny","count":2007},{"adjective":"outgoing","count":241},{"adjective":"adventurous","count":228},{"adjective":"charming","count":216},{"adjective":"fun","count":145},{"adjective":"chill","count":124},{"adjective":"spontaneous","count":84},{"adjective":"witty","count":78},{"adjective":"easygoing","count":62},{"adjective":"humorous","count":51},{"adjective":"friendly","count":49},{"adjective":"goofy","count":47}]}
//   ]
// };

function createFemaleTopWordsToDescribePartner(){
  return [
  {"Career":[{"adjective":"smart","count":171,"position":0},{"adjective":"intelligent","count":56,"position":1},{"adjective":"ambitious","count":48,"position":2},{"adjective":"confident","count":35,"position":3},{"adjective":"passionate","count":32,"position":4},{"adjective":"driven","count":25,"position":5},{"adjective":"motivated","count":23,"position":6},{"adjective":"independent","count":21,"position":7},{"adjective":"open-minded","count":20,"position":8},{"adjective":"creative","count":16,"position":9},{"adjective":"hardworking","count":13,"position":10}],
  "Physical":[{"adjective":"athletic","count":27,"position":0},{"adjective":"tall","count":23,"position":1}],
  "Agreablness":[{"adjective":"kind","count":207,"position":0},
  {"adjective":"caring","count":134,"position":1},{"adjective":"thoughtful","count":104,"position":2},{"adjective":"loyal","count":88,"position":3},{"adjective":"honest","count":55,"position":4},{"adjective":"nice","count":40,"position":5},{"adjective":"reliable","count":38,"position":6},{"adjective":"compassionate","count":27,"position":7},{"adjective":"considerate","count":25,"position":8},{"adjective":"genuine","count":24,"position":9},{"adjective":"empathetic","count":23,"position":10},{"adjective":"sweet","count":22,"position":11},{"adjective":"supportive","count":20,"position":12},{"adjective":"trustworthy","count":19,"position":13},{"adjective":"patient","count":16,"position":14},{"adjective":"loving","count":15,"position":15},{"adjective":"understanding","count":13,"position":16}],
  "Extraversion":[{"adjective":"funny","count":558,"position":0},{"adjective":"outgoing","count":87,"position":1},{"adjective":"adventurous","count":75,"position":2},{"adjective":"charming","count":52,"position":3},{"adjective":"chill","count":40,"position":4},{"adjective":"fun","count":37,"position":5},{"adjective":"spontaneous","count":29,"position":6},{"adjective":"witty","count":22,"position":7},{"adjective":"easygoing","count":19,"position":8},{"adjective":"friendly","count":15,"position":9},{"adjective":"goofy","count":14,"position":10}]}
  ]
}

number_of_women_who_describe_ideal_husband_as_rich = 4; //down from 7 last year

function createMaleTopWordsToDescribeSelf(){
  return [
    {"Career":[{"adjective":"smart","count":135,"position":0},{"adjective":"ambitious","count":37,"position":1},{"adjective":"passionate","count":35,"position":2},{"adjective":"curious","count":29,"position":3},{"adjective":"creative","count":27,"position":4},{"adjective":"confident","count":23,"position":5},{"adjective":"independent","count":18,"position":6},{"adjective":"driven","count":17,"position":7},{"adjective":"intelligent","count":16,"position":8},{"adjective":"charismatic","count":16,"position":9},{"adjective":"hardworking","count":13,"position":10}],
    "Physical":[],
    "Agreablness":[{"adjective":"caring","count":91,"position":0},{"adjective":"kind","count":65,"position":1},{"adjective":"thoughtful","count":64,"position":2},{"adjective":"honest","count":40,"position":3},{"adjective":"loyal","count":38,"position":4},{"adjective":"empathetic","count":27,"position":5},{"adjective":"reliable","count":25,"position":6},{"adjective":"compassionate","count":18,"position":7},{"adjective":"genuine","count":14,"position":8},{"adjective":"understanding","count":8,"position":9}],
    "Extraversion":[{"adjective":"funny","count":274,"position":0},{"adjective":"chill","count":57,"position":1},{"adjective":"witty","count":54,"position":2},{"adjective":"adventurous","count":52,"position":3},{"adjective":"charming","count":49,"position":4},{"adjective":"outgoing","count":34,"position":5},{"adjective":"easygoing","count":33,"position":6},{"adjective":"spontaneous","count":21,"position":7},{"adjective":"sarcastic","count":20,"position":8},{"adjective":"goofy","count":15,"position":9},{"adjective":"energetic","count":15,"position":10},{"adjective":"friendly","count":14,"position":11},{"adjective":"easy-going","count":14,"position":12},{"adjective":"relaxed","count":13,"position":13},{"adjective":"fun","count":12,"position":14},{"adjective":"humorous","count":11,"position":15}]}
  ] 
}

function createMaleTopWordsToDescribePartner(){
  return [
    {"Career":[{"adjective":"smart","count":167,"position":0},{"adjective":"passionate","count":50,"position":1},{"adjective":"intelligent","count":32,"position":2},{"adjective":"ambitious","count":30,"position":3},{"adjective":"independent","count":25,"position":4},{"adjective":"confident","count":25,"position":5},{"adjective":"open-minded","count":21,"position":6},{"adjective":"motivated","count":16,"position":7},{"adjective":"creative","count":16,"position":8},{"adjective":"curious","count":13,"position":9},{"adjective":"driven","count":13,"position":10}],
    "Physical":[{"adjective":"cute","count":27,"position":0},{"adjective":"pretty","count":9,"position":1}],
    "Agreablness":[{"adjective":"kind","count":117,"position":0},{"adjective":"caring","count":115,"position":1},{"adjective":"thoughtful","count":65,"position":2},{"adjective":"honest","count":41,"position":3},{"adjective":"loyal","count":31,"position":4},{"adjective":"understanding","count":23,"position":5},{"adjective":"reliable","count":21,"position":6},{"adjective":"sweet","count":20,"position":7},{"adjective":"genuine","count":20,"position":8},{"adjective":"loving","count":17,"position":9},{"adjective":"compassionate","count":16,"position":10},{"adjective":"empathetic","count":13,"position":11},{"adjective":"considerate","count":10,"position":12},{"adjective":"trustworthy","count":10,"position":13},{"adjective":"nice","count":9,"position":14}],
    "Extraversion":[{"adjective":"funny","count":304,"position":0},{"adjective":"adventurous","count":60,"position":1},{"adjective":"fun","count":52,"position":2},{"adjective":"outgoing","count":49,"position":3},{"adjective":"chill","count":38,"position":4},{"adjective":"charming","count":27,"position":5},{"adjective":"easygoing","count":20,"position":6},{"adjective":"witty","count":20,"position":7},{"adjective":"spontaneous","count":19,"position":8},{"adjective":"energetic","count":13,"position":9},{"adjective":"easy-going","count":12,"position":10},{"adjective":"goofy","count":11,"position":11}]}
  ]
}

function createPoliticalPreferences(){
  return [
      {"key": 1, "value":514,"activity":3.628},
      {"key": 2, "value":777,"activity":3.225},
      {"key": 3, "value":1236,"activity":2.790},
      {"key": 4, "value":635,"activity":2.302},
      {"key": 5, "value":511,"activity":1.935},
      {"key":6, "value":203,"activity":2.069},
      {"key":7, "value":131,"activity":2.382},
      {"key":8, "value":67,"activity":2.731},
      {"key":9, "value":23,"activity":3.348},
      {"key":10, "value":16,"activity":4.25}
  ]
}

