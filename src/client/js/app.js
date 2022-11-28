const myKey = "9ee8f385721d99acd770874f61eb3117";
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";
const lang = "&lang=en";
const urlApiText = "&txt="

const name = document.getElementById('name');

 


function handleSubmit(event) {
    event.preventDefault()

    //check what text was put into the form field
 let formText = document.getElementById('name').value
 Client.checkForName(formText)
 Client.textAlert(formText);




   
    const info = `${baseURL}${myKey}${urlApiText}${formText}${lang}`;
    cloudApi (info)
    .then ((data)=> {
        postData("https://languageanalyser.herokuapp.com/postData",{agreement: data.agreement, confidence: data.confidence, irony: data.irony, subjectivity: data.subjectivity})
     
        .then (()=>{
            updateUI ();
    });
})
}





// function to send and recieve api data 
const cloudApi = async (url)=>{
    
    try{  
        const res = await fetch (url);
        const data = await res.json();
        console.log (data);
        if(data.cod != 200){
            return data;}
        return data;
    } catch (error){
        console.log (error,"cant find text info")
    }
    };



// post data client side function
const postData = async( url, data = {}) => {

    try{
    const res = await fetch (url,{
        method: 'POST', credentials: "same-origin", headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(data)
})
    const newData = await res.json();
    return newData;
 } catch (error){
    console.log (error, "cant post name, error")
    
 } 
 
}


//Update the UI
const updateUI = async () =>{
    try{
    const req = await fetch("https://languageanalyser.herokuapp.com/getData");
  
  const allData = await req.json ();
   document.getElementById('text').innerHTML = `<p>${name.value}  </p>`;
  document.getElementById('agreement').innerHTML= `<p>Agreement : ${allData[0].agreement} </p>`;
   document.getElementById('confidence').innerHTML= `<p>Confidence level : ${allData[1].confidence} </p>`;
   document.getElementById('irony').innerHTML= `<p>Irony : ${allData[2].irony} </p>`;
   document.getElementById('subjectivity').innerHTML= `<p>Subjectivity : ${allData[3].subjectivity} </p>`;

   document.getElementById('text__title').innerHTML=  `<p>Text : </p>`;
   document.getElementById('results').innerHTML=  `<p>Results : </p>`;

  const results__container = document.getElementById('results__container');
  results__container.style.cssText =  'border: rgb(45, 83, 187) 5px solid;  background-color: rgba(24, 81, 99, 0.6);'
   
}catch(error){
    console.log("could'nt get data from server", error);
    
}
}



//export function
export { handleSubmit };