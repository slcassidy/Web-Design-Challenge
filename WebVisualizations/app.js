$("#ALL").show(); 


$(document).ready(function(){
  $("#New").click(function(){
    $("#Fig1").show();
    $("#Fig2").hide();
    $("#Fig3").hide();
    $("#Fig4").hide();
    $("#ALL").show();
  });

    $("#Max").click(function(){
      $("#Fig1").show();
      $("#Fig2").hide();
      $("#Fig3").hide();
      $("#Fig4").hide();
      $("#ALL").show();
    });
    $("#Hum").click(function(){
      $("#Fig1").hide();
      $("#Fig2").show();
      $("#Fig3").hide();
      $("#Fig4").hide();
      $("#ALL").show();
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

    $(function(){
      $("#includedContent").load("cities_table.html"); 
    });
  });