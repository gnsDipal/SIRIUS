var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'ObjectiveAndGoalWebPartStrings';
import ObjectiveAndGoal from './components/ObjectiveAndGoal';
var ObjectiveAndGoalWebPart = /** @class */ (function (_super) {
    __extends(ObjectiveAndGoalWebPart, _super);
    function ObjectiveAndGoalWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObjectiveAndGoalWebPart.prototype.render = function () {
        var element = React.createElement(ObjectiveAndGoal, {
            description: this.properties.description
        });
        ReactDom.render(element, this.domElement);
    };
    ObjectiveAndGoalWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(ObjectiveAndGoalWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    ObjectiveAndGoalWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return ObjectiveAndGoalWebPart;
}(BaseClientSideWebPart));
export default ObjectiveAndGoalWebPart;
//# sourceMappingURL=ObjectiveAndGoalWebPart.js.map