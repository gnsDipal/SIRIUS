/**
 * @copyright Microsoft Corporation. All rights reserved.
 */
(function () {
    // This regex extracts images from a given string
    var _IMAGE_REGEX_WITH_SRC = new RegExp('<img[^>]* src="(.*?)"', 'gi');
    // This regex extracts source from the image.
    var _IMAGE_REGEX_SRC = new RegExp('<img[^>]* src="(.*?)"', 'i');
    var _DATA_INSTANCE_ID = new RegExp('<div[^>]* data-instance-id="(.*?)"', 'i');
    function handleBase64Image(src) {
        var contentType = base64MimeType(src);
        var b64Data = src.split(',').pop();
        return b64Data !== undefined ? base64toBlob(b64Data, contentType) : undefined;
    }
    /**
     * Gets the mime type from the string.
     * CKeditor is not allowing to import methods from other files so needed to copy these from ImageUtilities
     */
    function base64MimeType(encoded) {
        var result = undefined;
        var mime = encoded.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);
        if (mime && mime.length) {
            result = mime[1];
        }
        return result;
    }
    /**
     * Converts base 64 image to blob.
     * CKeditor is not allowing to import methods from other files so needed to copy these from ImageUtilities
     */
    function base64toBlob(b64Data, contentType) {
        if (contentType === void 0) { contentType = ''; }
        var sliceSize = 512;
        var byteCharacters = atob(b64Data);
        var byteArrays = [];
        var length = byteCharacters.length;
        var byteNumbers;
        for (var offset = 0; offset < length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            byteNumbers = [];
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
            byteNumbers.length = 0;
        }
        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }
    /**
     * This method makes sure the filter is applied to pasted HTML
     * @param editor
     * @param pastedData
     */
    function filterPastedHTML(editor, pastedData) {
        var filter = new CKEDITOR.filter(editor), 
        // Parse HTML string to pseudo DOM structure.
        fragment = CKEDITOR.htmlParser.fragment.fromHtml(pastedData), writer = new CKEDITOR.htmlParser.basicWriter();
        filter.applyTo(fragment);
        fragment.writeHtml(writer);
        return writer.getHtml(false);
    }
    function createImageDiv(editor) {
        var imageDiv = new CKEDITOR.dom.element('div');
        imageDiv.setAttribute('contenteditable', 'false');
        imageDiv.setAttribute('data-webpart-id', "image");
        imageDiv.addClass('webPartInRte');
        // establishes an offset to enable display of image toolbar if needed
        imageDiv.addClass('webPartInRteInlineImage');
        // currently hard-coded alignment
        imageDiv.addClass('webPartInRteAlignCenter');
        // currently hard coded size
        imageDiv.addClass('webPartInRteSizeThird');
        editor.widgets.initOn(imageDiv, 'webPartInRte');
        return imageDiv;
    }
    function handlePaste(ev) {
        var _a;
        var pastedData = ev.data.dataValue;
        var editor = ev.editor;
        if (pastedData) {
            // This happens when image is dragged within RTE. We need to load the image again.
            if (pastedData.indexOf('data-cke-widget-wrapper') !== -1) {
                var matchedDataInstanceId = pastedData.match(_DATA_INSTANCE_ID);
                var instanceId = matchedDataInstanceId && matchedDataInstanceId[1] ? matchedDataInstanceId[1] : undefined;
                ev.editor.execCommand('imageMove', { instanceId: instanceId });
                return;
            }
            var imagesWithSrc = pastedData.match(_IMAGE_REGEX_WITH_SRC);
            if (imagesWithSrc && imagesWithSrc.length > 0) {
                ev.cancel();
                ev.stop();
                var placeHolderDiv = editor.document.createElement('div');
                placeHolderDiv.setHtml(filterPastedHTML(editor, pastedData));
                editor.insertElement(placeHolderDiv);
                var imagesInWrapper = placeHolderDiv.getElementsByTag('img');
                for (var _i = 0, imagesWithSrc_1 = imagesWithSrc; _i < imagesWithSrc_1.length; _i++) {
                    var img = imagesWithSrc_1[_i];
                    var imageSrc = void 0;
                    var matchedSources = img.match(_IMAGE_REGEX_SRC);
                    var src = matchedSources && matchedSources[1] ? matchedSources[1] : undefined;
                    if (Boolean(((_a = src) === null || _a === void 0 ? void 0 : _a.indexOf('https://')) !== -1) && ev.data.dataTransfer.getFilesCount() === 1) {
                        imageSrc = ev.data.dataTransfer.getFile(0);
                    }
                    else if (src) {
                        imageSrc = handleBase64Image(src);
                    }
                    var imageDiv = createImageDiv(editor);
                    imagesInWrapper.getItem(0).$.parentNode.replaceChild(imageDiv.$, imagesInWrapper.getItem(0).$);
                    editor.execCommand('imagePasteInline', { imageSrc: imageSrc, imageDiv: imageDiv.$ });
                }
            }
        }
        else if (ev.data.dataTransfer &&
            // if drag & drop kill switch is not activated and method is drop
            // then we don't want to enter this loop because that will create 2 images
            ev.data.method !== 'drop') {
            // We don't want to support both files and pasted data because pasting tables from powerpoint and
            // excel In Edge pastes table as image file that in not desirable behavior
            for (var i = 0; i < ev.data.dataTransfer.getFilesCount(); i++) {
                var imageDiv = createImageDiv(editor);
                editor.insertElement(imageDiv);
                editor.execCommand('imagePasteInline', {
                    imageSrc: ev.data.dataTransfer.getFile(i),
                    imageDiv: imageDiv.$
                });
            }
        }
    }
    CKEDITOR.plugins.add('inlineimage', {
        requires: 'widget',
        init: function (editor) {
            editor.widgets.add('inlineimage', {
                requiredContent: 'div(webPartInRte)',
                allowedContent: 'div[data-instance-id,data-webpart-id,contenteditable]',
                upcast: function (element) {
                    return element.name === 'div' && element.hasClass('webPartInRte');
                }
            });
            editor.on('paste', handlePaste);
        }
    });
})();
//# sourceMappingURL=plugin.js.map