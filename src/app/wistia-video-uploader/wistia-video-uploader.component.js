(function() {
  "use strict";

  angular.module("app").component("wistiaVideoUploader", {
    templateUrl: "src/app/wistia-video-uploader/wistia-video-uploader.html",
    controller: WistiaVideoUploaderController,
    controllerAs: "$ctrl"
  });

  WistiaVideoUploaderController.$inject = ["$element", "WistiaVideoUploaderCostants"];
  function WistiaVideoUploaderController($element, WistiaVideoUploaderCostants) {
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
          fail: function(e, data) {
            console.log("error", data);
          },
          progress: function(e, data) {
            var progress = parseInt((data.loaded / data.total) * 100, 10);
            console.log(data.loaded, data.total);
            $(".progress .progress-bar").css("width", progress + "%");
          }
        })
        .on("fileuploadadd", function(e, data) {
          var file = data.files[0];
          var data = new FormData();
          data.append("file", file);
          data.append("api_password", WistiaVideoUploaderCostants.API_PASSWORD);
          $(this).fileupload("option", "data", data);
        });
    }

    function isUploaded() {
      return uploaded;
    }

    function getVideoClass() {
      return "video wistia_embed wistia_async_" + videoId;
    }

    function onAdded(e, data) {
      uploaded = true;
      console.log("added");
      videoId = data.result["hashed_id"];
    }
  }
})();
