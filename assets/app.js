import "./styles/app.scss";

// start the Stimulus application
import "./bootstrap";

import $ from "jquery";
import "bootstrap";

$(".custom-file-input").on("change", function (e) {
    var inputFile = e.currentTarget;
    $(inputFile)
        .parent()
        .find(".custom-file-label")
        .html(inputFile.files[0].name);
});
