const students = [
    {
      firstName: "Jane",
      lastName: "Doe",
      habits: [
        "doesn't wash dishes",
        "falls asleep in lecture",
        "shows up early",
      ],
    },
    {
      firstName: "John",
      lastName: "Smith",
      habits: ["shows up late", "washes dishes", "helps peers"],
    },
    {
      firstName: "Arya",
      lastName: "Stark",
      habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
    },
    {
      firstName: "Jon",
      lastName: "Snow",
      habits: ["shows up early", "helps peers", "washes dishes"],
    },
  ];
  
  const badHabit1 = "doesn't wash dishes";
  const expected1 = ["Jane Doe", "Arya Stark"];
  
  const badHabit2 = "shows up late";
  const expected2 = ["John Smith", "Arya Stark"];
  
  const badHabit3 = "typo";
  const expected3 = [];
  
  function santasNaughtyList(persons, badHabit) {
    let newArr = []
    for(key in persons) {
      if(persons[key] == "habits"){
        valid = true
        console.log(persons[key])
      } else {
        valid = false
      }
    }
    return newArr;
  }
  console.log(santasNaughtyList(students, badHabit1))
  // also, persons is an array. Think about how you can loop through the array to get into each person??
  // do we need to loop through all the keys in person?
  // it's always gonna be firstname, lastname and habits 
  
  //Finds a list of people whose habits contain the given bad habit.
  //return an array of the firstname and the lastname of them.
   
  
  function santasNaughtyListFunctional(persons, badHabit) {}
  
  function santasNaughtyList2(persons, badHabit) {
    let nameArray = []
  
    for(object of students){
      for(key in object){
        if(key === "habits"){
          for(element of object[key]){
            if(element === badHabit){
              let name = object.firstName + " " + object.lastName
              nameArray.push(name)
            }
          }
        }
      }
    }
    return nameArray
  }
  
  console.log(santasNaughtyList2(students, "doesn't wash dishes"))
  console.log(santasNaughtyList2(students, "shows up late"))
  