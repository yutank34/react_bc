let rootElement =
    <div>
        <div class="ContactList">
            <h2 class="ContactList-title">Contacts</h2>
            <div class="Contact">
                <div class="Contact-avatar">JN</div>
                <span class="Contact-name">James Nelson</span>
                <a href="mailto:james@frontarm.com">james@frontarm.com</a>
            </div>
        </div>
    </div>

let domNode = document.getElementById('root')
ReactDOM.render(rootElement, domNode)
