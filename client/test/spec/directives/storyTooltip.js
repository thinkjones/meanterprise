'use strict';

describe('Directive: storyTooltip', function () {
  beforeEach(module('applicationNameApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<story-tooltip></story-tooltip>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the storyTooltip directive');
  }));
});
