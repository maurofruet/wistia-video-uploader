(function() {
  "use strict";

  angular.module("app").component("wistiaVideoUploader", {
    templateUrl: "src/app/wistia-video-uploader/wistia-video-uploader.html",
    controller: WistiaVideoUploaderController,
    controllerAs: "$ctrl"
  });

  function WistiaVideoUploaderController() {
    var $ctrl = this;

    $ctrl.$onInit = function() {
      $("#fileupload").fileupload({
        dataType: "json",
        done: function(e, data) {
          $.each(data.result.files, function(index, file) {
            $("<p/>")
              .text(file.name)
              .appendTo(document.body);
          });
        }
      });
    };
  }
})();
