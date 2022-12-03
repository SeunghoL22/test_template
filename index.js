const axios = require("axios");
const cheerio = require("cheerio");

const getHTML = async (keyword) => {
  try {

    const resp = await axios.get(
        "https://www.musinsa.com/search/musinsa/goods?q=" + encodeURI(keyword),
        {
            header: {
                'Accept-Encoding': 'application/json',
            }
        }
    );
    console.log(JSON.stringify(resp.data, null,4));
} catch (err) {
    console.log("get HTML error");
  }
}

getHTML("닥터마틴");
/*
const parsing = async (keyword) =>
{
    const html = await getHTML(keyword);
    console.log(html.data);
    console.log(Object.keys(html));
    //console.log(html.data[2]);
}

parsing("닥터마틴");
*/
