const changeColor = {

  backColor: function(select) {
    const mainColor=document.querySelector(".principal")
    if (select=== "Baelish"||select=== "Baratheon"|| select=== "Clegane"){
      mainColor.style.backgroundColor="#FF0000";
    } 
    else if (select === "Lannister"||select === "Bolton"|| select === "Targaryen"){
      mainColor.style.backgroundColor= "#cf010b";
    } 
    else if (select === "Stark"||select === "Greyjoy"|| select === "Seaworth"){
      mainColor.style.backgroundColor= "#828282";
    } 
    else if (select === "Tarly"||select === "Tyrell"|| select=== "Mormont"){
      mainColor.style.backgroundColor= "#008F39";
    }
    else if (select === "Tarth"){
      mainColor.style.backgroundColor="#3B83BD";
    }  else if (select === "Martell"){
      mainColor.style.backgroundColor= "#FF8000";
    }
  }
}

export default changeColor