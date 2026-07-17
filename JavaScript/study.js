let logSystem;

const isDevelopment = true;

if (isDevelopment) {
    logSystem = function(message) {
        console.log("[DEBUG - ", new Date().toLocaleTimeString(),"] ", message);
    };
} 

else{
    logSystem = function(message){};
}

logSystem("사용자가 버튼을 클릭함");