// const fs = require('fs');

//reading files

// fs.readFile('./yass/yass.txt', (err, data)=> {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// console.log('last line');

//writing files

// fs.writeFile('./yass/yass.txt', 'hello yass', ()=>{
//     console.log('file was written')
// })

//directories

// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('dir done');
//     })
    
// } else {
//     fs.rmdir('./assets', (err) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log('folder deleted');
//     });
// }

//deleting files

// if(fs.existsSync('./yass/yass.txt')){
//     fs.unlink('./yass/lolo.txt', (err) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log('file deleted')
//     })
// }