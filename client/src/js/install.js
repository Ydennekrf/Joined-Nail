const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';
    textHeader.textContent = 'Click the button to install!';
  
    butInstall.addEventListener('click', () => {
      event.prompt();
      butInstall.setAttribute('disabled', true);
      butInstall.textContent = 'Installed!';
});
});


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    textHeader.textContent = 'Successfully installed!';
  console.log('👍', 'appinstalled', event)
})
