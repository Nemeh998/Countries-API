


// async function fetchDataFromFetch(){
    
//     const fetchPromise = fetch("https://restcountries.com/v2/all");
    
//     // fetchPromise.then((response)=> {
//         //     console.log(response);
//         // })
//         try{
//             const response = await fetchPromise;
//             console.log(response);
//             // const obj=JSON.parse(response);
//             // console.log(obj)
    
//     }catch(err){
//         console.log(err);
//     }
//     finally{
//         console.log('log even if ')
//     }}

// // 
// //     async function getdata(){
// // const data=new URL("https://restcountries.com/v2/all");
// // console.log(data)

// //     }

const arry=[];
const fetchPromise =fetch("https://restcountries.com/v2/all");
console.log(fetchPromise);
fetchPromise.then((response)=>{
    return response.json()
}).then((responseJson)=>{
    console.log(responseJson);
    
    
    
    
    render(responseJson);
}

)

function render(value){
let html='';
for(let i=0;i<value.length;i++){
            let htmlSegment = `
            <div class="counter">
            <div class="user">
                                <img class="hero" src="${value[i].flags.png}" >
                                <p class="titel">${value[i].name} </p>
                                <p class="discraption">${value[i].languages[0].name}</p>
                            </div>
            </div>`
                            
    
            html += htmlSegment;
        }
    
        let container = document.querySelector('.counter');
        container.innerHTML = html;
    }
    


