describe("Component: wistiaVideoUploader", function() {
  var ctrl;

  beforeEach(module("app"));

  beforeEach(
    module(function($provide) {
      $provide.value("$element", {
        serviceFunc: jasmine.createSpy().and.callThrough()
      });
      $provide.value("$scope", {
        serviceFunc: jasmine.createSpy().and.callThrough()
      });
      $provide.value("WistiaVideoUploaderCostants", {
        serviceFunc: jasmine.createSpy().and.callThrough()
      });
    })
  );

  beforeEach(inject(function($componentController) {
    ctrl = $componentController("wistiaVideoUploader", null, null);
  }));

  it("should initiate the component with its controller", function() {
    expect(ctrl).toBeDefined();
  });

  it("should initialize the 'hasFailed' variable", function() {
    expect(ctrl.hasFailed).toBe(false);
  });

  it("should compute the video visibility", function() {
    expect(ctrl.isVideoVisible()).toBe(false);
  });

  it("should check if it is uploading a file", function() {
    expect(ctrl.isUploading()).toBe(false);
  });

  it("should check if it is uploading a file", function() {
    expect(ctrl.getVideoClass()).toBe("video wistia_embed wistia_async_undefined");
  });
});
