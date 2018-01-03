function simulate(){
  $("#plane").addClass("run");
  $("#person").addClass("getOff");
  $("#person1").addClass("getOff1");
  $("#person2").addClass("getOff2");
  $("#person3").addClass("getOff3");
  setTimeout(function(){
    $("#plane").removeClass("run");
    $("#person").removeClass("getOff")
    $("#person1").removeClass("getOff1");
    $("#person2").removeClass("getOff2");
    $("#person3").removeClass("getOff3");
  },7000)
}