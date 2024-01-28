///Завдання 2

let services = {
    price1: 60,
    price2: 80,
    }
        services.price3 = 200;
       
    console.log('Вартіть розбитого скла = ' + services.price3 + 'грн')
    
        let sum = 0;
           for (let key in services) {
        sum += services[key];
        
    }
    console.log('Загальна вартість послуг = ' + sum + 'грн')
    console.log('Мінімальна ціна = ' + Math.min(services.price1, services.price2, services.price3) + 'грн')
   console.log('Максимальна вартіст послуг = ' + Math.max(services.price1, services.price2, services.price3) + 'грн')
  
    //Завдання 1

    /*let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }
    //let values = Object.entries(salaries);
   // console.log(values)
    salaries.Harry = 135;
    let values = Object.entries(salaries);
    console.log(values)*/

        

