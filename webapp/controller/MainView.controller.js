sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("invoices.controller.MainView", {
            onInit: function () {
                const oJSONmodel = new JSONModel();
                const oView = this.getView();
                oJSONmodel.loadData("../model/SelectionScreenMenu.json");
                oView.setModel(oJSONmodel, "SelectionScreenMenu");
            }
        });
    });
