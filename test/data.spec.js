import { filterData,houseFilter,mottoFilter,sortData,calcSurvivors} from '../src/data.js';



describe('funcion filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('returns si la funcion se cumple', () => {
    const data={
      "got":[
        {
          "id": 0,
          "firstName": "Daenerys",
          "lastName": "Targaryen",
          "fullName": "Daenerys Targaryen",
          "title": "Queen of Meereen, Khaleesi of Great Grass Sea, Breaker of Shackles, and Mother of Dragons",
          "family": "House Targaryen",
          "imageUrl": "https://thronesapi.com/assets/images/daenerys.jpg",
          "born": "284 DC"
        },
        {
          "id": 1,
          "firstName": "Samwell",
          "lastName": "Tarly",
          "fullName": "Samwell Tarly",
          "title": "Maester",
          "family": "House Tarly",
          "imageUrl": "https://thronesapi.com/assets/images/sam.jpg",
          "born": "283 DC"
        },
        {
          "id": 2,
          "firstName": "Jon",
          "lastName": "Snow",
          "fullName": "Jon Snow",
          "title": "King of the North and Lord Commander of the Knight's Watch",
          "family": "House Stark",
          "imageUrl": "https://thronesapi.com/assets/images/jon-snow.jpg",
          "born": "283 DC"
        },]}

    const palabra= "daenerys targaryen"
    expect(filterData(data, palabra)).toEqual( [{
      "id": 0,
      "firstName": "Daenerys",
      "lastName": "Targaryen",
      "fullName": "Daenerys Targaryen",
      "title": "Queen of Meereen, Khaleesi of Great Grass Sea, Breaker of Shackles, and Mother of Dragons",
      "family": "House Targaryen",
      "imageUrl": "https://thronesapi.com/assets/images/daenerys.jpg",
      "born": "284 DC"
    }]);
  });
});

describe('funcion houseFilter', () => {
  it('is a function', () => {
    expect(typeof houseFilter).toBe('function');
  });
});

it('returns lo que tiene en houseFilter', () => {
  const data= { "got":[{
    "id": 6,
    "firstName": "Ned",
    "lastName": "Stark",
    "fullName": "Ned Stark",
    "title": "Lord of Winterfell",
    "family": "House Stark",
    "imageUrl": "https://thronesapi.com/assets/images/ned-stark.jpg",
    "born": "263 DC"
  },
  {
    "id": 7,
    "firstName": "Robert",
    "lastName": "Baratheon",
    "fullName": "Robert Baratheon",
    "title": "King of the Seven Kingdoms",
    "family": "House Baratheon",
    "imageUrl": "https://thronesapi.com/assets/images/robert-baratheon.jpeg",
    "born": "262 DC"
  },
  {
    "id": 8,
    "firstName": "Jamie",
    "lastName": "Lannister",
    "fullName": "Jamie Lannister",
    "title": "Lord Commander of the Kingsguard",
    "family": "Lannister",
    "imageUrl": "https://thronesapi.com/assets/images/jaime-lannister.jpg",
    "born": "262 DC",
    "death": "305 DC"
  },
  {
    "id": 9,
    "firstName": "Cersei",
    "lastName": "Lannister",
    "fullName": "Cersei Lannister",
    "title": "Lady of Casterly Rock",
    "family": "Lannister",
    "imageUrl": "https://thronesapi.com/assets/images/cersei.jpg",
    "born": "262 DC",
    "death": "305 DC"
  },]}
  const filter="Lannister"
  expect(houseFilter(data, filter)).toEqual([{
    "id": 8,
    "firstName": "Jamie",
    "lastName": "Lannister",
    "fullName": "Jamie Lannister",
    "title": "Lord Commander of the Kingsguard",
    "family": "Lannister",
    "imageUrl": "https://thronesapi.com/assets/images/jaime-lannister.jpg",
    "born": "262 DC",
    "death": "305 DC"

  },
  {
    "id": 9,
    "firstName": "Cersei",
    "lastName": "Lannister",
    "fullName": "Cersei Lannister",
    "title": "Lady of Casterly Rock",
    "family": "Lannister",
    "imageUrl": "https://thronesapi.com/assets/images/cersei.jpg",
    "born": "262 DC",
    "death": "305 DC"
  }]);
});

