function openCV(pdf, type) {
  // Create a new window
  const win = window.open("", "_blank");

  // Write minimal HTML into it
  win.document.write(`
    <html>
      <head>
        <title>My CV</title>
        <style>
          body { margin: 0; padding: 0; font-family: sans-serif; }
          .top-bar {
            display: flex; 
            align-items: center; 
            padding: 10px; 
            background: #111; 
            color: white;
          }
          .replica {
            width: 30px; 
            height: 30px; 
            display: flex; 
            justify-content: center; 
            align-items: center;
            border-radius: 50%; 
            border: 2px solid white;
            margin-right: 10px;
          }
          iframe {
            width: 100%; 
            height: calc(100vh - 50px); 
            border: none;
          }
        </style>
      </head>
      <body>
        <div class="top-bar">
          <div class="replica">
            ${type === 'yes' ? "✔" : "✖"}
          </div>
          <span>${type === 'yes' ? "CV 1" : "CV 2"}</span>
        </div>
        <iframe src="${pdf}"></iframe>
      </body>
    </html>
  `);
}
