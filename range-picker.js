!function(){"use strict";function e(e,t,a){return{restrict:"EA",replace:!0,scope:{value:"=",fname:"@",lable:"@",isRequired:"@",disable:"=",form:"=",format:"@",divider:"@"},template:' <md-input-container>    <label for="{{fname}}">{{lable}}</label>      <input name="{{fname}}" ng-model="value"              type="text" placeholde="{{lable}}"             aria-label="{{fname}}" ng-required="{{isRequired}}" class="gj-input-container"             ng-focus="show()">    <sm-range-picker class="gj-calender-pane" ng-model="value" format="{{format}}" ></sm-range-picker>  </md-input-container>',link:function(o,r,n){function s(e,t){var a=460,o=296,r=e.top;if(e.top+a>t.bottom)var r=e.top-(e.top+a-(t.bottom-20));var n=e.left;return e.left+o>t.right&&(n=e.left-(e.left+o-(t.right-10))),{top:r,left:n}}var l=r[0].querySelector(".gj-input-container"),c=r[0].querySelector(".gj-calender-pane"),i=angular.element(c);o.format=angular.isUndefined(o.format)?"MM-DD-YYYY":o.format,i.addClass("hide"),o.startDate=angular.isUndefined(o.value)?o.startDate:o.value,e.on("click",function(e){c===e.target||l===e.target||c.contains(e.target)||l.contains(e.target)||(i.removeClass("show").addClass("hide"),a.enableScrolling())}),angular.element(l).on("keydown",function(e){9===e.which&&(i.removeClass("show").addClass("hide"),angular.element(l).focus(),a.enableScrolling())}),o.show=function(){var e=l.getBoundingClientRect(),o=document.body.getBoundingClientRect();if(i.removeClass("hide"),t("sm")||t("xs"))c.style.left=(o.width-296)/2+"px",c.style.top=(o.height-450)/2+"px";else{var r=s(e,o);c.style.left=r.left+"px",c.style.top=r.top+"px"}document.body.appendChild(c),a.disableScrollAround(c),i.addClass("show")},o.$on("range-picker:close",function(){i.removeClass("show").addClass("hide"),i.removeClass("show").addClass("hide"),a.enableScrolling()}),o.$on("$destroy",function(){c.parentNode.removeChild(c)})}}}function t(e){return{restrict:"E",require:["ngModel","smRangePicker"],scope:{format:"@",divider:"@"},controller:["$scope",a],controllerAs:"vm",templateUrl:"picker/range-picker.html",link:function(e,t,a,o){var r=o[0],n=o[1];n.configureNgModel(r)}}}var a=function(e){var t=this;t.scope=e,t.clickedButton=0,t.divider=angular.isUndefined(t.scope.divider)?" To ":t.scope.divider,t.format="MM-DD-YYYY",t.showCustom=!1,t.startDate=moment().format(t.scope.format),t.endDate=moment().format(t.scope.format),t.selectedTabIndex=e.selectedTabIndex,t.scope.$on("calender:date-selected",function(){t.selectedTabIndex=1})};a.prototype.configureNgModel=function(e){this.ngModelCtrl=e;var t=this;e.$render=function(){t.ngModelCtrl.$viewValue=t.startDate+" "+t.divider+" "+t.endDate}},a.prototype.dateRangeSelected=function(){var e=this;e.selectedTabIndex=0,e.showCustom=!1,e.setNgModelValue(e.startDate,e.divider,e.endDate),e.showCustom=!1},a.prototype.preDefineDate=function(e){var t=this;t.clickedButton=e;var a=moment();switch(e){case 1:t.startDate=a.clone().startOf("day").format(t.scope.format),t.endDate=a.clone().endOf("day").format(t.scope.format);break;case 2:t.startDate=a.clone().subtract(7,"d").format(t.scope.format),t.endDate=a.clone().format(t.scope.format);break;case 3:t.startDate=a.clone().startOf("month").format(t.scope.format),t.endDate=a.endOf("month").format(t.scope.format);break;case 4:t.startDate=a.clone().subtract(1,"month").startOf("month").format(t.scope.format),t.endDate=a.clone().endOf("month").format(t.scope.format);break;case 5:t.startDate=a.clone().startOf("quarter").format(t.scope.format),t.endDate=a.clone().endOf("quarter").format(t.scope.format);break;case 6:t.startDate=a.clone().startOf("year").format(t.scope.format),t.endDate=a.clone().endOf("year").format(t.scope.format);break;case 7:t.showCustom=!0,t.selectedTabIndex=0;break;case 8:t.startDate=a.clone().startOf("year").format(t.scope.format),t.endDate=a.clone().format(t.scope.format)}7!=e&&(t.setNgModelValue(t.startDate,t.divider,t.endDate),t.scope.$emit("range-picker:close"))},a.prototype.setNgModelValue=function(e,t,a){var o=this;o.scope.$emit("range-picker:close"),o.ngModelCtrl.$setViewValue(e+" "+t+" "+a),o.ngModelCtrl.$render()},a.prototype.cancel=function(){var e=this;e.scope.$emit("range-picker:close")};var o=angular.module("dateTimePicker");o.directive("smRangePicker",["picker",t]),o.directive("smRangePickerInput",["$document","$mdMedia","$mdUtil",e])}();