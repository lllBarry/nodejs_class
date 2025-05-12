// // const math = require("./math")
// import { add, subtract } from "./math"

// // const result1 =math.add(11, 654)
// // const result2 =math.subtract(11, 654)
// const result1 =add(11, 654)
// const result2 =subtract(11, 654)


// console.log(result1);
// console.log(result2);


// const fs = require('fs');

// fs.readFile('example.txt', 'utf8', (err, data) => {
//     if(err) {
//         console.error('讀檔錯誤:', err);
//         return;
//     }
//     console.log('實際內容:', data);
    
// });



// const fs = require('fs').promises;

// async function demo() {
//   try {
//     const data = await fs.readFile('example.txt', 'utf8');
//     console.log('實際內容：', data);
//   } catch (err) {
//     console.error('讀檔錯誤：', err);
//   }
// }

// demo();
// console.log('測試 async/await')










// 用callback讀取三個檔案
// import{ readFile } from 'fs/promises';
// const fs = require('fs').promises;

// async function readFiles() {
//   try {
//     const data1 = await readFile('file1.txt', 'utf8');
//     console.log('第一個檔案：', data1);

//     const data2 = await readFile('file2.txt', 'utf8');
//     console.log('第二個檔案：', data2);

//     const data3 = await readFile('file3.txt', 'utf8');
//     console.log('第二個檔案：', data3);
//   } catch (err) {
//     console.error('讀檔錯誤：', err);
//   }
// }

// readFiles();











// 用promise讀取三個檔案
// import{ readFile } from 'fs/promises';
// async function readFilesParallel() {
//     try {
//       const [file1, file2, file3] = await Promise.all([
//         readFile('file1.txt', 'utf8'),
//         readFile('file2.txt', 'utf8'),
//         readFile('file3.txt', 'utf8')
//       ]);
//       console.log('file1：', file1);
//       console.log('file2：', file2);
//       console.log('file3：', file3);
//     } catch (err) {
//       console.error('讀檔錯誤：', err);
//     }
//   }

//   readFilesParallel();




const fs = require('fs').promises;

async function readFilesParallel() {
    console.time("總執行時間")
    console.log("開始讀取檔案...")
    
    try {
        await fs.readFile("file1.txt", "utf-8")
        console.log("讀取 file1 完成")
        
        await fs.readFile("file2.txt", "utf-8")
        console.log("讀取 file2 完成")

        await fs.readFile("file3.txt", "utf-8")
        console.log("讀取 file3 完成")
    } catch (err) {
        console.error('讀檔錯誤:', err);
    }
    console.timeEnd("總執行時間")
    
}


readFilesParallel();