/*global angular,window*/
(function withAngular(angular, window) {
  'use strict';

  var directiveName = 'tooltips'
  , resizeObserver = (function resizeObserver() {

    var callbacks = []
      , lastTime = 0
      , runCallbacks = function runCallbacks(currentTime) {

        if (currentTime - lastTime >= 15) {

          callbacks.forEach(function iterator(callback) {

            callback();
          });
          lastTime = currentTime;
        } else {

          window.console.log('Skipped!');
        }
      }
      , resizeTimeout
      , resize = function resize() {
        window.clearTimeout(resizeTimeout);
        resizeTimeout = window.setTimeout(function onResizeTimeout() {
          window.requestAnimationFrame(runCallbacks);
        }, 500);
      }
      , addCallback = function addCallback(callback) {

        if (callback) {

          callbacks.push(callback);
        }
      };

    return {
      'add': function add(callback) {

        if (!callbacks.length) {

          window.addEventListener('resize', resize);
        }
        addCallback(callback);
      },
      'remove': function remove() {
        if (!callbacks.length) {
          window.clearTimeout(resizeTimeout);
          window.removeEventListener('resize', resize);
        }
      }
    };
  }())
  , getAttributesToAdd = function getAttributesToAdd(element) {
    var attributesToAdd = {};

    element.removeAttr(directiveName);
    if (element.attr('tooltip-template') !== undefined) {

      attributesToAdd['tooltip-template'] = element.attr('tooltip-template');
      element.removeAttr('tooltip-template');
    }

    if (element.attr('tooltip-template-url') !== undefined) {

      attributesToAdd['tooltip-template-url'] = element.attr('tooltip-template-url');
      element.removeAttr('tooltip-template-url');
    }

    if (element.attr('tooltip-controller') !== undefined) {

      attributesToAdd['tooltip-controller'] = element.attr('tooltip-controller');
      element.removeAttr('tooltip-controller');
    }

    if (element.attr('tooltip-side') !== undefined) {

      attributesToAdd['tooltip-side'] = element.attr('tooltip-side');
      element.removeAttr('tooltip-side');
    }

    if (element.attr('tooltip-show-trigger') !== undefined) {

      attributesToAdd['tooltip-show-trigger'] = element.attr('tooltip-show-trigger');
      element.removeAttr('tooltip-show-trigger');
    }

    if (element.attr('tooltip-hide-trigger') !== undefined) {

      attributesToAdd['tooltip-hide-trigger'] = element.attr('tooltip-hide-trigger');
      element.removeAttr('tooltip-hide-trigger');
    }

    if (element.attr('tooltip-smart') !== undefined) {

      attributesToAdd['tooltip-smart'] = element.attr('tooltip-smart');
      element.removeAttr('tooltip-smart');
    }

    if (element.attr('tooltip-class') !== undefined) {

      attributesToAdd['tooltip-class'] = element.attr('tooltip-class');
      element.removeAttr('tooltip-class');
    }

    if (element.attr('tooltip-close-button') !== undefined) {

      attributesToAdd['tooltip-close-button'] = element.attr('tooltip-close-button');
      element.removeAttr('tooltip-close-button');
    }

    if (element.attr('tooltip-size') !== undefined) {

      attributesToAdd['tooltip-size'] = element.attr('tooltip-size');
      element.removeAttr('tooltip-size');
    }

    if (element.attr('tooltip-speed') !== undefined) {

      attributesToAdd['tooltip-speed'] = element.attr('tooltip-speed');
      element.removeAttr('tooltip-speed');
    }

    return attributesToAdd;
  }
  , getStyle = function getStyle(anElement) {

    if (window.getComputedStyle) {

      return window.getComputedStyle(anElement, '');
    } else if (anElement.currentStyle) {

      return anElement.currentStyle;
    }
  }
  , getAppendedTip = function getAppendedTip(theTooltipElement) {
    var tipsInBody = window.document.querySelectorAll('._exradicated-tooltip')
      , aTipInBody
      , tipsInBodyIndex = 0
      , tipsInBodyLength = tipsInBody.length
      , angularizedElement;

    for (; tipsInBodyIndex < tipsInBodyLength; tipsInBodyIndex += 1) {

      aTipInBody = tipsInBody.item(tipsInBodyIndex);
      if (aTipInBody) {

        angularizedElement = angular.element(aTipInBody);
        if (angularizedElement.data('_tooltip-parent') &&
          angularizedElement.data('_tooltip-parent') === theTooltipElement) {

          return angularizedElement;
        }
      }
    }
  }
  , removeAppendedTip = function removeAppendedTip(theTooltipElement) {
    var tipElement = getAppendedTip(theTooltipElement);

    if (tipElement) {

      tipElement.remove();
    }
  }
  , isOutOfPage = function isOutOfPage(theTipElement) {

    if (theTipElement) {
      var squarePosition = theTipElement[0].getBoundingClientRect();

      if (squarePosition.top < 0 ||
        squarePosition.top > window.document.body.offsetHeight ||
        squarePosition.left < 0 ||
        squarePosition.left > window.document.body.offsetWidth ||
        squarePosition.bottom < 0 ||
        squarePosition.bottom > window.document.body.offsetHeight ||
        squarePosition.right < 0 ||
        squarePosition.right > window.document.body.offsetWidth) {

        theTipElement.css({
          'top': '',
          'left': '',
          'bottom': '',
          'right': ''
        });
        return true;
      }

      return false;
    }

    throw new Error('You must provide a position');
  }
  , tooltipConfigurationProvider = function tooltipConfigurationProvider() {

    var tooltipConfiguration = {
      'side': 'top',
      'showTrigger': 'mouseover',
      'hideTrigger': 'mouseleave',
      'class': '',
      'smart': false,
      'closeButton': false,
      'size': '',
      'speed': 'steady'
    };

    return {
      'configure': function configure(configuration) {
        var configurationKeys = Object.keys(tooltipConfiguration)
          , configurationIndex = 0
          , aConfigurationKey;

        if (configuration) {

          for (; configurationIndex < configurationKeys.length; configurationIndex += 1) {

            aConfigurationKey = configurationKeys[configurationIndex];
            if (aConfigurationKey &&
              configuration[aConfigurationKey]) {

              tooltipConfiguration[aConfigurationKey] = configuration[aConfigurationKey];
            }
          }
        }
      },
      '$get': /*@ngInject*/ function instantiateProvider() {

        return tooltipConfiguration;
      }
    };
  }
  , tooltipDirective = /*@ngInject*/ function tooltipDirective($log, $http, $compile, $timeout, $controller, $injector, tooltipsConf) {

    var linkingFunction = function linkingFunction($scope, $element, $attrs, $controllerDirective, $transcludeFunc) {

      if ($attrs.tooltipTemplate &&
        $attrs.tooltipTemplateUrl) {

        throw new Error('You can not define tooltip-template and tooltip-template-url together');
      }

      if (!($attrs.tooltipTemplateUrl || $attrs.tooltipTemplate) &&
        $attrs.tooltipController) {

        throw new Error('You can not have a controller without a template or templateUrl defined');
      }

      var oldTooltipSide = '_' + tooltipsConf.side
        , oldTooltipShowTrigger = tooltipsConf.showTrigger
        , oldTooltipHideTrigger = tooltipsConf.hideTrigger
        , oldTooltipClass
        , oldSize = tooltipsConf.size
        , oldSpeed = '_' + tooltipsConf.speed;

      $attrs.tooltipSide = $attrs.tooltipSide || tooltipsConf.side;
      $attrs.tooltipShowTrigger = $attrs.tooltipShowTrigger || tooltipsConf.showTrigger;
      $attrs.tooltipHideTrigger = $attrs.tooltipHideTrigger || tooltipsConf.hideTrigger;
      $attrs.tooltipClass = $attrs.tooltipClass || tooltipsConf.class;
      $attrs.tooltipSmart = $attrs.tooltipSmart === 'true' || tooltipsConf.smart;
      $attrs.tooltipCloseButton = $attrs.tooltipCloseButton || tooltipsConf.closeButton.toString();
      $attrs.tooltipSize = $attrs.tooltipSize || tooltipsConf.size;
      $attrs.tooltipSpeed = $attrs.tooltipSpeed || tooltipsConf.speed;
      $attrs.tooltipAppendToBody = $attrs.tooltipAppendToBody === 'true';

      $transcludeFunc($scope, function onTransclusionDone(element, scope) {
        var attributes = getAttributesToAdd(element)
          , tooltipElement = angular.element(window.document.createElement('tooltip'))
          , tipContElement = angular.element(window.document.createElement('tip-cont'))
          , tipElement = angular.element(window.document.createElement('tip'))
          , tipTipElement = angular.element(window.document.createElement('tip-tip'))
          , closeButtonElement = angular.element(window.document.createElement('span'))
          , tipArrowElement = angular.element(window.document.createElement('tip-arrow'))
          , whenActivateMultilineCalculation = function whenActivateMultilineCalculation() {

            return tipContElement.html();
          }
          , calculateIfMultiLine = function calculateIfMultiLine(newValue) {

            if (newValue !== undefined &&
              tipContElement[0].getClientRects().length > 1) {

              tooltipElement.addClass('_multiline');
            } else {

              tooltipElement.removeClass('_multiline');
            }
          }
          , onTooltipShow = function onTooltipShow(event) {

            tipElement.addClass('_hidden');
            if ($attrs.tooltipSmart) {

              switch ($attrs.tooltipSide) {
                case 'top': {

                  if (isOutOfPage(tipElement)) {

                    tooltipElement.removeClass('_top');
                    tooltipElement.addClass('_left');
                    if (isOutOfPage(tipElement)) {

                      tooltipElement.removeClass('_left');
                      tooltipElement.addClass('_bottom');
                      if (isOutOfPage(tipElement)) {

                        tooltipElement.removeClass('_bottom');
                        tooltipElement.addClass('_right');
                        if (isOutOfPage(tipElement)) {

                          tooltipElement.removeClass('_right');
                          tooltipElement.addClass('_top');
                        }
                      }
                    }
                  }
                  break;
                }

                case 'left': {

                  if (isOutOfPage(tipElement)) {

                    tooltipElement.removeClass('_left');
                    tooltipElement.addClass('_bottom');
                    if (isOutOfPage(tipElement)) {

                      tooltipElement.removeClass('_bottom');
                      tooltipElement.addClass('_right');
                      if (isOutOfPage(tipElement)) {

                        tooltipElement.removeClass('_right');
                        tooltipElement.addClass('_top');
                        if (isOutOfPage(tipElement)) {

                          tooltipElement.removeClass('_top');
                          tooltipElement.addClass('_left');
                        }
                      }
                    }
                  }
                  break;
                }

                case 'bottom': {

                  if (isOutOfPage(tipElement)) {

                    tooltipElement.removeClass('_bottom');
                    tooltipElement.addClass('_left');
                    if (isOutOfPage(tipElement)) {

                      tooltipElement.removeClass('_left');
                      tooltipElement.addClass('_top');
                      if (isOutOfPage(tipElement)) {

                        tooltipElement.removeClass('_top');
                        tooltipElement.addClass('_right');
                        if (isOutOfPage(tipElement)) {

                          tooltipElement.removeClass('_right');
                          tooltipElement.addClass('_bottom');
                        }
                      }
                    }
                  }
                  break;
                }

                case 'right': {

                  if (isOutOfPage(tipElement)) {

                    tooltipElement.removeClass('_right');
                    tooltipElement.addClass('_top');
                    if (isOutOfPage(tipElement)) {

                      tooltipElement.removeClass('_top');
                      tooltipElement.addClass('_left');
                      if (isOutOfPage(tipElement)) {

                        tooltipElement.removeClass('_left');
                        tooltipElement.addClass('_bottom');
                        if (isOutOfPage(tipElement)) {

                          tooltipElement.removeClass('_bottom');
                          tooltipElement.addClass('_right');
                        }
                      }
                    }
                  }
                  break;
                }
                default: {

                  throw new Error('Position not supported');
                }
              }
            }

            if ($attrs.tooltipAppendToBody) {

              var tipTipElementStyle = getStyle(tipTipElement[0])
                , tipArrowElementStyle = getStyle(tipArrowElement[0])
                , tipElementStyle = getStyle(tipElement[0])
                , tipElementBoundingClientRect = tipElement[0].getBoundingClientRect()
                , exradicatedTipElement = angular.copy(tipElement)
                , tipTipStyleIndex = 0
                , tipTipStyleLength = tipTipElementStyle.length
                , tipArrowStyleIndex = 0
                , tipArrowStyleLength = tipArrowElementStyle.length
                , tipStyleIndex = 0
                , tipStyleLength = tipElementStyle.length
                , aStyleKey
                , tipTipCssToSet = {}
                , tipCssToSet = {}
                , tipArrowCssToSet = {}
                , paddingTopValue
                , paddingBottomValue
                , paddingLeftValue
                , paddingRightValue;

              tipElement.removeClass('_hidden');
              exradicatedTipElement.removeClass('_hidden');
              exradicatedTipElement.data('_tooltip-parent', tooltipElement);
              removeAppendedTip(tooltipElement);

              for (; tipTipStyleIndex < tipTipStyleLength; tipTipStyleIndex += 1) {

                aStyleKey = tipTipElementStyle[tipTipStyleIndex];
                if (aStyleKey &&
                  tipTipElementStyle.getPropertyValue(aStyleKey)) {

                  tipTipCssToSet[aStyleKey] = tipTipElementStyle.getPropertyValue(aStyleKey);
                }
              }

              for (; tipArrowStyleIndex < tipArrowStyleLength; tipArrowStyleIndex += 1) {

                aStyleKey = tipArrowElementStyle[tipArrowStyleIndex];
                if (aStyleKey &&
                  tipArrowElementStyle.getPropertyValue(aStyleKey)) {

                  tipArrowCssToSet[aStyleKey] = tipArrowElementStyle.getPropertyValue(aStyleKey);
                }
              }

              for (; tipStyleIndex < tipStyleLength; tipStyleIndex += 1) {

                aStyleKey = tipElementStyle[tipStyleIndex];
                if (aStyleKey &&
                    aStyleKey !== 'position' &&
                    aStyleKey !== 'display' &&
                    aStyleKey !== 'opacity' &&
                    aStyleKey !== 'z-index' &&
                    aStyleKey !== 'bottom' &&
                    aStyleKey !== 'height' &&
                    aStyleKey !== 'left' &&
                    aStyleKey !== 'right' &&
                    aStyleKey !== 'top' &&
                    aStyleKey !== 'width' &&
                  tipElementStyle.getPropertyValue(aStyleKey)) {

                  tipCssToSet[aStyleKey] = tipElementStyle.getPropertyValue(aStyleKey);
                }
              }
              paddingTopValue = window.parseInt(tipElementStyle.getPropertyValue('padding-top'), 10);
              paddingBottomValue = window.parseInt(tipElementStyle.getPropertyValue('padding-bottom'), 10);
              paddingLeftValue = window.parseInt(tipElementStyle.getPropertyValue('padding-left'), 10);
              paddingRightValue = window.parseInt(tipElementStyle.getPropertyValue('padding-right'), 10);

              tipCssToSet.top = tipElementBoundingClientRect.top + window.pageYOffset + 'px';
              tipCssToSet.left = tipElementBoundingClientRect.left + window.pageXOffset + 'px';
              tipCssToSet.height = tipElementBoundingClientRect.height - (paddingTopValue + paddingBottomValue) + 'px';
              tipCssToSet.width = tipElementBoundingClientRect.width - (paddingLeftValue + paddingRightValue) + 'px';

              exradicatedTipElement.css(tipCssToSet);

              exradicatedTipElement.children().css(tipTipCssToSet);
              exradicatedTipElement.children().next().css(tipArrowCssToSet);
              if (event &&
                $attrs.tooltipHidden !== 'true') {

                exradicatedTipElement.addClass('_exradicated-tooltip');
                angular.element(window.document.body).append(exradicatedTipElement);
              }
            } else {

              tipElement.removeClass('_hidden');
              if (event &&
                $attrs.tooltipHidden !== 'true') {

                tooltipElement.addClass('active');
              }
            }
          }
          , onTooltipHide = function onTooltipHide() {

            if ($attrs.tooltipAppendToBody) {

              removeAppendedTip(tooltipElement);
            } else {

              tooltipElement.removeClass('active');
            }
          }
          , registerOnScrollFrom = function registerOnScrollFrom(theElement) {
            var parentElement = theElement.parent()
              , timer;

            if (theElement[0] &&
              (theElement[0].scrollHeight > theElement[0].clientHeight ||
              theElement[0].scrollWidth > theElement[0].clientWidth)) {

              theElement.on('scroll', function onScroll() {
                var that = this;

                if (timer) {

                  $timeout.cancel(timer);
                }

                timer = $timeout(function doLater() {

                  var theTipElement = getAppendedTip(tooltipElement)
                    , tooltipBoundingRect = tooltipElement[0].getBoundingClientRect()
                    , thatBoundingRect = that.getBoundingClientRect();

                  if (tooltipBoundingRect.top < thatBoundingRect.top ||
                    tooltipBoundingRect.bottom > thatBoundingRect.bottom ||
                    tooltipBoundingRect.left < thatBoundingRect.left ||
                    tooltipBoundingRect.right > thatBoundingRect.right) {

                    removeAppendedTip(tooltipElement);
                  } else if (theTipElement) {

                    onTooltipShow(true);
                  }
                });
              });
            }

            if (parentElement &&
              parentElement.length) {

              registerOnScrollFrom(parentElement);
            }
          }
          , onTooltipTemplateChange = function onTooltipTemplateChange(newValue) {

            if (newValue) {
              tooltipElement.removeClass('_force-hidden'); //see lines below, this forces to hide tooltip when is empty
              tipTipElement.empty();
              tipTipElement.append(closeButtonElement);
              tipTipElement.append(newValue);
              $timeout(function doLaterShow() {

                onTooltipShow();
              });
            } else {
              //hide tooltip because is empty
              tipTipElement.empty();
              tooltipElement.addClass('_force-hidden'); //force to be hidden if empty
            }
          }
          , onTooltipTemplateUrlChange = function onTooltipTemplateUrlChange(newValue) {

            if (newValue) {

              $http.get(newValue).then(function onResponse(response) {

                if (response &&
                  response.data) {

                  tooltipElement.removeClass('_force-hidden'); //see lines below, this forces to hide tooltip when is empty
                  tipTipElement.empty();
                  tipTipElement.append(closeButtonElement);
                  tipTipElement.append($compile(response.data)(scope));
                  $timeout(function doLater() {

                    onTooltipShow();
                  });
                }
              });
            } else {
              //hide tooltip because is empty
              tipTipElement.empty();
              tooltipElement.addClass('_force-hidden'); //force to be hidden if empty
            }
          }
          , onTooltipSideChange = function onTooltipSideChange(newValue) {

            if (newValue) {

              if (oldTooltipSide) {

                tooltipElement.removeAttr('_' + oldTooltipSide);
              }
              tooltipElement.addClass('_' + newValue);
              oldTooltipSide = newValue;
            }
          }
          , onTooltipShowTrigger = function onTooltipShowTrigger(newValue) {

            if (newValue) {

              if (oldTooltipShowTrigger) {

                tooltipElement.off(oldTooltipShowTrigger);
              }
              tooltipElement.on(newValue, onTooltipShow);
              oldTooltipShowTrigger = newValue;
            }
          }
          , onTooltipHideTrigger = function onTooltipHideTrigger(newValue) {

            if (newValue) {

              if (oldTooltipHideTrigger) {

                tooltipElement.off(oldTooltipHideTrigger);
              }
              tooltipElement.on(newValue, onTooltipHide);
              oldTooltipHideTrigger = newValue;
            }
          }
          , onTooltipClassChange = function onTooltipClassChange(newValue) {

            if (newValue) {

              if (oldTooltipClass) {

                tipElement.removeClass(oldTooltipClass);
              }
              tipElement.addClass(newValue);
              oldTooltipClass = newValue;
            }
          }
          , onTooltipSmartChange = function onTooltipSmartChange() {

            if (typeof $attrs.tooltipSmart !== 'boolean') {

              $attrs.tooltipSmart = $attrs.tooltipSmart === 'true';
            }
          }
          , onTooltipCloseButtonChange = function onTooltipCloseButtonChange(newValue) {
            var enableButton = newValue === 'true';

            if (enableButton) {

              closeButtonElement.on('click', onTooltipHide);
              closeButtonElement.css('display', 'block');
            } else {

              closeButtonElement.off('click');
              closeButtonElement.css('display', 'none');
            }
          }
          , onTooltipTemplateControllerChange = function onTooltipTemplateControllerChange(newValue) {

            if (newValue) {

              var tipController = $controller(newValue, {
                  '$scope': scope
                })
                , newScope = scope.$new(false, scope)
                , indexOfAs = newValue.indexOf('as')
                , controllerName;

              if (indexOfAs >= 0) {

                controllerName = newValue.substr(indexOfAs + 3);
                newScope[controllerName] = tipController;
              } else {

                angular.extend(newScope, tipController);
              }

              tipTipElement.replaceWith($compile(tipTipElement)(newScope));
              /*eslint-disable no-use-before-define*/
              unregisterOnTooltipControllerChange();
              /*eslint-enable no-use-before-define*/
            }
          }
          , onTooltipSizeChange = function onTooltipSizeChange(newValue) {

            if (newValue) {

              if (oldSize) {

                tipTipElement.removeClass('_' + oldSize);
              }
              tipTipElement.addClass('_' + newValue);
              oldSize = newValue;
            }
          }
          , onTooltipSpeedChange = function onTooltipSpeedChange(newValue) {

            if (newValue) {

              if (oldSpeed) {

                tooltipElement.removeClass('_' + oldSpeed);
              }
              tooltipElement.addClass('_' + newValue);
              oldSpeed = newValue;
            }
          }
          , unregisterOnTooltipTemplateChange = $attrs.$observe('tooltipTemplate', onTooltipTemplateChange)
          , unregisterOnTooltipTemplateUrlChange = $attrs.$observe('tooltipTemplateUrl', onTooltipTemplateUrlChange)
          , unregisterOnTooltipSideChangeObserver = $attrs.$observe('tooltipSide', onTooltipSideChange)
          , unregisterOnTooltipShowTrigger = $attrs.$observe('tooltipShowTrigger', onTooltipShowTrigger)
          , unregisterOnTooltipHideTrigger = $attrs.$observe('tooltipHideTrigger', onTooltipHideTrigger)
          , unregisterOnTooltipClassChange = $attrs.$observe('tooltipClass', onTooltipClassChange)
          , unregisterOnTooltipSmartChange = $attrs.$observe('tooltipSmart', onTooltipSmartChange)
          , unregisterOnTooltipCloseButtonChange = $attrs.$observe('tooltipCloseButton', onTooltipCloseButtonChange)
          , unregisterOnTooltipControllerChange = $attrs.$observe('tooltipController', onTooltipTemplateControllerChange)
          , unregisterOnTooltipSizeChange = $attrs.$observe('tooltipSize', onTooltipSizeChange)
          , unregisterOnTooltipSpeedChange = $attrs.$observe('tooltipSpeed', onTooltipSpeedChange)
          , unregisterTipContentChangeWatcher = scope.$watch(whenActivateMultilineCalculation, calculateIfMultiLine);

        closeButtonElement.attr({
          'id': 'close-button'
        });
        closeButtonElement.html('&times;');

        tipElement.addClass('_hidden');

        tipTipElement.append(closeButtonElement);
        tipTipElement.append($attrs.tooltipTemplate);

        tipElement.append(tipTipElement);
        tipElement.append(tipArrowElement);

        tipContElement.append(element);

        tooltipElement.attr(attributes);
        tooltipElement.addClass('tooltips');

        tooltipElement.append(tipContElement);
        tooltipElement.append(tipElement);
        $element.after(tooltipElement);

        if ($attrs.tooltipAppendToBody) {

          resizeObserver.add(function onResize() {

            registerOnScrollFrom(tooltipElement);
          });
          registerOnScrollFrom(tooltipElement);
        }

        resizeObserver.add(function registerResize() {

          calculateIfMultiLine();
          onTooltipShow();
        });

        $timeout(function doLater() {

          onTooltipShow();
          tipElement.removeClass('_hidden');
          tooltipElement.addClass('_ready');
        });

        scope.$on('$destroy', function unregisterListeners() {

          unregisterOnTooltipTemplateChange();
          unregisterOnTooltipTemplateUrlChange();
          unregisterOnTooltipSideChangeObserver();
          unregisterOnTooltipShowTrigger();
          unregisterOnTooltipHideTrigger();
          unregisterOnTooltipClassChange();
          unregisterOnTooltipSmartChange();
          unregisterOnTooltipCloseButtonChange();
          unregisterOnTooltipSizeChange();
          unregisterOnTooltipSpeedChange();
          unregisterTipContentChangeWatcher();
          resizeObserver.remove();
          element.off($attrs.tooltipShowTrigger + ' ' + $attrs.tooltipHideTrigger);
        });
      });
    };

    return {
      'restrict': 'A',
      'transclude': 'element',
      'priority': 1,
      'terminal': true,
      'link': linkingFunction
    };
  };

  angular.module('720kb.tooltips', [])
  .provider(directiveName + 'Conf', tooltipConfigurationProvider)
  .directive(directiveName, tooltipDirective);
}(angular, window));


