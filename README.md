
# Chat application - final project

*presentation, introduction, ...*

## Usage

*how to start and use the application, run the tests, ...*

* Install [Go](https://golang.org/) and [Dex](https://dexidp.io/docs/getting-started/). For example, on Ubuntu, from your project directory:   
  ```
  # Install Go
  apt install golang-go
  # Download Dex
  git clone https://github.com/dexidp/dex.git
  # Build Dex
  cd dex
  make
  make examples
  ```
* Register your GitHub application, get the clientID and clientSecret from GitHub and report them to your Dex configuration. Modify the provided `./dex-config/config.yml` configuration to look like:
  ```yaml
  # 
  - type: github
    id: github
    name: GitHub
    config:
      clientID: xxxx98f1c26493dbxxxx
      clientSecret: xxxxxxxxx80e139441b637796b128d8xxxxxxxxx
      redirectURI: http://127.0.0.1:5556/dex/callback
  ```
* The Dex configuration provided inside `./dex-config/config.yml`, the frond-end application is already registered and CORS is activated. Now that Dex is built and configured, your can start the Dex server:
  ```yaml
  dex/bin/dex dex-config/config.yaml
  ```
* Finally, start the back-end and front-end applications:
  ```bash
  # Optional, fill the database with initial data
  back-end/bin/init
  # Start the back-end
  back-end/bin/start
  # In a new console
  cd front-end && yarn start
  ```

## Author

*name, email, ...*

## Tasks

Project management

* Naming convention   
  *place your comments*
* Project structure   
  *place your comments*
* Code quality   
  *place your comments*
* Design, UX   
  *place your comments*
* Git and DevOps   
  *place your comments*

Application development

* Welcome screens   
  *place your comments*
* New channel creation   
  *place your comments*
* Channel membership and access   
  *place your comments*
* Ressource access control   
  *place your comments*
* Invite users to channels   
  *place your comments*
* Message modification   
  *place your comments*
* Message removal   
  *place your comments*
* Account settings   
  *place your comments*
* Gravatar integration   
  *place your comments*
* Avatar selection   
  *place your comments*
* Personal custom avatar   
  *place your comments*

## Bonus

*place your comments*
