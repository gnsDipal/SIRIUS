(window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] = window["webpackJsonp_1e2cdec9_1360_4295_b73c_98d6f51866d5_0_1_0"] || []).push([["vendors~shared-react-shyconductor"],{

/***/ "zoKb":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /agent/_work/1/s/common/temp/node_modules/.pnpm/@ms/odsp-shared-react@47.12.13_d89e40c38ccaa8bd6af6488f37cb196d/node_modules/@ms/odsp-shared-react/lib/utilities/shyConductor/ShyConductor.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/odsp-utilities/lib/logging/events/Engagement.event */ "cDPE");
/* harmony import */ var _ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/odsp-utilities/lib/killswitch/Killswitch */ "QUgr");
/* harmony import */ var _ShyConductorLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShyConductorLoader */ "EXnH");



/**
 * The ShyConductor orchestrates "shy" behavior of multiple components on the page. That is, it lets components
 * know when to minimize/hide themselves based on how much the user has scrolled.
 * The app needs to provide a content element on which the ShyConductor will for scroll events from. Then,
 * the ShyConductor will call registered callbacks to let the app know when to make components shy or unshy.
 *
 * This supports shy behavior for elements anywhere on the page. If there are elements above the content element,
 * the ShyConductor also manages the scrollTop of the content element so that its contents do not visibly move
 * (because the scrollTop of the content element is maintained at the top of the content element, so moving the
 * top causes the content to shift).
 *
 * For example, on a document library, the scrolling content element would be the list itself. When the user
 * scrolls down a certain number of pixels, the header will minimize into a smaller version. When the user
 * scrolls up a certain number of pixels, the header render as normal again.
 *
 * Assumption: the content element's top will automatically shift up as components above it go shy. "Automatic"
 * because the layout should be controlled by flexbox, and the content element should expand upwards to fill newly
 * available space.
 *
 * Please note: this module is only necessary for complex page layouts. Typical shy header layouts have the content area
 * extend the entire height of the page, most importantly INCLUDING where the heading is, allowing the heading
 * to smoothly scroll away. This module is for scenarios when that is not possible, such as if there's a left or
 * right column adjacent to the content area, such that the content area cannot extend to include/be underneath
 * the heading.
 */
