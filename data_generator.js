/** Functions for generating specific data **/

function getTotalPeople() {
  return 1359 + 1504 + 1267 + 1232 + 183 + 59 + 14;
}

function createGenderData() {
  return [
    {"key": "male", "value": 2182},
    {"key": "female", "value": 3413},
    {"key": "other", "value": 32}
  ];
}

function createGenderListData() {
  return [2182, 3413, 32];
}
function createYearData() {
  return [
    {"key": "freshman", "value": 1359}, 
    {"key": "sophomore", "value": 1504},
    {"key": "junior", "value": 1267},
    {"key": "senior", "value": 1232},
    {"key": "masters", "value": 183},
    {"key": "phd", "value": 59},
    {"key": "faculty", "value": 14}
  ];
}

function createEthnicityData() {
  return [
    {"key": "white", "value": 2476}, 
    {"key": "east asian", "value": 1324},
    {"key": "south asian", "value": 579},
    {"key": "latino", "value": 394},
    {"key": "black", "value": 361},
    {"key": "other", "value": 484}
  ];
}

function createActivitiesData() {
  return [
    {"key": "prof. club", "value": 1427}, 
    {"key": "social club", "value": 1659},
    {"key": "cultural club", "value": 1182},
    {"key": "greek life", "value": 1633},
    {"key": "prof. fraternity", "value": 648},
    {"key": "athlete", "value": 506},
    {"key": "club sports", "value": 915},
    {"key": "project team", "value": 900},
    {"key": "ta", "value": 1073},
    {"key": "ra", "value": 176},
    {"key": "other clubs", "value": 2261},
    {"key": "none", "value": 321},
  ];
}

function createCollegeData() {
  return [
    {"key": "aap", "value": 124}, 
    {"key": "arts", "value": 1649},
    {"key": "cals", "value": 1369},
    {"key": "engineering", "value": 1331},
    {"key": "hotel", "value": 311},
    {"key": "humec", "value": 480},
    {"key": "ilr", "value": 354}	
  ];
}

function createFemaleHeightData() {
  return [1, 3, 5, 2, 1, 4, 3, 14, 17, 117, 151, 292, 416, 504, 452, 430, 398, 263, 136, 96, 44, 23, 7, 8, 3, 1, 0, 1, 0, 1, 1, 0];
}

function createMaleHeightData() {
  return [0, 0, 1, 0, 0, 0, 0, 2, 5, 8, 6, 1, 8, 17, 35, 86, 160, 216, 306, 327, 280, 288, 163, 114, 78, 44, 11, 8, 1, 2, 0, 2];
}

function createSleepData() {
  return [
    {"0": 1860},
    {"1": 1719},
    {"2": 801},
    {"3": 157},
    {"4": 25},
    {"5": 11},
    {"6": 8},
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
    {"18": 7},
    {"19": 22},
    {"20": 20},
    {"21": 18},
    {"22": 129},
    {"23": 686}
  ];
}

function createWakeData() {
  return [
    {"0": 0},
    {"1": 0},
    {"2": 0},
    {"3": 0},
    {"4": 8},
    {"5": 25},
    {"6": 149},
    {"7": 768},
    {"8": 1816},
    {"9": 1730},
    {"10": 706},
    {"11": 148},
    {"12": 29},
    {"13": 8},
    {"14": 1},
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
    {"key": "artist", "value": 2323},
    {"key": "entrepreneur", "value": 820},
    {"key": "actor", "value": 804},
    {"key": "athlete", "value": 655},
    {"key": "politician", "value": 510},
    {"key": "scientist", "value": 506},
  ];
}

function createBestQualityData() {
  return [
    {"key": "thoughtfulness", "value": 2661},
    {"key": "reliability", "value": 1401},
    {"key": "humor", "value": 1193},
    {"key": "independence", "value": 363}
  ];
}

function createTimeMoneyData() {
  return [
    {"key": "time", "value": 3844},
    {"key": "money", "value": 1774}
  ];
}

function createStartOverData() {
  return [
    {"key": "yes", "value": 3460},
    {"key": "no", "value": 2158}
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

function createCommitmentData() {
  return [
    {"key": "I plan to meet my matches", "value": 854}, 
    {"key": "I will potentially meet with my matches", "value": 3006},
    {"key": "I just want to meet new people", "value": 1052},
    {"key": "I am taking this for fun and will probably not make an effort to meet", "value": 706}
  ];
}

function createFemaleAgePref(){
  return [
  { "18 and under":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,72,530,552,510,348,217,89,44,24,13,10,9,7,7,2,2,2,2,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
    "19 ":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,482,851,861,785,565,272,129,67,24,18,15,10,10,5,5,5,5,5,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    "20 ":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,140,546,768,777,729,482,286,170,79,58,42,24,22,3,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1],
    "21 ":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,185,592,726,723,644,481,346,162,100,78,56,48,16,15,12,12,11,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1],
    "22 ":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,29,116,216,226,224,198,144,75,52,40,20,17,3,3,3,3,3,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
    "23 ":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,8,19,26,33,34,33,28,22,19,11,9,2,2,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "24 ":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,10,16,17,18,18,17,16,6,5,3,2,2,2,2,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
    "25 and over":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,5,9,11,13,19,24,32,38,40,39,35,25,25,21,15,13,8,8,6,5,5,3,3,3,2,2,1,1,1,1,1]}
  ]
}

