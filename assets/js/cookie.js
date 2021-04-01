async function getLanguage(uri) {
  let res = await fetch("https://ipapi.co/json/"),
    ret = await res.text();
  return ret; // a Promise() actually.
}

getLanguage().then((responseString) => {
  const jsonResponse = JSON.parse(responseString);
  if (jsonResponse) {
    if (jsonResponse.continent_code === "EU") {
      // console.log('Activate Cookie Banner');

      new CookiesEuBanner(function () {
        // Your code here
      }, true);
    }
  }
});
