function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name == "") {
        alert("please fill in your name");
        return false;
    }
    else if  (email == "") {
        alert("Please fill in your name and email");
        return false;
    }

    else  {
        alert(name + ", we have received your message. Thank you for reaching out to us.");
    }

}

$(document).ready(function() {
    $("#toClick1").click(function(){
        $(".img1").toggle(100);
        $(".design").toggle(100);
    });
    $("#toClick2").click(function(){
        $(".img2").toggle(100);
        $(".development").toggle(100);
    });
    $("#toClick3").click(function(){
        $(".img3").toggle(100);
        $(".pmanagement").toggle(100);
    });

    $("#work1")
    .mouseenter(function () {
        $("#text1").show("slow");
    })
    .mouseleave(function () {
        $("#text1").hide("slow");
    });

    $("#work2")
    .mouseenter(function () {
        $("#text2").show("slow");
    })
    .mouseleave(function () {
        $("#text2").hide("slow");
    });

    $("#work3")
    .mouseenter(function () {
        $("#text3").show("slow");
    })
    .mouseleave(function () {
        $("#text3").hide("slow");
    });

    $("#work4")
    .mouseenter(function () {
        $("#text4").show("slow");
    })
    .mouseleave(function () {
        $("#text4").hide("slow");
    });

    $("#work5")
    .mouseenter(function () {
        $("#text5").show("slow");
    })
    .mouseleave(function () {
        $("#text5").hide("slow");
    });


})