function createMaleAgePref(){
  return [
    {    
    "18 and under":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,79,303,297,220,115,71,37,26,20,7,6,6,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    "19 ":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,40,449,482,456,313,184,77,52,33,23,17,16,15,15,4,4,3,3,3,3,3,3,3,3,1,1,1,1,1,0,0,0,0,0],
    "20 ":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,8,324,476,481,458,349,162,95,54,34,28,24,20,20,4,4,4,4,4,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
    "21 ":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,208,382,446,457,429,274,150,94,48,39,37,30,27,9,9,9,9,9,4,4,4,3,3,1,1,1,1,1,1,1,1,1,1],
    "22 ":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,62,106,152,169,169,147,104,64,33,23,20,16,15,6,6,6,6,6,3,2,2,2,2,2,2,2,2,2,2,2,2,1,1],
    "23 ":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,24,37,48,48,48,46,35,19,15,9,8,6,3,3,3,3,3,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
    "24 ":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,7,11,18,21,23,24,24,22,20,18,15,7,6,3,3,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "25 and over":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,16,29,41,49,56,60,60,59,52,49,45,38,20,17,13,11,10,6,5,5,5,5,1,1,1,1,1,1,1,1,0,0]}
  ]
}

function createFemaleParticipantAgeMap(){
  return [
    {"18 and under":560,"19 ":886,"20 ":791,"21 ":754,"22 ":236,"23 ":36,"24 ":18,"25 and over":41}
  ]
}

function createMaleParticipantAgeMap(){
  return [
    {"18 and under":309,"19 ":496,"20 ":496,"21 ":472,"22 ":174,"23 ":51,"24 ":25,"25 and over":61}
  ]
}

function createGenderPreferenceData() {
  return [320, 1924, 17, 3226, 500, 66, 16, 19, 20];
}

function createFemaleTopWordsToDescribeSelf(){
  return [
  {
    "funny": 1033,
    "caring": 453,
    "kind": 380,
    "smart": 371,
    "outgoing": 335,
    "thoughtful": 301,
    "adventurous": 261,
    "loyal": 247,
    "chill": 217,
    "creative": 205,
    "fun":189,
    "honest": 174,
    "independent": 160,
    "friendly": 155,
    "passionate": 153,
    "bubbly": 153,
    "sarcastic": 149,
    "empathetic": 146,
    "energetic": 145,
    "witty": 129
}]};

function createFemaleTopWordsToDescribePartner() {
  return [
    {
      "funny": 2007,
      "smart": 659,
      "kind": 622,
      "caring": 400,
      "loyal": 332,
      "thoughtful": 329,
      "honest": 268,
      "outgoing": 241,
      "adventurous": 228,
      "intelligent": 221,
      "charming": 216,
      "fun": 145,
      "confident": 138,
      "ambitious": 129,
      "chill": 124,
      "reliable": 119,
      "passionate": 106,
      "athletic": 102,
      "driven": 101,
      "compassionate": 94,
      "tall": 94 //lol
    }]
}

number_of_women_who_describe_ideal_husband_as_rich = 7;

function createMaleTopWordsToDescribeSelf(){
  return [
    {
  "funny": 862,
  "smart": 455,
  "thoughtful": 209,
  "caring": 203,
  "charming": 202,
  "kind": 195,
  "chill": 134,
  "outgoing": 128,
  "adventurous": 125,
  "witty": 106,
  "loyal": 98,
  "honest": 94,
  "curious": 86,
  "fun": 85,
  "passionate": 84,
  "ambitious": 83,
  "relaxed": 66,
  "creative": 65,
  "sarcastic": 65,
  "goofy": 61,
  "driven": 57
}
  ]
}

function createFemaleTopWordsToDescribePartner(){
  return [
    {
    "funny": 969,
    "smart": 593,
    "kind": 324,
    "caring": 283,
    "thoughtful": 161,
    "fun": 155,
    "outgoing": 155,
    "honest": 124,
    "adventurous": 123,
    "chill": 117,
    "intelligent": 114,
    "charming": 113,
    "cute": 103,
    "confident": 84,
    "loyal": 82,
    "passionate": 76,
    "sweet": 72,
    "independent": 69,
    "witty": 67,
    "ambitious": 65,
    "compassionate": 62
    }
  ]
}