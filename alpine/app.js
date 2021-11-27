if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./serviceWorker.js')
    .then((reg) => {
      console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch((error) => {
      console.log('Registration failed with ' + error);
    });
}

// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers