let createElement = React.createElement

let rootElement =
    createElement('div',{ className: 'ContactList' },
        createElement('h1', { className: 'ContactList-title' }, "Contacts"),
        createElement('div', {},
            createElement(
                'div',
                { className: 'Contact' },
                createElement('div', { className: 'Contact-avatar' }, "JN"),
                createElement('span', { className: 'Contact-name' }, "James Nelson"),
                createElement(
                    'a',
                    { href: 'mailto:james@frontarm.com' },
                    "james@frontarm.com",
                ),
            ),
            createElement(
                'div',
                { className: 'Contact' },
                createElement('div', { className: 'Contact-avatar' }, "M"),
                createElement('span', { className: 'Contact-name' }, "ME"),
                createElement(
                    'a',
                    { href: 'mailto:me@example.com' },
                    "me@example.com"
                )
            )
        )
    )

let domNode = document.getElementById('root')
ReactDOM.render(rootElement, domNode)