describe('mottoFilter', () => {

  it('should be an object', () => {
    expect(typeof mottoFilter).toBe("object");
  });

  describe('mottoFilter.mottoFilterFunction', () => {

    it('function', () => {
      expect(typeof mottoFilter.mottoFilterFunction).toBe('function');
    });
  });
  it('retorne lo que tiene mottoFilter', () => {
    const mottoResult= { "motto":[
      {
        "id": 53,
        "family": "House Targaryen",
        "imageUrl": "https://static.wikia.nocookie.net/gameofthrones/images/1/1e/House_Targaryen.svg/revision/latest?cb=20221029110249",
        "motto": "Fire and Blod",
        "comment" : "- House Targaryen family words",
        "history":"The only family of dragonlords who survived the Doom of Valyria, the Targaryens left the Valyrian Freehold twelve years before the Doom. They resided for more than a century at Dragonstone castle on Dragonstone island, until Aegon the Conqueror and his sister-wives, Visenya and Rhaenys, began the first of the Wars of Conquest in 2 BC."
      },
      {
        "id": 54,
        "family": "House Tarly",
        "imageUrl": "https://static.wikia.nocookie.net/gameofthrones/images/c/cc/House_Tarly.svg/revision/latest?cb=20221111182759",
        "motto": "First in Battle",
        "comment" : "-House Tarly family words",
        "history": "House Targaryen of King's Landing s a noble family of Valyrian descent who once ruled the Seven Kingdoms of Westeros. The only family of dragonlords who survived the Doom of Valyria, the Targaryens left the Valyrian Freehold twelve years before the Doom. They resided for more than a century at Dragonstone castle on Dragonstone island, until Aegon the Conqueror and his sister-wives, Visenya and Rhaenys, began the first of the Wars of Conquest in 2 BC."
      },
      {
        "id": 55,
        "family": "House Stark",
        "imageUrl":"https://static.wikia.nocookie.net/gameofthrones/images/7/7e/House_Stark.svg/revision/latest?cb=20221030093202",
        "motto": "Winter is Coming",
        "comment" : "-House Stark family words",
        "history": "House Stark of Winterfell is one of the Great Houses of Westeros and the principal noble house of the north. In days of old they ruled as Kings of Winter, but since Aegon's Conquest they have been Wardens of the North and ruled as Lords of Winterfell. Their seat, Winterfell, is an ancient castle renowned for its strength."
      },]}
    const g="House Tarly"
    expect(mottoFilter.mottoFilterFunction(mottoResult ,g)).toEqual([{
      "id": 54,
      "family": "House Tarly",
      "imageUrl": "https://static.wikia.nocookie.net/gameofthrones/images/c/cc/House_Tarly.svg/revision/latest?cb=20221111182759",
      "motto": "First in Battle",
      "comment" : "-House Tarly family words",
      "history": "House Targaryen of King's Landing s a noble family of Valyrian descent who once ruled the Seven Kingdoms of Westeros. The only family of dragonlords who survived the Doom of Valyria, the Targaryens left the Valyrian Freehold twelve years before the Doom. They resided for more than a century at Dragonstone castle on Dragonstone island, until Aegon the Conqueror and his sister-wives, Visenya and Rhaenys, began the first of the Wars of Conquest in 2 BC."
  
    }]);
  });
});

describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });
});

