
$(document).ready(function () {
    // function to display messages

    eel.expose(DisplayMessage)
    function DisplayMessage(message) {

        $(".siri-message li:first").text(message);
        $(".siri-message").textillate('start');
    }


    // after lsiting we need to show main window that whyy we are writing this functon 
    // Display Hood
    eel.expose(ShowHood)
    function ShowHood() {

        $('#Oval').attr("hidden", false);
        $('#SiriWave').attr("hidden", true);
    }




});