# Everything Procedural

## Installation

### Node.js

Install Node.js from https://nodejs.org

To check of Node (and npm) are installed correctly, open a terminal and run:

```bash
npm --version
```

If you don't get an error, it is installed correctly. Otherwise, rerun the installer and make sure node and npm are added to the `PATH` environment variable.

Open a terminal in the root folder of this repository and run:

```bash
npm install
```

### PHP

Download and install PHP 8.2 from https://www.php.net/downloads

On Windows, you want the **VS16 x64 Thread Safe** version.

This will give you a ZIP file. Extract the zip file wherever you want, but make a note of the folder you extracted PHP runtime to.

### Composer

Download and install Composer from: https://getcomposer.org/download/

During installation, you need to specify the folder where you extracted the PHP zip file to.

Make sure you add Composer and the PHP folder to the `PATH` environment variable during the installation.

Open a terminal in the root folder of this repository and run:

```bash
composer install
```

### Build

Run the command to generate the build:

```bash
npm run build
```

### Generate SSL certs

To generate certificates for the local server, run:

```bash
.\symfony.exe server:ca:install
```

### Serve

To start a local server run:

```bash
.\symfony.exe serve
```

### View

To view the website, open https://localhost:8000