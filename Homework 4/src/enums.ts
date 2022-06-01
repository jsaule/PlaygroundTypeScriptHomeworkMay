enum WeekDays {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday, 
  Friday,
  Saturday, 
  Sunday, 
};

enum Answer {
  No,
  Yes,
};

enum WeekDayNamesLT {
  Monday = 'pirmadienis',
  Tuesday = 'antradienis',
  Wednesday = 'trečiadienis',
  Thursday = 'ketvirtadienis',
  Friday = 'penktadienis',
  Saturday = 'šeštadienis',
  Sunday = 'sekmadienis',
};

console.group('Literal types - užduotys');
{
  enum LithuanianCity {
    Kaunas = 'Kaunas',
    Vilnius = 'Vilnius',
    Klaipeda = 'Klaipeda',
    Siauliai = 'Siauliai',
    Panevezys = 'Panevezys',
  };

  enum LargestCountries {
    China,
    India,
    UnitedStates,
    Indonesia,
    Pakistan,
  };

  enum StrongestEconomies {
    UnitedStates = 1,
    China,
    Japan,
    Germany,
    UnitedKingdom,
  };
  
  console.group("1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.");
  {
    const city1: LithuanianCity = LithuanianCity.Kaunas;
    const city2: LithuanianCity = LithuanianCity.Klaipeda;

    console.log({ city1, city2 });
  }
  console.groupEnd();

  console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
  {
    const largestCountries: LargestCountries[] = [LargestCountries.China, LargestCountries.Pakistan];

    console.log(largestCountries);
  }
  console.groupEnd();

  console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
  {
    const strongestEconomies: StrongestEconomies[] = [
      StrongestEconomies.UnitedStates,
      StrongestEconomies.China,
      StrongestEconomies.Japan,
      StrongestEconomies.Germany,
      StrongestEconomies.UnitedKingdom,
    ];

    console.log(strongestEconomies);
  }
  console.groupEnd();

}
console.groupEnd();

