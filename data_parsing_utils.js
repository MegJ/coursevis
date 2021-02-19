/** Functions for parsing initial raw data **/
// get results based on key (ie. data.gender) and sorts key in descending value
function getSummary(data, str, newKey = "", isList = false) {
  let map = {};

  for (let i = 0; i < data.length; i++) {
    if (isList) {
      let keys = (data[i][str].replace(/\"/g, '').replace("[", '').replace("]", '')).split(",");
      for (let j = 0; j < keys.length; j++) {
        let key = keys[j].trim().toLowerCase();
        if (key != "") { // remove unfinished surveys
          if (!map[newKey+key]) {
            map[newKey+key] = 1;
          } else {
            map[newKey+key] = map[newKey+key] + 1;
          }
        }
      }
    } else {
      let key = data[i][str].trim().toLowerCase();
      if (key != "") { // remove unfinished surveys
        if (!map[newKey+key]) {
          map[newKey+key] = 1;
        } else {
          map[newKey+key] = map[newKey+key] + 1;
        }
      }
    }
    
  }

  return map;
}

function getAgePreferences(data, isFemale){ // returns map of shape age to how many people willing to date
  let key;
  let map = {}; // age => (age => number of participants who would date someone of this age)

  let participant_age_map = {} //age => number of participants of that age
  let age_buckets = {
    17: "18 and under",
    18: "18 and under",
    19:"19",
    20:"20",
    21:"21",
    22:"22",
    23:"23",
    24:"24",
    25:"25 and over", 
    26:"25 and over",
    27:"25 and over",
    28:"25 and over",
    29:"25 and over",
    30:"25 and over"}

  for(var age_bucket in age_buckets){
    map[age_buckets[age_bucket]] = new Array(19).fill(0);
    participant_age_map[age_buckets[age_bucket]] = 0;
  }

  if (isFemale) {
    key = "female";
  } else {
    key = "male";
  }

  for (let i = 0; i < data.length; i++) {
    if (data[i]["data.gender"] == key) {
      let participant_age = data[i]["data.age"];

      try { //allow for json parsing exception
      let age_preference = JSON.parse(data[i]["data.agepref"]);
      let min_age = age_preference["youngest"];
      let max_age = age_preference["oldest"];

      if(!(participant_age in age_buckets)){ //filter out outlier responses
        continue;
      }

      let participant_age_bucket = age_buckets[participant_age];

      participant_age_map[participant_age_bucket] += 1;

      if(!(min_age < 16 || isNaN(min_age) || isNaN(max_age) || max_age > 50)){ //throw out bad answers
        for(let i = min_age; i <= max_age; i++){
          if(i <= 35){
            map[participant_age_bucket][i-17] += 1;
          }
        }
      }

    } catch (e) {
      //add error handling
    }
  }
}
  return(map, participant_age_map);
}

function getTopWords(data, isFemale){

  let gender;
  let describe_you_map = {};
  let describe_partner_map = {};

  
  if(isFemale){
    gender = "female";
  } else {
    gender = "male";
  }

  for (let i = 0; i < data.length; i++) {
    if(data[i] != null && data[i]["profile"]["optIn"] == true){     

      if (data[i]["profile"] != null && data[i]["survey"] != null && data[i]["profile"]["gender"] == gender) {

        let describe_you = data[i]["survey"]["desscribeyou"]; //lol at the spelling error
        let describe_partner = data[i]["survey"]["describepartner"];



        let describe_you_list = describe_you.split(/[ ,]+/);
        let describe_partner_list = describe_partner.split(/[ ,]+/);

        for(j = 0; j < describe_you_list.length; j++){
          word = describe_you_list[j].toLowerCase();
          if (word in describe_you_map){
            describe_you_map[word] += 1;
          } else {
            describe_you_map[word] = 1;
          }
        }

        for(j = 0; j < describe_partner_list.length; j++){
          word = describe_partner_list[j].toLowerCase();
          if (word in describe_partner_map){
            describe_partner_map[word] += 1;
          } else {
            describe_partner_map[word] = 1;
          }
        }
      }
    }
  }


  let top_words_for_you = Object.keys(describe_you_map)
  .map((key) => [key, describe_you_map[key]])
  .sort((a, b) => b[1] - a[1]);
    

  let top_words_for_partner = Object.keys(describe_partner_map)
  .map((key) => [key, describe_partner_map[key]])
  .sort((a, b) => b[1] - a[1]);


  top_30 = top_words_for_you.slice(0, 45);
  top_30_partner = top_words_for_partner.slice(0, 45);
  getCategoryData(top_30);
  getCategoryData(top_30_partner);



    
  return (top_words_for_you, top_words_for_partner);
}

function getCategoryData(top_words_list){

  career_words = ["hardworking", "motivated", "open-minded", "curious", "creative","independent","smart", "intelligent", "confident", "ambitious", "passionate", "driven", "charismatic"];
  physical_words = ["hot", "attractive", "pretty","athletic", "tall", "cute"]
  agreeablness = ["supportive", "patient", "loving", "dependable", "trustworthy", "understanding","considerate", "reliable", "loyal", "kind", "caring", "thoughtful", "empathetic","honest", "compassionate", "sweet", "nice", "genuine"]
  extraversion = ["chill","easy-going", "relaxed", "happy", "easygoing","friendly", "humorous", "relaxed", "bubbly", "sarcastic", "energetic", "spontaneous", "goofy","funny", "outgoing", "adventurous", "charming", "fun", "spontanious", "witty"]

  dictionary = {
    "Career": [],
    "Physical": [],
    "Agreablness": [],
    "Extraversion": []
  } //"category" => [{adjective: "", total:::}]

  for(i = 0; i < top_words_list.length; i++){
    word = top_words_list[i];
    if(career_words.includes(word[0])){
      dictionary["Career"].push({"adjective": word[0], "count": word[1]});
    } else if (agreeablness.includes(word[0])){
      dictionary["Agreablness"].push({"adjective": word[0], "count": word[1]});
    } else if (extraversion.includes(word[0])){
      dictionary["Extraversion"].push({"adjective": word[0], "count": word[1]});
    } else if (physical_words.includes(word[0])){
      dictionary["Physical"].push({"adjective": word[0], "count": word[1]});
    } else {
    }

    for(var category in dictionary){
      let li = dictionary[category];
      li.sort(function(a, b){
        return (b["count"] - a["count"]);
      });
      for(let j = 0; j < li.length; j++){
        li[j]["position"] = j;
      }
  }
}
  //console.log(JSON.stringify(dictionary));
}


function getHeightList(data, isFemale) {
  let key;
  let map = {};
  if (isFemale) {
    key = "female";
  } else {
    key = "male";
  }

  // initialize map
  for (let i = 50; i < 85; i++) {
    map[i] = 0;
  }

  for (let i = 0; i < data.length; i++) {
    if (data[i]["data.gender"] == key) {
      let height = data[i]["data.height"];

      // convert feet to inches
      if (height < 50) {
        height = height * 12;
      }

      height = (+height).toFixed(0);

      if (height < 85 && height > 50) {
        map[height] = map[height] + 1;
      }
      
    }
  }

  let finalList = [];
  // convert map to list
  for (let i = 50; i < 85; i++) {
    finalList[i-50] = map[i];
  }

  return finalList;
}

function getSleepHabits(data, isSleep) {
  let key;
  let map = {};
  if (isSleep) {
    key = "sleeptime";
  } else {
    key = "waketime";
  }

  for (let i = 0; i < data.length; i++) {
    if (data[i]["data.gender"] != "") { // ignore uncomplete survey answers
      let time = JSON.parse(data[i]["data.sleephabits"]);
      time = time[key].toLowerCase()
        .replace("am", "")
        .replace("a.m.", "")
        .replace("a.m", "")
        .replace("pm", "")
        .replace("p", "")
        .replace(":00", "")
        .replace(":15", "")
        .replace(".30", "")
        .replace(":30", "")
        .trim();

      if (time.includes("-")) {
        time = time.split("-")[0].trim();
      }

      if (time.includes("or")) {
        time = time.split("or")[0].trim();
      }

      if (time == "midnight") {
        time = "12";
      } else if (time == "01") {
        time = "1";
      } else if (time == "02") {
        time = "2";
      } else if (time == "03") {
        time = "3";
      } else if (time == "09") {
        time = "9";
      } else if (time == "08") {
        time = "8"
      } else if (time == "06") {
        time = "6";
      }

      if (Number.isInteger(+time) && +time < 13 && +time > 0) {
        if (!map[time]) {
          map[time] = 1;
        } else {
          map[time] = map[time] + 1;
        }
      }
    }
  }
  return map;
}

function getPersonalities(data, key) {
  var blankMap = {"INTJ": 0, "INTP": 0, "ENTJ": 0, "ENTP": 0, "INFJ": 0, "INFP": 0, "ENFJ": 0, "ENFP": 0, "ISTJ": 0, "ISFJ": 0, "ESTJ": 0, "ESFJ": 0, "ISTP": 0, "ISFP": 0, "ESTP": 0, "ESFP": 0};
  var map = {};

  for (let i = 0; i < data.length; i++) {
    var tempCollege = data[i][key];
    if (!map[tempCollege]) {
      map[tempCollege] = {...blankMap};
      var tempP = data[i]["personality"];
      map[tempCollege][tempP] = 1; 
    } else {
      var tempP = data[i]["personality"];
      map[tempCollege][tempP] = map[tempCollege][tempP] + 1; 
    }
  }

  return map;
}

function printSortMap(map) {
  var sortedMap = Object.keys(map).map(function(key) {
    return [key, map[key]];
  });

  sortedMap.sort(function(k1, k2) {
    return k2[1] - k1[1];
  });
  
  for (let i = 0; i < sortedMap.length; i++) {
    // console.log(sortedMap[i][0] + ": " + sortedMap[i][1]);
  }
}
   
function convertInToFeet(inches) {
  return Math.trunc(inches/12) + " ft "+ inches%12 + " in";
}

function calculateMedianForHeight(arr) {
  var totalPersons = 0;

  for (var i in arr) {
    totalPersons += arr[i];
  }
  // console.log(totalPersons);

  var midway = Math.trunc(totalPersons/2);
  var tempIndex = 0;
  for (var i in arr) {
    if (midway < 0) break;
    tempIndex = i;
    midway -= arr[i];
  }
  return Number(tempIndex) + minHeight;
}

function convertNestedMapToList(map) {
  let keyList = Object.keys(map);
  var pList = Object.keys(map[keyList[0]]);

  let finalList = [];

  for (var i = 0; i < keyList.length; i++) {
    for (var j = 0; j < pList.length; j++)
    finalList.push({"college": keyList[i], "personality": pList[j], "total": map[keyList[i]][pList[j]]});
  }

  return finalList;
}

function getGenderPreferences(data) {
  let finalMap = {
    "men": [0, 0, 0], 
    "women": [0, 0, 0],
    "other": [0, 0, 0]
  };
  let counter = 0;

  for (entry of data) {
    if (entry["data.gender"] != "") {
      counter += 1;
      let mapKey = "";
      if (entry["data.gender"] == "male") {
        mapKey = "men"
      } else if (entry["data.gender"] == "female") {
        mapKey = "women";
      } else {
        mapKey = "other";
      }

      let tempGenderList = entry["data.genderpref"]
        .replace("[", "")
        .replace("]", "")
        .replaceAll("\"", "")
        .split(",");
      if (tempGenderList.indexOf("male") != -1) {
        finalMap[mapKey][0] += 1;
      } 
      if (tempGenderList.indexOf("female") != -1) {
        finalMap[mapKey][1] += 1;
      } 
      if (tempGenderList.includes("other") || tempGenderList.includes("transmale") || tempGenderList.includes("transfemale")) {
        finalMap[mapKey][2] += 1;
      } 
    
    }
  }
  return finalMap;
}

