const elmWidgetItem = document.getElementById('widgetItem');
const elmListCoin = document.getElementById('list-coin');
const elmListGold = document.getElementById('List-Gold');
  
  axios.get(`${BASE_URL}categories_news?offset=0&limit=10`).then((response) => {
    const categories = response.data;
  
    let html = '';
    categories.forEach(item => {
        let classActive = "";
        if(id === item.id){
            classActive = 'class="active"';
        }
      html += /* html */ `              
      <li><a ${classActive} href="category.html?id=${item.id}">${item.name}<span class="ml-auto">(${item.id})</span></a>
      </li>`
    });
    elmWidgetItem.innerHTML = html;
  });


  axios.get(`https://apiforlearning.zendvn.com/api/get-gold`).then((response) => {
    const items = response.data;
  
    let html = '';
    items.forEach(item => {
      html += /* html */ `                
        <tr>
              <td>${item.type}</td>
              <td>${item.sell}</td>
              <td>${item.buy}</td>
        </tr>` 
    });
    elmListGold.innerHTML = html;
    console.log(elmListGold)
  });
  
  
  axios.get(`https://apiforlearning.zendvn.com/api/get-coin`).then((response) => {
    const items = response.data;
  
    let html = '';
    items.forEach(item => {
      let CoinActive = "";
      if(item.percent_change_24h < 0) {
        CoinActive = 'class ="active-coin"'
      }
      html += /* html */ `              
        <tr>
          <td class="much-coin">${item.name}</td>
          <td class="much-coin">${item.price.toFixed(2)}</td>
          <td ${CoinActive} class="much-coin">${item.percent_change_24h.toFixed(2)}</td>
        </tr>
    ` 
    });
    elmListCoin.innerHTML = html;
  }); 






