fetch('./data.json')
.then((Response)=>{
//    if (!(Response.ok)) {
//     throw new Error("Network was not found");
//    }
   return Response.json()
})
.then((data)=>{
    // console.log(data[0]);
    data.forEach((e) => {
      let title = e.title == "Self Care" ? "Self-Care" : e.title;
      let arr = ["day","week","month"];

      let current = e.timeframes.daily.current;
        let previous = e.timeframes.daily.previous;
        document.querySelector(`#${title}`).innerHTML = `<span class="upper">${current}hrs</span>
        <span class="lower">
          <span>Last</span>
          <span>${arr[0]}</span>
          <span>${previous}hrs</span>
        </span>`

      let daily = document.getElementsByClassName("daily")[0].addEventListener("click",()=>{
        let current = e.timeframes.daily.current;
        let previous = e.timeframes.daily.previous;
        document.querySelector(`#${title}`).innerHTML = `<span class="upper">${current}hrs</span>
        <span class="lower">
          <span>Last</span>
          <span>${arr[0]}</span>
          <span>${previous}hrs</span>
        </span>`
      })

      let weekly = document.getElementsByClassName("weekly")[0].addEventListener("click",()=>{
        let current = e.timeframes.weekly.current;
        let previous = e.timeframes.weekly.previous;
        document.querySelector(`#${title}`).innerHTML = `<span class="upper">${current}hrs</span>
        <span class="lower">
          <span>Last</span>
          <span>${arr[1]}</span>
          <span>${previous}hrs</span>
        </span>`
      })

      let monthly = document.getElementsByClassName("monthly")[0].addEventListener("click",()=>{
        let current = e.timeframes.monthly.current;
        let previous = e.timeframes.monthly.previous;
        document.querySelector(`#${title}`).innerHTML = `<span class="upper">${current}hrs</span>
        <span class="lower">
          <span>Last</span>
          <span>${arr[2]}</span>
          <span>${previous}hrs</span>
        </span>`
      })

    });
   

})
.catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
