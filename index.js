/**
 * deeres-utilities was developed by Gammapeit SAS
 *
 * @name                deeres-utilities
 * @version             1.0.1
 * @date                29/01/2018
 * @copyright           Gammapeit SAS (c) 2018
 * @companyURL          https://www.gammapeit.com
 * @platformURL         https://passqlub.com (http://bquest.co)
 */

const fs = require( 'fs' );

module.exports = {
	/**
	 * Paths for locations
	 */
	PATHS: {
		CDN: "cdn/", // Dependencies
		MODULES: "module/", // Developed modules
		CORE: "core/" // Core application public resources
	},
	/**
	 * Locations for menu
	 */
	MENU: {
		SIDEBAR: "SIDEBAR",
		CREATE: "CREATE",
		SETTINGS: "SETTINGS",
		CONTEXT: "CONTEXT"
	},
	/**
	 * Module location.
	 */
	LOCATION: {
		DASHBOARD: "DASHBOARD",
		PUBLIC: "PUBLIC"
	},
	/**
	 * Add custom action cards.
	 *
	 * @param callback
	 * @param location
	 * @param size
	 * @returns {{link: *, location: string, size: string}}
	 */
	addCard: ( callback, location = 'DESKTOP', size = 'FULL' ) => {
		return {
			link: callback,
			location: location,
			size: size
		}
	}
};