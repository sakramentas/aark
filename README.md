<h1 align="center">aark</h1>
<p align="center">
  <img src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg" alt="lerna logo" />
</p>
<p align="center">
  Powerful data-driven project generator
</p>

### Lib in progress...

Aark is a declarative, modular and customizable generator. With Aark you’re able to generate since just a single file (such as a React component or a function) or a whole new project with folders and dependencies totally out of the box.

Aark is mainly composed by two pillars: a generator config and templates

## Generator config


## Templates
::A template can also have an Aark config and import other templates::

---
# Usage

### Generate a new React component
`npx aark-gen —-template aark-react/component —-variables NAME=ComponentName `

### Generate a new Monorepo
`npx aark-gen —-template aark/monorepo —-variables NAME=Monorepo `

### Generate a new Express API
`npx aark-gen —-template aark-react/component —-variables COMPONENTS=Users,Products,Purchases `

### Generate from a remote config
`npx aark-gen —-fromUrl http://templateurl.com`


---
# Creating an Aark Template

## CLI
### Generate structure from remote declarative config
1. Create a valid Aark JSON
```json
{
  "version": "0.0.1",
  "type": "project",
  "variant": "monorepo",
  "structure": [
    [
      "packages/components/Component1",
      {
        "type": "react-component",
        "name": "Component1",
        "templateId": "aark-react/component",
        "variables": {
          "COMPONENT_NAME": "Component1"
        }
      }
    ],
    [
      "packages/lib/lib-name",
      {
        "type": "package",
        "name": "lib-name",
        "templateId": "aark-js/package"
      }
    ]
  ]
}
```

2. Run
```sh
$ npx aark-gen --fromUrl <url>
```

Example:
```bash
$ npx aark-gen --fromUrl https://gist.githubusercontent.com/sakramentas/9f7d95118cd1e6bd30463ad063294f9b/raw/3d022ac7ba2ac43834f75cff57506f96dc6f69ea/config-1.aark.json
```

### Quick generator from CLI
#### Generate a component
Run
```sh
$ npx aark-gen --type component --name ComponentName
```

## Packages
#### :small_blue_diamond: @aark/babel-preset
Aark Custom Babel Presets

#### :small_blue_diamond: @aark/templates-react
Oficial Aark React Templates

#### :small_blue_diamond: @aark/logger
Aark Logger library

#### :small_blue_diamond: @aark/eslint-config
Aark ESLint Configurations

## Services
#### :small_orange_diamond: @aark/generator-core
Aark Generator Core

# Whiteboard
## Idea
```
-> Website with UI
-> Generates a JSON/yaml
-> Run `npx aark-gen xfcxc82323hzx23`
-> Script generates folder structure and files based on config
```
### 1. Website with UI
* Generate a Project
```
---- Monorepo
---- Monolithic
-------- Choose libraries
-------- Show folder structure?
```

* Generate a Component
### 2. Generates a JSON/yaml
* Create a JSON and store it in a Hash Table. No need to login.

### 3. Run `npx aark-gen <hash>`
* Looks for the hash in database, retrieves the config and generates the files.
* User can also use a local config

- Add functionality to make possible to run custom templates?
- CLI?
- List custom configs in the website? Like a catalog?
- List custom presets/plugins in the website?

1st use case: Generating from a pre-existent template.
