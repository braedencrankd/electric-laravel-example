# Laravel ElectricSQL Example

![Capture-2024-11-22-151032](https://github.com/user-attachments/assets/91f94c4a-aaf5-42d1-971d-af2b51fac477)

This project is an example of how to use ElectricSQL with Laravel. It is a simple todo list application that allows you to add, edit, and delete todos with a React frontend connected to a Laravel backend with InertiaJS.

This project uses DDEV for local development environment setup.

## Prerequisites

### DDEV Installation

DDEV is required to run this project. To install DDEV:

1. Install a package manager for you OS. [Homebrew](https://brew.sh/) for MacOS or [Chocolatey](https://chocolatey.org/) on windows. For linux you guys know what you are doing 😏
2. First, install Docker for your operating system (on MacOS you can run `brew install docker`, I recommend using [OrbStack](https://docs.orbstack.dev/) to run your docker containers).
3. Install DDEV by following the instructions for your OS:

-   **macOS (with Homebrew):**
    ```bash
    brew install ddev/ddev/ddev
    ```
-   **Windows and other systems:**
    Visit the [official DDEV installation guide](https://ddev.readthedocs.io/en/stable/users/install/) for detailed instructions.

## Project Setup

1. Clone this repository:

```bash
git clone https://github.com/braedencrankd/electric-laravel-example.git && cd electric-laravel-example
```

2. Run `ddev start` to start the development environment.
3. Run `ddev composer install` to install the dependencies.
4. Run `ddev npm install` to install the dependencies.
5. Run `cp .env.example .env` to copy the environment variables.
6. Run `ddev artisan key:generate` to generate the application key.
7. Run `ddev artisan migrate:fresh --seed` to run the migrations with some seeded todos.
8. Run `ddev launch` to launch the site in your default browser.


## Things to know

- ElectricSQL is running in it's own container and exposing port 3000 through DDEV's reverse proxy. You can find the settings for this in `.ddev/config.yaml` and `.ddev/docker-compose.electric.yaml`. *note: you may have issues starting the container if something else is running on port 3000*
- This project is using InertiaJS to connect the Laravel backend and the React frontend. Find out more [here](https://inertiajs.com/).
- For convenience the vite dev server automatically runs in the background when you start the ddev server. If you need to restart it or stop it for whatever reason you can run any of the following commands `ddev vite-serve start|stop|status`.
