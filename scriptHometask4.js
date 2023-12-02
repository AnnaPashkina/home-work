//"use strict"

   
       var age = prompt("Скільки мені років", "")
       if (age > 1 && age < 4 || age > 21 && age < 25 || age > 31 && age < 35 || age > 41 && age < 45 || age > 51 && age < 55
    || age > 61 && age < 65 || age > 71 && age < 75 || age > 81 && age < 85 || age > 91 && age < 95) 
{console.log (" Мені " + age + " роки.")
    } else if (age > 4 && age < 20 || age > 24 && age < 31 || age > 34 && age < 41 || age > 44 && age < 51 || age > 54 && age < 61
        || age > 64 && age < 71 || age > 74 && age < 81 || age > 84 && age < 91 || age > 94 && age < 101)  {
        console.log (" Мені " + age + " років.")
    }               else if (age == ("") ) {console.log ("Заповни поле")}
    else if (age == (0) ) {console.log ("ТОбі 0 років?")}
      else if (age < 0) {console.log ("Вік не може мати від'ємне значення")}
            else {
            console.log(" Мені " + age + " рік")
            }
            




