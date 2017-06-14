"use strict";

var NewComponent = React.createClass({
  displayName: "NewComponent",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "menu-area" },
        React.createElement(
          "div",
          { id: "dl-menu", className: "dl-menuwrapper" },
          React.createElement(
            "button",
            { className: "dl-trigger" },
            "Open Menu"
          ),
          React.createElement(
            "ul",
            { className: "dl-menu" },
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#intro" },
                "Home"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#about" },
                "About"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#works" },
                "Works"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#contact" },
                "Contact"
              )
            )
          )
        )
      ),
      React.createElement(
        "div",
        { id: "intro" },
        React.createElement(
          "div",
          { className: "intro-text" },
          React.createElement(
            "div",
            { className: "container" },
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "div",
                { className: "col-md-12" },
                React.createElement(
                  "div",
                  { className: "brand" },
                  React.createElement(
                    "h1",
                    null,
                    React.createElement(
                      "a",
                      { href: "index.html" },
                      "Yevhen Susidka"
                    )
                  ),
                  React.createElement("div", { className: "line-spacer" }),
                  React.createElement(
                    "p",
                    null,
                    React.createElement(
                      "span",
                      null,
                      "Web development"
                    )
                  )
                )
              )
            )
          )
        )
      ),
      React.createElement(
        "section",
        { id: "about", className: "home-section bg-white" },
        React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-md-offset-2 col-md-8" },
              React.createElement(
                "div",
                { className: "section-heading" },
                React.createElement(
                  "h2",
                  null,
                  "About me"
                ),
                React.createElement(
                  "h5",
                  null,
                  "Falling in Love with Web Development."
                ),
                React.createElement(
                  "p",
                  null,
                  "Kyiv, Ukraine."
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-xs-12 col-sm-3 col-md-3 col-lg-3" },
              React.createElement(
                "div",
                null,
                React.createElement("img", { src: "img/about/1.jpg", alt: "portret", className: "img-circle img-responsive" })
              )
            ),
            React.createElement(
              "div",
              { className: "col-xs-12 col-sm-3 col-md-3 col-lg-3" },
              React.createElement(
                "div",
                null,
                React.createElement(
                  "h4",
                  null,
                  "Briefly:"
                ),
                React.createElement(
                  "p",
                  null,
                  "I'm Self-employed Web Developer Learning Full Stack Web Development at freeCodeCamp"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "col-xs-12 col-sm-3 col-md-3 col-lg-3" },
              React.createElement(
                "div",
                null,
                React.createElement(
                  "h4",
                  null,
                  "Competences:"
                ),
                React.createElement(
                  "ul",
                  null,
                  React.createElement(
                    "li",
                    { className: "text-left" },
                    "HTML"
                  ),
                  React.createElement(
                    "li",
                    { className: "text-left" },
                    "CSS"
                  ),
                  React.createElement(
                    "li",
                    { className: "text-left" },
                    "javaScript"
                  ),
                  React.createElement(
                    "li",
                    { className: "text-left" },
                    "Bootstrap"
                  ),
                  React.createElement(
                    "li",
                    { className: "text-left" },
                    "JQuery"
                  ),
                  React.createElement(
                    "li",
                    { className: "text-left" },
                    "JSON"
                  ),
                  React.createElement(
                    "li",
                    { className: "text-left" },
                    "AJAX"
                  ),
                  React.createElement(
                    "li",
                    { className: "text-left" },
                    "Git/GitHub"
                  ),
                  React.createElement(
                    "li",
                    { className: "text-left" },
                    "Gulp"
                  ),
                  React.createElement(
                    "li",
                    { className: "text-left" },
                    "Linux"
                  ),
                  React.createElement(
                    "li",
                    { className: "text-left" },
                    "React.js"
                  ),
                  React.createElement(
                    "li",
                    { className: "text-left" },
                    "Angular.js"
                  ),
                  React.createElement(
                    "li",
                    { className: "text-left" },
                    "NODE.js"
                  ),
                  React.createElement(
                    "li",
                    { className: "text-left" },
                    "Express.js"
                  )
                )
              )
            ),
            React.createElement(
              "div",
              { className: "col-xs-12 col-sm-3 col-md-3 col-lg-3" },
              React.createElement(
                "div",
                null,
                React.createElement(
                  "h4",
                  null,
                  "Certificates:"
                ),
                React.createElement(
                  "p",
                  null,
                  React.createElement(
                    "a",
                    { href: "https://www.freecodecamp.com/yevhensu/front-end-certification", target: "_blank" },
                    "Certificate of Completed Free Code Camp's Front End Development Program"
                  )
                )
              )
            )
          )
        )
      ),
      React.createElement(
        "section",
        { id: "spacer1", className: "home-section spacer" },
        React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-md-12" },
              React.createElement(
                "div",
                { className: "color-light" },
                React.createElement(
                  "h2",
                  null,
                  React.createElement(
                    "q",
                    null,
                    "Education is the most powerful weapon which you can use to change the world."
                  )
                ),
                React.createElement(
                  "p",
                  null,
                  React.createElement(
                    "cite",
                    null,
                    "Nelson Mandela"
                  )
                )
              )
            )
          )
        )
      ),
      React.createElement(
        "section",
        { id: "works", className: "home-section bg-grey" },
        React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-md-offset-2 col-md-8" },
              React.createElement(
                "div",
                { className: "section-heading" },
                React.createElement(
                  "h2",
                  null,
                  "Works"
                ),
                React.createElement(
                  "p",
                  null,
                  "Here is presented part of works developed with modern technologies and frameworks."
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-md-offset-2 col-md-8" },
              React.createElement(
                "ul",
                { className: "lb-album" },
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "a",
                    { href: "#image-1" },
                    React.createElement("img", { src: "img/works/thumbs/calculator.jpg", alt: "calculator" }),
                    React.createElement(
                      "span",
                      null,
                      "+"
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "lb-overlay", id: "image-1" },
                    React.createElement(
                      "a",
                      { href: "#page", className: "lb-close" },
                      "X"
                    ),
                    React.createElement("img", { src: "img/works/calculator.jpg", alt: "calculator" }),
                    React.createElement(
                      "div",
                      null,
                      React.createElement(
                        "h3",
                        null,
                        React.createElement(
                          "span",
                          null,
                          "Calculator"
                        )
                      ),
                      React.createElement(
                        "a",
                        { href: "https://yevhensu.github.io/Calculator_freeCodeCamp/", target: "_blank" },
                        React.createElement(
                          "p",
                          { style: { color: 'black' } },
                          "Details"
                        )
                      )
                    )
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "a",
                    { href: "#image-2" },
                    React.createElement("img", { src: "img/works/thumbs/krasa.jpg", alt: "website" }),
                    React.createElement(
                      "span",
                      null,
                      "+"
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "lb-overlay", id: "image-2" },
                    React.createElement(
                      "a",
                      { href: "#page", className: "lb-close" },
                      "x Close"
                    ),
                    React.createElement("img", { src: "img/works/krasa.jpg", alt: "website" }),
                    React.createElement(
                      "div",
                      null,
                      React.createElement(
                        "h3",
                        null,
                        React.createElement(
                          "span",
                          null,
                          "Beauty Salon"
                        )
                      ),
                      React.createElement(
                        "p",
                        { style: { color: 'black' } },
                        "Back End feat. NODE.js"
                      )
                    )
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "a",
                    { href: "#image-3" },
                    React.createElement("img", { src: "img/works/thumbs/localWeather.jpg", alt: "localWeather" }),
                    React.createElement(
                      "span",
                      null,
                      "+"
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "lb-overlay", id: "image-3" },
                    React.createElement(
                      "a",
                      { href: "#page", className: "lb-close" },
                      "x Close"
                    ),
                    React.createElement("img", { src: "img/works/localWeather.jpg", alt: "localWeather" }),
                    React.createElement(
                      "div",
                      null,
                      React.createElement(
                        "h3",
                        null,
                        React.createElement(
                          "span",
                          null,
                          "Local Weather"
                        )
                      ),
                      React.createElement(
                        "a",
                        { href: "http://codepen.io/YevhenSusidka/full/oWzYoN/", target: "_blank" },
                        React.createElement(
                          "p",
                          { style: { color: 'black' } },
                          "Details"
                        )
                      )
                    )
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "a",
                    { href: "#image-4" },
                    React.createElement("img", { src: "img/works/thumbs/TwitchWatcher.jpg", alt: "TwitchWatcher" }),
                    React.createElement(
                      "span",
                      null,
                      "+"
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "lb-overlay", id: "image-4" },
                    React.createElement(
                      "a",
                      { href: "#page", className: "lb-close" },
                      "x Close"
                    ),
                    React.createElement("img", { src: "img/works/TwitchWatcher.jpg", alt: "TwitchWatcher" }),
                    React.createElement(
                      "div",
                      null,
                      React.createElement(
                        "h3",
                        null,
                        React.createElement(
                          "span",
                          null,
                          "TwitchWatcher"
                        )
                      ),
                      React.createElement(
                        "a",
                        { href: "https://yevhensu.github.io/TwitchWatcher_freeCodeCamp/", target: "_blank" },
                        React.createElement(
                          "p",
                          { style: { color: 'black' } },
                          "Details"
                        )
                      )
                    )
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "a",
                    { href: "#image-5" },
                    React.createElement("img", { src: "img/works/thumbs/pomodoroClock.jpg", alt: "pomodoroClock" }),
                    React.createElement(
                      "span",
                      null,
                      "+"
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "lb-overlay", id: "image-5" },
                    React.createElement(
                      "a",
                      { href: "#page", className: "lb-close" },
                      "X"
                    ),
                    React.createElement("img", { src: "img/works/pomodoroClock.jpg", alt: "pomodoroClock" }),
                    React.createElement(
                      "div",
                      null,
                      React.createElement(
                        "h3",
                        null,
                        React.createElement(
                          "span",
                          null,
                          "pomodoroClock"
                        )
                      ),
                      React.createElement(
                        "a",
                        { href: "https://yevhensu.github.io/PomodoroClock_freeCodeCamp/", target: "_blank" },
                        React.createElement(
                          "p",
                          { style: { color: 'black' } },
                          "Details"
                        )
                      )
                    )
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "a",
                    { href: "#image-6" },
                    React.createElement("img", { src: "img/works/thumbs/wikipediaViewer.jpg", alt: "wikipediaViewer" }),
                    React.createElement(
                      "span",
                      null,
                      "+"
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "lb-overlay", id: "image-6" },
                    React.createElement(
                      "a",
                      { href: "#page", className: "lb-close" },
                      "x Close"
                    ),
                    React.createElement("img", { src: "img/works/wikipediaViewer.jpg", alt: "wikipediaViewer" }),
                    React.createElement(
                      "div",
                      null,
                      React.createElement(
                        "h3",
                        null,
                        React.createElement(
                          "span",
                          null,
                          "WikipediaViewer"
                        )
                      ),
                      React.createElement(
                        "a",
                        { href: "https://yevhensu.github.io/WikipediaViewer_freeCodeCamp/", target: "_blank" },
                        React.createElement(
                          "p",
                          { style: { color: 'black' } },
                          "Details"
                        )
                      )
                    )
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "a",
                    { href: "#image-7" },
                    React.createElement("img", { src: "img/works/thumbs/krasa_2.jpg", alt: "website" }),
                    React.createElement(
                      "span",
                      null,
                      "+"
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "lb-overlay", id: "image-7" },
                    React.createElement(
                      "a",
                      { href: "#page", className: "lb-close" },
                      "x Close"
                    ),
                    React.createElement("img", { src: "img/works/krasa_2.jpg", alt: "website" }),
                    React.createElement(
                      "div",
                      null,
                      React.createElement(
                        "h3",
                        null,
                        React.createElement(
                          "span",
                          null,
                          "Beauty Salon"
                        )
                      ),
                      React.createElement(
                        "p",
                        { style: { color: 'black' } },
                        "Back End feat. NODE.js"
                      )
                    )
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "a",
                    { href: "#image-8" },
                    React.createElement("img", { src: "img/works/thumbs/ticTacToe.jpg", alt: "ticTacToe" }),
                    React.createElement(
                      "span",
                      null,
                      "+"
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "lb-overlay", id: "image-8" },
                    React.createElement(
                      "a",
                      { href: "#page", className: "lb-close" },
                      "x Close"
                    ),
                    React.createElement("img", { src: "img/works/ticTacToe.jpg", alt: "ticTacToe" }),
                    React.createElement(
                      "div",
                      null,
                      React.createElement(
                        "h3",
                        null,
                        React.createElement(
                          "span",
                          null,
                          "ticTacToe"
                        )
                      ),
                      React.createElement(
                        "a",
                        { href: "https://yevhensu.github.io/ticTacToe_freeCodeCamp/", target: "_blank" },
                        React.createElement(
                          "p",
                          { style: { color: 'black' } },
                          "Details"
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      ),
      React.createElement(
        "section",
        { id: "spacer2", className: "home-section spacer" },
        React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-md-12" },
              React.createElement(
                "div",
                { className: "color-light" },
                React.createElement(
                  "h2",
                  null,
                  React.createElement(
                    "q",
                    null,
                    "Great things are done by a series of small things brought together."
                  )
                ),
                React.createElement(
                  "p",
                  null,
                  React.createElement(
                    "cite",
                    null,
                    "Vincent Van Gogh"
                  )
                )
              )
            )
          )
        )
      ),
      React.createElement(
        "section",
        { id: "contact", className: "home-section bg-white" },
        React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-md-offset-2 col-md-8" },
              React.createElement(
                "div",
                { className: "section-heading" },
                React.createElement(
                  "h2",
                  null,
                  "Contact me"
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-md-offset-1 col-md-10" },
              React.createElement(
                "p",
                null,
                "Phone:",
                React.createElement(
                  "strong",
                  null,
                  "+38(099) 736 40 98"
                )
              ),
              React.createElement(
                "p",
                null,
                "Email:",
                React.createElement(
                  "strong",
                  null,
                  React.createElement(
                    "a",
                    { href: "mailto:susidka.yevhen@gmail.com" },
                    "susidka.yevhen@gmail.com"
                  )
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "row mar-top30 " },
            React.createElement(
              "div",
              { className: "col-md-offset-2 col-md-8" },
              React.createElement(
                "ul",
                { className: "social-network" },
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "a",
                    { href: "https://www.facebook.com/yevhen.susidka", target: "_blank" },
                    React.createElement(
                      "span",
                      { className: "fa-stack fa-2x" },
                      React.createElement("i", { className: "fa fa-circle fa-stack-2x" }),
                      React.createElement("i", { className: "fa fa-facebook fa-stack-1x fa-inverse" })
                    )
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "a",
                    { href: "https://www.linkedin.com/in/yevhen-susidka/", target: "_blank" },
                    React.createElement(
                      "span",
                      { className: "fa-stack fa-2x" },
                      React.createElement("i", { className: "fa fa-circle fa-stack-2x" }),
                      React.createElement("i", { className: "fa fa-linkedin fa-stack-1x fa-inverse" })
                    )
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "a",
                    { href: "https://twitter.com/Yevhen_Susidka", target: "_blank" },
                    React.createElement(
                      "span",
                      { className: "fa-stack fa-2x" },
                      React.createElement("i", { className: "fa fa-circle fa-stack-2x" }),
                      React.createElement("i", { className: "fa fa-twitter fa-stack-1x fa-inverse" })
                    )
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "a",
                    { href: "https://www.freecodecamp.com/yevhensu", target: "_blank" },
                    React.createElement(
                      "span",
                      { className: "fa-stack fa-2x" },
                      React.createElement("i", { className: "fa fa-circle fa-stack-2x" }),
                      React.createElement("i", { className: "fa fa-fire fa-stack-1x fa-inverse" })
                    )
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "a",
                    { href: "https://github.com/YevhenSu", target: "_blank" },
                    React.createElement(
                      "span",
                      { className: "fa-stack fa-2x" },
                      React.createElement("i", { className: "fa fa-circle fa-stack-2x" }),
                      React.createElement("i", { className: "fa fa-github fa-stack-1x fa-inverse" })
                    )
                  )
                )
              )
            )
          )
        )
      ),
      React.createElement(
        "footer",
        null,
        React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-md-12" },
              React.createElement(
                "p",
                null,
                "Copyright \xA92017"
              )
            )
          )
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(NewComponent), document.getElementById("app"));
