$(document).ready(function() {
    const firstNameID = "#firstName";
    const errorFirstNameID = "#firstNameMandatory";
    const lastNameID = "#lastName";
    const errorLastNameID = "#lastNameMandatory";
    const mailID = "#email";
    const errorMailID ="#emailMandatory";
    const selectID = "#mediaChannelSelect"
    const otherOption = "Other";
    const otherID = "#otherMediaChannel";
    const newsletterID = "#newsletter";
    const submitBtn = ".btn";

    checkVisibleError();
    displayOther();
    displayMail();

    $(firstNameID).on("input",() => toggleInputError(firstNameID, errorFirstNameID));

    $(lastNameID).on("input",() => toggleInputError(lastNameID, errorLastNameID));

    $(mailID).on("input", () => displayMailError());

    $(selectID).change(()=> displayOther());

    $(newsletterID).change(() => displayMail());

    function toggleInputError(inputID: string, inputErrorID: string){
        const empty = isEmpty(inputID);
        if(empty){
            showError(inputErrorID);
        }else{
            hideError(inputErrorID);
        }
        checkVisibleError();
    }

    function displayOther(){
        if(isOtherSelected(selectID)){
            $(otherID).show();
        }else{
            $(otherID).hide();
        }
    }

    function displayMail(){
        displayMailError();
        checkVisibleError();
    }

    function displayMailError(){
        if(isNewsletterChecked()){
            const empty = isEmpty(mailID);
            if(empty){
                showError(errorMailID);
            }else{
                hideError(errorMailID);
            }
        }else{
            hideError(errorMailID);
        }
        checkVisibleError();
    }

    function isNewsletterChecked(){
        return $(newsletterID).is(":checked");
    }

    function isOtherSelected(id: string){
        const value = $(id).val().toString();
        return value === otherOption;
    }

    function isEmpty(id: string): boolean{
        return $(id).val() === "";
    }

    function showError(id: string){
        $(id).show();
    }

    function hideError(id: string){
        $(id).hide();
    }

    function checkVisibleError(){
        const firstNameErrorHidden = $(errorFirstNameID).is(":hidden"); 
        const lastNameErrorHidden = $(errorLastNameID).is(":hidden"); 
        const mailErrorHidden = $(errorMailID).is(":hidden") ; 

        const submitCanBeVisible = (firstNameErrorHidden && lastNameErrorHidden && mailErrorHidden);

        if(submitCanBeVisible){
            $(submitBtn).prop("disabled",false);
        }else{
            $(submitBtn).prop("disabled",true);
        }
    }
});
