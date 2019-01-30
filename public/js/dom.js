const input = document.querySelector(".entryContainer--input");
const dataResult = document.querySelector("#datalist");
const name = document.querySelector(".name");
const capital = document.querySelector(".capital");
const currncy = document.querySelector(".currncy");
const pop = document.querySelector(".pop");
input.addEventListener("input", (e) => {
    dataResult.innerHTML = "";
    dataRequist("Get", "/Country", (response) => {
        dataResult.innerHTML = "";
        response.filter(item => {
            if (item.country.startsWith(input.value.charAt(0).toUpperCase())) {
                const listItem = document.createElement("option");
                listItem.textContent = item.country;
                dataResult.appendChild(listItem);
            };
        })
        render(response);
    })
})