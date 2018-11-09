(function () {
    var jobTitles = [
        ".net developer",
        "javascripter",
        "consultant",
        "custom-typewriter-text implementer",
        "are you still reading these?",
        "check out the cool stuff below!"
    ];
    var el = document.getElementsByClassName('job-titles')[0];
    var titleIndex = 0;
    var letterIndex = 0;
    var interval = 150;
    var longDelay = 1500;

    var textLooper = function () {

        el.innerText += jobTitles[titleIndex][letterIndex];
        letterIndex++;

        if (letterIndex > (jobTitles[titleIndex].length - 1)) {
            setTimeout(function () {
                letterIndex = 0;
                el.innerText = '';
                titleIndex++;

                if (titleIndex > (jobTitles.length - 1)) {
                    titleIndex = 0;
                }
                setTimeout(textLooper, interval);
            }, longDelay);
            return;
        }
        setTimeout(textLooper, interval);
    }
    setTimeout(textLooper, interval);
})();