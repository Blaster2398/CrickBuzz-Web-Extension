
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

## Contributing

Contributions to improve CrickBUZZ Lite are welcome. Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Developed by Aryan Patel
- Cricket data provided by [CricAPI](https://cricapi.com/)

## Support

For support, please open an issue in the GitHub repository or contact [your-email@example.com].
```

Feel free to copy and paste this updated README.md file into your project repository. If you need further customization or have specific elements you'd like to add, just let me know!