/*global angular:true */

angular.module('uxTools.prototyping', [])

.controller('prototypingCtrl', function($scope, $state, prototypingFactory) {

  $scope.prototypingTools = prototypingFactory.tools();
  $scope.filters = prototypingFactory.filters();
  // Copy filters so ngModel doesn't reflect while changing
  $scope.tempFilters = angular.copy($scope.filters);

  $scope.modalShowing = false;
  //$scope.showMonthly = true; for pricing

  $scope.showFiltersModal = function(command) {
    if (command === 'show') {
      $scope.modalShowing = true;
    } else if (command === 'hide') {
      $scope.modalShowing = false;
    }
  };

  $scope.isFilterVisible = function(string) {
    for ( var i = 0; i < $scope.filters.length; i++ ) {
      if ( $scope.filters[i].title === string ) {
        return $scope.filters[i].show;
      }
    }
  };

  $scope.setFilters = function() {
    prototypingFactory.setFilters($scope.tempFilters);
    $state.reload();
    $scope.showFiltersModal = false;
  };

})

.factory('prototypingFactory', function() {

    var tools = [{
        "name": "Framer",
        "url": "http://framerjs.com/",
        "image": {
            "background-position": "-200 -400",
        },
        "taylorChoice": true,
        "platforms": {
            "mac": true
        },
        "import": {
            "photoshop": true,
            "sketch": true,
            "figma": true,
        },
        "micro": true,
        "navigation": true,
        "transition": true,
        "data": true,
        "code": true,
        "sharing": {
            "web": true,
            "iOS": true
        },
        "pricing": {
            "free": false,
            "subscription": "",
            "purchase": "$129"
        }
    }, {
        "name": "Principle",
        "url": "http://principleformac.com/",
        "image": {
            "background-position": "0 -400",
        },
        "platforms": {
            "mac": true
        },
        "import": {
            "sketch": true
        },
        "micro": true,
        "navigation": true,
        "transition": true,
        "sharing": {
            "iOS": true,
            "mac": true
        },
        "pricing": {
            "free": false,
            "subscription": "",
            "purchase": "$99"
        }
    }, {
        "name": "UX Pin",
        "url": "https://uxpin.com/",
        "image": {
            "background-position": "0 -100",
        },
        "platforms": {
            "web": true
        },
        "design": true,
        "import": {
            "sketch": true,
            "photoshop": true
        },
        "micro": true,
        "navigation": true,
        "sharing": {
            "web": true,
        },
        "handoff": true,
        "pricing": {
            "free": false,
            "subscription": "$19",
            "purchase": ""
        }
    }, {
        "name": "InVision",
        "url": "https://www.invisionapp.com/",
        "image": {
            "background-position": "-300 -400",
        },
        "platforms": {
            "web": true
        },
        "import": {
            "sketch": true,
            "photoshop": true,
            "dropbox": true
        },
        "navigation": true,
        "transition": true,
        "sharing": {
            "web": true,
            "pdf": true,
            "html": true
        },
        "fixedHeader": true,
        "handoff": true,
        "pricing": {
            "free": true,
            "subscription": "$15",
            "purchase": ""
        }
    }, {
        "name": "Marvel",
        "url": "https://marvelapp.com/",
        "image": {
            "background-position": "-200 -300",
        },
        "platforms": {
            "web": true,
            "iOS": true,
            "android": true
        },
        "design": true,
        "import": {
            "sketch": true,
            "dropbox": true,
            "camera": true,
            "googleDrive": true,
            "box": true
        },
        "navigation": true,
        "transition": true,
        "sharing": {
            "web": true,
            "iOS": true,
            "android": true,
            "appleWatch": true,
            "appleTv": true,
            "html": true,
            "pdf": true
        },
        "pricing": {
            "free": true,
            "subscription": "$12",
            "purchase": ""
        }
    }, {
        "name": "Flinto",
        "url": "https://www.flinto.com/mac",
        "image": {
            "background-position": "-100 -300",
        },
        "platforms": {
            "web": true,
            "mac": true
        },
        "micro": true,
        "design": true,
        "import": {
            "sketch": true,
            "dropbox": true
        },
        "navigation": true,
        "transition": true,
        "sharing": {
            "iOS": true
        },
        "fixedHeader": true,
        "pricing": {
            "free": false,
            "subscription": "",
            "purchase": "$99"
        }
    }, {
        "name": "Flinto Lite",
        "url": "https://www.flinto.com/lite",
        "image": {
            "background-position": "-400 -400",
        },
        "platforms": {
            "web": true,
        },
        "import": {
            "dropbox": true
        },
        "navigation": true,
        "transition": true,
        "sharing": {
            "iOS": true,
            "android": true
        },
        "fixedHeader": true,
        "pricing": {
            "free": false,
            "subscription": "$20",
            "purchase": ""
        }
    }, {
        "name": "Axure",
        "url": "http://www.axure.com/",
        "image": {
            "background-position": "-300 0",
        },
        "platforms": {
            "mac": true,
            "windows": true
        },
        "design": true,
        "micro": true,
        "navigation": true,
        "transition": true,
        "sharing": {
            "web": true
        },
        "pricing": {
            "free": false,
            "subscription": "$29",
            "purchase": "$495"
        }
    }, {
        "name": "Balsamiq",
        "url": "https://balsamiq.com/",
        "image": {
            "background-position": "-500 -400",
        },
        "design": true,
        "platforms": {
            "web": true
        },
        "navigation": true,
        "sharing": {
            "web": true,
            "pdf": true
        },
        "pricing": {
            "free": false,
            "subscription": "$12",
            "purchase": "$89"
        }
    }, {
        "name": "Lucidchart",
        "url": "https://lucidchart.com/",
        "image": {
            "background-position": "0 -500",
        },
        "design": true,
        "platforms": {
            "web": true
        },
        "navigation": true,
        "sharing": {
            "web": true
        },
        "pricing": {
            "free": true,
            "subscription": "$5",
            "purchase": ""
        }
    }, {
        "name": "Adobe XD",
        "url": "http://www.adobe.com/products/experience-design",
        "image": {
            "background-position": "0 0",
        },
        "design": true,
        "platforms": {
            "mac": true
        },
        "navigation": true,
        "transition": true,
        "sharing": {
            "web": true
        },
        "pricing": {
            "free": false,
            "subscription": "$19",
            "purchase": ""
        }
    }, {
        "name": "Craft",
        "url": "https://www.invisionapp.com/craft",
        "image": {
            "background-position": "-500 -300",
        },
        "platforms": {
            "mac": true
        },
        "import": {
            "sketch": true
        },
        "navigation": true,
        "transition": true,
        "sharing": {
            "iOS": true
        },
        "pricing": {
            "free": true,
            "subscription": "",
            "purchase": ""
        }
    }, {
        "name": "Pixate",
        "url": "http://www.pixate.com/",
        "image": {
            "background-position": "-100 -400",
        },
        "platforms": {
            "mac": true,
        },
        "import": {
            "sketch": true
        },
        "micro": true,
        "navigation": true,
        "transition": true,
        "sharing": {
            "iOS": true,
            "android": true
        },
        "pricing": {
            "free": true,
            "subscription": "$5",
            "purchase": ""
        }
    }, {
        "name": "Origami",
        "url": "https://facebook.github.io/origami/",
        "image": {
            "background-position": "-300 -300",
        },
        "platforms": {
            "mac": true,
        },
        "import": {
            "sketch": true,
        },
        "micro": true,
        "navigation": true,
        "transition": true,
        "sharing": {
            "iOS": true
        },
        "pricing": {
            "free": true,
            "subscription": "",
            "purchase": ""
        }
    }, {
        "name": "Proto.io",
        "url": "https://proto.io/",
        "image": {
            "background-position": "-100 -500",
        },
        "platforms": {
            "web": true,
        },
        "import": {
            "photoshop": true,
            "dropbox": true,
            "sketch": true,
        },
        "sketch": true,
        "design": true,
        "micro": true,
        "navigation": true,
        "transition": true,
        "sharing": {
            "iOS": true,
            "android": true,
            "web": true,
            "html": true
        },
        "pricing": {
            "free": true,
            "subscription": "$24",
            "purchase": ""
        }
    }, {
        "name": "Moqups",
        "url": "https://moqups.com/",
        "image": {
            "background-position": "-400 -300",
        },
        "platforms": {
            "web": true,
        },
        "design": true,
        "navigation": true,
        "sharing": {
            "web": true,
            "pdf": true,
        },
        "pricing": {
            "free": true,
            "subscription": "$19",
            "purchase": ""
        }
    }, {
        "name": "Atomic.io",
        "url": "https://atomic.io/",
        "image": {
            "background-position": "-500 -700",
        },
        "platforms": {
            "web": true,
        },
        "import": {
            "sketch": true
        },
        "taylorChoice": true,
        "design": true,
        "micro": true,
        "navigation": true,
        "transition": true,
        "sharing": {
            "web": true,
        },
        "pricing": {
            "free": false,
            "subscription": "$15",
            "purchase": ""
        }
    }, {
        "name": "CanvasFlip",
        "url": "http://canvasflip.com/",
        "image": {
            "background-position": "-500 -200",
        },
        "platforms": {
            "web": true,
        },
        "import": {
            "sketch": true,
            "balsamiq": true,
            "dropbox": true,
            "camera": true
        },
        // "micro": only with GIF,
        "navigation": true,
        "transition": true,
        "sharing": {
            "iOS": true,
            "android": true,
            "web": true
        },
        "analytics": true,
        "heatmap": true,
        "pricing": {
            "free": true,
            "subscription": "$19",
            "purchase": ""
        }
        // fixed header
        // screen overlays
        // timers,
    }, {
        "name": "iRise",
        "url": "https://www.irise.com/",
        "image": {
            "background-position": "-100 -700",
        },
        "design": true,
        "platforms": {
            "web": true,
            "windows": true,
            "mac": true
        },
        "micro": true,
        "data": true,
        "navigation": true,
        "transition": true,
        "sharing": {
            "iOS": true,
            "web": true,
            "windows": true,
            "mac": true
        },
        "pricing": {
            "free": false,
            "subscription": "$29",
            "purchase": ""
        }
    }, {
        "name": "Koncept App",
        "url": "https://konceptapp.com/",
        "image": {
            "background-position": "-200 -500",
        },
        "platforms": {
            "web": true
        },
        "navigation": true,
        "transition": true,
        "sharing": {
            "web": true,
        },
        "tasks": true,
        "heatmap": true,
        "analytics": true,
        "pricing": {
            "free": false,
            "subscription": "$15",
            "purchase": ""
        }
    }, {
        "name": "Fuse",
        "url": "https://www.fusetools.com/",
        "image": {
            "background-position": "-500 -100",
        },
        "platforms": {
            "mac": true,
            "windows": true,
        },
        "import": {
            "sketch": true,
        },
        "navigation": true,
        "micro": true,
        "transition": true,
        "data": true,
        "code": true,
        "sharing": {
            "iOS": true,
            "android": true
        },
        "pricing": {
            "free": true,
            "subscription": "",
            "purchase": ""
        }
    }, {
        "name": "HotGloo",
        "url": "https://www.hotgloo.com/",
        "image": {
            "background-position": "-200 -600",
        },
        "design": true,
        "platforms": {
            "web": true,
        },
        "navigation": true,
        "micro": true,
        "sharing": {
            "web": true,
            "pdf": true,
            "html":true
        },
        "pricing": {
            "free": false,
            "subscription": "$15",
            "purchase": ""
        }
    }, {
        "name": "Webflow",
        "url": "https://webflow.com/",
        "image": {
            "background-position": "-200 -700",
        },
        "design": true,
        "platforms": {
            "web": true,
        },
        "navigation": true,
        "micro": true,
        "transition": true,
        "data": true,
        "sharing": {
            "web": true,
            "html":true
        },
        "pricing": {
            "free": true,
            "subscription": "$16",
            "purchase": null
        }
    }, {
        "name": "Demonstrate",
        "url": "http://nfnlabs.in/demonstrate/",
        "image": {
            "background-position": "-300 -500",
        },
        "platforms": {
            "iOS": true,
        },
        "import": {
            "dropbox": true,
            "camera": true
        },
        "navigation": true,
        "transition": true,
        "sharing": {
            "iOS": true
        },
        "pricing": {
            "free": true,
            "subscription": "",
            "purchase": ""
        }
    }, {
        "name": "Prott",
        "url": "https://prottapp.com/",
        "image": {
            "background-position": "-500 0",
        },
        "platforms": {
            "web": true,
            "mac": true,
            "iOS": true,
            "android": true
        },
        "design": true,
        "import": {
            "sketch": true,
            "photoshop": true,
            "camera": true,
            "dropbox": true
        },
        "navigation": true,
        "transition": true,
        "sharing": {
            "web": true,
            "iOS": true,
            "android": true
        },
        "pricing": {
            "free": true,
            "subscription": "$19",
            "purchase": null
        }
    }, {
        "name": "Justinmind",
        "url": "http://www.justinmind.com/",
        "image": {
            "background-position": "-400 -700",
        },
        "platforms": {
            "mac": true,
            "windows": true
        },
        "design": true,
        "navigation": true,
        "transition": true,
        "sharing": {
            "web": true,
            "iOS": true,
            "android": true
        },
        "mobileOnly": false,
        "responsive": true,
        "pricing": {
            "free": false,
            "subscription": "$19",
            "purchase": "$495"
        }
    }, {
        "name": "Notable",
        "url": "http://notable.zurb.com/",
        "image": {
            "background-position": "-0 -700",
        },
        "platforms": {
            "web": true
        },
        "navigation": true,
        "transition": true,
        "sharing": {
            "web": true,
        },
        "pricing": {
            "free": false,
            "subscription": "$20",
            "purchase": ""
        }
    }, {
        "name": "ProtoPie",
        "url": "https://www.protopie.io",
        "image": {
            "background-position": "-0 -800",
        },
        "platforms": {
            "mac": true
        },
        "pricing": {
            "free": true,
            "subscription": "",
            "purchase": ""
        },
        "design": false,
        "import": {
            "sketch": true,
        },
        "micro": true,
        "navigation": true,
        "transition": true,
        "data": false,
        "code": false,
        "sharing": {
            "android": true,
            "iOS": true
        },
        "tasks": false,
        "analytics": false,
        "heatmaps": false,
        "sensors": true
        // "mobileOnly": true,
    }];

    var filters = [{
            "title": "",
            "show": true,
            "canChange": false
        }, {
            "title": "Name",
            "show": true,
            "canChange": true,
            "tipText": "Name of app"
        }, {
            "title": "Platform",
            "show": true,
            "canChange": true,
            "tipText": "Platforms used for <br>building prototypes"
        }, {
            "title": "Free",
            "show": true,
            "canChange": true,
            "tipText": "Has a free version"
        }, {
            "title": "Subscription",
            "show": true,
            "canChange": true,
            "tipText": "Cheapest monthly<br>payment"
        }, {
            "title": "Purchase",
            "show": true,
            "canChange": true,
            "tipText": "One time cost"
        }, {
            "title": "Design",
            "show": true,
            "canChange": true,
            "tipText": "App can design<br>from scratch"
        }, {
            "title": "Import",
            "show": true,
            "canChange": true,
            "tipText": "Integrations with<br>other apps"
        }, {
            "title": "Animations",
            "show": true,
            "canChange": true,
            "tipText": "Individual animations<br>& micro-interactions"
        },
        // {
        //     "title": "Navigation",
        //     "show": true,
        //     "canChange": true,
        //     "tipText": ""
        // }, 
        {
            "title": "Transitions",
            "show": true,
            "canChange": true,
            "tipText": "Animates between screens"
        }, {
            "title": "Data",
            "show": true,
            "canChange": true,
            "tipText": "Uses data to<br>render UI"
        }, {
            "title": "Code",
            "show": true,
            "canChange": true,
            "tipText": "Requires knowledge<br>of code"
        }, {
            "title": "Sharing",
            "show": true,
            "canChange": true,
            "tipText": "How others can<br>use the prototype"
        }, {
            "title": "Handoff",
            "show": true,
            "canChange": true,
            "tipText": "Automatic specs<br>for developers"
        }, {
            "title": "Tasks",
            "show": true,
            "canChange": true,
            "tipText": ""
        }, {
            "title": "Analytics",
            "show": true,
            "canChange": true,
            "tipText": "Can track events<br>when testing"
        }, {
            "title": "Heatmap",
            "show": true,
            "canChange": true,
            "tipText": "Generates heatmaps<br>from user testing"
        }, {
            "title": "Sensors",
            "show": true,
            "canChange": true,
            "tipText": "Utilizes device sensors"
        }
    ];

    return {
        tools: function() {
            return tools;
        },
        filters: function() {
            return filters;
        },
        setFilters: function(data) {
            filters = data;
        }
    };

});

