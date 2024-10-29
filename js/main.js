fetch("https://forkify-api.herokuapp.com/api/search?q=pizza")
.then(function(x){
    return x.json()
})
.then(function(y){
    console.log(y)
    z=y.recipes;
    var myText="";
            for(var i=0; i<z.length; i++){
                var cartoona=`<div class="col-md-4 text-center mb-5">
                                <img src="${z[i].image_url}" alt="" class="img-fluid"  style="height:300px; width: 400px;"></img>
                                <h4>${z[i].title}</h4>
                                <h6>${z[i].publisher}</h6>
                            </div>`;
                myText=myText+cartoona;
            }
            document.querySelector(".test").innerHTML=myText;
})