# Coding challenge

## Impact graphs

- Solution for writing an HTML page that follows the mockup above and uses the following JSON data:

> [Live Demo]()

![Impact Graphs](images/layout_impact_graphs.png)


```javascript
{
  name: "Inkjet Printer",
  impacts: {
    climate_change: {
      production: 45,
      distribution: 23,
      use: 12,
      end_of_life: 5
    },
    energy_use: {
      production: 32,
      distribution: 5,
      use: 28,
      end_of_life: 1
    }
  }
}
```
## Built with

- HTML5
- CSS3
- SVG
- Vanilla JavaScript

## Usage

- To start the application follow the Live Demo link.

## Requirements

- Compatible Web browser (Chrome, Mozilla)

## Solution Features

- By default it generates a SVG graph based on the data from the first impact (eg. climate_change).
- The select element is filled with all available impacts (eg. climate_change and energy_use).
- The graph is redrawn when the user selects a different option.

## Installation

### Steps

From the command line/terminal clone the repository:

```
$ git clone https://github.com/Elbie-em/Earthster_Challenge
```
## Deploy

cd into *Earthster_Challenge* directory

To deploy on your local environment run:

```
$ npm run watch

---> Open the index.html in your compatible browser
```
## Author

👤 **Elbie Moonga**

- GitHub: [@Elbie-Em](https://github.com/Elbie-em)
- Twitter: [ElbieEm](https://twitter.com/ElbieEm)
- LinkedIn: [elbie-moonga](https://www.linkedin.com/in/elbiemoonga/)

## Acknowledgments

- Earthster
