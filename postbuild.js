const exec = require('child_process').exec;
const fs = require('fs');
const path = require('path');

// find the styles css file
const files = getFilesFromPath('./dist/starter-angular/browser', '.css');
let data = [];

if (!files && files.length <= 0) {
  console.log("cannot find style files to purge");
  return;
}

for (let f of files) {
  // get original file size
  const originalSize = getFilesizeInKiloBytes('./dist/starter-angular/browser/' + f) + "kb";
  const o = { "file": f, "originalSize": originalSize, "newSize": "" };
  data.push(o);
}

console.log("Run PurgeCSS...");

exec("purgecss --safelist swiper-* border-* sweetalert2-* -css dist/starter-angular/browser/*.css --content dist/starter-angular/browser/index.html dist/starter-angular/browser/*.js -o dist/starter-angular/browser/", function (error, stdout, stderr) {
  console.log("PurgeCSS done");
  console.log();

  for (let d of data) {
    // get new file size
    d.newSize = getFilesizeInKiloBytes('./dist/starter-angular/browser/' + d.file) + "kb";
  }

  console.table(data);
});

function getFilesizeInKiloBytes(filename) {
  const stats = fs.statSync(filename);
  const fileSizeInBytes = stats.size / 1024;
  return fileSizeInBytes.toFixed(2);
}

function getFilesFromPath(dir, extension) {
  let files = fs.readdirSync(dir);
  return files.filter(e => path.extname(e).toLowerCase() === extension);
}