var ShyConductor = /** @class */ (function () {
    function ShyConductor() {
    }
    /**
     * Register the element that will be scrolling.
     * To unregister and disable shy behavior, just pass in null.
     */
    ShyConductor.registerContentElement = function (contentElement) {
        if (ShyConductor !== Object(_ShyConductorLoader__WEBPACK_IMPORTED_MODULE_2__["tryGetGlobalShyConductor"])()) {
            Object(_ShyConductorLoader__WEBPACK_IMPORTED_MODULE_2__["tryGetGlobalShyConductor"])().registerContentElement(contentElement);
            return;
        }
        if (contentElement === ShyConductor._contentElement) {
            return;
        }
        if (ShyConductor._contentElement) {
            ShyConductor._contentElement.removeEventListener('scroll', ShyConductor._onScroll);
        }
        ShyConductor._contentElement = contentElement;
        if (!contentElement) {
            ShyConductor._isShyMode = false;
            ShyConductor._callbacks.forEach(function (reg) {
                try {
                    reg.onUnshy();
                }
                catch (_a) { }
            });
        }
        else {
            ShyConductor._manageEventAttachment();
        }
    };
    /**
     * Register to be notified when to trigger shy/unshy behavior. Duplicate registrations will fail.
     * If shy mode is currently active, registration.onShy() will immediately be called.
     * @returns whether the registration was successful (duplicate registrations will fail)
     */
    ShyConductor.registerCallbacks = function (registration) {
        if (ShyConductor !== Object(_ShyConductorLoader__WEBPACK_IMPORTED_MODULE_2__["tryGetGlobalShyConductor"])()) {
            Object(_ShyConductorLoader__WEBPACK_IMPORTED_MODULE_2__["tryGetGlobalShyConductor"])().registerCallbacks(registration);
            return;
        }
        var index = ShyConductor._callbacks.indexOf(registration);
        if (index < 0) {
            ShyConductor._callbacks.push(registration);
            ShyConductor._totalHeightDifference += registration.heightDifference;
            try {
                if (ShyConductor._contentElement) {
                    ShyConductor._contentElement.scrollTop -= registration.heightDifference;
                }
                this._isShyMode && registration.onShy();
            }
            catch (_a) { }
            ShyConductor._manageEventAttachment();
            return true;
        }
        return false;
    };
    /**
     * Unregister the callback for a component that no longer wants to go shy, or if it is being unmounted.
     * If found, it will call registration.onUnshy() if shy mode is currently activated.
     * @returns whether the registration existed
     */
    ShyConductor.unregisterCallback = function (registration) {
        if (ShyConductor !== Object(_ShyConductorLoader__WEBPACK_IMPORTED_MODULE_2__["tryGetGlobalShyConductor"])()) {
            Object(_ShyConductorLoader__WEBPACK_IMPORTED_MODULE_2__["tryGetGlobalShyConductor"])().unregisterCallback(registration);
            return;
        }
        var index = ShyConductor._callbacks.indexOf(registration);
        if (index >= 0) {
            var reg = ShyConductor._callbacks[index];
            try {
                if (ShyConductor._isShyMode) {
                    if (ShyConductor._contentElement) {
                        ShyConductor._contentElement.scrollTop += reg.heightDifference;
                    }
                    reg.onUnshy();
                }
            }
            catch (_a) { }
            ShyConductor._totalHeightDifference -= reg.heightDifference;
            ShyConductor._callbacks.splice(index, 1);
            ShyConductor._manageEventAttachment();
            return true;
        }
        return false;
    };
    /** Used to unshy all registered components, used as a "soft" reset, such as for inplace navigation. */
    ShyConductor.unshy = function () {
        if (ShyConductor !== Object(_ShyConductorLoader__WEBPACK_IMPORTED_MODULE_2__["tryGetGlobalShyConductor"])()) {
            Object(_ShyConductorLoader__WEBPACK_IMPORTED_MODULE_2__["tryGetGlobalShyConductor"])().unshy();
            return;
        }
        // reset engagement events
        ShyConductor._onShyEventSent = false;
        ShyConductor._isShyMode = false;
        ShyConductor._callbacks.forEach(function (reg) {
            try {
                reg.onUnshy();
            }
            catch (_a) { }
        });
    };
    /** This will attach or unattach the scroll listener as necessary.
     * This exists so that we can aggressively NOT listen to scroll events whenever possible, because it is
     * presumably expensive.
     * This is resilient and will always end up in the intended state regardless of how many times or when
     * it is called.
     */
    ShyConductor._manageEventAttachment = function () {
        if (ShyConductor.enabled) {
            if (ShyConductor._contentElement) {
                var registerForHashChange = !_ms_odsp_utilities_lib_killswitch_Killswitch__WEBPACK_IMPORTED_MODULE_1__["Killswitch"].isActivated('A2EE05E1-7A4E-4A5B-97D2-8BF10F0BC846', '9/02/20', 'no scrollTop adjustment for anchor navigation');
                // unattach first to prevent duplicate registrations
                ShyConductor._contentElement.removeEventListener('scroll', ShyConductor._onScroll);
                ShyConductor._contentElement.removeEventListener('mousedown', ShyConductor._onMouseDown);
                ShyConductor._contentElement.removeEventListener('mouseup', ShyConductor._onMouseUp);
                if (registerForHashChange) {
                    window.removeEventListener('hashchange', ShyConductor._onHashChange);
                }
                if (ShyConductor._callbacks.length) {
                    ShyConductor._contentElement.addEventListener('scroll', ShyConductor._onScroll);
                    ShyConductor._contentElement.addEventListener('mousedown', ShyConductor._onMouseDown);
                    ShyConductor._contentElement.addEventListener('mouseup', ShyConductor._onMouseUp);
                    if (registerForHashChange) {
                        window.addEventListener('hashchange', ShyConductor._onHashChange);
                    }
                }
            }
        }
    };
    /** This just does the throttling logic, and calls the real logic async, so we don't block the UI thread. */
    ShyConductor._onScroll = function (e) {
        ShyConductor._queueScrollEvent = true;
        if (!ShyConductor._isMouseDown) {
            // debouncing/throttling logic
            window.clearTimeout(ShyConductor._handleScrollTimeoutId);
            ShyConductor._handleScrollTimeoutId = window.setTimeout(ShyConductor._handleScroll, 25);
        }
    };
    /** We capture all mouse down events and assume they are on the bar in the scroll bar.
     * If it's not, it doesn't matter, since we won't be scrolling and thus won't be triggering any other logic.
     */
    ShyConductor._onMouseDown = function (e) {
        ShyConductor._isMouseDown = true;
    };
    ShyConductor._onMouseUp = function (e) {
        ShyConductor._isMouseDown = false;
        if (ShyConductor._queueScrollEvent) {
            ShyConductor._handleScroll();
        }
    };
    /** Sets state so that we don't shy or unshy in response to navigation to an anchor point. */
    ShyConductor._onHashChange = function (e) {
        ShyConductor._hashChangedRecently = true;
        // debouncing/throttling logic
        window.clearTimeout(ShyConductor._handleHashChangeTimeoutId);
        ShyConductor._handleHashChangeTimeoutId = window.setTimeout(function () {
            ShyConductor._hashChangedRecently = false;
        }, 500);
    };
    /** This does the actual magic.
     * When not shy, it only measures scrolls downward.
     * When shy, it only measures scrolls upward.
     * When the total scroll distance in that direction exceed the threshold, flip the shy state.
     * A restriction imposed here is that if you are within threshold pixels of the top, always be unshy.
     */
    ShyConductor._handleScroll = function () {
        if (!ShyConductor._queueScrollEvent) {
            // debounce
            return;
        }
        ShyConductor._queueScrollEvent = false;
        var scrollDiff = ShyConductor._contentElement.scrollTop - ShyConductor._lastScrollPosition;
        if (scrollDiff >= 0 && !ShyConductor._isShyMode) {
            // scrolled down
            if (ShyConductor._scrolledAmountConsecutively >= 0) {
                // was already scrolling down before
                ShyConductor._scrolledAmountConsecutively += scrollDiff;
            }
            else {
                // was scrolling up before
                ShyConductor._scrolledAmountConsecutively = scrollDiff;
            }
            if (ShyConductor._scrolledAmountConsecutively > ShyConductor.scrollThresholdDown &&
                ShyConductor._contentElement.scrollTop - ShyConductor._totalHeightDifference >
                    ShyConductor.scrollThresholdDown) {
                // We want to make sure here that we are never in shy mode within SCROLL_THRESHOLD of the top.
                // 1. if user has scrolled down consecutively more than the threshold
                // 2. also, new scrollTop (after height adjustment) must not be within SCROLL_THRESHOLD of the top
                // 3. also if not within SCROLL_THRESHOLD of the top, but #2 will implicitly check this
                // so shy-ify
                if (!ShyConductor._onShyEventSent) {
                    // Reduce high-volume logging by only sending this event on a small percentage of pages.
                    // Either way, mark it as sent so we only try once per page.
                    ShyConductor._onShyEventSent = true;
                    if (Math.random() < 0.01) {
                        _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_0__["Engagement"].logData({ name: 'ShyConductor.OnShy' });
                    }
                }
                ShyConductor._isShyMode = true;
                ShyConductor._callbacks.forEach(function (reg) {
                    try {
                        reg.onShy();
                    }
                    catch (_a) { }
                });
                if (!ShyConductor._hashChangedRecently) {
                    // scroll was not in response to a hash change (anchor point navigation)
                    ShyConductor._contentElement.scrollTop -= ShyConductor._totalHeightDifference; // todo: do this in the try second line
                }
                else {
                    // Don't adjust the scroll position for a hash change
                    _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_0__["Engagement"].logData({ name: 'ShyConductor.HashNavNoAutoscrollShy' });
                }
            }
        }
        else if (scrollDiff < 0 && ShyConductor._isShyMode) {
            // scrolled up
            if (ShyConductor._scrolledAmountConsecutively <= 0) {
                // was already scrolling up before
                ShyConductor._scrolledAmountConsecutively += scrollDiff;
            }
            else {
                // was scrolling down before
                ShyConductor._scrolledAmountConsecutively = scrollDiff;
            }
            if (-ShyConductor._scrolledAmountConsecutively > ShyConductor.scrollThresholdUp ||
                ShyConductor._contentElement.scrollTop < ShyConductor.scrollThresholdDown) {
                // 1. user scrolled up consecutively more than the threshold
                // 2. or within SCROLL_THRESHOLD of the top
                // so unshy-ify
                ShyConductor._isShyMode = false;
                ShyConductor._callbacks.forEach(function (reg) {
                    try {
                        reg.onUnshy();
                    }
                    catch (_a) { }
                });
                // adjust the scrolled amount so the content doesn't appear to move
                if (!ShyConductor._hashChangedRecently) {
                    // scroll was not in response to a hash change (anchor point navigation)
                    ShyConductor._contentElement.scrollTop += ShyConductor._totalHeightDifference; // todo: do this in the try second line
                }
                else {
                    // Don't adjust the scroll position for a hash change
                    _ms_odsp_utilities_lib_logging_events_Engagement_event__WEBPACK_IMPORTED_MODULE_0__["Engagement"].logData({ name: 'ShyConductor.HashNavNoAutoscrollUnshy' });
                }
            }
        }
        ShyConductor._lastScrollPosition = ShyConductor._contentElement.scrollTop;
    };
    /** How far the user must scroll to trigger shy behavior */
    ShyConductor.scrollThresholdDown = 300;
    /** How far the user must scroll to trigger unshy behavior */
    ShyConductor.scrollThresholdUp = 500;
    ShyConductor.enabled = true;
    ShyConductor._callbacks = [];
    ShyConductor._totalHeightDifference = 0;
    ShyConductor._isShyMode = false;
    ShyConductor._lastScrollPosition = 0;
    ShyConductor._scrolledAmountConsecutively = 0;
    /** if the mouse is currently held down
     * if so defer shying/unshying until mouseup, because while the user holds down the bar in the scrollbar,
     * the scrollTop of the content cannot be adjusted */
    ShyConductor._isMouseDown = false;
    /** used to debounce the scroll event, such as to queue it up when the mouse is down */
    ShyConductor._queueScrollEvent = false;
    /** if the page was scrolled by navigation to an anchor point, don't shy or unshy */
    ShyConductor._hashChangedRecently = false;
    // logging events, fires once per page
    ShyConductor._onShyEventSent = false;
    return ShyConductor;
}());
/* harmony default export */ __webpack_exports__["default"] = (ShyConductor);
// a hack to workaround webpack limitations: register a global singleton of this, and always use that one
if (!Object(_ShyConductorLoader__WEBPACK_IMPORTED_MODULE_2__["tryGetGlobalShyConductor"])()) {
    window[_ShyConductorLoader__WEBPACK_IMPORTED_MODULE_2__["ShyConductorGlobalName"]] = ShyConductor;
}
//# sourceMappingURL=ShyConductor.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~shared-react-shyconductor_[locale].js.map