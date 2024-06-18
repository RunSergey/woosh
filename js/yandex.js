document.getElementById('sendButton').addEventListener('click', sendRequest);

function sendRequest() {
   const url = 'http://localhost:8080/proxy';
   const data = {
       "modelUri": "gpt://b1ge2jtlr2ett7gik8mg/yandexgpt-lite",
       "completionOptions": {
           "stream": false,
           "temperature": 0.6,
           "maxTokens": 2000
       },
       "messages": [
           {
               "role": "system",
               "text": "Найди ошибки в тексте и исправь их"
           },
           {
               "role": "user",
               "text": "Ламинат подойдет для укладке на кухне или в детской комнате – он не боится влаги и механических повреждений благодаря защитному слою из облицованных меламиновых пленок толщиной 0,2 мм и обработанным воском замкам."
           }
       ]
   };

   fetch(url, {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(data)
   })
   .then(response => response.json())
   .then(data => {
       console.log('Success:', data);
   })
   .catch((error) => {
       console.error('Error:', error);
   });
}