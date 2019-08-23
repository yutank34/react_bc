let element =
    React.createElement(
        'a',
        { href: 'https://xkcd.com/222/' },
        React.createElement(
            'img',
            {
                src: "https://imgs.xkcd.com/comics/random_number.png",
                alt: "RFC 1149.5 specifies 4 as the standard IEEE-vetted random number.",
            }
        ),
        React.createElement(
            'span',
            null,
            'By Randall Munroe',
        )
    )

// console.log(element)
console.log(element.type)
// console.log(element.props)
console.log(element.props.children)
console.log(element.props.href)
console.log(element.props.children[0].type)
console.log(element.props.children[1].props.children)

ReactDOM.render(
    element,
    document.getElementById('root')
)
