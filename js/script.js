let ageValue
let maleValue
let budgetValue

function registration(id){
  document.getElementById(id).style.display='block';
  document.getElementById('registration').style.display='none';
  return false;
}
function page1(id) {
    document.getElementById(id).style.display='block';
    document.getElementById('Page1').style.display='none';
    document.getElementById('body').style.background='none';
    return false;
  }
function page2(id) {
    document.getElementById(id).style.display='block';
    document.getElementById('Page2').style.display='none';
    return false;
  }

function page3(id) {
    ageValue = document.getElementById('age').value;
    console.log('Возраст:', ageValue);
    
    document.getElementById(id).style.display='block';
    document.getElementById('Page3').style.display='none';
    return false;
  }
  function page4(id) {
    budgetValue = document.getElementById('budget').value;
    console.log('Бюджет:', budgetValue);

    document.getElementById(id).style.display='block';
    document.getElementById('Page4').style.display='none';
    return false;
  }
  function choice(id) {
    document.getElementById(id).style.display='block';
    document.getElementById('choice').style.display='none';
    return false;
  }
  function page5(id) {
    document.getElementById(id).style.display='block';
    document.getElementById('Page5').style.display='none';
    return false;
  }


function morw(c, nc) {
  document.getElementById(c).style.background='#E1741C';
  document.getElementById(nc).style.background='#000';

  maleValue = document.getElementById(c).id
  console.log(maleValue)
}
function point(p, n1, n2){
  document.getElementById(p).style.display='block';
  document.getElementById(n1).style.display='none';
  document.getElementById(n2).style.display='none';
}

const buttons = document.querySelectorAll('.filters_element .element1');
buttons.forEach(button => {
    button.addEventListener('click', () => {
         if (button.style.background === '' || button.style.background === 'none') {
            if((info.includes(button.value)) === false){info.push(button.value)}
            console.log(info)
            button.style.background = 'linear-gradient(45deg, #DA00C2, #DA0C47,#DA1505,#E1741C'
            }
         else 
            {
                info = info.filter(item => item !== button.value);
                console.log(info)
                button.style.background = '';
            }
      });
 });
 


// Функция для отправки запроса к ChatGPT 
async function fetchGPTResponse(budgetValue, maleValue, ageValue) {
  const apiKey = 'sk-mRbfKzdlLp3fLWvjP37SBI9IgPRkqd26'; 
  const endpoint = 'https://api.proxyapi.ru/openai/v1/chat/completions'; 

  const requestBody = {
    model: "gpt-3.5-turbo", 
    messages: [
      { role: "system", content: "You are very cool in choosing the coolest and most suitable gifts" }, 
      { role: "user", content: 'Придумай 1 подарок, который будет соответствовать этип параметрам:' + budgetValue + ',' + maleValue + ',' + ageValue + '. Напиши название подарка и его описание в одно предложение'} // Сообщение от пользователя
    ],
    max_tokens: 50
  };

  try {
    // Отправляем POST-запрос к ChatGPT 
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${apiKey}` 
      },
      body: JSON.stringify(requestBody) 
    });

    // Получаем и обрабатываем ответ
    const data = await response.json();
    if (response.ok) { //если ответ пришел без ошибок

      console.log('Все норм, запрос работает')
      console.log(data.choices[0].message.content) //Выводим в консоль ответ
      document.getElementById('gift_description').textContent = data.choices[0].message.content //Выводим ответ на страничку

      //Выводим страницу с подарком
      document.getElementById('Gifts').style.display = 'block';
      document.getElementById('Page6').style.display = 'none';
      document.getElementById('choice').style.display = 'none';

      return data.choices[0].message.content
    } else {
      throw new Error(data.error.message)
    }
  } catch (error) {
    console.error('Ошибка при обращении к ChatGPT API:', error);
    return 'Ошибка при получении ответа от ChatGPT.';
  }
}


