import React, { PropTypes } from 'react';
import objectToParams from './objectToParams';

export default class FacebookPrivateMessage extends React.Component 
{
  static propTypes = {
    buttonStyle: PropTypes.object,
    icon: PropTypes.any,
    isDisabled: PropTypes.bool,
    href: PropTypes.string,
    value: PropTypes.string
  }

  static defaultProps = {
     href: "",
     isDisabled: false,
     value: 'Private Message'
  }

  constructor (props) {
    super(props)
  }

  componentDidMount() {

  }

  privateMessageButtonClick = () => {
     if (this.props.isDisabled) {
      return;
     }
     FB.login(function(response) {
          if (response.authResponse) {
            FB.ui({
              method: 'send',
              link: privateMessageButton.getAttribute("href"),
            }, function(response){});
          }
     }, {scope: 'email,public_profile,publish_actions', 
     return_scopes: true});
  }

  containerStyle() {
    const style = { 
      transition: 'opacity 0.5s'
    };

    return Object.assign(style, this.props.containerStyle);
  }

  render() {
    const { buttonStyle, icon, href, value } = this.props;
    const isIconString = typeof icon === 'string';
    return (
    <div>
        <span style={this.containerStyle()}>
          <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
          <button
            id="privateMessageButton"
            type="button"
            style={ buttonStyle }
            className="kep-login-facebook metro"
            onClick={this.privateMessageButtonClick}
            href={this.props.href}>

            {icon && isIconString && (
            <i className={`fa ${icon}`}></i>
            )}
            {icon && !isIconString && icon}

            {value}
        </button>
        </span>
     </div>
    );
  }
}
