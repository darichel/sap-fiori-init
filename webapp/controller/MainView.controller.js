sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.model.Filter} Filter
     * @param {typeof sap.ui.model.FilterOperator} FilterOperator
     */
    function (Controller, JSONModel, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("invoices.controller.MainView", {
            onInit: function () {
                const oJSONmodel = new JSONModel();
                const oView = this.getView();
                oJSONmodel.loadData("../model/SelectionScreenMenu.json");
                oView.setModel(oJSONmodel, "SelectionScreen");
            },
            
            applyFilter: function (afilter) {
                const oList = this.getView().byId("_IDGenList1");
                oList.getBinding("items").filter(afilter);
            },           
            onFilter: function (oEvent) {
                const oData = this.getView().getModel("SelectionScreen").getData()
                let filters = [];

                if (oData.ShipName !== "") {
                    filters.push(new Filter("ShipName", FilterOperator.Contains, oData.ShipName));
                }
                if (oData.CountryKey!== "") {
                    filters.push(new Filter("Country", FilterOperator.EQ, oData.CountryKey));
                }

                this.applyFilter(filters);
            },
            onClearFilter: function (oEvent) {
                const oModelSelScreen = this.getView().getModel("SelectionScreen");
                oModelSelScreen.setProperty("/ShipName", "");
                oModelSelScreen.setProperty("/CountryKey", "");

                this.applyFilter([]);
            },
        });
    });
