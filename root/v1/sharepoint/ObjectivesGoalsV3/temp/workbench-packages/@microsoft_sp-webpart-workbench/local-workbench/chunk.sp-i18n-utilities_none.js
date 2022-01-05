(window["webpackJsonp_8494e7d7_6b99_47b2_a741_59873e42f16f_11_10_1"] = window["webpackJsonp_8494e7d7_6b99_47b2_a741_59873e42f16f_11_10_1"] || []).push([["sp-i18n-utilities"],{

/***/ "8iHq":
/*!***********************************************!*\
  !*** ./lib/icsHelper/GenerateIcsFileAsync.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GenerateIcsFileAsync; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "17wl");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/i18n-utilities */ "Ycni");
/* harmony import */ var _ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/odsp-utilities-bundle */ "y88i");
/* harmony import */ var _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_2__);



function GenerateIcsFileAsync(event) {
    var file = getICSFile(event);
    var link = document.createElement('a');
    // This is for IE to download ics file as it doesn't support download attribute in tag a.
    if (window.navigator.msSaveOrOpenBlob) {
        var blob = new Blob([file], { type: 'data:text/calendar;charset=utf8' });
        window.navigator.msSaveBlob(blob, event.name + ".ics");
    }
    else if ('download' in link) {
        // This is for other browsers which support the download attribute.
        link.download = event.name + ".ics";
        link.href = 'data:text/calendar;charset=utf8,' + encodeURIComponent(file);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    else {
        location.href = 'data:text/calendar;charset=utf8,' + encodeURIComponent(file);
    }
}
function getICSFile(event) {
    var lines = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Microsoft Corporation//Outlook 16.0 MIMEDIR//EN',
        formatProperty('METHOD', event.method),
        'BEGIN:VEVENT',
        'DTSTAMP:' + generateDateTimeStamp(),
        formatProperty('UID', event.id),
        formatDate(event.allDayInfo, event.startDate, event.endDate),
        formatProperty('SUMMARY', event.name),
        formatDescription(event.plainText),
        formatHTMLContent(event.bodyContent),
        formatProperty('LOCATION', event.location),
        formatProperty('CREATED', getIOSString(event.createdtime)),
        formatProperty('LAST-MODIFIED', getIOSString(event.lastModified)),
        formatStatus(event.status),
        formatRecurrence(event.recurrence),
        formatOrganizer(event.organizer),
        formatCategories(event.categories)
    ], formatAttendees(event.attendees), formatAttachments(event.attachments), [
        'END:VEVENT',
        'END:VCALENDAR'
    ]);
    return lines.join('\r\n');
}
function formatProperty(key, value) {
    if (value) {
        return key + ':' + value;
    }
    return undefined;
}
/**
 * Convert javascript date format to YYYYMMDDTHHMMSSZ.
 */
function generateDateTimeStamp() {
    var date = new Date();
    return getDateString(date) + "T" + getTimeString(date) + "Z";
}
function formatDate(allDayInfo, startDate, endDate) {
    if (allDayInfo) {
        // For all day event Outlook or apple calendar add one more day to end date, for example:
        // In ICS file startdate = 2017/1/1, enddate = 2017/1/3, it displays 2017/1/1-2017/1/2 from Outlook
        // or other calendar apps.
        var normalizedEndDate = allDayInfo.allDayFormat === 'Inclusive' ? addOneDay(endDate) : endDate;
        var startDateString = getLocalDateString(startDate, allDayInfo.timezone);
        var endDateString = getLocalDateString(normalizedEndDate, allDayInfo.timezone);
        return "DTSTART;VALUE=DATE:" + startDateString + "\r\nDTEND;VALUE=DATE:" + endDateString;
    }
    else {
        return 'DTSTART:' + getIOSString(startDate) + '\r\nDTEND:' + getIOSString(endDate);
    }
}
function addOneDay(date) {
    var newDate = new Date(date.getTime());
    newDate.setDate(date.getDate() + 1);
    return newDate;
}
/**
 * Convert javascript date format to YYYYMM.
 * @param date: A date need to be converted to string.
 */
