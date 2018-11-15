$(document).ready(function () {
    var firstNameID = "#firstName";
    var errorFirstNameID = "#firstNameMandatory";
    var lastNameID = "#lastName";
    var errorLastNameID = "#lastNameMandatory";
    var mailID = "#email";
    var errorMailID = "#emailMandatory";
    var selectID = "#mediaChannelSelect";
    var otherOption = "Other";
    var otherID = "#otherMediaChannel";
    var newsletterID = "#newsletter";
    var submitBtn = ".btn";
    checkVisibleError();
    displayOther();
    displayMail();
    $(firstNameID).on("input", function () { return toggleInputError(firstNameID, errorFirstNameID); });
    $(lastNameID).on("input", function () { return toggleInputError(lastNameID, errorLastNameID); });
    $(mailID).on("input", function () { return displayMailError(); });
    $(selectID).change(function () { return displayOther(); });
    $(newsletterID).change(function () { return displayMail(); });
    function toggleInputError(inputID, inputErrorID) {
        var empty = isEmpty(inputID);
        if (empty) {
            showError(inputErrorID);
        }
        else {
            hideError(inputErrorID);
        }
        checkVisibleError();
    }
    function displayOther() {
        if (isOtherSelected(selectID)) {
            $(otherID).show();
        }
        else {
            $(otherID).hide();
        }
    }
    function displayMail() {
        displayMailError();
        checkVisibleError();
    }
    function displayMailError() {
        if (isNewsletterChecked()) {
            var empty = isEmpty(mailID);
            if (empty) {
                showError(errorMailID);
            }
            else {
                hideError(errorMailID);
            }
        }
        else {
            hideError(errorMailID);
        }
        checkVisibleError();
    }
    function isNewsletterChecked() {
        return $(newsletterID).is(":checked");
    }
    function isOtherSelected(id) {
        var value = $(id).val().toString();
        return value === otherOption;
    }
    function isEmpty(id) {
        return $(id).val() === "";
    }
    function showError(id) {
        $(id).show();
    }
    function hideError(id) {
        $(id).hide();
    }
    function checkVisibleError() {
        var firstNameErrorHidden = $(errorFirstNameID).is(":hidden");
        var lastNameErrorHidden = $(errorLastNameID).is(":hidden");
        var mailErrorHidden = $(errorMailID).is(":hidden");
        var submitCanBeVisible = (firstNameErrorHidden && lastNameErrorHidden && mailErrorHidden);
        if (submitCanBeVisible) {
            $(submitBtn).prop("disabled", false);
        }
        else {
            $(submitBtn).prop("disabled", true);
        }
    }
});
