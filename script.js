// function getData(){
//     console.log("button clicked")

//     //step1: create an XHR object
//     var xhr= new XMLHttpRequest();
//     console.log("unsent",xhr.readystate);

//     //step2" request specification
//     xhr.open("Get","input.text",true);
//     console.log("open",xhr.readyState);

//     //step3: sending request
//     xhr.send();

//     //step4: create an event lister
//     xhr.onreadystatechange = function(){
//         if(xhr.readystate ==4 && xhr.status == 200){
//             var data = this.responseText;
//             console.log(data);
//             document.getElementById("p").innerHTML = data;
//         }
//     }
// }


// function getData(){
//     console.log("button clicked")

//     //step1: create an XHR object
//     var xhr= new XMLHttpRequest();
//     console.log("unsent",xhr.readyState);

//     //step2" request specification
//     xhr.open("Get","data.json",true);
//     console.log("open",xhr.readyState);

//     //step3: sending request
//     xhr.send();

//     //step4: create an event lister
//     xhr.onreadystatechange = function(){
//         console.log("done",xhr.readyState);
//         if(xhr.readyState == 4 && xhr.status == 200){
//             var data = JSON.parse(this.responseText);
//             console.log(data);
//             var output="";
//             for(let i=0;i<data.length;i++){
//                 output += `<ul><li>${data[i].name}</li></ul>`
//             }
//             document.getElementById("s").innerHTML = output;
//         }
//     }
// }

function getData(){
    console.log("button clicked")

    //step1: create an XHR object
    var xhr= new XMLHttpRequest();
    console.log("unsent",xhr.readyState);

    //step2" request specification
    xhr.open("Get","https://jsonplaceholder.typicode.com/users",true);
    console.log("open",xhr.readyState);

    //step3: sending request
    xhr.send();

    //step4: create an event lister
    xhr.onreadystatechange = function(){
        console.log("done",xhr.readyState);
        if(xhr.readyState == 4 && xhr.status == 200){
            var data = JSON.parse(this.responseText);
            console.log(data);
            var output=`<tr>
            <th>Name</th>
            <th>Email</th>
            </tr>`
            for(let i=0;i<data.length;i++){
                // output += `<ul><li>${data[i].name}</li><li>${data[i].email}</li></ul>`
                output += `<tr>
                <td>${data[i].name}</td>
                <td>${data[i].email}</td>
                `
            }
            document.getElementById("tb").innerHTML = output;
        }
    }
}