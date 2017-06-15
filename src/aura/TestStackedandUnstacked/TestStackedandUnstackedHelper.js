({
    loadAccDashData : function(component, event){
     
        console.log('-----Acccount coverage chart-----' );
        var action = component.get("c.getAccountRadl");
      var developAccCount = [];
        var acqAccCount = [];
        var retainAccCount = [];
        var lightAccCount = [];
        var accCoverageLbl = [];
        
        action.setCallback(this, function(response) {
            if (response.getState() === "SUCCESS") {
				console.log('Success');
            var accCoverageRADL = (JSON.parse(response.getReturnValue()));
                accCoverageLbl= accCoverageRADL.accRADLLblSet;
               // accCoverageLbl.push('Test1');
                component.set("v.accCoverageLbl",accCoverageLbl);
                console.log('type' + component.get("v.accCoverageLbl"));
                //console.log('check value' + accCoverageRADL.accountRadlMap.hasOwnProperty('Retain'));
                if(!accCoverageRADL.accountRadlMap.hasOwnProperty('Develop')){
                    console.log('Inside Develop');
                    developAccCount.push(0);
                }
                if(!accCoverageRADL.accountRadlMap.hasOwnProperty('Acquire')){
                    console.log('Inside Retain');
                    acqAccCount.push(0);
                }
                if(!accCoverageRADL.accountRadlMap.hasOwnProperty('Retain')){
                    console.log('Inside Retain');
                    retainAccCount.push(0);
                    console.log('Inside retain 0' + retainAccCount);
                }
                if(!accCoverageRADL.accountRadlMap.hasOwnProperty('Light Touch')){
                    console.log('Inside Retain');
                    lightAccCount.push(0);
                }
                
                for(var key in accCoverageRADL.accountRadlMap){
                    console.log('key' + key );
                    
                    if(key == 'Develop'){
                        developAccCount.push(accCoverageRADL.accountRadlMap[key]);
                    }
                     if(key == 'Acquire'){
                        acqAccCount.push(accCoverageRADL.accountRadlMap[key]);
                    }
                    if(key == 'Retain'){
                        retainAccCount.push(accCoverageRADL.accountRadlMap[key]);
                        console.log('Inside retain' + retainAccCount);
                    }                 
                    
                    if(key == 'Light Touch'){
                        lightAccCount.push(accCoverageRADL.accountRadlMap[key]);
                    }
                }
                if(!accCoverageRADL.accPgmRadlMap.hasOwnProperty('Develop')){
                    console.log('Inside Develop');
                    developAccCount.push(0);
                }
                if(!accCoverageRADL.accPgmRadlMap.hasOwnProperty('Acquire')){
                    console.log('Inside Retain');
                    acqAccCount.push(0);
                }
                if(!accCoverageRADL.accPgmRadlMap.hasOwnProperty('Retain')){
                    console.log('Inside Retain');
                    retainAccCount.push(0);
                }
                if(!accCoverageRADL.accPgmRadlMap.hasOwnProperty('Light Touch')){
                    console.log('Inside Retain');
                    lightAccCount.push(0);
                }
                for(var key in accCoverageRADL.accPgmRadlMap){
                    console.log('key' + key );
                    if(key == 'Develop'){
                        developAccCount.push(accCoverageRADL.accPgmRadlMap[key]);
                    }
                     if(key == 'Acquire'){
                        acqAccCount.push(accCoverageRADL.accPgmRadlMap[key]);
                    }
                    if(key == 'Retain'){
                        retainAccCount.push(accCoverageRADL.accPgmRadlMap[key]);
                    }
                    if(key == 'Light Touch'){
                        lightAccCount.push(accCoverageRADL.accPgmRadlMap[key]);
                    }
                }
                if(!accCoverageRADL.accTouchRadlMap.hasOwnProperty('Develop')){
                    console.log('Inside Develop');
                    developAccCount.push(0);
                }
                if(!accCoverageRADL.accTouchRadlMap.hasOwnProperty('Acquire')){
                    console.log('Inside Retain');
                    acqAccCount.push(0);
                }
                if(!accCoverageRADL.accTouchRadlMap.hasOwnProperty('Retain')){
                    console.log('Inside Retain');
                    retainAccCount.push(0);
                }
                if(!accCoverageRADL.accTouchRadlMap.hasOwnProperty('Light Touch')){
                    console.log('Inside Retain');
                    lightAccCount.push(0);
                }
                 for(var key in accCoverageRADL.accTouchRadlMap){
                    console.log('key' + key );
                    if(key == 'Develop'){
                        developAccCount.push(accCoverageRADL.accTouchRadlMap[key]);
                    }
                     if(key == 'Acquire'){
                        acqAccCount.push(accCoverageRADL.accTouchRadlMap[key]);
                    }
                    if(key == 'Retain'){
                        retainAccCount.push(accCoverageRADL.accTouchRadlMap[key]);
                    }
                    if(key == 'Light Touch'){
                        lightAccCount.push(accCoverageRADL.accTouchRadlMap[key]);
                    }
                }
                if(!accCoverageRADL.TouchpointcountRadlMap.hasOwnProperty('Develop')){
                    console.log('Inside Develop');
                    developAccCount.push(0);
                }
                if(!accCoverageRADL.TouchpointcountRadlMap.hasOwnProperty('Acquire')){
                    console.log('Inside Retain');
                    acqAccCount.push(0);
                }
                if(!accCoverageRADL.TouchpointcountRadlMap.hasOwnProperty('Retain')){
                    console.log('Inside Retain');
                    retainAccCount.push(0);
                }
                if(!accCoverageRADL.TouchpointcountRadlMap.hasOwnProperty('Light Touch')){
                    console.log('Inside Retain');
                    lightAccCount.push(0);
                }
                for(var key in accCoverageRADL.TouchpointcountRadlMap){
                    console.log('key' + key );
                    if(key == 'Develop'){
                        developAccCount.push(accCoverageRADL.TouchpointcountRadlMap[key]);
                    }
                     if(key == 'Acquire'){
                        acqAccCount.push(accCoverageRADL.TouchpointcountRadlMap[key]);
                    }
                    if(key == 'Retain'){
                        retainAccCount.push(accCoverageRADL.TouchpointcountRadlMap[key]);
                    }
                    if(key == 'Light Touch'){
                        lightAccCount.push(accCoverageRADL.TouchpointcountRadlMap[key]);
                    }
                }
                if(!accCoverageRADL.avgVisitRadlMap.hasOwnProperty('Develop')){
                    console.log('Inside Develop');
                    developAccCount.push(0);
                }
                if(!accCoverageRADL.avgVisitRadlMap.hasOwnProperty('Acquire')){
                    console.log('Inside Retain');
                    acqAccCount.push(0);
                }
                if(!accCoverageRADL.avgVisitRadlMap.hasOwnProperty('Retain')){
                    console.log('Inside Retain');
                    retainAccCount.push(0);
                }
                if(!accCoverageRADL.avgVisitRadlMap.hasOwnProperty('Light Touch')){
                    console.log('Inside Retain');
                    lightAccCount.push(0);
                }
                for(var key in accCoverageRADL.avgVisitRadlMap){
                    console.log('key' + key );
                    if(key == 'Develop'){
                        developAccCount.push(accCoverageRADL.avgVisitRadlMap[key]);
                    }
                     if(key == 'Acquire'){
                        acqAccCount.push(accCoverageRADL.avgVisitRadlMap[key]);
                    }
                    if(key == 'Retain'){
                        retainAccCount.push(accCoverageRADL.avgVisitRadlMap[key]);
                    }
                    if(key == 'Light Touch'){
                        lightAccCount.push(accCoverageRADL.avgVisitRadlMap[key]);
                    }
                }
                component.set("v.dtypecount",developAccCount);
                component.set("v.acqtypecount",acqAccCount);
                component.set("v.rtypecount",retainAccCount);
                component.set("v.ltypecount",lightAccCount);
                console.log('D' + component.get("v.dtypecount"));
                console.log('A' + component.get("v.acqtypecount"));
                console.log('R' + component.get("v.rtypecount"));
                console.log('L' + component.get("v.ltypecount"));
               
            } else if (response.getState() === "ERROR") {
               
                console.log('Errors', response.getError());
            }
       var data = {
            //labels: salesDetailJson.Labels,
            //labels:["Total","Visit"],
            labels:component.get("v.accCoverageLbl"),
            datasets: [
                {
                    label : "Develop",
                    type : "bar",
                    backgroundColor: "rgb(17, 135, 48)",
                    
                    hoverBackgroundColor: "rgba(50,90,100,1)",
                    //data: [develop]
                    data:component.get("v.dtypecount"),
                     yAxisID: 'bar-y-axis'
                    // data: salesDetailJson.orderData
                },
                {
                    label : "Acquire",
                    type : "bar",
                    backgroundColor: "rgb(237, 168, 49)",
                    hoverBackgroundColor: "rgba(140,85,100,1)",
                    //data: [acquire]
                    data:component.get("v.acqtypecount"),
                     yAxisID: 'bar-y-axis'
                    //data: salesDetailJson.orderData
                },
                {
                    label : "Retain",
                    type : "bar",
                    backgroundColor: "rgb(252, 208, 171)",
                    hoverBackgroundColor: "rgba(46,185,235,1)",
                    data: [0,0,0,0,0],
                     yAxisID: 'bar-y-axis'
                    //data:component.get("v.ltypecount")
                    //data:component.get("v.rtypecount")
                    //data: salesDetailJson.orderData
                },
                {
                    label : "Light Touch",
                    type : "bar",
                    backgroundColor: "rgb(127, 205, 239)",
                    hoverBackgroundColor: "rgba(46,185,235,1)",
                    data:component.get("v.ltypecount"),
                     yAxisID:'bar-y-axis'
                    //data: [lightcount]
                    //data: salesDetailJson.orderData
                },
                
                {
                    label : "Test1",
                    type : "bar",
                    backgroundColor: "rgb(127, 205, 239)",
                    hoverBackgroundColor: "rgba(46,185,235,1)",
                    data:[1],
                    yAxisID:'y-axis-1'
                    //data: [lightcount]
                    //data: salesDetailJson.orderData
                },
                {
                    label : "Test2",
                    type : "bar",
                    backgroundColor: "rgb(127, 205, 239)",
                    hoverBackgroundColor: "rgba(46,185,235,1)",
                    data:[4],
                    yAxisID:'y-axis-1'
                    //data: [lightcount]
                    //data: salesDetailJson.orderData
                }

            ]};
        
            var options = {
            responsive : true,
            curvature: 0.5,            
            overlayBars: true,          
            bezierCurve : false,
           
          legend: {
                display:true,
                position:'bottom',
                labels: {
                    fontColor: 'black'
                }
            },
            scaleLabel:{
                display:false
            }, 
                tooltips: {
                            enabled:true,
                        },
            scales: {
                xAxes: [{
                    gridLines: {
                        display:false
                    },
                    categoryPercentage :0.1,
                    barPercentage : 2.0,                    
                    stacked : true
                    
                }],
                yAxes: [{
                            id: "y-axis-1",
                              stacked: false,
                              ticks: {
                                beginAtZero: true,
                                min: 0,
                                max: 5,
                              // suggestedMax: 200
                              }
                            }, {
                              id: "bar-y-axis",
                              stacked: true,
                              display: true, //optional
                              ticks: {
                                beginAtZero: true,
                                min: 0,
                                max: 5,
                               // suggestedMax: 200
                              }
                            }]
            }
        };
        
        var el = document.getElementById("myChartaccountRADL");
        var ctx = el.getContext("2d");
            ctx.canvas.height=400;
            ctx.canvas.width=1300;
        var myBarChart1 = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });        
        window.onresize=function() {
            myBarChart1.resize();
        };
            
       }); 
        $A.enqueueAction(action);
    }
});