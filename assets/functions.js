const signs = [
    {name:'Козерог', mont:1, daY:20},
    {name:'Водолей', mont:2, daY:20},
    {name:'Рыбы',    mont:3, daY:20},
    {name:'Овен',    mont:4, daY:20},
    {name:'Телец',   mont:5, daY:20},
    {name:'Близнецы',mont:6, daY:21},
    {name:'Рак',     mont:7, daY:22},
    {name:'Лев',     mont:8, daY:23},
    {name:'Дева',    mont:9, daY:23},
    {name:'Весы',    mont:10,daY:23},
    {name:'Скорпион',mont:11,daY:22},
    {name:'Стрелец', mont:12,daY:21},
    {name:'Козерог', mont:13,daY:20}
    ];

const chinaSigns = [
    {name: 'Обезьяна', year: 0},
    {name: 'Петух',    year: 1},
    {name: 'Собака',   year: 2},
    {name: 'Свинья',   year: 3},
    {name: 'Мышь',     year: 4},
    {name: 'Бык',      year: 5},
    {name: 'Тигр',     year: 6},
    {name: 'Кролик',   year: 7},
    {name: 'Дракон',   year: 8},
    {name: 'Змея',     year: 9},
    {name: 'Лошадь',  year: 10},
    {name: 'Коза',    year: 11}
    ];

    function innCalc(inn) {
        inn = inn.toString()
        let innCheckArray = [-1, 5, 7, 9, 4, 6, 10, 5, 7];
        let checkSum = 0;
        let final = [];
        let gender;
        let zodiack;
        let chinaZodiack;
      
        if (inn.length < 10){
          final.push("Не хватает цифер");
        } else {
          for (let i = 0; i < inn.length -1; i++) {
            checkSum = checkSum + (inn[i] * innCheckArray[i]);
          }
          let control = checkSum - (11 * (Math.floor(checkSum / 11)));
          if (control >= 10) {
            control = 0;
          }
      
          if (control != inn[9]) {
            final.push("Неверный ИНН");
          } else {
                final.push("ИНН корректный");
                let birthCheck = +inn.substring(0, 5);
                let date = new Date(1900, 0, 0);
                date.setDate(date.getDate() + (birthCheck));
          
                let now = new Date(); 
                let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); 
                let dateOfBirth = new Date(date);
                var dobnow = new Date(today.getFullYear(), dateOfBirth.getMonth(), dateOfBirth.getDate()); //ДР в текущем году
            
                let fullAge;
            
                fullAge = today.getFullYear() - dateOfBirth.getFullYear();
                if (today < dobnow) {
                fullAge = fullAge-1;
                }
                let endNum = fullAge.toString().slice(-1);
                if(endNum == 1) {
                  fullAge = fullAge + " год"
                }else if(endNum > 1  && endNum < 5){
                  fullAge = fullAge + " года"
                } else {
                  fullAge = fullAge + " лет"
                }
                fullAge = fullAge.toString();
                let allDate = [];
                if ((date.getMonth()+1) > 0 && (date.getMonth()+1) < 9){
                    allDate.push("Дата рождения: " + date.getDate(), ' '+ '0' + (date.getMonth()+1), ' '+ date.getFullYear());
                } else {
                    allDate.push("Дата рождения: " + date.getDate(), ' ' + (date.getMonth()+1), ' '+ date.getFullYear());
                }
                allDate = allDate.toString(); 
                //console.log(`Birthday date is: ${allDate}; full age is ${fullAge}`);
                final.push(allDate, "Полный возраст: "+fullAge);
          
                
            
                if(inn[inn.length-2] % 2 != 0) {
                gender  = 'Пол: Мужской';
                } else {
                gender  = 'Пол: Женский';
                }
                final.push(gender)
                let daY = date.getDate();
                let mont = date.getMonth()+1;
                let yearC = date.getFullYear();

                if (signs[mont].daY <= daY) {
                    zodiack = signs[mont].name;
                } else {
                    zodiack = signs[mont-1].name;
                } 
                
                for (let item of chinaSigns) {
                    if(yearC % 12 == item.year) {
                        chinaZodiack = item.name;
                    }
                }
                final.push("Знак зодиака: " + zodiack, "Восточный календарь: " + chinaZodiack);
           }
        }
        return final;    
    }

    //console.log(innCalc(3505906149))
    export {innCalc}
