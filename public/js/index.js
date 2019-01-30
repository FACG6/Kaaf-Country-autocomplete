function dataRequist(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        callback(response);
      }
    }
    xhr.open("GET", url);
    xhr.send();
  }
  const input = document.querySelector(".entryContainer--input");
  const dataResult = document.querySelector("#datalist");
  const name = document.querySelector(".name");
  const capital = document.querySelector(".capital");
  const currncy = document.querySelector(".currncy");
  const pop = document.querySelector(".pop");
  
  input.addEventListener("input", (e) => {
    dataResult.innerHTML = "";
    dataRequist("/Country", (response) => {
      dataResult.innerHTML = ""
      response.filter(item => {
        if (item.country.startsWith(input.value.charAt(0).toUpperCase())) {
          const listItem = document.createElement("option");
          listItem.value = item.country;
          listItem.textContent = item.country;
          dataResult.appendChild(listItem);
        };
      })
      response.forEach(element => {
        if(element.country === input.value){
      name.textContent = input.value;
          capital.textContent = element.capital;
          currncy.textContent = element.currency_code;
          pop.textContent = element.population;
        }
      });
    })
  })