$(document).ready(function(){
    $("#ALL").show();    
    $("#Max").click(function(){
      $("#Fig1").show();
      $("#Fig2").hide();
      $("#Fig3").hide();
      $("#Fig4").hide();
    });
    $("#Hum").click(function(){
      $("#Fig1").hide();
      $("#Fig2").show();
      $("#Fig3").hide();
      $("#Fig4").hide();
    });
    $("#Clo").click(function(){
        $("#Fig1").hide();
        $("#Fig2").hide();
        $("#Fig3").show();
        $("#Fig4").hide();
      });
    $("#Win").click(function(){
        $("#Fig1").hide();
        $("#Fig2").hide();
        $("#Fig3").hide();
        $("#Fig4").show();
    });
  });