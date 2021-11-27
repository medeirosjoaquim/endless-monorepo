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
  console.log(event)
  if (event.data.action === 'fetchPodcast') {
    console.log(event.data.url)
  }
})