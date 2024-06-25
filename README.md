
# CrickBUZZ Lite

## Description

CrickBUZZ Lite is a Chrome extension that provides real-time updates and information about ongoing cricket matches. It offers a clean, user-friendly interface to quickly check match scores, statuses, and detailed scorecards.

## Features

- Real-time updates of ongoing cricket matches
- Filter matches by team
- Sort matches by name, status, or venue
- Detailed match information including scorecards
- Responsive design for optimal viewing on various screen sizes
- Accessibility features for keyboard navigation and screen readers

## Installation

1. **Clone or download:** Clone this repository or download the ZIP file and extract it.
   
2. **Enable Developer mode:**
   - Open Google Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" in the top right corner.

3. **Load the extension:**
   - Click on "Load unpacked" and select the directory containing the extension files.

4. **Extension added:** CrickBUZZ Lite should now appear in your Chrome toolbar.

## Usage

1. **Open the extension:**
   - Click on the CrickBUZZ Lite icon in your Chrome toolbar to open the popup.

2. **View matches:**
   - See a list of ongoing matches with basic information.

3. **Filter and sort:**
   - Use dropdown menus to filter matches by team or sort them by name, status, or venue.

4. **Detailed view:**
   - Click on a match card to view detailed information and scorecard.

5. **Close detailed view:**
   - Press Esc or click outside the modal to close the detailed view.

## Files Structure

- `manifest.json`: Extension configuration file
- `index.html`: Main HTML structure for the popup
- `style.css`: CSS styles for the extension
- `script.js`: JavaScript file containing the main functionality
- `icon32.png`: Extension icon

## API

This extension uses the CricAPI to fetch real-time cricket data. Replace `YOUR_API_KEY_HERE` in `script.js` with your own key from [CricAPI](https://cricapi.com/).

```javascript
const response = await fetch('https://api.cricapi.com/v1/currentMatches?apikey=YOUR_API_KEY_HERE&offset=0');
```

## Photos

<div style="display: flex; justify-content: space-between; align-items: center;">
  <img src="https://github.com/Blaster2398/CrickBuzz-Web-Extension/assets/133494008/2198986d-2693-4677-877a-0517472f0a60" alt="CrickBUZZ Lite Screenshot 1" style="width: 30%; object-fit: cover;" />
  <img src="https://github.com/Blaster2398/CrickBuzz-Web-Extension/assets/133494008/96b5d93b-55e5-453b-957a-054163d3aa33" alt="CrickBUZZ Lite Screenshot 2" style="width: 30%; object-fit: cover;" />
  <img src="https://github.com/Blaster2398/CrickBuzz-Web-Extension/assets/133494008/22cf05dc-aea1-4911-8859-0b571f21707e" alt="CrickBUZZ Lite Screenshot 3" style="width: 30%; object-fit: cover;" />
</div>

## Contributing

Contributions to improve CrickBUZZ Lite are welcome. Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Developed by Aryan Patel
- Cricket data provided by [CricAPI](https://cricapi.com/)
```

This should ensure the images are of equal size, centered, and with space between them. You can copy and paste this updated README.md file into your project repository.
