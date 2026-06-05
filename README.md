# jorge-acebes-web

A minimalist personal website that centralizes useful utilities, quick links, and small interactive modules for daily workflows.

## Features
* **Minimalist Design:** Clean interface focused on typography, white space, and a strict monochrome palette controlled via CSS variables.
* **Modular Structure:** A dynamic single-page system that loads and switches between different tools and applications without page reloads.
* **Complete Privacy:** Client-side execution with no external databases, utilizing browser localStorage to persist user preferences.

## Included Modules
* **Physics:** Quick links to academic cheat sheets and resources.
* **Games and Leisure:**
    * *Alphabet Generator:* A text-to-symbol translator with PDF export functionality via jsPDF.
    * *Icebreaker Bingo:* A customized bingo card generator exported to PDF for group dynamics.
    * *Heads Up:* A word-guessing game featuring dynamic categories and an integrated countdown timer.
    * *Random Utilities:* Tools for coin flips, dice rolls, list shuffling, and team generation.
* **Other Tools:**
    * *Cercanías Renfe:* Parameterized quick access to frequent train schedules.
    * *Contact QR:* A vCard QR code generator for emergency contact information using the QRious library.
    * *LED Banner:* A full-screen simulated LED scrolling text display.

## Project Structure
```text
.
├── css/
│   └── style.css          # Global styling and design variables
├── js/
│   ├── main.js            # Core routing logic and module initialization
│   ├── alfabetos.js       # Symbol translation and PDF generation
│   ├── bingo.js           # Interactive bingo board logic
│   ├── diccionario.js     # Custom dictionary data structure
│   ├── headsup.js         # Heads Up game controller and timer
│   ├── led.js             # LED banner animation wrapper
│   ├── qr_generator.js    # vCard formatting and QR rendering
│   ├── random.js          # Randomization and shuffling functions
│   └── renfe.js           # Renfe train schedule shortcuts
└── index.html             # Main entry point and single viewport layout
