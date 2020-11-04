// List of Google Fonts Avaliable

const listOfFonts = ["Itim", "Roboto", "Open Sans", "Lato", "Nunito", "Montserrat", "Roboto Condensed", "Oswald", "Trispace", "Poppins", "Ubuntu"].sort();

window.onload = function () {
  createDropDown();

  document.getElementById("listoffonts").addEventListener("change", () => {
    //Captura el valor
    console.log(document.getElementById("listoffonts").value);
    //Canvia la font
    changeFont(document.getElementById("listoffonts").value);
  });
};

function createDropDown() {
  // Crea Select
  var sel = document.createElement("Select");
  sel.setAttribute("id", "listoffonts");
  document.body.appendChild(sel);

  listOfFonts.forEach((element) => {
    //Crea opcio
    let opt = document.createElement("option");
    opt.setAttribute("value", element);
    var nod = document.createTextNode(element);
    opt.appendChild(nod);
    //append
    document.getElementById("listoffonts").appendChild(opt);
  });
}

function changeFont(font) {
  WebFont.load({
    google: {
      families: [font] //listOfFonts, //xtoni  Només la font que toca.
    },
    fontactive: function (familyName, fvd) {
      //This is called once font has been rendered in browser
      // Your business logic goes here
      document.getElementsByTagName("p")[0].style.fontFamily = font;
        //"'Nunito', cursive";
      // Font Weight
      document.getElementsByTagName("p")[0].style.fontWeight = 700;
      // Italic
      // document.getElementsByTagName("p")[0].style.fontStyle = "italic";
      // font-weight bold = 700
      // font-weight normal = 400
    },
  });
}