angular.module('uxTools.handoff', [])

.controller('handoffCtrl', function($scope, $state, handoffFactory) {

  $scope.handoffTools = handoffFactory.tools();
  $scope.filters = handoffFactory.filters();
  // Copy filters so ngModel doesn't reflect while changing
  $scope.tempFilters = angular.copy($scope.filters);

  $scope.modalShowing = false;

  $scope.showFiltersModal = function(command) {
    if (command === 'show') {
      $scope.modalShowing = true;
    } else if (command === 'hide') {
      $scope.modalShowing = false;
    }
  };

  $scope.isFilterVisible = function(string) {
    for ( var i = 0; i < $scope.filters.length; i++ ) {
      if ( $scope.filters[i].title === string ) {
        return $scope.filters[i].show;
      }
    }
  };

  $scope.setFilters = function() {
    handoffFactory.setFilters($scope.tempFilters);
    $state.reload();
    $scope.showFiltersModal = false;
  };

})

.factory('handoffFactory', function() {

    var tools = [{
        "name": "Zeplin",
        "url": "https://zeplin.io/",
        "image": {
            "background-position": "-500 -500",
        },
        "platforms": {
            "mac": true,
            "windows": true
        },
        "programs": {
            "sketch": true,
            "photoshop": true
        },
        "specs": true,
        "automatic": true,
        "assets": true,
        "measure": true,
        "variables": true,
        "guides": true,
        "comments": true,
        "sharing": {
            "mac": true,
            "web": true,
            "windows": true
        },
        "integrations": {
            "slack": true,
        },
        "pricing": {
            "free": true,
            "subscription": "$15",
            "purchase": ""
        }
    }, {
        "name": "Avocode",
        "url": "https://avocode.com/",
        "image": {
            "background-position": "-400 -500",
        },
        "platforms": {
            "mac": true,
            "windows": true,
            "linux": true
        },
        "programs": {
            "sketch": true,
            "photoshop":true
        },
        "specs": true,
        "automatic": true,
        "assets": true,
        "measure": true,
        "variables": true,
        "guides": true,
        "layers": true,
        "comments": true,
        "revisions": true,
        "sharing": {
            "mac": true,
            "windows": true,
            "linux": true
        },
        "integrations": {
            "slack": true,
        },
        "pricing": {
            "free": false,
            "subscription": "$7",
            "purchase": ""
        }
    }, {
        "name": "Marketch",
        "url": "https://github.com/tudou527/marketch",
        "image": {
            "background-position": "-300 -600",
        },
        "platforms": {
            "mac": true,
        },
        "programs": {
            "sketch": true
        },
        "specs": true,
        "measure": true,
        "sharing": {
            "html": true
        },
        "pricing": {
            "free": true,
            "subscription": "",
            "purchase": ""
        }
    }, {
        "name": "Sketch Measure",
        "url": "https://github.com/utom/sketch-measure",
        "image": {
            "background-position": "-500 -600",
        },
        "platforms": {
            "mac": true
        },
        "programs": {
            "sketch": true
        },
        "variables": true,
        "automatic": true,
        "assets": true,
        "specs": true,
        "measure": true,
        "sharing": {
            "html": true
        },
        "pricing": {
            "free": true,
            "subscription": "",
            "purchase": ""
        }
    }, {
        "name": "Sympli",
        "url": "https://sympli.io/",
        "image": {
            "background-position": "-100 -600",
        },
        "platforms": {
            "web": true
        },
        "programs": {
            "sketch": true,
            "photoshop": true
        },
        "specs": true,
        "automatic": true,
        "assets": true,
        "measure": true,
        "variables": true,
        "guides": true,
        "layers": true,
        "comments": true,
        "revisions": true,
        "sharing": {
            "web": true,
            "xcode": true,
            "androidStudio": true
        },
        "integrations": {
            "slack": true,
        },
        "pricing": {
            "free": true,
            "subscription": "$15",
            "purchase": ""
        }
        // Visual diffs
    }, {
        "name": "Markly",
        "url": "http://marklyapp.com/",
        "image": {
            "background-position": "0 -600",
        },
        "platforms": {
            "mac": true
        },
        "programs": {
            "sketch": true,
            "photoshop": true
        },
        "specs": true,
        "measure": true,
        "sharing": {
            "web": true,
        },
        "pricing": {
            "free": false,
            "subscription": "",
            "purchase": "$50"
        }
    }, {
        "name": "Red Pen",
        "url": "https://redpen.io/",
        "image": {
            "background-position": "-300 -700",
        },
        "platforms": {
            "web": true,
        },
        "comments": true,
        "revisions": true,
        "sharing": {
            "web": true,
        },
        "pricing": {
            "free": false,
            "subscription": "$20",
            "purchase": ""
        }
    }, {
        "name": "Specctr",
        "url": "https://specctr.com/cloud/home",
        "image": {
            "background-position": "-400 -600",
        },
        "platforms": {
            "mac": true,
            "windows": true,
        },
        "programs": {
            "photoshop":true,
            "illustrator": true,
            "indesign": true
        },
        "specs": true,
        "measure": true,
        "comments": true,
        "revisions": true,
        "sharing": {
            "web": true,
        },
        "pricing": {
            "free": true,
            "subscription": "$9",
            "purchase": ""
        }
    }, {
        "name": "UX Pin",
        "url": "https://www.uxpin.com/",
        "image": {
            "background-position": "0 -100",
        },
        "platforms": {
            "web": true
        },
        "programs": {
            "sketch": true,
        },
        "specs": true,
        "measure": true,
        "comments": true,
        "revisions": false,
        "sharing": {
            "web": true,
        },
        "pricing": {
            "free": false,
            "subscription": "$20"
        }
    }];

    var filters = [
    {
            "title": "",
            "show": true,
            "canChange": false
    }, {
            "title": "Name",
            "show": true,
            "canChange": true,
            "tipText": "Name of app"
    }, {
            "title": "Platform",
            "show": true,
            "canChange": true,
            "tipText": "Platforms used to <br>upload designs"
    }, {
            "title": "Free",
            "show": true,
            "canChange": true,
            "tipText": "Has a free version"
    }, {
            "title": "Subscription",
            "show": true,
            "canChange": true,
            "tipText": "Cheapest monthly<br>payment"
    }, {
            "title": "Purchase",
            "show": true,
            "canChange": true,
            "tipText": "One time cost"
    }, {
            "title": "Programs",
            "show": true,
            "canChange": true,
            "tipText": "Compatible design programs"
    }, {
            "title": "Specs",
            "show": true,
            "canChange": true,
            "tipText": "App creates design <br>specifications"
    }, {
            "title": "Automatic",
            "show": true,
            "canChange": true,
            "tipText": "App automatically <br>generates specs"
    }, {
            "title": "Assets",
            "show": true,
            "canChange": true,
            "tipText": "Export <br>design assets"
    }, {
            "title": "Measure",
            "show": true,
            "canChange": true,
            "tipText": "Measure <br>distance and size"
    }, {
            "title": "Variables",
            "show": true,
            "canChange": true,
            "tipText": "Allows custom <br>CSS variables"
    }, {
            "title": "Guides",
            "show": true,
            "canChange": true,
            "tipText": "Maintains layout guides <br>from design apps"
    }, {
            "title": "Layers",
            "show": false,
            "canChange": true,
            "tipText": "App shows layer tree"
    }, {
            "title": "Comments",
            "show": true,
            "canChange": true,
            "tipText": "Viewers can comment <br>on designs"
    }, {
            "title": "Revisions",
            "show": false,
            "canChange": true,
            "tipText": "Save versions <br>of files"
    }, {
            "title": "Sharing",
            "show": true,
            "canChange": true,
            "tipText": "How users can <br>access designs"
    }, {
            "title": "Integrations",
            "show": true,
            "canChange": true,
            "tipText": "Other external apps"
    }];

    return {
        tools: function() {
            return tools;
        },
        filters: function() {
            return filters;
        },
        setFilters: function(data) {
            filters = data;
        }
    };

});

