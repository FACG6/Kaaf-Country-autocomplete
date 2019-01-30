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
dataRequist("/Country", (response) => {

})