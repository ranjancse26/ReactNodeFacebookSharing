# React Facebook Sharing - 

> A Component React for Facebook Sharing

## Getting Started

```shell
git clone https://github.com/ranjancse26/ReactNodeFacebookSharing.git && cd ReactNodeFacebookSharing
npm install react react-dom react-facebook-login --save
```

## Development
```shell
npm start
```

- navigate to [localhost:8080](http://localhost:8080)

## How to use

### Basic
```js
import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
}

ReactDOM.render(
  <FacebookLogin
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />,
  document.getElementById('demo')
);
```

### Custom CSS Class and Icon
By default fontawesome is included, If you don't want to use default fontawesome icons, you can send an element in icon attribute

Fontawesome example:
```js

import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
}

ReactDOM.render(
  <FacebookLogin
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook}
    cssClass="my-facebook-button-class"
    icon="fa-facebook"
  />,
  document.getElementById('demo')
);
```

Custom element example:
```js

import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import TiSocialFacebookCircular from 'react-icons/lib/ti/social-facebook-circular';

const responseFacebook = (response) => {
  console.log(response);
}

ReactDOM.render(
  <FacebookLogin
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook}
    cssClass="my-facebook-button-class"
    icon={<TiSocialFacebookCircular />}
  />,
  document.getElementById('demo')
);
```

### Custom permission
By default the component, request only 'public_profile' permission, you can change if you send 'scope', that is a string comma separated attribute.

see https://developers.facebook.com/docs/facebook-login/permissions for permissions list

```js
  import React from 'react';
  import FacebookLogin from 'react-facebook-login';

  class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    };

    responseFacebook = (response) => {
      console.log(response);
    };

    render() {
      return (
        <FacebookLogin
          appId="1088597931155576"
          autoLoad={true}
          fields="name,email,picture"
          scope="public_profile,user_friends,user_actions.books"
          callback={responseFacebook}
        />
      )
    }
  }
```

### Server
```js
'use strict';

import React from 'react';
import FacebookLogin from 'react-facebook-login';

class MyComponent extends React.Component {
  constructor(props) {
      super(props);
  };

  responseFacebook = (response) => {
    console.log(response);
  };

  render() {
    return (
      <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
      />
    )
  }
}

export default MyComponent;
```

