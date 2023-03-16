export function destructingTest(item = true) {
  if (!item) return;

  console.log("--Destrutions--");

  (function () {
    console.log("Task 1");
    const users = ["Bob", "John", "Anna", "Veronika", ["Rick"]];
    const [user1, , user2, user3, [user4]] = users;
    console.log("Result: ", user1, user2, user3, user4);
  })();

  (function () {
    console.log("Task 2");
    const user = {
      name: "Alex",
      lastName: "McCallister",
      birthday: "12.04.1994",
      sex: "male",
      adress: null,
      location: {
        country: "England",
        city: "London",
      },
      email: null,
    };
    const {
      name,
      lastName,
      birthday,
      sex,
      adress,
      location: { country, city },
      email,
    } = user;
    console.log(
      "Result: ",
      name,
      lastName,
      birthday,
      sex,
      adress,
      country,
      city,
      email
    );
  })();

  (function () {
    console.log("Task 3");
    const players1 = ["Pozitiv4ik", "Delphinate", "MissLuck"];
    const players2 = ["NaGiBatoR", "SunnyGirl", "Lion"];
    const commonPlayers = [...players1, ...players2];
    console.log("Result: ", commonPlayers);
  })();

  (function () {
    console.log("Tusk 4");

    function footballer({ name, age, team, salary }) {
      return `Меня зовут ${name}, мне ${age}. Я играю за ${team}, и моя зарплата ${salary}`;
    }

    const player = {
      name: "Эмиль",
      age: "24",
      team: "Динамо(Минск)",
      salary: "500$",
    };

    console.log("Result: ", footballer(player));
  })();

  (function () {})();
}
