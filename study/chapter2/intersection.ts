{
  // interscetion Type : &

  type Student = {
    name: string;
    score: number;
  };

  type Woker = {
    empolyeeId: number;
    work: () => void;
  };

  const intern = (person: Student & Woker) => {
    console.log(person.name, person.score, person.empolyeeId, person.work());
  };
}
