import React from "react";
import { Button } from "react-bootstrap";

/**
 * Props used:
 * imageSource - Path to image, passed with required("/path/to/image")
 * imageAlt - Alt for image
 * details - Usually text about the project / experience
 * logos - An array of logos of the involved tools used
 *    - source: Passed with required("/path/to/image")
 *    - alt: Alt of image
 * buttons - An array of buttons for links and whatnot
 *    - link: http string to website
 *    - text: text on the button
 *    - variant: variant of the button, by Bootstrap
 */
class Snippet extends React.Component {
  render() {
    return (
      <div className="snippet">
        <div className="image">
          <img src={this.props.imageSource} alt={this.props.imageAlt}></img>
        </div>

        <div className="detail">
          <div className="vertical-groups">
            {this.props.details}
            <div className="detail-eye-candy horizontal-groups center-centric">
              <div className="logos">
                {
                  this.props.logos ? 
                    this.props.logos.map(function(logo) {
                      return <img src={logo.source} alt={logo.alt} height={100}></img>
                    })
                    : <></>
                }
              </div>
              <div className="buttons">
                {
                  this.props.buttons ?
                    this.props.buttons.map(function(button) {
                      return <a href={button.link} target="_blank" rel="noreferrer">
                        <Button variant={button.variant}>{button.text}</Button>
                      </a>
                    })
                    : <></>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    ) 
  }
}


export default Snippet;