<p align="center">

  <h3 align="center">Use Browser Open File Dialog Hook</h3>

  <p align="center">
    React hook allowing you to select files from your computer filesystem via a trigger method
    <br />
    ·
    <a href="https://github.com/rsispal/use-browser-open-file-dialog/issues">Report Bug</a>
    ·
    <a href="https://github.com/rsispal/use-browser-open-file-dialog/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This hook is designed to allow you to trigger the browser's open file dialog so that files can be selected and used within your React application. The hook returns an async `trigger()` method which returns the corresponding selected HTML file objects.

## Getting Started

Install the package into your application via GitHub Package Manager

```sh
npm install @rsispal/use-browser-open-file-dialog
```

## Usage

Below is a minimal example showing how to use this package:

```jsx
export const HomePage = () => {
  const ofdField = useRef(null); // Set the initial value of the ref to null
  const [trigger] = useBrowserOpenFileDialog(ofdField, ".txt", true);

  const handleClick = async () => {
    const files = await trigger(); // Returns corresponding HTML File objects based on user selectioj

    files.forEach(async (file: File) =>
      console.log(`FILE DETAILS`, {
        filename: file.name,
        lastModified: file.lastModified,
        size: file.size,
        content: await file.text(), // File data can be read here as required as a blob, text, arrayBuffer or stream
      })
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Example</h1>
      <button data-testid="trigger-upload-btn" onClick={handleClick}>
        Select Files
      </button>
      <OpenFileDialogUploadField fieldRef={ofdField} hidden={true} />
    </div>
  );
};
```

An example Single Page Application is also provided to demonstrate the hook's usage. Follow the steps below to run this:

1. Clone the repo
   ```sh
   git clone https://github.com/rsispal/use-browser-open-file-dialog.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Build the hook source and example locally
   ```sh
   npm run build
   ```
4. Run the example and visit the localhost URL shown in your terminal
   ```sh
   npm run start
   ```

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/rsispal/use-browser-open-file-dialog/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Project Link: [https://github.com/rsispal/use-browser-open-file-dialog](https://github.com/rsispal/use-browser-open-file-dialog)

<!-- ACKNOWLEDGEMENTS -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[issues-shield]: https://img.shields.io/github/issues/rsispal/repo.svg?style=for-the-badge
[issues-url]: https://github.com/rsispal/repo/issues
[license-shield]: https://img.shields.io/github/license/rsispal/repo.svg?style=for-the-badge
[license-url]: https://github.com/rsispal/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/rav-sispal
