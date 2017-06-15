({
    findGrowerAccounts : function(component, page1, searchKey, event, helper, isInitialize) {
        // get the current record id
        var page = page1 || 1;
        var currentrecordId = component.get("v.recordId");        
        var action = component.get("c.getAccounts");
        action.setStorable();
        action.setParams({
            "searchKey": searchKey,
            pageSize : component.get("v.pageSize"),
            pageNumber : page,
            accId : currentrecordId
        });
        action.setCallback(this, function(response) {
            if (action.getState() === "SUCCESS") {
                var accountDetailJson = response.getReturnValue();
                component.set("v.page",page);
                component.set("v.pages",Math.ceil((JSON.parse(accountDetailJson[0]))/component.get("v.pageSize")));
                component.set("v.total",JSON.parse(accountDetailJson[0]));                
                console.log('accountDetailJson' + JSON.parse(accountDetailJson[1]));                
                component.set("v.accountsList",JSON.parse(accountDetailJson[1])); 
                component.set("v.programs", JSON.parse(accountDetailJson[2]));
                component.set("v.corpsAvailable", JSON.parse(accountDetailJson[3]));                
            } else if (response.getState() === "ERROR") { 
                component.set("v.isCallBackError",false);
                component.set("v.ServerError",response);
                $A.log("Errors", response.getError());
                var errors = action.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        cmp.set("v.Exception", errors[0].message);
                    }
                }
            }
        });        
        $A.enqueueAction(action);                    
    },
    setProgramDropdownOptions : function(component,event,helper){
        var accountList = component.get("v.accountsList");
        var programs = component.get("v.programs");
        var opt;
        var options = [];
        if(programs){
            for(var i in programs){
                opt = [{'label':'','value':'','selected':false}]
                opt.label =	programs[i].Name;
                opt.value = programs[i].Id;
                options.push(opt);
            }
        }
        if(options && options.length > 0){
            component.set("v.programDropdown",options)
        }
        
        if(accountList){
            for(var indx in accountList){
                $A.createComponent(
                    "c:MultiSelect",
                    {
                        "aura:id":"my-multi-select",
                        options:component.get("v.programDropdown"),
                        selectChange:component.getReference("c.handleSelectChangeEvent"),
                        selectedItems:""
                    },
                    function(newCmp){
                        var cmp = component.find('mul-select' +accountList[indx].accId);
                        cmp.set("v.body", newCmp);
                    }
                );
            }
        }
		
    },
    handleSelectChangeEvent: function(component, event, helper) {
        var items = component.get("v.items");
        items = event.getParam("values");
        component.set("v.items", items);
    }
})