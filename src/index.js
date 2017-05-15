'use strict';
/**
 * ip filter, support blacklist & whitelist
 */
export default class extends think.middleware.base {
    /**
     * run
     * @return {Promise} []
     */
    async run() {
        let _this = this
        // console.log(this.http.type())
        if (this.http.type() !== "text/plain") {
            return;
        }
        return await this.http.getPayload().then(payload => {
            try {
                _this.http._post = JSON.parse(payload);
            } catch (e) {
                _this.http._post = {
                    rawValue: payload
                }
            }
        });
    }
}