function getDateString(date) {
    if (date) {
        return formatDateString(date.getFullYear(), date.getMonth(), date.getDate());
    }
    return undefined;
}
function getLocalDateString(date, timeZone) {
    if (!Boolean(date)) {
        return undefined;
    }
    if (timeZone === 'UTC') {
        return formatDateString(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
    }
    var spDate = new _ms_i18n_utilities__WEBPACK_IMPORTED_MODULE_1__["SPDate"]({
        fullYear: date.getUTCFullYear(),
        month: date.getUTCMonth(),
        date: date.getUTCDate(),
        hours: date.getUTCHours(),
        minutes: date.getUTCMinutes(),
        seconds: date.getUTCSeconds(),
        milliseconds: date.getUTCMilliseconds()
    });
    var localSpDate = spDate.convertFromUTC(timeZone);
    return formatDateString(localSpDate.fullYear, localSpDate.month, localSpDate.date);
}
function formatDateString(year, month, date) {
    var monthString = ("0" + (month + 1)).substr(-2);
    var dateString = ("0" + date).substr(-2);
    return "" + year + monthString + dateString;
}
/**
 * Convert javascript date format to HHMMSS.
 * @param date: A date need to be converted to string.
 */
function getTimeString(date) {
    if (date) {
        return "" + date.getHours() + date.getMinutes() + date.getSeconds();
    }
    return undefined;
}
/**
 * Return the ISO date format, but has dashes and semi-colons removed. e.g.20120925T072912Z
 * @param date: A date need to be converted to string;
 */
function getIOSString(date) {
    if (date) {
        var result = date.toISOString().replace(/-|:|\./g, '');
        return result.substring(0, 15) + 'Z';
    }
    return undefined;
}
function formatStatus(status) {
    if (status && ['TENTATIVE', 'CONFIRMED', 'CANCELLED'].indexOf(status.toUpperCase()) !== -1) {
        return 'STATUS:' + status;
    }
    return undefined;
}
function formatAttendees(attendees) {
    if (attendees) {
        return attendees.map(function (attendee) {
            if (attendee.name && attendee.mailAddress) {
                return 'ATTENDEE;CN=' + attendee.name + ':mailto:' + attendee.mailAddress;
            }
            else {
                return undefined;
            }
        });
    }
    return [];
}
function formatOrganizer(organizer) {
    if (organizer) {
        return 'ORGANIZER;CN=' + organizer.name + ':mailto:' + organizer.mailAddress;
    }
    return undefined;
}
function formatCategories(categories) {
    if (categories) {
        return 'CATEGORIES:' + categories.join(',');
    }
    return undefined;
}
function formatAttachments(attachments) {
    if (attachments) {
        return attachments.map(function (attachment) {
            return ('ATTACH;ENCODING=BASE64;VALUE=BINARY;X-FILENAME=' +
                attachment.name +
                ';FMTTYPE=' +
                attachment.contentType +
                ':' +
                attachment.contentBytes);
        });
    }
    return [];
}
function formatHTMLContent(content) {
    if (content) {
        var htmlString = removeSpace(content);
        htmlString = setBaseUrl(htmlString);
        return 'X-ALT-DESC;FMTTYPE=text/html:' + htmlString;
    }
    return undefined;
}
function formatDescription(content) {
    if (content) {
        return 'DESCRIPTION:' + content;
    }
    return undefined;
}
function formatRecurrence(recurrence) {
    if (recurrence) {
        var properties = [];
        for (var key in recurrence) {
            if (recurrence.hasOwnProperty(key)) {
                properties.push(key + "=" + recurrence[key]);
            }
        }
        return "RRULE:" + properties.join(';');
    }
}
/**
 * Remove whitespace from both sides of a line and empty block from html content.
 *
 * @example
 *
 * ```
 * <div> hello <div>
 *
 * <div> world </div>
 * ```
 *
 * will be
 *
 * ```
 * <div> hello </div>\n<div> world </div>
 * ```
 *
 * after process.
 */
function removeSpace(content) {
    var lines = content.replace(/\r\n/g, '\n').split('\n');
    var newContent = lines.map(function (line) { return line && line.trim(); });
    // Output `\n` string into the file. Outlook will parse it as line feed.
    return newContent.join('\\n');
}
/**
 * The href authority of <a> tags in html returned from sharepoint rich text field will removed.
 * Adding a <base> tag to recover the authority context to let the relative href work in ics file and calendar apps.
 */
function setBaseUrl(html) {
    var currentPageUri = new _ms_odsp_utilities_bundle__WEBPACK_IMPORTED_MODULE_2__["Uri"](window.location.href);
    var baseElement = document.createElement('base');
    baseElement.setAttribute('href', currentPageUri.getLeftPart(1 /* scheme + authority */));
    var doc = new DOMParser().parseFromString(html, 'text/html');
    doc.querySelectorAll('head')[0].appendChild(baseElement);
    return new XMLSerializer().serializeToString(doc);
}


/***/ })

}]);
//# sourceMappingURL=chunk.sp-i18n-utilities_none.js.map