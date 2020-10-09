const fs = require("fs");

const array = fs.readFileSync("./array.txt").toString().split("\n");

const request = require("request");

const createWriteableStream = (path = "") => {
  try {
    const dirPathArr = path.split("/");
    const dirPath = dirPathArr.slice(0, dirPathArr.length - 1).join("/");
    fs.mkdirSync(dirPath, { recursive: true });
    return fs.createWriteStream(path);
  } catch (error) {
    console.log(path);
  }
};

const download = (url, path, callback) => {
  request.head(url, (err, res, body) => {
    request(encodeURI(url)).pipe(createWriteableStream(path));
  });
};
encodeURI;

array.forEach(url => {
  if (url.includes("https://noibai247.taxi/")) {
    download(url, url.replace("https://noibai247.taxi/", ""), () => {
      console.log("✅ Done!");
    });
  }
});
