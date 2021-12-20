// self.install
// self.onmessage = function (evt) {
//   console.log(evt)
// }
// self.addEventListener('install', event => {
//   console.log('install')
// })


// self.addEventListener('message', event => {
//   console.log(event)
// })
// self.addEventListener('install', function (event) {
//   // Perform install step
//   console.log('installed')
// });
self.addEventListener('message', event => {
  setTimeout(() => {
    console.log(event)
    self.postMessage("aaaaa")
  }, 1000);

  return
  // if (event.data.action === 'fetchPodcast') {
  //   const response = await fetch('http://localhost:3000', {
  //     method: 'POST',
  //     mode: 'cors',
  //     cache: 'no-cache',
  //     credentials: 'same-origin',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ event.data.url })
  //   })
  //   if (response.ok) {
  //     Alpine.store('page', 'home')
  //     return response.json();
  //   }
  //   console.log()
  // }
})