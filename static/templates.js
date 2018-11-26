angular.module("templates.app", ["about.tpl.html", "api.tpl.html", "cite-page.tpl.html", "landing.tpl.html", "modify-your-citation.tpl.html", "page-not-found.tpl.html", "sources.tpl.html"]);

angular.module("about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about.tpl.html",
    "<div class=\"page about\" layout=\"row\" layout-align=\"center center\">\n" +
    "    <div class=\"content\">\n" +
    "        <h2>About</h2>\n" +
    "        <div class=\"text\">\n" +
    "            <p>\n" +
    "                CiteAs is a way to\n" +
    "                 get the correct citation for diverse research products including,\n" +
    "                software, datasets, preprints, and traditional articles. By making it easier\n" +
    "                to cite software and other \"alternative\" scholarly products, we aim to help\n" +
    "                the creators of such products get full credit for their work.\n" +
    "            </p>\n" +
    "            <p>\n" +
    "                CiteAs is a small part of <a href=\"http://blog.impactstory.org/collaborating-635k-grant-improve-credit-research-software/\">\n" +
    "                    a collaborative grant\n" +
    "                </a> between <a href=\"http://impactstory.org\">Impactstory</a> and\n" +
    "                <a href=\"http://james.howison.name/\">James Howison</a> at the\n" +
    "                University of Texas-Austin. Funded by the Alfred P. Sloan Foundation,\n" +
    "                the focus of this grant is to create a big database of research software, automatically extracted\n" +
    "                from millions of open-access scholarly articles using machine-learning techniques.\n" +
    "                Along with the database, we'll also make three small prototype applications to show\n" +
    "                off how the data can be used in cool ways. CiteAs is one of these applications.\n" +
    "            </p>\n" +
    "            <p>\n" +
    "                We're still working on creating the database. But while that's in progress,\n" +
    "                we thought it'd be cool to release CiteAs, even though it still is missing the majority\n" +
    "                of data it will ultimately use. Feel free to kick the tires, and let us know what you think!\n" +
    "\n" +
    "            </p>\n" +
    "\n" +
    "            <p>\n" +
    "                And stay tuned! We'll be building the database in 2018, and expect to have that data live in\n" +
    "                CiteAs by 2019.\n" +
    "            </p>\n" +
    "            \n" +
    "\n" +
    "            <h3>But wait there's more!</h3>\n" +
    "            <ul>\n" +
    "                <li>Learn more about <a href=\"sources\">how CiteAs finds citation information</a></li>\n" +
    "                <li>Want to change how CiteAs lists your project?\n" +
    "                    <a href=\"modify-your-citation\">Here's how.</a></li>\n" +
    "                <li>Check out the\n" +
    "                    <a href=\"https://github.com/Impactstory/citeas-webapp\">\n" +
    "                        source code for this website\n" +
    "                    </a>\n" +
    "                </li>\n" +
    "                <li>Check out the\n" +
    "                    <a href=\"https://github.com/Impactstory/citeas-webapp\">\n" +
    "                        source code for the CiteAs API\n" +
    "                    </a>\n" +
    "                </li>\n" +
    "                <li>Report bugs or request features via the project's <a\n" +
    "                        href=\"https://github.com/Impactstory/citeas-api/issues\">GitHub Issues</a>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("api.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("api.tpl.html",
    "<div class=\"page api\" layout=\"row\" layout-align=\"center center\">\n" +
    "    <div class=\"content\">\n" +
    "        <h2>API</h2>\n" +
    "        <div class=\"text\">\n" +
    "            <p>\n" +
    "                The CiteAs API powers this website, and is also available for\n" +
    "                use in your own projects. Soon we'll have documentation for the API\n" +
    "                here.\n" +
    "            </p>\n" +
    "            <p>\n" +
    "                In the meantime, though, feel free to play around with it. There's just one main endpoint, which\n" +
    "                gets citation information for a project given a DOI or URL. Here's\n" +
    "                an example:\n" +
    "            </p>\n" +
    "            <code>\n" +
    "                <a href=\"http://api.citeas.org/product/http://yt-project.org\">\n" +
    "                    http://api.citeas.org/product/http://yt-project.org\n" +
    "                </a>\n" +
    "            </code>\n" +
    "\n" +
    "            <p>\n" +
    "                The returned data is pretty self-documenting,\n" +
    "                but feel free to drop us a line if you run into any trouble. We'll have more\n" +
    "                docs up here before too long. Happy coding!\n" +
    "            </p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("cite-page.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cite-page.tpl.html",
    "<div class=\"page cite-page\">\n" +
    "\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"main\">\n" +
    "            <div class=\"loading\"\n" +
    "                 ng-show=\"apiResp=='loading'\">\n" +
    "                <span class=\"label\">Building your citation&hellip;</span>\n" +
    "                <md-progress-linear md-mode=\"indeterminate\"></md-progress-linear>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"error\" ng-show=\"apiResp=='error'\">\n" +
    "                <h2>Sorry!</h2>\n" +
    "                <div class=\"text\">\n" +
    "                    <p>\n" +
    "                        We weren't able to figure out a citation for this research product.\n" +
    "                    </p>\n" +
    "                    <p>\n" +
    "                        Here is more information on <a href=\"sources\">where we look</a>, and some tips on\n" +
    "                        <a href=\"/modify-your-citation\">how to modify the citation suggestions</a> for your software\n" +
    "                        projects.\n" +
    "                    </p>\n" +
    "                    <p>\n" +
    "                        Please\n" +
    "                        <a class=\"action\" ng-click=\"NotExpected()\">let us know</a> about any bugs and\n" +
    "                        we'll\n" +
    "                        get them fixed!\n" +
    "                    </p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"citation animated fadeIn\" ng-show=\"apiResp.citations\">\n" +
    "                <div class=\"heading\">\n" +
    "                    <h1>\n" +
    "                        {{ apiResp.name }}\n" +
    "                    </h1>\n" +
    "                    <div class=\"metadata\">\n" +
    "                        <a href=\"{{ apiResp.url }}\"><i class=\"fa fa-external-link\"></i> view website</a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "\n" +
    "                <div class=\"citation-options\">\n" +
    "                    <h2 class=\"label\">Cite this project as:</h2>\n" +
    "                    <md-input-container>\n" +
    "                        <md-select ng-model=\"user.selectedCitation\">\n" +
    "                            <md-option ng-repeat=\"myCitationObj in apiResp.citations\"\n" +
    "                                       ng-value=\"myCitationObj\">\n" +
    "                                {{ myCitationObj.style_fullname }}\n" +
    "                            </md-option>\n" +
    "                        </md-select>\n" +
    "                    </md-input-container>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div id=\"citation\" class=\"text\" ng-bind-html=\"user.selectedCitation.citation\">\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"under-citation\">\n" +
    "                    <div class=\"export-options\">\n" +
    "\n" +
    "                        <md-button ng-click=\"copy()\" class=\"md-raised\">\n" +
    "                            <i class=\"fa fa-clipboard\"></i>\n" +
    "                            Copy\n" +
    "                        </md-button>\n" +
    "\n" +
    "\n" +
    "                        <md-menu>\n" +
    "                            <md-button ng-click=\"openMenu($mdOpenMenu, $event)\">\n" +
    "                                <i class=\"fa fa-download\"></i>\n" +
    "                                Download\n" +
    "                            </md-button>\n" +
    "\n" +
    "                            <md-menu-content width=\"4\">\n" +
    "                                <md-menu-item>\n" +
    "                                    <md-button ng-click=\"saveAs('endnote')\">\n" +
    "                                        Endnote\n" +
    "                                    </md-button>\n" +
    "                                </md-menu-item>\n" +
    "\n" +
    "                                <md-menu-item>\n" +
    "                                    <md-button ng-click=\"saveAs('refworks')\">\n" +
    "                                        Refworks\n" +
    "                                    </md-button>\n" +
    "                                </md-menu-item>\n" +
    "\n" +
    "                                <md-menu-item>\n" +
    "                                    <md-button ng-click=\"saveAs('bibtex')\">\n" +
    "                                        BibTeX\n" +
    "                                    </md-button>\n" +
    "                                </md-menu-item>\n" +
    "\n" +
    "                                <md-menu-item>\n" +
    "                                    <md-button ng-click=\"\">\n" +
    "                                        <a href=\"https://chrome.google.com/webstore/detail/zotero-connector/ekhagklcjbdpajgpjgmbionohlpdbjgc?hl=en\">Install\n" +
    "                                            the \"Zotero Connector\" extension</a>\n" +
    "                                    </md-button>\n" +
    "                                </md-menu-item>\n" +
    "\n" +
    "                            </md-menu-content>\n" +
    "                        </md-menu>\n" +
    "\n" +
    "                    </div>\n" +
    "\n" +
    "\n" +
    "                    <div class=\"more-actions\">\n" +
    "                        <span class=\"action modify\">\n" +
    "                            <a href=\"\" class=\"action\" ng-click=\"modify()\">\n" +
    "                                <i class=\"fa fa-pencil\"></i>\n" +
    "                                Modify\n" +
    "                            </a>\n" +
    "                        </span>\n" +
    "                        <a class=\"action\" href=\"http://api.citeas.org/product/{{ apiResp.url }}\">\n" +
    "                            <i class=\"fa fa-cog\"></i> view in API\n" +
    "                        </a>\n" +
    "                        <a class=\"action\" ng-click=\"NotExpected()\">\n" +
    "                            <i class=\"fa fa-bell\"></i> Results not as Expected\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "\n" +
    "                <div class=\"provenance\">\n" +
    "                    <h2>\n" +
    "                        Citation Provenance\n" +
    "                        <a href=\"sources\" class=\"more\">\n" +
    "                            (learn more)\n" +
    "                        </a>\n" +
    "                    </h2>\n" +
    "                    <div class=\"steps\">\n" +
    "                        <div class=\"step success-{{ step.has_content }}\"\n" +
    "                             ng-hide=\"(step.parent_step_name == 'UserInputStep' && !step.has_content)\"\n" +
    "                             ng-repeat=\"step in apiResp.provenance\">\n" +
    "\n" +
    "                            <div class=\"step-container\" ng-show=\"!$first && !$last\">\n" +
    "                                <div class=\"success-icon true\" ng-show=\"step.has_content\">\n" +
    "                                    <i class=\"fa fa-check\"></i>\n" +
    "                                </div>\n" +
    "                                <div class=\"success-icon false\" ng-show=\"!step.has_content\">\n" +
    "                                    <i class=\"fa fa-times\"></i>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"step-info\">\n" +
    "                                    <div class=\"intro\">\n" +
    "                                        Looking in the\n" +
    "                                        <span class=\"parent-step\">{{ step.parent_subject }},</span>\n" +
    "                                        we\n" +
    "                                        <span ng-show=\"step.has_content\">found</span>\n" +
    "                                        <span ng-show=\"!step.has_content\">didn't find</span>\n" +
    "                                        <span class=\"proxy-found\" ng-show=\"step.found_via_proxy_type=='link'\">\n" +
    "                                            a link to a\n" +
    "                                        </span>\n" +
    "                                        <span class=\"proxy-found\" ng-show=\"step.found_via_proxy_type=='doi'\">\n" +
    "                                            a DOI.\n" +
    "                                        </span>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"main\">\n" +
    "                                        <span class=\"name\">\n" +
    "                                            {{ step.subject }}\n" +
    "                                        </span>\n" +
    "                                        <a href=\"\" ng-click=\"stepInfo(step.name)\" class=\"learn-more\">\n" +
    "                                            <i class=\"fa fa-question-circle\"></i>\n" +
    "                                        </a>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"url\">\n" +
    "                                        <a href=\"{{ step.content_url }}\" ng-show=\"step.has_content\" class=\"learn-more\">\n" +
    "                                            {{ step.content_url }}\n" +
    "                                        </a>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"step-container\" ng-show=\"$last\">\n" +
    "                                <div class=\"success-icon true\">\n" +
    "                                    <i class=\"fa fa-check\"></i>\n" +
    "                                </div>\n" +
    "                                <div class=\"step-info\">\n" +
    "                                    <div class=\"intro\">\n" +
    "                                        Parsing the\n" +
    "                                        <span class=\"parent-step\">{{ step.parent_subject }},</span>\n" +
    "                                        we found\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"main\">\n" +
    "                                        <span class=\"name\">\n" +
    "                                            The citation metadata\n" +
    "                                        </span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"lightbox\" ng-click=\"HideLightBox($event)\" ng-show=\"ShowLightBox\">\n" +
    "        <div style=\"background-color:white\">\n" +
    "            <form class=\"input-row\" ng-submit=\"submit()\">\n" +
    "                <md-input-container md-no-float\n" +
    "                                    class=\"md-block\"\n" +
    "                                    flex-gt-sm=\"\">\n" +
    "                    <label>Name</label>\n" +
    "                    <input ng-model=\"error.id\">\n" +
    "                </md-input-container>\n" +
    "                <md-input-container md-no-float\n" +
    "                                    class=\"md-block\"\n" +
    "                                    flex-gt-sm=\"\">\n" +
    "                    <label>Email</label>\n" +
    "                    <input ng-model=\"error.email\">\n" +
    "                </md-input-container>\n" +
    "                <md-input-container md-no-float\n" +
    "                                    class=\"md-block\"\n" +
    "                                    flex-gt-sm=\"\">\n" +
    "                    <label>Message</label>\n" +
    "                    <textarea ng-model=\"error.message\"></textarea>\n" +
    "                </md-input-container>\n" +
    "                    <md-button class=\"md-raised md-primary submit\" ng-click=\"SubmitError()\">\n" +
    "                        Submit\n" +
    "                    </md-button>\n" +
    "\n" +
    "\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("landing.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("landing.tpl.html",
    "<div class=\"page landing\">\n" +
    "    <div class=\"top-screen\" layout=\"row\" layout-align=\"center center\">\n" +
    "        <div class=\"content\">\n" +
    "            <div class=\"tagline\">\n" +
    "                <h1>All research products deserve credit.</h1>\n" +
    "                <p class=\"subtagline\">\n" +
    "                    Get the correct citation for diverse research products,\n" +
    "                    from software and datasets to preprints and articles.\n" +
    "                </p>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "            <div class=\"user-input\">\n" +
    "                <form class=\"input-row\" ng-submit=\"submit()\">\n" +
    "                    <md-input-container md-no-float\n" +
    "                                        class=\"md-block example-selected-{{ main.exampleSelected }}\"\n" +
    "                                        flex-gt-sm=\"\">\n" +
    "                        <label>Paste a URL, DOI, or arXiv ID</label>\n" +
    "                        <input ng-model=\"main.id\">\n" +
    "\n" +
    "                        <md-button ng-show=\"main.id\"\n" +
    "                                   ng-class=\"{fadeOut: !main.id}\"\n" +
    "                                   ng-click=\"submit()\"\n" +
    "                                   class=\"md-fab md-mini md-primary go animated fadeInRightBig\">\n" +
    "                            <i class=\"fa fa-arrow-right\"></i>\n" +
    "                        </md-button>\n" +
    "\n" +
    "                        <!--\n" +
    "                        <md-button class=\"md-raised md-primary submit\" type=\"submit\">\n" +
    "                            Get the citation\n" +
    "                        </md-button>\n" +
    "                        -->\n" +
    "                    </md-input-container>\n" +
    "                </form>\n" +
    "\n" +
    "                <div class=\"example\">\n" +
    "                    <div class=\"content\">\n" +
    "                        <div class=\"label\">Examples:</div>\n" +
    "                        <ul class=\"examples\">\n" +
    "                            <li>\n" +
    "                                <a href=\"/cite/http://yt-project.org\">http://yt-project.org</a>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <a href=\"/cite/https://cran.r-project.org/web/packages/stringr\">https://cran.r-project.org/web/packages/stringr</a>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <a href=\"https://github.com/Impactstory/citeas-api/blob/master/README.md\">More examples</a>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("modify-your-citation.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modify-your-citation.tpl.html",
    "<div class=\"page modify-your-citation\">\n" +
    "    <div class=\"content\">\n" +
    "        <h2>Modify a citation to your software project</h2>\n" +
    "        <div class=\"text\">\n" +
    "            <p>\n" +
    "                The CiteAs system uses a variety of web-based searches to try to discover the best way to cite a given software project (or, in due time, datasets and articles as well). We search lots of places including GitHub, CRAN, the project source code, project web pages; eventually, we'll also search the scholarly itself. You can learn more about the algorithms and sources on our\n" +
    "                <a href=\"sources\">page about how we search.</a>\n" +
    "            </p>\n" +
    "\n" +
    "            <p>\n" +
    "                This automated approach scales well. However, sometimes it delivers a \"preferred\" citation that isn't what project authors or maintainers really want.\n" +
    "            </p>\n" +
    "\n" +
    "            <p>\n" +
    "                When this happens, you can change the preferred citation for your project by adding or modifying project metadata. Part of the point of CiteAs, in fact, is to incent project authors to improve project metadata, bringing it in line with an emerging set of best-practice standards. For more on these standards and why they matter, check out the work of the\n" +
    "                <a href=\"https://www.software.ac.uk/\">Software Sustainability Institute,</a> the <a\n" +
    "                    href=\"https://www.force11.org/group/software-citation-implementation-working-group\">FORCE11 Software Citation Implementation Working Group.</a>\n" +
    "            </p>\n" +
    "\n" +
    "            <p>\n" +
    "                So, now that we've got that all out of the way, here are your options for changing how CiteAs suggests people cite your project:\n" +
    "\n" +
    "            </p>\n" +
    "\n" +
    "            <ul>\n" +
    "                <li>\n" +
    "                   If you have a paper you'd like people to cite, add DOI of the paper on your project webpage.  CiteAs will pick it it up from the HTML source of the webpage.\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                   Add a link from your project webpage to your GitHub repo.  From there we'll find your README, CITATION files, and CodeMeta files.  Then:\n" +
    "                    <ul>\n" +
    "                        <li>\n" +
    "                           Mint a DOI for your project <a href=\"https://guides.github.com/activities/citable-code/\">using Zenodo</a> or a similar service. Assign the citation metadata you want used to that record. You can then paste your DOI somewhere associated with your project (a README file, your project web page) and CiteAs will use the software DOI metadata in creating the preferred citation.\n" +
    "                        </li>\n" +
    "                        <li>\n" +
    "                            Or, create a <a href=\"https://github.com/codemeta/codemeta\">CodeMeta</a> file for your project and put the preferred citation information in that.\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    If your project is an R package, you can instead put your preferred citation information in a <a\n" +
    "                        href=\"http://r-pkgs.had.co.nz/inst.html#inst-citation\">CITATION file</a> so it will be picked up by the\n" +
    "                        <a href=\"http://astrostatistics.psu.edu/su07/R/library/utils/html/citation.html\">R citation()</a> function.\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("page-not-found.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("page-not-found.tpl.html",
    "<div class=\"landing static-page\">\n" +
    "    <h1>Sorry, we couldn't find that page!</h1>\n" +
    "\n" +
    "</div>");
}]);

