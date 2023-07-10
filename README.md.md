# UI of DOCENGINE

## To run project: npm run dev


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="http://localhost:5173/">
    <img src="https://firebasestorage.googleapis.com/v0/b/upload-image-b8776.appspot.com/o/images%2FLogo.png?alt=media&token=28366c6e-9c93-4f4f-a797-53e9e344ebb2&_gl=1*ijoch9*_ga*MTgxNTY1NDU3MS4xNjg1NTgyMzEx*_ga_CW55HF8NVT*MTY4NTU4MjMxMS4xLjEuMTY4NTU4MzMxOS4wLjAuMA.." alt="Logo">
  </a>
</p>
<h3 align="center">DocEngine</h3>

  <p align="center">
DocEngine is a platform that gives users the ability to create documents and manage those documents within the team.
    <br />
    <br />
    <!-- <a href=" ">View Demo</a> -->
  </p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a>
        <ul>
        <li><a href="#linux-and-mac-window">linux, mac, window </a></li>
        </ul>
    </li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
<li><a href="#what-we-have-done">What we have done</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

### Built With

- [ReactJS](https://react.dev/)
- [Tailwind](https://tailwindcss.com/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

<br />

#### Linux, Mac And Window

NOTE: this required node js installed on your pc


==Account for testing ==
username: sovannak.kheng0309@gmail.com
password: 12345

1. Clone the repo
   ```sh
   https://github.com/ksga-11th-generation-basic-course/document_engine_ui.git 
   ```
2. Change director to project root
   ```sh
   cd document_engine_ui
   ```
3. run start up script
   ```sh
   npm run dev
   ```

### Start

1. Start the project
   http://localhost:5173/
  
   <!-- USAGE EXAMPLES -->

## Usage

Authorize via credentail

```sh
http://localhost:5173/signup
```

Login via social login

```sh google, facebook
https://accounts.google.com/o/oauth2/v2/auth/identifier?scope=openid%20profile%20email&state=v3qgGSUGpufqYY97ZJBok3csxL8NSBp4iPj0XNFfzNI.PpdrGL3DvIM.orderup-front&response_type=code&client_id=363296073250-8t1642ut3o5370ed8vpm8t3qco9ldtct.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Ftos.orderup.homes%2Fauth%2Frealms%2Forderup-tower%2Fbroker%2Fgoogle%2Fendpoint&nonce=fAF_viuWklT-EFAqCNY-ig&service=lso&o2v=2&flowName=GeneralOAuthFlow

https://graph.facebook.com/oauth/authorize?scope=email&state=CT_YJGNq_SkFn3vxBmk2fc9McbdrAGyGTn-lNzf_y10.Y4FzwqUV06k.orderup-front&response_type=code&client_id=617783143145055&redirect_uri=https%3A%2F%2Ftos.orderup.homes%2Fauth%2Frealms%2Forderup-tower%2Fbroker%2Ffacebook%2Fendpoint
```

## What we have done

- [About us](http://localhost:5173/aboutus)
- [Landing page](http://localhost:5173/)
- [Contact us](http://localhost:5173/contactus)

(Homepage)

- [Dashboard](http://localhost:5173/dashboard)
- [Workspace](http://localhost:5173/workspace)
- [Document](http://localhost:5173/document/:workspaceId)
- [Document](http://localhost:5173/createdocument/:documentId/:workspaceId)
- [Document](http://localhost:5173/document/history/:historyId/:workspaceId)

(Fetch API)

- [Authentication]
- [Dashboard]
- [Workspace]
- [Document]
- [History]

## some error at workspace part
- import { Dropdown } from 'react-daisyui' for member
- import { Dropdown } from 'react-daisyui' for owner

## some cmd
- module: ng g m module_name (for main feature)
- component in module: ng g c module_name/component_name --module=module_name --skip-tests
- interface: ng g i model/name
- class: ng g class model/name --type=model --skip-tests 
- service: ng g s services/name --skip-tests

# Custom color
- 'primary' : '#1E9CEF',
- 'secondary' : '#F4F4F4',
- 'accent': '#526581',
- 'accent-2': '#9CA3AF',
- 'text-primary': '#37352F',