angular.module('uxTools.monitoring', [])

.controller('monitoringCtrl', function($scope, $state, monitoringFactory) {

  $scope.prototypingTools = monitoringFactory.tools();
  $scope.filters = monitoringFactory.filters();
  // Copy filters so ngModel doesn't reflect while changing
  $scope.tempFilters = angular.copy($scope.filters);

  $scope.modalShowing = false;

  $scope.showFiltersModal = function(command) {
    if (command === 'show') {
      $scope.modalShowing = true;
    } else if (command === 'hide') {
      $scope.modalShowing = false;
    }
  };

  $scope.isFilterVisible = function(string) {
    for ( var i = 0; i < $scope.filters.length; i++ ) {
      if ( $scope.filters[i].title === string ) {
        return $scope.filters[i].show;
      }
    }
  };

  $scope.setFilters = function() {
    monitoringFactory.setFilters($scope.tempFilters);
    $state.reload();
    $scope.showFiltersModal = false;
  };

})

.factory('monitoringFactory', function() {

    var tools = [{
        "name": "Inspectlet",
        "url": "http://www.inspectlet.com/",
        "image": {
            "background-position": "-100 -200",
        },
        "platforms": {
            "web": true
        },
        "playback": true,
        "heatmaps": true,
        "tags": true,
        "location": true,
        "skipInactivity": true,
        "playbackSpeed": true,
        "export": {
            "html": true
        },
        "pricing": {
            "free": true,
            "subscription": "$39"
        }
    }, {
        "name": "Lucky Orange",
        "url": "http://www.luckyorange.com/",
        "image": {
            "background-position": "0 -300",
        },
        "platforms": {
            "web": true
        },
        "playback": true,
        "heatmaps": true,
        "tags": true,
        "polls": true,
        "formAnalytics": true,
        "location": true,
        "console": true,
        "skipInactivity": true,
        "playbackSpeed": true,
        "pricing": {
            "free": false,
            "subscription": "$10"
        }
        // can watch live sessions
        // can show trending referrers
        // can show trending tweets
        // can see global map of locations
    }, {
        "name": "Fullstory",
        "url": "http://www.fullstory.com/",
        "image": {
            "background-position": "-300 -100",
        },
        "platforms": {
            "web": true
        },
        "playback": true,
        "tags": true,
        "location": true,
        "console": true,
        "skipInactivity": true,
        "playbackSpeed": true,
        "jumpBack": true, // Skip backwards a few seconds
        "taylorChoice": true,
        "pricing": {
            "free": false,
            "subscription": "$199"
        }
        // Can search according the the html element a user clicked
        // can watch live sessions
    }, {
        "name": "Hotjar",
        "url": "https://www.hotjar.com/",
        "image": {
            "background-position": "0 -200",
        },
        "platforms": {
            "web": true
        },
        "playback": true,
        "heatmaps": true,
        "location": true,
        "formAnalytics": true,
        "polls": true,
        "playbackSpeed": true,
        "skipInactivity": true,
        "pricing": {
            "free": false,
            "subscription": "$29"
        }
        // host custom surveys like Qualtrics
    }, {
        "name": "MouseStats",
        "url": "https://www.mousestats.com/",
        "image": {
            "background-position": "-400 -100",
        },
        "platforms": {
            "web": true
        },
        "playback": true,
        "heatmaps": true,
        "formAnalytics": true,
        "polls": true,
        "skipInactivity": true,
        "pricing": {
            "free": false,
            "subscription": "$29"
        }
    }, {
        "name": "UserTrack",
        "url": "https://www.usertrack.net/",
        "image": {
            "background-position": "-200 -200",
        },
        "platforms": {
            "web": true
        },
        "playback": true,
        "heatmaps": true,
        "location": true,
        "skipInactivity": true,
        "pricing": {
            "free": false,
            "purchase": "$27"
        }
    }, {
        "name": "Zeerat",
        "url": "https://zeerat.com",
        "image": {
            "background-position": "-300 -200",
        },
        "platforms": {
            "web": true
        },
        "playback": true,
        "heatmaps": true,
        "location": true,
        "formAnalytics": true,
        "pricing": {
            "free": false,
            "subscription": "$40"
        }
    }, {
        "name": "Jaco",
        "url": "http://www.getjaco.com/",
        "image": {
            "background-position": "-400 -200",
        },
        "platforms": {
            "web": true
        },
        "playback": true,
        "tags": false,
        "location": false,
        "console": false,
        "skipInactivity": true,
        "playbackSpeed": true,
        "pricing": {
            "free": false,
            "subscription": "$39"
        }
        // Can search according the the html element a user clicked
        // can watch live sessions
    }];

    var filters = [
    {
            "title": "",
            "show": true,
            "canChange": false
    }, {
            "title": "Name",
            "show": true,
            "canChange": true,
            "tipText": "Name of app"
    }, {
            "title": "Free",
            "show": true,
            "canChange": true,
            "tipText": "Has a free version"
    }, {
            "title": "Subscription",
            "show": true,
            "canChange": true,
            "tipText": "Cheapest monthly<br>payment"
    }, {
            "title": "Purchase",
            "show": true,
            "canChange": true,
            "tipText": "One time cost"
    }, {
            "title": "Playback",
            "show": true,
            "canChange": true,
            "tipText": "Records user's<br> actions"
    }, {
            "title": "Skip",
            "show": true,
            "canChange": true,
            "tipText": "Can skip inactivity<br> during playback"
    }, {
            "title": "Speed",
            "show": true,
            "canChange": true,
            "tipText": "Fast-forward<br> & half-speed"
    }, {
            "title": "Jump Back",
            "show": true,
            "canChange": true,
            "tipText": "Go back a few seconds<br> in playback (so useful)"
    }, {
            "title": "Console",
            "show": true,
            "canChange": true,
            "tipText": "Records JS console<br> during playback"
    }, {
            "title": "Heatmaps",
            "show": true,
            "canChange": true,
            "tipText": "Generates heatmap<br> of actions"
    }, {
            "title": "Location",
            "show": true,
            "canChange": true,
            "tipText": "Shows visitor's<br> location"
    }, {
            "title": "Form Stats",
            "show": true,
            "canChange": true,
            "tipText": "Analyzes form<br> drop off & stats"
    }, {
            "title": "Polls",
            "show": true,
            "canChange": true,
            "tipText": "Can create<br> user surveys"
    }, {
            "title": "Export",
            "show": true,
            "canChange": true,
            "tipText": "Format for<br> downloaded"
    }];

    return {
        tools: function() {
            return tools;
        },
        filters: function() {
            return filters;
        },
        setFilters: function(data) {
            filters = data;
        }
    };

});