describe('sortData', () => {
  const data = {
    "got": [{
      "id": 30,
      "firstName": "Shae",
      "lastName": "",
      "fullName": "Shae",
      "title": "Mistress",
      "family": "Lorathi",
      "imageUrl": "https://thronesapi.com/assets/images/shae.jpg",
      "born": "281 DC",
      "death": "300 DC"
    },
    {
      "id": 31,
      "firstName": "Tommen",
      "lastName": "Baratheon",
      "fullName": "Tommen Baratheon",
      "title": "King of the Seven Kingdoms",
      "family": "Baratheon",
      "imageUrl": "https://thronesapi.com/assets/images/tommen.jpg",
      "born": "291 DC"
    },
    {
      "id": 32,
      "firstName": "Gendry",
      "lastName": "Baratheon",
      "fullName": "Gendry Baratheon",
      "title": "Lord of Storm's End",
      "family": "Baratheon",
      "imageUrl": "https://thronesapi.com/assets/images/gendry.jpg",
      "born": "284 DC"
    },]
  }
  it('ordenar de forma ascendente', () => {
    const order ='Ascendente'
    expect(sortData (data, order)).toEqual( [{
      "id": 32,
      "firstName": "Gendry",
      "lastName": "Baratheon",
      "fullName": "Gendry Baratheon",
      "title": "Lord of Storm's End",
      "family": "Baratheon",
      "imageUrl": "https://thronesapi.com/assets/images/gendry.jpg",
      "born": "284 DC"
    },
    {
      "id": 30,
      "firstName": "Shae",
      "lastName": "",
      "fullName": "Shae",
      "title": "Mistress",
      "family": "Lorathi",
      "imageUrl": "https://thronesapi.com/assets/images/shae.jpg",
      "born": "281 DC",
      "death": "300 DC"
    },
    {
      "id": 31,
      "firstName": "Tommen",
      "lastName": "Baratheon",
      "fullName": "Tommen Baratheon",
      "title": "King of the Seven Kingdoms",
      "family": "Baratheon",
      "imageUrl": "https://thronesapi.com/assets/images/tommen.jpg",
      "born": "291 DC"
    },])
  })
  it('ordenar de forma descendente', () => {
    const order ='Descendente'
    expect(sortData (data, order)).toEqual( [{
      "id": 31,
      "firstName": "Tommen",
      "lastName": "Baratheon",
      "fullName": "Tommen Baratheon",
      "title": "King of the Seven Kingdoms",
      "family": "Baratheon",
      "imageUrl": "https://thronesapi.com/assets/images/tommen.jpg",
      "born": "291 DC"
    },
    {
      "id": 30,
      "firstName": "Shae",
      "lastName": "",
      "fullName": "Shae",
      "title": "Mistress",
      "family": "Lorathi",
      "imageUrl": "https://thronesapi.com/assets/images/shae.jpg",
      "born": "281 DC",
      "death": "300 DC"
    },
    {
      "id": 32,
      "firstName": "Gendry",
      "lastName": "Baratheon",
      "fullName": "Gendry Baratheon",
      "title": "Lord of Storm's End",
      "family": "Baratheon",
      "imageUrl": "https://thronesapi.com/assets/images/gendry.jpg",
      "born": "284 DC"
    },])
  })
})



describe('calcSurvivors', () => {
  it('is a function', () => {
    expect(typeof calcSurvivors).toBe('function');
  });
  it('returns `calcSurvivors`', () => {
    const newArrFam= 
    [{
      "id": 34,
      "firstName": "Robert",
      "lastName": "Baratheon",
      "fullName": "Robert Baratheon",
      "title": "King of the Seven Kingdoms",
      "family": "Baratheon",
      "imageUrl": "https://thronesapi.com/assets/images/king-robert.jpg",
      "born": "262 DC",
      "death": "298 DC"
    },
    {
      "id": 35,
      "firstName": "Ramsey",
      "lastName": "Bolton",
      "fullName": "Ramsey Bolton",
      "title": "The Bastard of Bolton",
      "family": "Bolton",
      "imageUrl": "https://thronesapi.com/assets/images/ramsey-bolton.jpg",
      "born": "277 DC"
    },
    {
      "id": 36,
      "firstName": "Talisa",
      "lastName": "Stark",
      "fullName": "Talisa Stark",
      "title": "Queen Consort",
      "family": "Stark",
      "imageUrl": "https://thronesapi.com/assets/images/talisa-stark.jpg",
      "born": null,
      "death": "300 DC"
    }];
    expect(calcSurvivors(newArrFam)).toBe(1);
  });
});


/*it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });*/




/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
