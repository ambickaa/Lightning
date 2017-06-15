({ 
    doInit: function(component, event, helper){
       
      helper.getpicklistvalues(component,event);  
    },
   
    loadtouchpointdata : function(component, event, helper){
     var touchpointType = 'All Touchpoints'
    helper.loadTouchpoint(component, event,touchpointType);
    },
    changetouchpointType :function(component, event, helper){
       var touchpointType=component.find("touchpointbytype").get("v.value");
       console.log('Inside Controller' + touchpointType);
       helper.loadTouchpoint(component, event,touchpointType); 
    }
})