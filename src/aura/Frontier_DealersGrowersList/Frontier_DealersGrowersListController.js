({
	doInit : function(component, event, helper) {
        var searchKey = '';
        var page = component.get("v.page") || 1;
		helper.findGrowerAccounts(component, page, searchKey, event, helper, true);		
	},
    toggle : function(component, event, helper) {
    var toggleGrowerAccounts = component.find("GrowerAccounts");
    var accordionChange = component.find("accordionSection");
    $A.util.toggleClass(toggleGrowerAccounts, "toggle");    
    $A.util.toggleClass(accordionChange, 'slds-is-close');
    $A.util.toggleClass(accordionChange, 'slds-is-open');
  },
    handleSelectChangeEvent: function(component, event, helper) {
        var items = component.get("v.selectedItem");
        items = event.getParam("values");
        component.set("v.selectedItem", items);
    }
})