"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuArea = function (_React$Component) {
    _inherits(MenuArea, _React$Component);

    function MenuArea() {
        _classCallCheck(this, MenuArea);

        return _possibleConstructorReturn(this, (MenuArea.__proto__ || Object.getPrototypeOf(MenuArea)).apply(this, arguments));
    }

    _createClass(MenuArea, [{
        key: "render",
        value: function render() {
            return React.createElement(
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
            );
        }
    }]);

    return MenuArea;
}(React.Component);

var IntroArea = function (_React$Component2) {
    _inherits(IntroArea, _React$Component2);

    function IntroArea() {
        _classCallCheck(this, IntroArea);

        return _possibleConstructorReturn(this, (IntroArea.__proto__ || Object.getPrototypeOf(IntroArea)).apply(this, arguments));
    }

    _createClass(IntroArea, [{
        key: "render",
        value: function render() {
            return React.createElement(
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
            );
        }
    }]);

    return IntroArea;
}(React.Component);

var About = function (_React$Component3) {
    _inherits(About, _React$Component3);

    function About() {
        _classCallCheck(this, About);

        return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
    }

    _createClass(About, [{
        key: "render",
        value: function render() {
            return React.createElement(
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
                                { className: "box-about wow bounceInDown", "data-wow-delay": "0.1s" },
                                React.createElement("img", { src: "img/about/1.jpg", alt: "portret", className: "img-circle img-responsive" })
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "col-xs-12 col-sm-3 col-md-3 col-lg-3", "data-wow-delay": "0.3s" },
                            React.createElement(
                                "div",
                                { className: "box-about wow bounceInDown" },
                                React.createElement(
                                    "h4",
                                    null,
                                    "Briefly:"
                                ),
                                React.createElement(
                                    "p",
                                    null,
                                    "I'm Freelancer Web Developer and Student of FreeCodeCamp Full Stack Web Development"
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "col-xs-12 col-sm-3 col-md-3 col-lg-3", "data-wow-delay": "0.5s" },
                            React.createElement(
                                "div",
                                { className: "box-about wow bounceInDown" },
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
                            { className: "col-xs-12 col-sm-3 col-md-3 col-lg-3", "data-wow-delay": "0.7s" },
                            React.createElement(
                                "div",
                                { className: "box-about wow bounceInDown" },
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
            );
        }
    }]);

    return About;
}(React.Component);

var SpacerOne = function (_React$Component4) {
    _inherits(SpacerOne, _React$Component4);

    function SpacerOne() {
        _classCallCheck(this, SpacerOne);

        return _possibleConstructorReturn(this, (SpacerOne.__proto__ || Object.getPrototypeOf(SpacerOne)).apply(this, arguments));
    }

    _createClass(SpacerOne, [{
        key: "render",
        value: function render() {
            return React.createElement(
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
                                    { className: "wow bounceInDown", "data-wow-delay": "1s" },
                                    React.createElement(
                                        "q",
                                        null,
                                        "Education is the most powerful weapon which you can use to change the world."
                                    )
                                ),
                                React.createElement(
                                    "p",
                                    { className: "lead wow bounceInUp", "data-wow-delay": "2s" },
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
            );
        }
    }]);

    return SpacerOne;
}(React.Component);

function Works(props) {
    var styles = {
        color: "black"
    };

    return React.createElement(
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
                                            { style: styles },
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
                                        { style: styles },
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
                                            { style: styles },
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
                                            { style: styles },
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
                                            { style: styles },
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
                                            { style: styles },
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
                                React.createElement("img", { src: "img/works/thumbs/markup.jpg", alt: "markup" }),
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
                                React.createElement("img", { src: "img/works/markup.jpg", alt: "markup" }),
                                React.createElement(
                                    "div",
                                    null,
                                    React.createElement(
                                        "h3",
                                        null,
                                        React.createElement(
                                            "span",
                                            null,
                                            "MarkdownPreviewer"
                                        )
                                    ),
                                    React.createElement(
                                        "a",
                                        { href: "https://yevhensu.github.io/freeCodeCamp-Build-a-Markdown-Previewer/", target: "_blank" },
                                        React.createElement(
                                            "p",
                                            { style: styles },
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
                                            { style: styles },
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
    );
}

var SpacerTwo = function (_React$Component5) {
    _inherits(SpacerTwo, _React$Component5);

    function SpacerTwo() {
        _classCallCheck(this, SpacerTwo);

        return _possibleConstructorReturn(this, (SpacerTwo.__proto__ || Object.getPrototypeOf(SpacerTwo)).apply(this, arguments));
    }

    _createClass(SpacerTwo, [{
        key: "render",
        value: function render() {
            return React.createElement(
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
                                    { className: "wow bounceInDown", "data-wow-delay": "1s" },
                                    React.createElement(
                                        "q",
                                        null,
                                        "Great things are done by a series of small things brought together."
                                    )
                                ),
                                React.createElement(
                                    "p",
                                    { className: "lead wow bounceInUp", "data-wow-delay": "2s" },
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
            );
        }
    }]);

    return SpacerTwo;
}(React.Component);

var Contact = function (_React$Component6) {
    _inherits(Contact, _React$Component6);

    function Contact() {
        _classCallCheck(this, Contact);

        return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
    }

    _createClass(Contact, [{
        key: "render",
        value: function render() {
            return React.createElement(
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
                                    "+380(99) 736 40 98"
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
                                        { href: "susidka.yevhen@gmail.com" },
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
                                        { href: "https://www.linkedin.com/in/yevhen-susidka-253a6212a/", target: "_blank" },
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
            );
        }
    }]);

    return Contact;
}(React.Component);

var Footer = function (_React$Component7) {
    _inherits(Footer, _React$Component7);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: "render",
        value: function render() {
            return React.createElement(
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
                                "Copyright \xA92017 - 2019"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Footer;
}(React.Component);

var App = function (_React$Component8) {
    _inherits(App, _React$Component8);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(MenuArea, null),
                React.createElement(IntroArea, null),
                React.createElement(About, null),
                React.createElement(SpacerOne, null),
                React.createElement(Works, null),
                React.createElement(SpacerTwo, null),
                React.createElement(Contact, null),
                React.createElement(Footer, null)
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
