const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require('iconv-lite')

axios.defaults.headers.get['content-type'] = 'application/json;charset=UTF-8'
const getHTML = async (keyword) => {
  try {

    return await axios.get("https://www.musinsa.com/search/musinsa/goods?q=" + encodeURI(keyword), {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      }
    });

  }

  catch (err) {
    console.log("get HTML error");
  }
}
const parsing = async (keyword) =>
{
    const html = await getHTML(keyword);
    console.log(html.data);
    console.log(Object.keys(html));
    //console.log(html.data[2]);
}

parsing("닥터마틴");
