sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageToast"
], (Controller, Filter, FilterOperator, MessageToast) => {
    "use strict";

    return Controller.extend("nwproductdata02.controller.View1", {
        onInit() {
            // UI5 will automatically trigger the GET /Products call
            // via the ODataModel configured as default in manifest.json
        },

        /**
         * Filter products by ProductName based on user search input
         * @param {sap.ui.base.Event} oEvent
         */
        onSearch(oEvent) {
            const aFilters = [];
            const sQuery = oEvent.getParameter("query") || oEvent.getParameter("newValue");

            if (sQuery && sQuery.trim().length > 0) {
                aFilters.push(new Filter("ProductName", FilterOperator.Contains, sQuery.trim()));
            }

            // Update binding on the table rows
            const oTable = this.byId("productsTable");
            const oBinding = oTable.getBinding("items");
            if (oBinding) {
                oBinding.filter(aFilters);
            }
        },

        /**
         * Event handler for row selection
         * @param {sap.ui.base.Event} oEvent
         */
        onItemPress(oEvent) {
            const oItem = oEvent.getSource();
            const oContext = oItem.getBindingContext();
            const sProductName = oContext.getProperty("ProductName");

            MessageToast.show("Selected: " + sProductName);
            
            // If you implement details navigation later:
            // const sProductId = oContext.getProperty("ProductID");
            // this.getOwnerComponent().getRouter().navTo("RouteDetail", { productId: sProductId });
        }
    });
});