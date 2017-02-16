# React Facebook Sharing - 

> Collection of React based Components for Facebook Sharing

## Getting Started

```shell
git clone https://github.com/ranjancse26/ReactNodeFacebookSharing.git && cd ReactNodeFacebookSharing
```

## Development

First do an npm update and then

```shell
npm start
```

- navigate to [localhost:8080](http://localhost:8080)

## How to use

### Basic
```js
import FacebookLogin from '../src/facebookLogin';
import FacebookShare from '../src/facebookShare';
import FacebookPrivateMessage from '../src/facebookPrivateMessage'
import InvitationEditor from '../src/invitationEditor'

class Base extends Component {
  render() {
    var editorDefaultValue = 
    "Dear ---------,\n\nYou're an amazing person --------- and even more\nimpressive engineer and innovator.\n\nYou are so good at ---------,\n\nSo join me on Collaborizm!\n\nSincerely,\nSteve";

    return (
      <div className="divCenter">
      <table>
        <tbody>
          <tr>
            <td>
              <FacebookLogin
                  appId="239852546096624"
                  buttonStyle={{ fontSize: 15 }}
                  callback={responseFacebook}
                  icon="fa-facebook"
                  cssClass = "hidden"
                  />
            </td>
            <td width="310px">
              <FacebookPrivateMessage
                 buttonStyle={ { fontSize: 15 } }
                 icon="fa-facebook"
                 href="https://www.collaborizm.com"
                />
            </td>
            <td>
                <FacebookShare
                 buttonStyle={ { fontSize: 15 } }
                 icon="fa-facebook"
                 href="https://www.collaborizm.com"
                />
            </td>
          </tr>
        </tbody>
      </table>
      <br/>
      <InvitationEditor
       value={editorDefaultValue}/>
      </div>
    );
  }
}

const responseFacebook = (response) => {
  console.log(response);
};

ReactDOM.render(
  <Base/>,
  document.getElementById('demo')
);
```

Custom element example:
```js

import FacebookLogin from '../src/facebookLogin';
import FacebookShare from '../src/facebookShare';
import FacebookPrivateMessage from '../src/facebookPrivateMessage'
import InvitationEditor from '../src/invitationEditor'

 <FacebookLogin
    appId="239852546096624"
    buttonStyle={{ fontSize: 15 }}
    callback={responseFacebook}
    icon="fa-facebook"
    cssClass = "hidden"
/>

<FacebookPrivateMessage
    buttonStyle={ { fontSize: 15 } }
    icon="fa-facebook"
    href="https://www.collaborizm.com"
/>

<FacebookShare
    buttonStyle={ { fontSize: 15 } }
    icon="fa-facebook"
    href="https://www.collaborizm.com"
/>

<InvitationEditor
   value={editorDefaultValue}/>
```

## Reused code

Note - The Facebook React Login component is reused from 
https://github.com/keppelen/react-facebook-login



