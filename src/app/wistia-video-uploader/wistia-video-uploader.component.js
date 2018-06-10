(function() {
  "use strict";

  angular.module("app").component("wistiaVideoUploader", {
    templateUrl: "src/app/wistia-video-uploader/wistia-video-uploader.html",
    controller: WistiaVideoUploaderController,
    controllerAs: "$ctrl"
  });

  WistiaVideoUploaderController.$inject = ["$element", "$scope", "WistiaVideoUploaderCostants"];
  function WistiaVideoUploaderController($element, $scope, WistiaVideoUploaderCostants) {
    var $ctrl = this;

    $ctrl.$onInit = onInit;
    $ctrl.isUploaded = isUploaded;
    $ctrl.getVideoClass = getVideoClass;

    var uploaded = false;
    var videoId = undefined;

    function onInit() {
      var form = $element.find("form");

      form
        .fileupload({
          type: "POST",
          url: WistiaVideoUploaderCostants.URL,
          done: onAdded,
          fail: onFail,
          progress: progress
        })
        .on("fileuploadadd", onFileAdded);
    }

    function isUploaded() {
      return uploaded;
    }

    function getVideoClass() {
      return "video wistia_embed wistia_async_" + videoId;
    }

    function onAdded(e, data) {
      $scope.$applyAsync(function() {
        uploaded = true;
        videoId = data.result["hashed_id"];
      });
    }

    function onFail(e, data) {
      $element.find(".error").html(data);
    }

    function progress(e, data) {
      var progress = parseInt((data.loaded / data.total) * 100, 10);
      $(".progress .progress-bar").css("width", progress + "%");
    }

    function onFileAdded(e, data) {
      var file = data.files[0];
      var data = new FormData();
      data.append("file", file);
      data.append("api_password", WistiaVideoUploaderCostants.API_PASSWORD);
      $(this).fileupload("option", "data", data);
    }
  }
})();
