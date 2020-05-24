(() => {
    var element = document.getElementById("collapse-nav");
    var targetCall = document.getElementById("collapse-click");
    targetCall.addEventListener('click', () => {
        element.classList.toggle('collapse-active');
    });

    var movieModel = document.getElementById("movie-model");
    var openModel = document.getElementById("open-model");
    var openModel2 = document.getElementById("open-model-2");
    var closeModel = document.getElementById("close-model");
    openModel.addEventListener('click', () => {
        movieModel.classList.toggle('display-none');
    });
    openModel2.addEventListener('click', () => {
        movieModel.classList.toggle('display-none');
    });
    closeModel.addEventListener('click', () => {
        movieModel.classList.toggle('display-none');
    });

    var userInfo = document.getElementById("collapse-user-info");
    var targetUserInfoClick = document.getElementById("targetUserInfoClick");
    targetUserInfoClick.addEventListener('click', () => {
        userInfo.classList.toggle('active-collapse-user-info');
    });
})()
