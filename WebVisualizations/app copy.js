

$(document).ready(function(){
  var page = window.location.href
  
 // var htmlString = $( this ).html();
 // $( this ).text( htmlString );
  console.log("Start of the page")
  console.log(page)
  console.log(HUM)
 // if($("#HUM").val ){
 //   console.log($("#HUM").val)
 //   console.log("HUM exists")
 // }else{
 //   console.log("no HUM")
 // }
   

 // console.log(`testing {$htmlString}`)
 // $("#New").click(function(){
 //   $("#Fig1").show();
//    $("#Fig2").hide();
//    $("#Fig3").hide();
//    $("#Fig4").hide();
//    $("#ALL").show();
//  });
 // var HUM = false
//  if("#Hum")
    $("#Max").click(function(){
//      window.location.href = 'visualization.html';

      $("#Fig1").show();
      $("#Fig2").hide();
      $("#Fig3").hide();
      $("#Fig4").hide();
      $("#ALL").show();
    });
   $("#Hum").click(function(){
    .load  = 'visualization.html';  
    console.log("Hum is chosen")
      HUM = true
      console.log(HUM)
  //    $("#Fig1").hide();
  //    $("#Fig2").show();
  //    $("#Fig3").hide();
  //    $("#Fig4").hide();
  //    $("#ALL").show();
   //   window.location.href = 'visualization.html';
      console.log("End of Hum")
    });
    $("#Clo").click(function(){
        $("#Fig1").hide();
        $("#Fig2").hide();
        $("#Fig3").show();
        $("#Fig4").hide();
        $("#ALL").show();
      });
    $("#Win").click(function(){
        $("#Fig1").hide();
        $("#Fig2").hide();
        $("#Fig3").hide();
        $("#Fig4").show();
        $("#ALL").show();
    });

    $("#Win1").click(function(){
    
    //  window.location.href = 'visualization.html';
//      location.reload();
      $("#Fig1").hide();
      $("#Fig2").hide();
      $("#Fig3").hide();
      $("#Fig4").show();
      $("#ALL").show();
     
  });

  $("#ALL").hide(); 
  $(".NewB").click(function(){
    $("#ALL").hide(); 
    $("#Fig1").hide();
});
//  $("#Fig2").hide();
//  $("#Fig3").hide();
//  $("#Fig4").hide();


    $(function(){
      $("#includedContent").load("cities_table.html"); 
    });


    // Hide the Modal at the beginning
const showHum = function(){
  console.log("Hum is chosen2")
  HUM = true
  console.log(HUM)
//     window.location.href = 'visualization.html';
  $("#Fig1").hide();
  $("#Fig2").show();
  $("#Fig3").hide();
  $("#Fig4").hide();
  $("#ALL").show();
 // window.location.href = 'visualization.html';
  console.log("End of Hum2")
  };
 // var HUM = false
if (page === `file:///C:/Users/saman/GATechBootCamp/GTATL2020/Web-Design-Challenge/WebVisualizations/visualization.html`){
  console.log(page)  
  console.log("visual page")
    if (HUM == true ){
      console.log(HUM)
      showHum();
      }else {
        console.log("NOT HUM")};

  }else if(page === `file:///C:/Users/saman/GATechBootCamp/GTATL2020/Web-Design-Challenge/WebVisualizations/comparision.html`){
    var HUM = false
    console.log(HUM)

  }else{
    console.log("NOT Visual page")
  }
    
  


  });