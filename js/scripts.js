$(document).ready(function() {
  $("form#survey").submit(function(event) {



    event.preventDefault();


    var firstIn = $("#first").val();
    var secondIn= $("#second").val();
    var thirdIn = $("#third").val();
    var fourthIn = $("#fourth").val();
    var fifthIn = $("#fifth").val();

    var list = [];
    list.push(firstIn, secondIn, thirdIn, fourthIn, fifthIn);
    console.log(list);

    newArray = [];
    newArray.push(list[0], list[1], list[2]);
    console.log(newArray);

    var num0 = newArray[0]
    var num1 = newArray[1]
    var num2 = newArray[2]

    $("#list1").append(num0);
    $("#list2").append(num1);
    $("#list3").append(num2);
    $(".output").show()

  });
});
