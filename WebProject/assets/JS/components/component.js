async function loadComponent() {
  const response = await fetch('../assets/html/rcard.html');
  const text = await response.text();
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = text;

  // Append the template and script to the document
  document.body.appendChild(tempDiv.querySelector('template'));
  const scriptContent = tempDiv.querySelector('script[data-component]').textContent;
  const scriptElement = document.createElement('script');
  scriptElement.type = 'text/javascript';
  scriptElement.textContent = scriptContent;
  document.body.appendChild(scriptElement);
}

loadComponent();