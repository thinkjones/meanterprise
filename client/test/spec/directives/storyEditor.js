'use strict';

describe('Directive: storyEditor', function () {
  beforeEach(module('applicationNameApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<story-editor></story-editor>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the storyEditor directive');
  }));
});
