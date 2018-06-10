describe("Component: wistiaVideoUploader", function() {
  var $componentController;

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

  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it("should initiate the component and define bindings", function() {
    var ctrl = $componentController("wistiaVideoUploader", null, null);

    expect(ctrl).toBeDefined();
    expect(ctrl.hasFailed).toBe(false);
  });
});
