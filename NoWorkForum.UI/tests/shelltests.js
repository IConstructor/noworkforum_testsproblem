describe('shell tests', function(){
    beforeEach(module('forumApp'));
    var $controller;

    beforeEach(inject(function ($controller) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = $controller;
    }));


    // Act and Assess
    it('testCheck', function () {
        expect('helloWorld').toBe("helloWorld");
    });
});