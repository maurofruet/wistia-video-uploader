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
    $ctrl.isVideoVisible = isVideoVisible;
    $ctrl.isUploading = isUploading;
    $ctrl.getVideoClass = getVideoClass;
    $ctrl.hasFailed = false;

    var uploading = false;
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

    function isVideoVisible() {
      return uploaded && !uploading;
    }

    function isUploading() {
      return uploading;
    }

    function getVideoClass() {
      return WistiaVideoUploaderCostants.VIDEO_PREFIX + videoId;
    }

    function onAdded(e, data) {
      $scope.$applyAsync(function() {
        uploading = false;
        uploaded = true;
        videoId = data.result["hashed_id"];
      });
    }

    function onFail(e, data) {
      $scope.$applyAsync(function() {
        $ctrl.hasFailed = true;
        uploading = false;
        $ctrl.errorMessage = data.errorThrown;
      });
    }

    function progress(e, data) {
      $scope.$applyAsync(function() {
        $ctrl.progress = parseInt((data.loaded / data.total) * 100, 10);
        $element.find(".progress-bar").css("width", $ctrl.progress + "%");
      });
    }

    function onFileAdded(e, formData) {
      $scope.$applyAsync(function() {
        uploading = true;
        $ctrl.hasFailed = false;
      });
      var file = formData.files[0];
      var formData = new FormData();
      formData.append("file", file);
      formData.append("api_password", WistiaVideoUploaderCostants.API_PASSWORD);
      $element.find(this).fileupload("option", "data", formData);
    }
  }
})();
