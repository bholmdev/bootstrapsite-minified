function createAccountAlert() {
    alert("This is a mock up website and does not store any data");
}

$(function() {
    $("#reserveButton").click(function() {
        $("#reserveModal").modal("toggle");
    });
});

$(function() {
    $("#loginButton").click(function() {
        $("#loginModal").modal("toggle");
    })
})

$(function() {
    $("#createAccountButton").click(function() {
        $("#createAccountModal").modal("toggle");
    })
})

$(function() {
    $(".carousel").carousel( { interval: 2000, pause: "false" } );
    $("#carouselButton").click(function() {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
});