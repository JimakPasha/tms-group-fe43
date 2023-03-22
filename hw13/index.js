{
    const users = ['Bob', 'John', 'Anna', 'Veronika', ['Rick']];
    const [firstUser, , ...otherUsers] = users;
    console.log(firstUser, otherUsers.flat());
}


{
    const user = {
        name: 'Alex',
        lastName: 'McCallister',
        birthday: '12.04.1994',
        sex: 'male',
        adress: null,
        location: { country: 'England', city: 'London', },
        email: null,
    };
    const { name, lastName, birthday, sex, adress, location, email } = user;
    console.log(name, lastName, birthday, sex, adress, location, email);
    const {country, city} = location;
    console.log(country, city);
}

{
    const players1 = ['Pozitiv4ik', 'Delphinate', 'MissLuck'];
    const players2 = ['NaGiBatoR', 'SunnyGirl', 'Lion'];
    const commonPlayers = [...players1,...players2];
    console.log(commonPlayers);
}

{
    const obj = {
        name: 'Vitya',
        age: 30,
        team: 'Salavat',
        salary: 100000
    };

    function footballPlaya({name, age, team, salary}) {
       return `Меня зовут ${name}, мне ${age}. Я играю за ${team}, и моя зарплата ${salary}`
    };

    console.log(footballPlaya(obj));
}
