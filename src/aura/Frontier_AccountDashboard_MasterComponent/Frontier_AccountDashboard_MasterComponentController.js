({
	doInit : function(component, event, helper) {
        //var crop='Corn';
        var season='SUMMER';
        var accType='Partner';
        console.log('doinit');
       helper.getPicklistValues(component,event,helper);
        helper.getchartdetails(component,event,helper,season,accType);
	},
    changeseasonCrop : function(component,event,helper){
       //var crop= component.find("cropDetails").get("v.value");
        var season=component.find("sellingSeason").get("v.value");
        var accType =component.find("accType").get("v.value");
        console.log('accType' + accType);
         helper.getchartdetails(component,event,helper,season,accType);
    }
})