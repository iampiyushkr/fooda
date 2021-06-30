async function getData() {
      var input=document.getElementById('inp1').value
                let res = await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${input}`)
      let { meals } = await res.json()
      console.log(meals)
      var image=meals[0].strMealThumb
      var name = meals[0].strMeal
      var area = meals[0].strArea
       var category=meals[0].strCategory
      append(name,image,area,category)

}
            
function append(name, image,area,category) {
    var mainDiv = document.getElementById('container')
    document.getElementById('container').innerHTML = null
    var div = document.createElement('div')
    var p = document.createElement('p')
    p.innerHTML ="Name: "+ name;
    var p1 = document.createElement('p')
    p1.innerHTML = "Area: "+area;
    var p2 = document.createElement('p')
    p2.innerHTML ="Category: "+ category;
    var img = document.createElement('img')
    img.src = image;

    div.append(p,p1,p2, img)
    mainDiv.append(div)
    document.getElementById('inp1').value=null
                console.log(name,image)
            }
        export default getData