angular.module('uxTools.design', [])

.controller('designCtrl', function($scope, $state, designFactory) {

  $scope.designTools = designFactory.tools();
  $scope.filters = designFactory.filters();
  // Copy filters so ngModel doesn't reflect while changing
  $scope.tempFilters = angular.copy($scope.filters);

  $scope.modalShowing = false;

  $scope.sortType = 'name';
  $scope.sortReverse = false;

  $scope.showFiltersModal = function(command) {
    if (command === 'show') {
      $scope.modalShowing = true;
    } else if (command === 'hide') {
      $scope.modalShowing = false;
    }
  };

  $scope.isFilterVisible = function(string) {
    for ( var i = 0; i < $scope.filters.length; i++ ) {
      if ( $scope.filters[i].title === string ) {
        return $scope.filters[i].show;
      }
    }
  };

  $scope.setFilters = function() {
    designFactory.setFilters($scope.tempFilters);
    $state.reload();
    $scope.showFiltersModal = false;
  };

})

.factory('designFactory', function() {

    var tools = [{
        "name": "Sketch",
        "url": "https://www.sketchapp.com/",
        "image": {
            "background-position": "-200 0",
        },
        "platforms": {
            "mac": true
        },
        "import": {
            "sketch": true,
            "svg": true,
            "eps": true,
            "pdf": true,
            "tiff": true
        },
        "export": {
            "png": true,
            "jpg": true,
            "svg": true,
            "pdf": true,
            "eps": true,
            "tiff": true
        },
        "offline": true,
        "penTool": true,
        "collaboration": false,
        "handoff": false,
        "plugins": true,
        "artboards": true,
        "symbols": true,
        "responsive": true,
        "vector": true,
        "pricing": {
            "purchase": "$99"
        }
    }, {
        "name": "Figma",
        "url": "https://www.figma.com",
        "image": {
            "background-position": "-200 -100",
        },
        "platforms": {
            "web": true,
            "mac": true
        },
        "import": {
            "svg": true,
            "jpg": true,
            "png": true,
        },
        "export": {
            "png": true,
            "jpg": true,
            "svg": true,
            "tiff": true
        },
        "offline": false,
        "comments": true,
        "penTool": true,
        "collaboration": true,
        "handoff": true,
        "artboards": true,
        "symbols": false,
        "responsive": true,
        "vector": true,
        "pricing": {
            "free": true,
            "subscription": "$--",
            "purchase": "$--"
        }
    }, {
        "name": "Adobe Illustrator",
        "url": "http://www.adobe.com/products/illustrator.html",
        "image": {
            "background-position": "-100 -100",
        },
        "platforms": {
            "mac": true,
            "windows": true
        },
        "import": {
            "svg": true,
            "eps": true,
            "pdf": true,
            "psd": true,
            "tiff": true,
            "ai": true
        },
        "export": {
            "png": true,
            "jpg": true,
            "svg": true,
            "pdf": true,
            "eps": true,
            "tiff": true,
            "ai": true
        },
        "offline": true,
        "penTool": true,
        "collaboration": false,
        "handoff": false,
        "artboards": true,
        "plugins": true,
        "symbols": true,
        "responsive": true,
        "vector": true,
        "pricing": {
            "free": false,
            "subscription": "$20"
        }
    }, {
        "name": "Adobe Photoshop",
        "url": "http://www.adobe.com/products/photoshop.html",
        "image": {
            "background-position": "-100 0",
        },
        "platforms": {
            "mac": true,
            "windows": true
        },
        "import": {
            "pdf": true,
            "psd": true,
            "ai": true,
            "tiff": true,
            "eps": true
        },
        "export": {
            "png": true,
            "jpg": true,
            "tiff": true,
            "pdf": true,
            "psd": true
        },
        "offline": true,
        "penTool": true,
        "collaboration": false,
        "plugins": true,
        "handoff": false,
        "artboards": true,
        "symbols": false,
        "responsive": false,
        "vector": true,
        "pricing": {
            "free": false,
            "subscription": "$20"
        }
    }, {
        "name": "Affinity Designer",
        "url": "https://affinity.serif.com/en-us/",
        "image": {
            "background-position": "-400 0",
        },
        "platforms": {
            "mac": true
        },
        "import": {
            "svg": true,
            "eps": true,
            "pdf": true,
            "ai": true,
            "tiff": true
        },
        "export": {
            "png": true,
            "jpg": true,
            "gif": true,
            "svg": true,
            "psd": true,
            "eps": true,
            "tiff": true,
            "pdf": true
        },
        "offline": true,
        "penTool": true,
        "collaboration": false,
        "handoff": false,
        "artboards": true,
        "symbols": true,
        "responsive": true, 
        "vector": true,
        "pricing": {
            "free": false,
            "purchase": "$40"
        }
    }, {
        "name": "Adobe XD",
        "url": "http://www.adobe.com/products/experience-design.html",
        "image": {
            "background-position": "0 0",
        },
        "platforms": {
            "mac": true,
            "windows": true
        },
        "import": {
            "svg": true,
            "tiff": true
        },
        "export": {
            "png": true,
            "jpg": true,
            "gif": true,
            "svg": true,
            "tiff": true,
            "pdf": true
        },
        "offline": true,
        "penTool": true,
        "collaboration": false,
        "handoff": false,
        "artboards": true,
        "symbols": false,
        "responsive": false,
        "prototyping": true,
        "vector": true,
        "pricing": {
            "free": true,
            "subscription": "$--"
        }

    }, {
        "name": "UX Pin",
        "url": "https://www.uxpin.com/",
        "image": {
            "background-position": "0 -100",
        },
        "platforms": {
            "web": true
        },
        "import": {
            "sketch": true,
            "psd": true,
            "svg": true,
            "eps": true,
            "pdf": true,
            "ai": true,
            "tiff": true
        },
        "export": {
            "png": true,
            "pdf": true,
            "html": true
        },
        "offline": false,
        "penTool": false,
        "collaboration": true,
        "comments": true,
        "handoff": false,
        "artboards": false,
        "symbols": false,
        "responsive": false,
        "prototyping": true,
        "vector": true,
        "pricing": {
            "free": false,
            "subscription": "$20"
        }

    }, {
        "name": "Axure",
        "url": "http://www.axure.com/",
        "image": {
            "background-position": "-300 0",
        },
        "platforms": {
            "mac": true,
            "windows": true
        },
        "import": {
            "png": true,
            "jpg": true,
            "gif": true
        },
        "export": {
            "word": true,
            "png": true,
            "jpg": true,
            "html": true,
            "pdf": true
        },
        "offline": true,
        "penTool": false,
        "collaboration": true,
        "handoff": false, // generate a spec Word doc
        "artboards": false,
        "symbols": false,
        "responsive": false,
        "prototyping": true,
        "vector": false, // Seems HTML based
        "pricing": {
            "free": false,
            "subscription": "$29",
            "purchase": "$495"
        }
    }, {
        "name": "Atomic.io",
        "url": "https://atomic.io/",
        "image": {
            "background-position": "-500 -700",
        },
        "platforms": {
            "web": true
        },
        "import": {
            "sketch": true,
            "svg": true,
            "png": true,
            "jpg": true
        },
        "export": {
            "png": true,
            "jpg": true,
            "svg": true,
            "pdf": true,
            "eps": true,
            "tiff": true
        },
        "offline": false,
        "penTool": false,
        "collaboration": true,
        "comments": true,
        "handoff": false,
        "plugins": false,
        "artboards": false,
        "symbols": true,
        "responsive": false,
        "vector": false,
        "prototyping": true,
        "pricing": {
            "subscription": "$15"
        }
    }];

    // Balsamiq
    // Flinto
    // Hotgloo
    // iRise
    // Justinmind
    // Lucidchart
    // Marvel
    // Moqups
    // Proto.io
    // Prott
    // Webflow

    var filters = [
    {
            "title": "",
            "show": true,
            "canChange": false
    }, {
            "title": "Name",
            "show": true,
            "canChange": true,
            "tipText": "Name of app"
    }, {
            "title": "Platform",
            "show": true,
            "canChange": true,
            "tipText": "Platforms used for <br>building prototypes"
    }, {
            "title": "Free",
            "show": true,
            "canChange": true,
            "tipText": "Has a free version"
    }, {
            "title": "Subscription",
            "show": true,
            "canChange": true,
            "tipText": "Cheapest monthly<br>payment"
    }, {
            "title": "Purchase",
            "show": true,
            "canChange": true,
            "tipText": "One time cost"
    }, {
            "title": "Offline",
            "show": true,
            "canChange": true,
            "tipText": "Can open and<br>edit offline"
    }, {
            "title": "Pen Tool",
            "show": true,
            "canChange": true,
            "tipText": "Draw vectors<br>and paths"
    }, {
            "title": "Collaborate",
            "show": true,
            "canChange": true,
            "tipText": "Simultaneous editing"
    },  {
            "title": "Comments",
            "show": true,
            "canChange": true,
            "tipText": "Others can<br>leave comments"
    }, {
            "title": "Handoff",
            "show": true,
            "canChange": true,
            "tipText": "Automatic specs<br>for developers"
    }, {
            "title": "Artboards",
            "show": true,
            "canChange": true,
            "tipText": "Multiple visible<br>artboards"
    }, {
            "title": "Symbols",
            "show": true,
            "canChange": true,
            "tipText": "Document-wide<br>master symbols"
    }, {
            "title": "Responsive",
            "show": true,
            "canChange": true,
            "tipText": "Dynamically resizing<br>groups"
    }, {
            "title": "Prototyping",
            "show": true,
            "canChange": true,
            "tipText": "Can prototype<br>within the app"
    }, {
            "title": "Import",
            "show": false,
            "canChange": true,
            "tipText": "Unique formats that<br>can be opened"
    }, {
            "title": "Export",
            "show": false,
            "canChange": true,
            "tipText": "Unique formats that can<br>be exported"
    }];

    return {
        tools: function() {
            return tools;
        },
        filters: function() {
            return filters;
        },
        setFilters: function(data) {
            filters = data;
        }
    };

});

