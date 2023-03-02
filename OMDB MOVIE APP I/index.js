document.querySelector("#form").addEventListener("submit",formoviesearch)
    
    function formoviesearch(){
        event.preventDefault()
        var container =document.querySelector("#container");
            container.innerHTML=null

        var moviename = document.querySelector("#movie").value

        var url = `http://www.omdbapi.com/?s=${moviename}&apikey=7fffee5d`
        
        async function getData(){
            try{
                let res = await fetch(url);
                let products = await res.json();
                // append(products);
                var arr = (products.Search);
                console.log(products.Search)

                formovie(arr)
                function formovie(getData){
                    getData.forEach(function(ele){
            var div = document.createElement("div")
                div.setAttribute("id","div")
                        var img = document.createElement("img");
                            img.src = ele.Poster
                            img.setAttribute("id","image")
                            img.setAttribute("alt","Image Not found")
                        
                var divfortext = document.createElement("div")
                    divfortext.setAttribute("id","divfortext")
                    var divfnaT = document.createElement("div")
                        var name = document.createElement("h2");
                            name.innerText = ele.Title;
                            name.setAttribute("id","name")


                        var type = document.createElement("h3");
                            type.innerText = ele.Type;
                            type.setAttribute("id","type")

                    var divfyeI = document.createElement("div")
                        divfyeI.setAttribute("id","divfyeI")
                        var year = document.createElement("h3");
                            year.innerText = ele.Year;
                            year.setAttribute("id","year")
                            

                        var imdb = document.createElement("h3");
                            imdb.innerText = "imdbId : "+ ele.imdbID;
                            imdb.setAttribute("id","imdb")
                            
                        divfnaT.append(name,type)
                        divfyeI.append(year,imdb)
                        divfortext.append(divfnaT,divfyeI)
                        div.append(img,divfortext)
                        // console.log(div)
                        container.append(div)
                    });
                }
            }
            catch(err){
                console.log(err)
                var error = document.createElement("img")
                    error.src = "https://www.maxpixel.net/static/photo/1x/Error-404-Error-404-Error-1252056.png"
                   document.querySelector("#container").append(error)
            }
        }
        getData();
    }