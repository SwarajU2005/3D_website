# 3D iPhone Model Showcase Website

This project is an interactive 3D showcase of the iPhone 15 Pro, built with **React Three Fiber**, **Three.js**, and **GSAP**. Users can explore a realistic model of the iPhone, view details with ambient lighting, and experience animations and transitions between model views.

## Demo
[Link to Live Demo](#) (Add link here)

## Features

- **Realistic 3D Model**: Explore a detailed 3D model of the iPhone 15 Pro.
- **Responsive Design**: The model adjusts to screen sizes with separate videos for desktop and mobile.
- **Smooth Animations**: Transitions and animations powered by GSAP.
- **Custom Controls**: Rotate, pan, and zoom controls for an interactive experience.

## Tech Stack

- **React**: Frontend framework.
- **React Three Fiber**: For rendering 3D models with Three.js.
- **GSAP**: For smooth animations and transitions.
- **@react-three/drei**: Provides additional tools like `OrbitControls`, `PerspectiveCamera`, and `useGLTF`.

## Project Structure

- **/src/components**
  - `Features.jsx`: Component showcasing key features of the product.
  - `Footer.jsx`: Footer section for website information and links.
  - `Hero.jsx`: Introductory section with video for desktop/mobile.
  - `Highlights.jsx`: Section displaying highlights of the product.
  - `HowItWorks.jsx`: Description of how the product or feature works.
  - `IPhone.jsx`: Model component for rendering the iPhone 3D object.
  - `Lights.jsx`: Lighting setup for realistic rendering.
  - `Loader.jsx`: Loader component for asynchronous model loading.
  - `Model.jsx`: Main 3D model configuration for iPhone rendering.
  - `ModelView.jsx`: Main 3D model viewer with camera, lights, and controls.
  - `Navbar.jsx`: Navigation bar for site navigation.
  - `Video.jsx`: Component to play background videos.

- **/src**
  - `App.jsx`: Main app component.
  - `App.css`: Main CSS for styling.
  - `index.css`: Global CSS.
  - `main.jsx`: Entry point for React.
  - **constants**: Folder for constants like colors, sizes, etc.
  - **utils**: Utility functions for helper methods.

- **Other files**
  - `.eslintrc.json`: Linting configuration.
  - `index.html`: Main HTML file.
  - `package.json`: Node dependencies and scripts.
  - `postcss.config.js`: PostCSS configuration.
  - `tailwind.config.js`: Tailwind CSS configuration.
  - `vite.config.js`: Vite configuration for project bundling.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/username/3D-iphone-showcase.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd 3D-iphone-showcase
    ```
3. **Install dependencies**:
    ```bash
    npm install
    ```
4. **Run the development server**:
    ```bash
    npm run dev
    ```
5. **Visit** `http://localhost:5173` to view the application.


## Usage

1. Open the site to load the 3D iPhone model.
2. Use the on-screen controls to rotate and view the model.
3. View model animations and product details in the `Hero` section.

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue for suggestions or bug reports.
