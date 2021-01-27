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