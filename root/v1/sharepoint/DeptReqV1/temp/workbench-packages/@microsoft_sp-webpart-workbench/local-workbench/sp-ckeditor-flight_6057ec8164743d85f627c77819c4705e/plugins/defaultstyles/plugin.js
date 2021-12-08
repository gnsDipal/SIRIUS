/**
 * @copyright Microsoft Corporation. All rights reserved.
 */
(function () {
    CKEDITOR.plugins.add('defaultstyles', {
        init: function (editor) {
            editor.addContentsCss(this.path + 'styles/defaultstyles.css');
        }
    });
})();
//# sourceMappingURL=plugin.js.map