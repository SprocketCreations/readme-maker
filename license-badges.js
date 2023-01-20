class License  {
	constructor(displayName, shortName, badge) {
		this.displayName = displayName;
		this.shortName = shortName;
		this.badge = badge;
	}
}
// Yoinked from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
const licenses = [
	new License("Apache 2.0 License", "Apache 2.0", "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"),
	new License("Boost Software License 1.0", "Boost 1.0", "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"),
	new License("BSD 3-Clause License", "BSD 3-Clause", "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"),
	new License("BSD 2-Clause License", "BSD 2-Clause", "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"),
	new License("CC0", "CC0-1.0", "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"),
	new License("Attribution 4.0 International", "CC BY 4.0", "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)"),
	new License("Attribution-ShareAlike 4.0 International", "CC BY-SA 4.0", "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)"),
	new License("Attribution-NonCommercial 4.0 International", "CC BY-NC 4.0", "[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)"),
	new License("Attribution-NoDerivates 4.0 International", "CC BY-ND 4.0", "[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)"),
	new License("Attribution-NonCommmercial-ShareAlike 4.0 International", "CC BY-NC-SA 4.0", "[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)"),
	new License("Attribution-NonCommercial-NoDerivatives 4.0 International", "CC BY-NC-ND 4.0", "[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)"),
	new License("", "IPL 1.0", "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"),
	new License("", "ICL", "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"),
	new License("", "MIT", "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"),
	new License("", "MPL 2.0", "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"),
	new License("", "Open Data Commons Attribution", "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)"),
	new License("The Unlicense", "Unlicense", "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"),
];

module.exports = {
	licenses,
}