sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Sorter",
    "sap/ui/core/format/DateFormat",
	"sap/m/ToolbarSpacer",
	"sap/ui/table/library",
	"sap/ui/thirdparty/jquery"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel,Sorter,DateFormat,ToolbarSpacer,library,jquery) {
        "use strict";
        var SortOrder = library.SortOrder;

        return Controller.extend("bp.bussinesspartner.controller.View1", {
            onInit: function () {
                
            }
            
        });
    });
