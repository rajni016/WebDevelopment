const fetch = require('node-fetch');

// Function to print the grid from Google Docs data
async function printGridFromUrl(url) {
    try {
        const response = await fetch(url);
        const text = await response.text();

        // Split the text into lines
        const lines = text.split('\n');
        const data = lines.map(line => {
            const [x, char, y] = line.trim().split(/\s+/);
            return { x: parseInt(x, 10), char, y: parseInt(y, 10) };
        }).filter(item => item.x !== undefined && item.char !== undefined && item.y !== undefined);

        // Find the maximum coordinates to determine the grid size
        const maxX = Math.max(...data.map(d => d.x));
        const maxY = Math.max(...data.map(d => d.y));

        // Initialize the grid with spaces
        const grid = Array.from({ length: maxY + 1 }, () => Array(maxX + 1).fill(' '));

        // Fill the grid with characters
        data.forEach(({ x, char, y }) => {
            grid[y][x] = char;
        });

        // Print the grid
        grid.forEach(row => console.log(row.join('')));
    } catch (error) {
        console.error('Error fetching or processing data:', error);
    }
}

// Replace this URL with the link to your Google Doc
const url = 'https://docs.google.com/document/d/e/2PACX-1vSHesOf9hv2sPOntssYrEdubmMQm8lwjfwv6NPjjmIRYs_FOYXtqrYgjh85jBUebK9swPXh_a5TJ5Kl/pub';
printGridFromUrl(url);
