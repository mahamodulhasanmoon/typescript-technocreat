{
  // Genaric with interface

  interface Developer<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
  }
  interface PoorWatch {
    brand: string;
    model: string;
    display: string;
  }
  interface RichWatch {
    brand: string;
    model: string;
    sleepTrack: Boolean;
    heartTrack: Boolean;
  }


  const poorDeveloper: Developer<PoorWatch> = {
    name: "gorib manus",
    computer: {
      brand: "asus",
      model: "x-23344",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "emilab",
      model: "kw-66",
      display: "OLED",
    },
  };

  
  const RichDeveloper: Developer<RichWatch> = {
    name: "doni manus",
    computer: {
      brand: "apple",
      model: "m145",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "apple",
      model: "kw66",
      heartTrack: true,
      sleepTrack: true,
    },
  };
}
