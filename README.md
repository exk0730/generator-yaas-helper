# generator-yaas-helper
> Generator (helper) for [Yet Another Angular2 Starter](https://github.com/exk0730/yet-another-ng2-starter)

## Purpose
This generator does not currently set up an entire project for you, it is a simple tool for generating boilerplate code. You should
use this if you want to cut down on development time when you're creating a new feature in the *Yet Another Angular2 Starter* context. 

## Installation

First, install [Yeoman](http://yeoman.io) using [npm](https://www.npmjs.com/).
```bash
npm install -g yo
```

Make sure you clone this repository and [Yet Another Angular2 Starter](https://github.com/exk0730/yet-another-ng2-starter).
```bash
git clone https://github.com/exk0730/yet-another-ng2-starter
git clone https://github.com/exk0730/generator-yaas-helper
```


Now we have to link the generator to npm so we can use it globally:
```bash
cd generator-yaas-helper
npm link
```

## Usage

```bash
cd path/to/yet-another-ng2-starter
yo yaas-helper
```
You will be given 4 prompts to help set up your new *feature* component.

##### Feature Name
The name of your new feature. This should be entered in `camelCase`. All classnames and file names will be derived from this
input.

##### Destination Path
By default, your feature will be placed in `src/app/FEATURE_NAME`. If you wish to change it (for example, if you want your
component to be inside a different feature folder), you can specify the explicit path.

##### Smart vs Dumb Component
Read about smart vs dumb components (here)[https://gist.github.com/btroncone/a6e4347326749f938510#utilizing-container-components].
The gist is, if your feature should have access to the store (including reducers, actions, and effects), you should create
a **smart** component. If your component doesn't need access to the store at all, it's probably a **dumb** component, or 
a component that is for simple `Input` and `Output`.

##### Service?
Does your component need to make an HTTP request? Does your component have a lot of complex business logic or calculations? 
You probably need a service file. 

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).
