angular.module('templates.app', ['about.tpl.html', 'api.tpl.html', 'cite-page.tpl.html', 'landing.tpl.html', 'modify-your-citation.tpl.html', 'page-not-found.tpl.html']);

angular.module("about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about.tpl.html",
    "<div class=\"page about\" layout=\"row\" layout-align=\"center center\">\n" +
    "    <div class=\"content\">\n" +
    "        <h2>About</h2>\n" +
    "        <div class=\"text\">\n" +
    "            <p>\n" +
    "                CiteAs is a way to\n" +
    "                help get the correct citation for diverse research products,\n" +
    "                from software and datasets to preprints and articles.\n" +
    "            </p>\n" +
    "            <p>\n" +
    "                It's part of a larger grant, funded by the Alfred P. Sloan Foundation,\n" +
    "                to help scholars who share reusable\n" +
    "                research software get credit for their work.\n" +
    "            </p>\n" +
    "            <p>\n" +
    "                CiteAs is a collaboration between\n" +
    "                <a href=\"http://james.howison.name/\">James Howison</a> at the\n" +
    "                University of Texas-Austin, and\n" +
    "                <a href=\"http://impactstory.org/about\">Impactstory.</a>\n" +
    "            </p>\n" +
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
    "                This is where the API docs will go.\n" +
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
    "                    We weren't able to figure out a citation for this research product.\n" +
    "                    We're in active development and hopefully this particular case will\n" +
    "                    be working soon. Feel free to\n" +
    "                    <a href=\"mailto:team@impactstory.org\">let us know</a> and we'll\n" +
    "                    look into it.\n" +
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
    "                            {{ myCitationObj.style_fullname }}\n" +
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
    "                            </md-menu-content>\n" +
    "                        </md-menu>\n" +
    "\n" +
    "                    </div>\n" +
    "\n" +
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
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "\n" +
    "                <div class=\"provenance\">\n" +
    "                    <h2>Citation Provenance</h2>\n" +
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
    "                                        <a href=\"{{ step.more_info_url }}\" class=\"learn-more\">\n" +
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
    "\n" +
    "\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
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
    "                        <label>Paste a URL or DOI</label>\n" +
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
    "                                <a href=\"/cite/10.5281/zenodo.160400\">10.5281/zenodo.160400</a>\n" +
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
    "\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("page-not-found.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("page-not-found.tpl.html",
    "<div class=\"landing static-page\">\n" +
    "    <h1>Sorry, we couldn't find that page!</h1>\n" +
    "\n" +
    "</div>");
}]);