/*global angular:true */

// @codekit-prepend "angular-tooltips.js"
// @codekit-prepend "prototyping.js"
// @codekit-prepend "handoff.js"
// @codekit-prepend "monitoring.js"
// @codekit-prepend "design.js"


angular.module('uxTools', ['ui.router', 'uxTools.prototyping', 'uxTools.handoff', 'uxTools.monitoring', 'uxTools.design', '720kb.tooltips'])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('prototyping', {
      url: '/prototyping',
      templateUrl : '../templates/prototyping.html',
      controller: 'prototypingCtrl'
    })
    .state('hand-off', {
      url: '/hand-off',
      templateUrl : '../templates/hand-off.html',
      controller: 'handoffCtrl'
    })
    .state('handoff', {
      url: '/handoff',
      templateUrl : '../templates/handoff.html',
      controller: 'handoffCtrl'
    })
    .state('monitoring', {
      url: '/monitoring',
      templateUrl : '../templates/monitoring.html',
      controller: 'monitoringCtrl'
    })
    .state('design', {
      url: '/',
      templateUrl : '../templates/design.html',
      controller: 'designCtrl'
    });
})

.directive('fixedTable', function($window, $timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

            $timeout(function() {

              var scrollElement = document.getElementById("scroll-element");
              var fixedHeaders = document.querySelectorAll("th");
              var fixedCols = document.querySelectorAll(".fixed-col");
              var fixedColHeight = fixedCols[1].clientHeight;
              var mainHeader = document.getElementById("main-header");
              var latestKnownScrollX = 0;
              var latestKnownScrollY = 0;
              var ticking = false;
              var headerHeight = mainHeader.clientHeight;
              var fixedHeader = document.getElementById("fixed-header");
              var fixedHeaderHeight = fixedHeader.clientHeight;
              var columns = document.querySelectorAll("tr:first-of-type td");
              var table = document.getElementById("scroll-table");

              fixedHeader.style.position = "fixed"; // to keep it hidden while loading
              fixedHeader.style.top = headerHeight + "px";

              for (var i=0; i < columns.length; i++) {
                var newWidth = columns[i].offsetWidth;
                fixedHeaders[i].style.minWidth = newWidth;
              }
              
              var onScroll = function() {
                latestKnownScrollX = scrollElement.scrollLeft;
                latestKnownScrollY = scrollElement.scrollTop;
                requestTick();
              };

              function requestTick() {
                if (!ticking) {
                  requestAnimationFrame(update);
                }
                ticking = true;
              }

              var update = function() {
                ticking = false;
                var currentScrollY = latestKnownScrollY;
                var currentScrollX = latestKnownScrollX;

                fixedHeader.style.left = -currentScrollX;

                if (currentScrollY <= headerHeight) {
                  mainHeader.style.marginTop = -currentScrollY;
                  fixedHeader.style.top = headerHeight - currentScrollY;
                  fixedHeader.style.boxShadow = "";
                } else {
                  mainHeader.style.marginTop = -headerHeight;
                  fixedHeader.style.top = 0;
                  fixedHeader.style.boxShadow = "2px 2px 10px rgba(0,0,0,.15)";
                }

                if (currentScrollX > 0) {
                  for ( var i=0; i < fixedCols.length; i++ ) {
                    fixedCols[i].style.position = "fixed";
                    fixedCols[i].style.top = parseInt(fixedHeader.style.top) + fixedHeaderHeight - currentScrollY + (fixedColHeight*i);
                    fixedCols[i].style.boxShadow = "2px 0 5px rgba(0,0,0,.1)";
                  }
                } else {
                  for ( var i=0; i < fixedCols.length; i++ ) {
                    fixedCols[i].style.position = "absolute";
                    fixedCols[i].style.top = "";
                    fixedCols[i].style.boxShadow = "";
                  }
                }

              };

              loadingScreen = document.getElementById("loading-screen");
              loadingScreen.style.display = "none";

              angular.element(scrollElement).bind("scroll", onScroll);
              angular.element($window).bind("resize", function() {
                headerHeight = mainHeader.clientHeight;
                fixedHeader.style.top = headerHeight + "px";
              });

            }, 0);

        }
    };
})



.config(['tooltipsConfProvider', function configConf(tooltipsConfProvider) {
  tooltipsConfProvider.configure({
    'speed': 'fast',
    'side': 'bottom'
  });
}]);