angular.module("sources.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sources.tpl.html",
    "<div class=\"page sources\">\n" +
    "    <div class=\"content\">\n" +
    "        <h2>Sources for citation data</h2>\n" +
    "        <div class=\"text\">\n" +
    "            <p>\n" +
    "                CiteAs uses a pattern of web-based searches to try to discover and represent the best way to cite a given scholarly artifact. Here's a simplified description of the steps we follow in order to figure out the best citation (for the full details, see the\n" +
    "                <a href=\"https://github.com/Impactstory/citeas-api\">source code</a>).\n" +
    "            </p>\n" +
    "\n" +
    "            <p>\n" +
    "                We start by examining the input.\n" +
    "            </p>\n" +
    "\n" +
    "            <h3>\n" +
    "                Does the input look like a\n" +
    "                <a href=\"\" ng-click=\"stepInfo('CrossrefResponseStep')\" class=\"learn-more\">\n" +
    "                    DOI\n" +
    "                </a>\n" +
    "                ?\n" +
    "\n" +
    "            </h3>\n" +
    "            <ul>\n" +
    "                <li>\n" +
    "                    Suggest a citation using the DOI metadata.\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "            <h3>Does the input look like the URL for a\n" +
    "                <a href=\"\" ng-click=\"stepInfo('GithubRepoStep')\" class=\"learn-more\">\n" +
    "                    GitHub repository\n" +
    "                </a>\n" +
    "                ?\n" +
    "            </h3>\n" +
    "            <p>\n" +
    "                If so, we fetch the contents of the GitHub repo and look for clues there:\n" +
    "            </p>\n" +
    "            <ul>\n" +
    "                <li>\n" +
    "                    Does the repository have a\n" +
    "                    <a href=\"\" ng-click=\"stepInfo('CodemetaResponseStep')\" class=\"learn-more\">\n" +
    "                        CodeMeta\n" +
    "                    </a>\n" +
    "                    file?  If so, suggest a citation based on its contents.\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    Does the repository have a\n" +
    "                    <a href=\"\" ng-click=\"stepInfo('GithubCitationFileStep')\" class=\"learn-more\">\n" +
    "                        CITATION\n" +
    "                    </a>\n" +
    "                    file?  If so, suggest a citation based on its contents.\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    Does the repository have a\n" +
    "                    <a href=\"\" ng-click=\"stepInfo('GithubReadmeFileStep')\" class=\"learn-more\">\n" +
    "                        README\n" +
    "                    </a>\n" +
    "                    file?  If so,\n" +
    "                    <ul>\n" +
    "                        <li>\n" +
    "                            Does the README file include a\n" +
    "                                <a href=\"\" ng-click=\"stepInfo('CrossrefResponseStep')\" class=\"learn-more\">\n" +
    "                                    DOI\n" +
    "                                </a>\n" +
    "                            ?  If so, suggest a citation based on the DOI metadata.\n" +
    "                        </li>\n" +
    "                        <li>\n" +
    "                            Does the README file include\n" +
    "                                <a href=\"\" ng-click=\"stepInfo('BibtexStep')\" class=\"learn-more\">\n" +
    "                                    BibTeX\n" +
    "                                </a>\n" +
    "                            ?  If so, suggest a citation based on the BibTex.\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    Does the repository have an\n" +
    "                    <a href=\"\" ng-click=\"stepInfo('GithubDescriptionFileStep')\" class=\"learn-more\">\n" +
    "                        R DESCRIPTION\n" +
    "                    </a>\n" +
    "                    file?  If so, suggest a citation base on its contents.\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    Suggest a citation based on the metadata of the\n" +
    "                    <a href=\"\" ng-click=\"stepInfo('GithubRepoStep')\" class=\"learn-more\">\n" +
    "                        GitHub repository.\n" +
    "                    </a>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "            <h3>\n" +
    "                Does the input look like the url for a software library repository on\n" +
    "                <a href=\"\" ng-click=\"stepInfo('CranLibraryStep')\" class=\"learn-more\">\n" +
    "                    CRAN\n" +
    "                </a>\n" +
    "                or\n" +
    "                <a href=\"\" ng-click=\"stepInfo('PypiLibraryStep')\" class=\"learn-more\">\n" +
    "                    PyPI\n" +
    "                </a>\n" +
    "                , or the url for a\n" +
    "                <a href=\"\" ng-click=\"stepInfo('WebpageStep')\" class=\"learn-more\">\n" +
    "                    project webpage\n" +
    "                </a>?\n" +
    "            </h3>\n" +
    "            <p>\n" +
    "                If so, we fetch the contents of the webpage or repository page, and look for clues in the content of that page:\n" +
    "            </p>\n" +
    "            <ul>\n" +
    "                <li>\n" +
    "                    Does the webpage include a\n" +
    "                        <a href=\"\" ng-click=\"stepInfo('CrossrefResponseStep')\" class=\"learn-more\">\n" +
    "                            DOI\n" +
    "                        </a>\n" +
    "                    ?  If so, suggest a citation based on the DOI metadata.\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    Does the webpage include\n" +
    "                        <a href=\"\" ng-click=\"stepInfo('BibtexStep')\" class=\"learn-more\">\n" +
    "                            BibTeX\n" +
    "                        </a>\n" +
    "                    ?  If so, suggest a citation based on the BibTex.\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    Does the webpage include a link to a\n" +
    "                    <a href=\"\" ng-click=\"stepInfo('GithubRepoStep')\" class=\"learn-more\">\n" +
    "                        GitHub repository.\n" +
    "                    </a>\n" +
    "                    ?  If so, follow the steps above as if the user had given the GitHub repository URL as the initial input.\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "\n" +
    "            <p>\n" +
    "                If none of these paths work, we suggest a citation based on whatever metadata we can extract from the title and url of the page.\n" +
    "            </p>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);
