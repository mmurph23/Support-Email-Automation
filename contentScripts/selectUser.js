window.onload = function () {
	var dataBuffer = window.frames[1].document.getElementsByClassName(" dataCell "), i = 0;
	var changeEvent = document.createEvent("HTMLEvents");
    changeEvent.initEvent("click", true, true);
	
	Object.size = function (obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
	};
	
	for (i = 0; i < dataBuffer.length; i++) {
        if(doesMatch(dataBuffer[i].innerText,localStorage.getItem("caseContact")) && doesMatch(dataBuffer[i+3].innerText, localStorage.getItem("accountName")) && doesMatch(dataBuffer[i+8].innerText,localStorage.getItem("emailAddress"))) {
            dataBuffer[i].dispatchEvent(changeEvent);
            break;
        }
    }

    
  
    if(i == Object.size(dataBuffer)){  	
      
    	for (i = 0; i < dataBuffer.length; i++) {
           // alert(dataBuffer[i].innerText + ", "+dataBuffer[i+3].innerText +" ," + dataBuffer[i+8].innerText);
        	if (doesMatch(dataBuffer[i].innerText, localStorage.getItem("caseContact")) && doesMatch(dataBuffer[i+3].innerText,localStorage.getItem("serviceAccount")) && doesMatch(dataBuffer[i+8].innerText,localStorage.getItem("emailAddress"))) {
            	dataBuffer[i].dispatchEvent(changeEvent);
                break;
        	} 
    	}
    }
    
    
    if(i == Object.size(dataBuffer)){  	
      
    	for (i = 0; i < dataBuffer.length; i++) {
           // alert(dataBuffer[i].innerText + ", "+dataBuffer[i+3].innerText +" ," + dataBuffer[i+8].innerText);
        	if (doesMatch(dataBuffer[i].innerText, localStorage.getItem("caseContact")) && doesMatch(dataBuffer[i+3].innerText,localStorage.getItem("accountName"))) {
            	alert("Account Found on Parent level with Different Email");
                dataBuffer[i].dispatchEvent(changeEvent);
                break;
            }
    	}
    } 
    
    if(i == Object.size(dataBuffer)){  	
      
    	for (i = 0; i < dataBuffer.length; i++) {
           // alert(dataBuffer[i].innerText + ", "+dataBuffer[i+3].innerText +" ," + dataBuffer[i+8].innerText);
        	if (doesMatch(dataBuffer[i].innerText, localStorage.getItem("caseContact")) && doesMatch(dataBuffer[i+3].innerText,localStorage.getItem("serviceAccount"))) {
            	alert("Account Found on Service Level with Different Email");
            	dataBuffer[i].dispatchEvent(changeEvent);
                break;
        	} 
    	}
    }
    if(i == Object.size(dataBuffer)){
    	alert("No Account Found:\nPlease Select the Case Contact Below");
        window.frames[1].document.getElementById("Contact_body").scrollIntoView();
	} 
};


function doesMatch(str1, str2) {
    if (str2 === null || str1 === null) {
        return false;
    } else {
        if (str1.includes(str2) || str2.includes(str1)) {
            return true;
        } else {
            return false;
        }
    }
}