/*!
 * Fixed Table Header and Left Column
 * 
 * Copyright (c) 2013,2014 nkmrshn
 *
 * Released under the MIT License.
 * http://www.opensource.org/licenses/MIT
 */
(function(a){a.fn.extend({fixedTblHdrLftCol:function(i){var k=a.extend(true,{scroll:{height:null,width:null,headRow:{className:"fTHLC-head-row",enabled:true,overflow:"auto"},leftCol:{className:"fTHLC-left-col",enabled:true,overflow:"auto",fixedSpan:1},syncWith:null},wrapper:{outer:{idName:null,className:"fTHLC-outer-wrapper"},inner:{idName:null,className:"fTHLC-inner-wrapper"}},corner:{append:true,deepClone:false,outer:{idName:null,className:"fTHLC-outer-corner"},inner:{idName:null,className:"fTHLC-inner-corner"}}},i);var p=k.scroll.width;var z=k.scroll.height;var l=null;var h=null;function v(G){var F=p;if(!F){F=G.outerWidth(true)-B(G)}return F}function y(G){var F=z;if(!F){F=G.outerHeight(true)-r(G)}return F}function s(F){return F.find("thead tr").length}function t(H){var I=a([]);for(var G=0;G<s(H);G++){var J=a([]);for(var F=0;F<k.scroll.leftCol.fixedSpan;F++){J.push(H.find("thead tr:nth-child("+(G+1)+") th:nth-child("+(F+1)+")"))}I.push(J)}return I}function o(G){var H=a([]);for(var F=0;F<s(G);F++){H.push(G.find("thead tr:nth-child("+(F+1)+") th:first-child"))}return H}function u(F,G){return F.find("thead tr:nth-child("+(G+1)+") th")}function r(G){var F=h;if(!F){var H=o(G);H.each(function(){F+=a(this).outerHeight(true)});h=F}return F}function w(G){var H=a([]);for(var F=0;F<k.scroll.leftCol.fixedSpan;F++){H.push(G.find("tbody tr:first-child td:nth-child("+(F+1)+")"))}return H}function B(G){var F=l;if(!F){var H=w(G);H.each(function(){F+=a(this).outerWidth(true)});l=F}return F}function e(G){var F=0;G.find("tbody tr:first-child td").each(function(){F+=a(this).outerWidth(true)});return F}function n(F){F.wrap(a(document.createElement("div")).attr("id",k.wrapper.outer.idName).addClass(k.wrapper.outer.className).css("width",v(F)).css("height",y(F)).css("position","relative").css("padding-left",B(F)+"px").css("padding-top",r(F)+"px").css("overflow","hidden"))}function m(F){F.wrap(a(document.createElement("div")).attr("id",k.wrapper.inner.idName).addClass(k.wrapper.inner.className).css("overflow-x",k.scroll.headRow.overflow).css("overflow-y",k.scroll.leftCol.overflow).css("width",v(F)).css("height",y(F)))}function b(G){var H=B(G);var F=e(G);G.css("border-collapse","collapse").css("width",(F-H)+"px")}function q(G){var H=o(G);var F=0;H.each(function(J){var K=u(G,J);var I=0;K.each(function(M){var N=a(this).outerWidth(true);var L=a(this).outerHeight(true);I+=N;if(M==0){F+=L}a(this).addClass(k.scroll.headRow.className).css("position","absolute").css("top",(F-L)+"px").css("left",(I-N)+"px")})})}function g(G){var H=B(G);var F=e(G);G.find("tbody tr").each(function(){a(this).css("width",(F-H)+"px")})}function c(G){var F=0;var H=w(G);H.each(function(I){var J=a(this).outerWidth(true);F+=J;G.find("tbody tr td:nth-child("+(I+1)+")").addClass(k.scroll.leftCol.className).css("position","absolute").css("left",(F-J)+"px")})}function j(F){F.find("tbody tr").each(function(){var I=0;for(var G=0;G<k.scroll.leftCol.fixedSpan;G++){var H=a(this).find("td:nth-child("+(G+1)+")").height();if(H>I){I=H}}a(this).find("td:nth-child("+(k.scroll.leftCol.fixedSpan+1)+")").height(I);a(this).hide().fadeIn(0)})}function A(H){var G=a("<div></div>").attr("id",k.corner.outer.idName).addClass(k.corner.outer.className).css("position","absolute").css("left","0px").css("top","0px").css("margin","0").css("padding","0").css("width",B(H)+"px").css("height",r(H)+"px");var F=a("<table></table>").attr("id",k.corner.inner.idName).addClass(k.corner.inner.className).css("border-collapse","collapse");var J=a("<thead></thead>");var I=t(H);I.each(function(){var K=a("<tr></tr>");a(this).each(function(){var L=a(this).clone(k.corner.deepClone);a(this).removeAttr("id");a(this).unbind();L.appendTo(K)});K.appendTo(J)});J.appendTo(F);F.appendTo(G);G.appendTo(H.parent())}function E(G){var F=[];G.find("tbody tr:first").each(function(){a(this).find("td").each(function(){var H=a(this).position();F.push(H.left)})});G.find("thead tr").each(function(){a(this).find("th").each(function(H){a(this).css("left",F[H]+"px")})})}function x(F){c(F);g(F);q(F);b(F);n(F);m(F);j(F);if(k.corner.append){A(F)}E(F)}function D(F){F.find("tbody tr").each(function(){for(var G=0;G<k.scroll.leftCol.fixedSpan;G++){a(this).find("td:nth-child("+(G+1)+")").css("top",a(this).find("td:nth-child("+(k.scroll.leftCol.fixedSpan+1)+")").position().top+"px")}})}function C(F){F.find("thead tr").each(function(G){if(G<s(F)){a(this).find("th").each(function(H){a(this).css("left",F.find("tbody tr:first-child td:nth-child("+(H+1)+")").position().left+"px")})}})}function d(G,F){F.scrollTop(G.scrollTop());F.scrollLeft(G.scrollLeft())}function f(F){var G=k.scroll.syncWith;if(a.isArray(G)){a.each(G,function(){d(F,a(this.toString()).parent())})}else{d(F,a(G).parent())}}return this.each(function(){if(a(this)[0].tagName.toLowerCase()!="table"){return true}x(a(this));if(k.scroll.leftCol.enabled||k.scroll.headRow.enabled){a(this).parent().scroll(function(){if(k.scroll.headRow.enabled){C(a(this))}if(k.scroll.leftCol.enabled){D(a(this))}if(k.scroll.syncWith){f(a(this))}})}})}})})(jQuery);

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
        "image": "img/prototyping/framer.png",
        "taylorChoice": true,
        "platforms": {
            "mac": true
        },
        "import": {
            "photoshop": true,
            "sketch": true
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
        "image": "img/prototyping/principle.png",
        "taylorChoice": true,
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
        "image": "img/prototyping/uxpin.png",
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
        "pricing": {
            "free": false,
            "subscription": "$19",
            "purchase": ""
        }
    }, {
        "name": "InVision",
        "url": "https://www.invisionapp.com/",
        "image": "img/prototyping/invision.png",
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
        "pricing": {
            "free": true,
            "subscription": "$15",
            "purchase": ""
        }
    }, {
        "name": "Marvel",
        "url": "https://marvelapp.com/",
        "image": "img/prototyping/marvel.png",
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
        "image": "img/prototyping/flinto.png",
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
        "image": "img/prototyping/flinto-lite.png",
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
        "image": "img/prototyping/axure.png",
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
        "image": "img/prototyping/basalmiq.png",
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
        "image": "img/prototyping/lucidchart.png",
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
        "image": "img/prototyping/adobe-xd.png",
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
        "image": "img/prototyping/craft.png",
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
        "image": "img/prototyping/pixate.png",
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
        "image": "img/prototyping/origami.png",
        "plaforms": {
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
        "image": "img/prototyping/proto.io.png",
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
        "image": "img/prototyping/moqups.png",
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
        "image": "img/prototyping/atomic.io.png",
        "platforms": {
            "web": true,
        },
        "import": {
            "sketch": true
        },
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
        "image": "img/prototyping/canvasflip.png",
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
        "image": "img/prototyping/irise.png",
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
        "image": "img/prototyping/konceptapp.png",
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
        "image": "img/prototyping/fuse.png",
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
        "image": "img/prototyping/hotgloo.png",
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
        "image": "img/prototyping/webflow.png",
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
        "image": "img/prototyping/demonstrate.png",
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
        "image": "img/prototyping/prott.png",
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
        "image": "img/prototyping/justinmind.png",
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
        "image": "img/prototyping/notable.png",
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
            "title": "Tasks",
            "show": false,
            "canChange": true,
            "tipText": ""
        }, {
            "title": "Analytics",
            "show": false,
            "canChange": true,
            "tipText": "App can track events"
        }, {
            "title": "Heatmap",
            "show": false,
            "canChange": true,
            "tipText": "App generates heatmaps<br>from user testing"
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

angular.module('uxTools.collaboration', [])

.controller('collaborationCtrl', function($scope, $state, collaborationFactory) {

  $scope.prototypingTools = collaborationFactory.tools();
  $scope.filters = collaborationFactory.filters();
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
    collaborationFactory.setFilters($scope.tempFilters);
    $state.reload();
    $scope.showFiltersModal = false;
  };

})

.factory('collaborationFactory', function() {

    var tools = [{
        "name": "Zeplin",
        "url": "https://zeplin.io/",
        "image": "img/collaboration/zeplin.png",
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
        "image": "img/collaboration/avocode.png",
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
        "image": "img/collaboration/marketch.png",
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
        "image": "img/collaboration/sketchmeasure.png",
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
        "image": "img/collaboration/sympli.png",
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
    }, {
        "name": "Markly",
        "url": "http://marklyapp.com/",
        "image": "img/collaboration/markly.png",
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
        "image": "img/collaboration/redpen.png",
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
        "image": "img/collaboration/specctr.png",
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
        "image": "img/monitoring/inspectlet.png",
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
        "image": "img/monitoring/luckyorange.png",
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
        "image": "img/monitoring/fullstory.png",
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
        "image": "img/monitoring/hotjar.png",
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
        "image": "img/monitoring/mousestats.png",
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
        "image": "img/monitoring/usertrack.png",
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
        "image": "img/monitoring/zeerat.png",
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
        "image": "img/monitoring/jaco.png",
        "platforms": {
            "web": true
        },
        "playback": true,
        "tags": false,
        "location": false,
        "console": false,
        "skipInactivity": true,
        "playbackSpeed": true,
        "taylorChoice": true,
        "pricing": {
            "free": true,
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

  $scope.prototypingTools = designFactory.tools();
  $scope.filters = designFactory.filters();
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
    designFactory.setFilters($scope.tempFilters);
    $state.reload();
    $scope.showFiltersModal = false;
  };

})

.factory('designFactory', function() {

    var tools = [{
        "name": "Sketch",
        "url": "https://www.sketchapp.com/",
        "image": "img/design/sketch.png",
        "platforms": {
            "mac": true
        },
        "import": {
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
            "free": true,
            "purchase": "$99"
        }
    }, {
        "name": "Figma",
        "url": "https://www.figma.com",
        "image": "img/design/figma.png",
        "platforms": {
            "web": true
        },
        "export": {
            "png": true,
            "jpg": true,
            "svg": true,
            "tiff": true
        },
        "offline": false,
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
        "image": "img/design/illustrator.png",
        "platforms": {
            "mac": true,
            "windows": true
        },
        "import": {
            "svg": true,
            "eps": true,
            "pdf": true,
            "psd": true,
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
        "offline": false,
        "penTool": true,
        "collaboration": false,
        "handoff": false,
        "artboards": true,
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
        "image": "img/design/photoshop.png",
        "platforms": {
            "mac": true,
            "windows": true
        },
        "import": {
            "pdf": true,
            "psd": true,
            "ai": true,
            "tiff": true
        },
        "export": {
            "png": true,
            "jpg": true,
            "tiff": true
        },
        "offline": false,
        "penTool": true,
        "collaboration": false,
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
        "image": "img/design/affinitydesigner.png",
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
            "tiff": true
        },
        "offline": false,
        "penTool": true,
        "collaboration": false,
        "handoff": false,
        "artboards": true,
        "symbols": false, // in beta, coming soon
        "responsive": false, // in beta, coming soon
        "vector": true,
        "pricing": {
            "free": false,
            "purchase": "$50"
        }
    }, {
        "name": "Adobe XD",
        "url": "http://www.adobe.com/products/experience-design.html",
        "image": "img/design/adobexd.png",
        "platforms": {
            "mac": true,
            "windows": true
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
            "tiff": true
        },
        "offline": false,
        "penTool": true,
        "collaboration": false,
        "handoff": false,
        "artboards": true,
        "symbols": false,
        "responsive": false,
        "prototyping": true,
        "vector": true,
        "pricing": {
            "free": false,
            "subscription": "$--"
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

// @codekit-prepend "jquery.fixedTblHdrLftCol-min.js"
// @codekit-prepend "angular-tooltips.js"
// @codekit-prepend "prototyping.js"
// @codekit-prepend "collaboration.js"
// @codekit-prepend "monitoring.js"
// @codekit-prepend "design.js"


angular.module('uxTools', ['ui.router', 'ngAnimate', 'uxTools.prototyping', 'uxTools.collaboration', 'uxTools.monitoring', 'uxTools.design', '720kb.tooltips'])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('prototyping', {
      url: '/',
      templateUrl : '../templates/prototyping.html',
      controller: 'prototypingCtrl'
    })
    .state('hand-off', {
      url: '/hand-off',
      templateUrl : '../templates/hand-off.html',
      controller: 'collaborationCtrl'
    })
    .state('collaboration', {
      url: '/collaboration',
      templateUrl : '../templates/collaboration.html',
      controller: 'collaborationCtrl'
    })
    .state('monitoring', {
      url: '/monitoring',
      templateUrl : '../templates/monitoring.html',
      controller: 'monitoringCtrl'
    })
    .state('usability-testing', {
      url: '/usability-testing',
      templateUrl : '../templates/usability-testing.html',
      controller: 'prototypingCtrl'
    });
})

.directive('fixedHeaderTable', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            $timeout(function() {
              $(element).fixedTblHdrLftCol({
                scroll: {
                  height: '100%',
                  width: '100%'
                }
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

