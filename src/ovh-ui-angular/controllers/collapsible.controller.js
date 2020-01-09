export default class {
    constructor () {
        this.delay = 1000;
        this.expanded = false;
    }

    getContent () {
        const second = 1000;

        // Simulate deferred promise
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis semper ligula nec fringilla tempor. In rhoncus
                    ullamcorper feugiat. Phasellus vel ipsum vitae neque
                    varius luctus. Proin id iaculis arcu. Fusce justo arcu,
                    egestas vel nulla nec, dictum cursus lacus. Aenean
                    elementum vel odio quis rutrum. In quis tellus in neque
                    vulputate rhoncus vitae ut justo. Ut dignissim varius est
                    in consequat. Donec nisi mauris, pellentesque condimentum
                    congue in, blandit ut arcu. In et elit ipsum.`);
            }, this.delay + (second * Math.random()));
        });
    }

    onToggle (expanded, scope) {
        if (!this.content && expanded) {
            this.loading = true;

            // Simulate a promise with a timeout
            this.getContent()
                .then((content) => {
                    this.loading = false;
                    this.content = content;

                    // Need to $digest to apply the changes with the timeout
                    // Could be resolved with $timeout or $q too
                    scope.$digest();
                });
        }
    }
}
